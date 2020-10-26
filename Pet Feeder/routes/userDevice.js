const express = require("express");
// const { Router } = require("express");
const mysqlConnection = require("../connection");
const Router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

Router.get("/:user", urlencodedParser, (req, res) => {

    // console.log(req.params.id);
    user = req.params.user;
    //console.log(user);
    mysqlConnection.query("SELECT * FROM `user_device`  WHERE `user`='" + user + "'", (err, rows, fields) => {
        if (!err) res.send(rows);
        else console.log(err)
    })
})

Router.post("/", urlencodedParser, (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    user = req.body.user;
    deviceId = req.body.deviceId;
    password = req.body.password;
    slot1 = req.body.slot1;
    slot2 = req.body.slot2;
    slot3 = req.body.slot3;

    mysqlConnection.query("SELECT * FROM `device` WHERE `deviceId`='" + deviceId + "' AND `password`='" + password + "' ", (err, rows, fields) => {


        if (rows[0].id != undefined) {
            mysqlConnection.query("INSERT INTO `user_device` (`id`, `user`, `device`, `slot1Name`, `slot2Name`, `slot3Name`) VALUES (NULL, '" +
                user + "', '" +
                deviceId + "', '" + slot1 + "', '" + slot2 + "','" +
                slot3 + "');", (err, rows, fields) => {
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
        } else {
            console.log("Response Unavailable...");
        }
        // response = {
        //     success: true,
        //     data: rows[0].id
        // };
        // console.log(response);

        // res.end(JSON.stringify(response));

    })
})
module.exports = Router;