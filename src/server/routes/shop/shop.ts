import {IShopItem, ICartItem} from 'app';
import { Express } from "@types/express";
import * as Database from '../../services/database';
import * as _ from 'lodash';

export function setupShop(app: Express){

    app.get('/api/shop', (request, response) => {
        Database.executeQuery('SELECT * from shop_item')
        .then(result => {
            response.json(result.rows);
        })
        .catch(err => {
            console.log('Error while getting items', err);
            response.status(500).json({error: err});
        })
    });

    app.post('/api/shop', (request, response) => {
        let data : IShopItem = request.body;
        console.log('adding item', data);

        Database.executeQuery('INSERT INTO shop_item (name, description, price, quantity, image, category) VALUES ($1, $2, $3, $4, $5, $6)',
        [data.name, data.description, data.price, data.quantity, data.image, data.category])
        .then(result => {
            response.json(result);
        })
        .catch(err => {
            console.log('error while posting item', err);
            response.status(500).json({error: err});
        });
    })

    app.patch('/api/shop/:itemId/quantity', (request, response) => {
        let id = request.params.itemId;
        let quantity = request.body.quantity;
        if (!quantity)
            return;

        incrementItemQuantity(id, quantity)
        .then(result => response.json(result))
        .catch(err => response.status(500).json({error: err}));
    })

    app.patch('/api/shop/:itemId', (request, response) => {
        let id = request.params.itemId;
        let item : IShopItem = request.body;

        console.log('update item', item);
        let values = [id, item.name, item.description, item.image, item.price, item.quantity, item.category];
        Database.executeQuery('UPDATE shop_item set name=$2, description=$3, image=$4, price=$5, quantity=greatest(0,$6), category=$7 where id = $1', values)
        .catch(err => response.status(500).json({error: err}))
        .then(result => response.json(result))
    })

    app.delete('/api/shop/:itemId', (request, response) => {
        let id = request.params.itemId;
        console.log('deleting item', request.params.itemId);

        Database.executeQuery('DELETE from shop_item where id = $1', [id])
        .then(result => {
            console.log('item deleted succesfully');
            response.json(result);
        })
        .catch(err => {
            console.log('error while deleting item', err)
            response.status(500).json({error: err});
        });
    })

    app.post('/api/shop/checkout', (request, response) => {
        
        let data = request.body;
        let cart : ICartItem[] = data.cart;
        let price = _.reduce(cart, (a, b) => a + b.price * b.quantity , 0);

        console.log('Got checkout', data);
        Database.executeQuery("INSERT INTO checkout (name, price, cart, comment) VALUES ($1, $2, $3, $4)",
        [data.from, price, JSON.stringify(cart), data.comment])
        .then(result => {
            response.sendStatus(200);
            cart.forEach(item => {
                incrementItemQuantity(item.id, -1* item.quantity)
            })
        })
        .catch(err => {
            console.log('error while doing checkout', err);
            response.status(500).json({error: err});
        })
    });

    app.get('/api/shop/checkout', (request, response) => {
        Database.executeQuery("SELECT * from checkout")
        .then(result => {
            response.json(result.rows);
        })
    })
}

function incrementItemQuantity(id: number, quantity: number){
    console.log('increment item quantity', {id: id, quantity :quantity});
    return Database.executeQuery("UPDATE shop_item set quantity = GREATEST(0, quantity + $1) where id = $2", [quantity, id]);
}