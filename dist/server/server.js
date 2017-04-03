"use strict";
const express = require("express");
const pg = require("pg");
const bodyParser = require("body-parser");
const config_1 = require("./config/config");
let app = express();
const PORT = process.env.PORT || 5000;
const dbURL = process.env.DATABASE_URL || config_1.Config.DATABASE_URL;
app.use(express.static('public'));
app.use(express.static('dist/app'));
app.use(bodyParser.json());
app.set('port', PORT);
app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}`);
});
app.get('/api/items', function (request, response) {
    const dbURL = process.env.DATABASE_URL || config_1.Config.DATABASE_URL;
    console.log("Getting items...");
    pg.connect(dbURL, function (err, client, done) {
        if (err) {
            console.log('Error', err);
            return;
        }
        client.query('SELECT * FROM shop_item', function (err, result) {
            if (err) {
                console.error(err);
                response.send("Error " + err);
            }
            else {
                console.log('Success: ' + result.rowCount);
                response.json(result.rows);
            }
        });
    });
});
app.post('/api/items', function (request, response) {
    console.log("post body", request.body);
    let data = request.body;
    pg.connect(dbURL, function (err, client, done) {
        if (err) {
            console.log('Error', err);
            return;
        }
        client.query('INSERT INTO shop_item (name, description, quantity) VALUES ($1, $2, $3)', [data.name, data.description, data.quantity], function (err, result) {
            if (err) {
                console.error(err);
                response.send("Error " + err);
            }
            else {
                response.json(result);
            }
        });
    });
});
