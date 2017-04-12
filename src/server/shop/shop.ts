import {pool} from './../server';
import {Config} from './../config/config';
import {IShopItem} from 'app';
import { Express } from "@types/express";
import * as Database from '../services/database';

export function setupShop(app: Express){

    app.get('/api/items', (request, response) => {
        Database.executeQuery('SELECT * from shop_item')
        .then(result => {
            response.json(result.rows);
        })
        .catch(err => {
            console.log('Error while getting items', err);
        })
    });

    app.post('/api/items', (request, response) => {
        let data : IShopItem = request.body;
        console.log('adding item', data);

        Database.executeQuery('INSERT INTO shop_item (name, description, quantity, image) VALUES ($1, $2, $3, $4)',
        [data.name, data.description, data.quantity, data.image])
        .then(result => {
            response.json(result);
        })
        .catch(err => console.log('error while posting item', err));
    })

    app.delete('/api/items/:itemId', (request, response) => {
        let id = request.params.itemId;
        console.log('deleting item', request.params.itemId);

        Database.executeQuery('DELETE from shop_item where id = $1', [id])
        .then(result => {
            console.log('item deleted succesfully');
            response.json(result);
        })
        .catch(err => console.log('error while deleting item', err));
    })
}


// export function setupShop(app : Express){

//     app.get('/api/items', function (request, response) {

//         console.log("Getting items...");
//         pg.connect(dbURL, function(err, client, done) {
//             if (err){
//             console.log('Error', err);
//             return;
//             }
//             client.query('SELECT * FROM shop_item', function(err, result) {

//             if (err){
//                 console.error(err); 
//                 response.send("Error " + err); 
//             }
//             else{
//                 console.log('Success: '+result.rowCount);
//                 response.json(result.rows);
//             }
//             });
//         });
//     });

//     app.post('/api/items', function (request, response) {

//         let data : IShopItem = request.body;
//         pg.connect(dbURL, function(err, client, done) {
//             if (err){
//             console.log('Error', err);
//             return;
//             }
//             client.query('INSERT INTO shop_item (name, description, quantity) VALUES ($1, $2, $3, $4)',
//             [data.name, data.description, data.quantity, data.image], function(err, result) {

//             if (err){
//                 console.error(err); 
//                 response.send("Error " + err); 
//             }
//             else{
//                 response.json(result);
//             }
//             });
//         });
//     });

//     app.delete('/api/items', function(request, response){
//         let data : IShopItem = request.body;
//     });