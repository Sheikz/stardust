import {pool} from './../server';
import {Config} from './../config/config';
import {IShopItem, ICartItem} from 'app';
import { Express } from "@types/express";
import * as Database from '../services/database';
import * as _ from 'lodash';

export function setupShop(app: Express){

    app.get('/api/shop', (request, response) => {
        Database.executeQuery('SELECT * from shop_item')
        .then(result => {
            response.json(result.rows);
        })
        .catch(err => {
            console.log('Error while getting items', err);
        })
    });

    app.post('/api/shop', (request, response) => {
        let data : IShopItem = request.body;
        console.log('adding item', data);

        Database.executeQuery('INSERT INTO shop_item (name, description, price, quantity, image) VALUES ($1, $2, $3, $4, $5)',
        [data.name, data.description, data.price, data.quantity, data.image])
        .then(result => {
            response.json(result);
        })
        .catch(err => console.log('error while posting item', err));
    })

    app.delete('/api/shop/:itemId', (request, response) => {
        let id = request.params.itemId;
        console.log('deleting item', request.params.itemId);

        Database.executeQuery('DELETE from shop_item where id = $1', [id])
        .then(result => {
            console.log('item deleted succesfully');
            response.json(result);
        })
        .catch(err => console.log('error while deleting item', err));
    })

    app.post('/api/shop/checkout', (request, response) => {
        
        let data = request.body;
        let cart : ICartItem[] = data.cart;
        let price = _.reduce(cart, (a, b) => a + b.price * b.quantity , 0);

        console.log('Got checkout', data);
        Database.executeQuery("INSERT INTO checkout (name, price) VALUES ($1, $2)",
        [data.from, price]);
        
    });
}