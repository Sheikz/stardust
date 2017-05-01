import { Express } from "@types/express";
import { Config } from "../../config/config";
import * as _ from 'lodash';

export function setupAuth(app: Express) {

    app.post('/api/auth', (request, response) => {
        let name = request.body.name;
        let password = request.body.password;

        let user = {name: name, password: password};

        let admins = Config.admins;
        let found = _.find(admins, admin => _.isEqual(admin, user));

        console.log('found', found);
        if (found)
            response.json({auth: 'OK'});
        else
            response.json({auth: 'NOK'});
    })
}