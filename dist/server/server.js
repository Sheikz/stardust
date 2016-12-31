"use strict";
const express = require("express");
const pg = require("pg");
let app = express();
let value = 0;
let PORT = process.env.PORT || 5000;
app.use(express.static('public'));
app.set('port', PORT);
app.get('/api/test', function (req, res) {
    res.send({ value: value += 2 });
    console.log("a");
});
app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}`);
});
app.get('/db', function (request, response) {
    pg.connect(process.env.DATABASE_URL, function (err, client, done) {
        if (err) {
            console.log('Error', err);
            return;
        }
        client.query('SELECT * FROM test_table', function (err, result) {
            done();
            if (err) {
                console.error(err);
                response.send("Error " + err);
            }
            else {
                response.render('pages/db', { results: result.rows });
            }
        });
    });
});
