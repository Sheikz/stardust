import * as express from "express";
import * as pg from 'pg';
import * as bodyParser from 'body-parser';
import { Config } from "./config/config";
import { setupShop } from "./shop/shop";
import * as Database from "./services/database";
import { setupGuests } from "./guests/guests";

let app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.static('dist/app'));
app.use(bodyParser.json());

app.set('port', PORT);

app.listen(PORT, function (){
  console.log(`App listening on port ${PORT}`);
});

export const pool : pg.Pool = Database.createPool();

setupShop(app);
setupGuests(app);

app.use((request, response) => {
  response.sendFile('index.html', {
    root: __dirname+'/../public/'
  });
})