import {Express} from '@types/express';
import * as Database from '../../services/database';
import { IRegisterEntry } from "app";
import { verifyToken } from "../auth/auth";

export function setupGuests(app: Express){

    app.post('/api/register', (request, response) => {
        let subscription : IRegisterEntry = request.body;
        console.log('Got subscription', subscription);

        let promises = [];
        promises.push(Database.executeQuery('INSERT INTO subscription (name, note, email, joining) VALUES ($1, $2, $3, $4)',
            [subscription.name, subscription.note, subscription.email, subscription.joining]));

        subscription.guests.forEach(guest => {
            promises.push(Database.executeQuery('INSERT INTO subscription (name, note, email, joining) VALUES ($1, $2, $3, $4)',
                [guest.name, subscription.note, subscription.email, subscription.joining]));
        })
        Promise.all(promises)
        .then(result => {
            console.log('Executed subscription', result);
            response.sendStatus(200);
        })
        .catch(err => {
            console.log('Error while registering', err);
            response.status(500).json({error : err});
        })
    })

    app.get('/api/guests', verifyToken, (request, response) => {
        Database.executeQuery('SELECT * from subscription')
        .then(result => {
            response.json(result.rows);
        })
        .catch(err => {
            response.status(500).json({error: err});
        })
    });

    app.delete('/api/guests/:guestId', verifyToken, (request, response) => {
        let id = request.params.guestId;
        Database.executeQuery('DELETE from subscription where id = $1', [id])
        .then(result => {
            console.log('Guest '+id+ ' deleted succesfully', result)
            response.sendStatus(200);
        })
        .catch(err => {
            console.log('Error when deleting guest '+id, err);
            response.status(500).json({error: err});
        });
    })
}