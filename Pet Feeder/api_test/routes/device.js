const express = require("express");
// const { Router } = require("express");
const mysqlConnection = require("../connection");
const Router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

Router.get("/:device", urlencodedParser, (req, res) => {

    // console.log(req.params.id);
    device = req.params.device;

    mysqlConnection.query("SELECT * FROM `user_device`  WHERE `device`='" + device + "'", (err, rows, fields) => {
        if (!err) res.send(rows);
        else console.log(err)
    })
})

Router.put("/", urlencodedParser, (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    deviceId = req.body.deviceId;
    password = req.body.password;
    slot1 = req.body.slot1;
    slot2 = req.body.slot2;
    slot3 = req.body.slot3;

    mysqlConnection.query("SELECT * FROM `device` WHERE `deviceId`='" + deviceId + "' AND `password`='" + password + "' ", (err, rows, fields) => {

        if (rows[0].id != undefined) {
            mysqlConnection.query("UPDATE `user_device` SET `slot1Status` = '" + slot1 + "',`slot2Status` = '" + slot2 + "',`slot3Status` = '" + slot3 + "' WHERE `user_device`.`device` = " + rows[0].id + ";", (err, rows, fields) => {
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