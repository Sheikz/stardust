import * as express from "express";
import * as pg from 'pg';
import * as bodyParser from 'body-parser';
import { Config } from "./config/config";
import { setupShop } from "./routes/shop/shop";
import * as Database from "./services/database";
import { setupGuests } from "./routes/guests/guests";
import { setupAuth } from "./routes/auth/auth";

let sslRedirect = require('heroku-ssl-redirect');

require('dotenv').config()

Config.init();

let app = express();
const PORT = process.env.PORT || 5000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('public'));
app.use(express.static('dist/app'));
app.use(bodyParser.json());
// app.use(sslRedirect());

app.get('*',function(req,res,next){
  if(req.headers['x-forwarded-proto']!='https')
    res.redirect('https://www.lynnie-thomas.com'+req.url)
  else
    next() /* Continue to other routes if we're not redirecting */
})

app.set('port', PORT);

app.listen(PORT, function (){
  console.log(`App listening on port ${PORT}`);
});

export const pool : pg.Pool = Database.createPool();

setupShop(app);
setupGuests(app);
setupAuth(app);

app.use((request, response) => {
  response.sendFile('index.html', {
    root: __dirname+'/../public/'
  });
})