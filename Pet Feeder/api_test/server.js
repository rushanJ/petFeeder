const express = require("express");
const bodyParser = require("body-parser");
const mySqlConnection = require("./connection");
const userRouts = require("./routes/user");
const userDevice = require("./routes/userDevice");
const device = require("./routes/device");
const shedule = require("./routes/shedule");


var app = express();
app.use(bodyParser.json());

app.use("/user", userRouts);
app.use("/userDevice", userDevice);
app.use("/device", device);
app.use("/shedule", shedule);



app.listen(3000)