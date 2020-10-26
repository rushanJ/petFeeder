const express = require("express");
// const { Router } = require("express");
const mysqlConnection = require("../connection");
const Router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
Router.get("/", (req, res) => {

    mysqlConnection.query("SELECT * FROM `user`", (err, rows, fields) => {
        if (!err) res.send(rows);
        else console.log(err)
    })
})
Router.post("/", urlencodedParser, (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    name = req.body.name;
    email = req.body.email;
    password = req.body.password;

    mysqlConnection.query("INSERT INTO `user` (`id`, `name`, `email`, `password`, `status`) VALUES (NULL, '" + name + "', '" +
        email + "', '" + password + "', 'WAITING');", (err, rows, fields) => {
            if (!err) {
                response = {
                    success: true,
                };
                console.log(response);
                res.end(JSON.stringify(response));
            } else {
                response = {
                    success: false,
                };
                console.log(response);
                res.end(JSON.stringify(response));
            };
        })

})

Router.post("/auth", urlencodedParser, (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    email = req.body.email;
    password = req.body.password;

    mysqlConnection.query("SELECT * FROM `user` WHERE `email`='" + email + "' AND `password`='" + password + "' ", (err, rows, fields) => {
        if (!err) {
            response = {
                success: true,
                data: rows
            };
            console.log(response);
            res.end(JSON.stringify(response));
        } else console.log(err)
    })
})
module.exports = Router;