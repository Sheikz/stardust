"use strict";
const express = require("express");
let app = express();
let value = 0;
let PORT = process.env.PORT || 5000;
app.use(express.static('public'));
app.set('port', PORT);
app.get('/api/test', function (req, res) {
    res.send({ value: value += 2 });
    console.log("a");
});
app.listen(3000, function () {
    console.log(`App listening on port ${PORT}`);
});
