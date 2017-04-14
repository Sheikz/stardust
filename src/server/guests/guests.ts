import {Express} from '@types/express';
import * as Database from '../services/database';
import { ISubscription } from "app";

export function setupGuests(app: Express){

    app.post('/api/register', (request, response) => {
        let subscription : ISubscription = request.body;

        Database.executeQuery('INSERT INTO subscription (name, dinner) VALUES ($1, $2)',
            [subscription.name, subscription.dinner]);
        subscription.guests.forEach(guest => {
            Database.executeQuery('INSERT INTO subscription (name, dinner) VALUES ($1, $2)',
                [guest.name, subscription.dinner]);
        })
        response.sendStatus(200);
    })
}