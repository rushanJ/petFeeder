const express = require("express");
// const { Router } = require("express");
const mysqlConnection = require("../connection");
const Router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
Router.get("/:device", urlencodedParser, (req, res) => {

     console.log(req.params.id);
    device = req.params.device;
   

    mysqlConnection.query("SELECT `id`, `device`,DATE (`date`) AS `date`, `time`, `status` FROM `shedule` WHERE `device`='" + device + "'", (err, rows, fields) => {
        if (!err) res.send(rows);
        else console.log(err)
    })
})

Router.post("/", urlencodedParser, (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    device = req.body.device;
    date = req.body.date;
    time = req.body.time;

    mysqlConnection.query("INSERT INTO `shedule` (`id`, `device`, `date`, `time`, `status`) VALUES(NULL, '" + device + "', '" + date + "', '" + time + "', 'WAITING');", (err, rows, fields) => {
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

Router.put("/", urlencodedParser, (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    shedule = req.body.shedule;
    deviceId = req.body.deviceId;
    password = req.body.password;

    mysqlConnection.query("SELECT * FROM `device` WHERE `deviceId`='" + deviceId + "' AND `password`='" + password + "' ", (err1, rows, fields) => {

        if (rows) {
            if (rows[0].id != undefined) {
                mysqlConnection.query("UPDATE `shedule` SET `status` = 'COMPLEATED' WHERE `shedule`.`id` = " + shedule + ";", (err, rows, fields) => {
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
        }
        // response = {
        //     success: true,
        //     data: rows[0].id
        // };
        // console.log(response);

        // res.end(JSON.stringify(response));
        else console.log(err1)
    })
})
module.exports = Router;