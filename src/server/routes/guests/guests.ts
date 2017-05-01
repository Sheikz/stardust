import {Express} from '@types/express';
import * as Database from '../../services/database';
import { IRegisterEntry } from "app";

export function setupGuests(app: Express){

    app.post('/api/register', (request, response) => {
        let subscription : IRegisterEntry = request.body;

        let promises = [];
        promises.push(Database.executeQuery('INSERT INTO subscription (name, note) VALUES ($1, $2)',
            [subscription.name, subscription.note]));

        subscription.guests.forEach(guest => {
            promises.push(Database.executeQuery('INSERT INTO subscription (name, note) VALUES ($1, $2)',
                [guest.name, subscription.note]));
        })
        Promise.all(promises)
        .then(result => {
            response.sendStatus(200);
        })
        .catch(err => {
            console.log('error while registering', err);
            response.status(500).json({error : err});
        })
    })

    app.get('/api/guests', (request, response) => {
        Database.executeQuery('SELECT * from subscription')
        .then(result => {
            response.json(result.rows);
        })
        .catch(err => {
            response.status(500).json({error: err});
        })
    });
}