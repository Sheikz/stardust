import { Express } from "@types/express";
import { Config } from "../../config/config";
import * as _ from 'lodash';
import * as Database from '../../services/database';
import * as jsonWebToken from 'jsonwebtoken';
let sha256 = require('js-sha256');

export function setupAuth(app: Express) {

    app.post('/api/auth', (request, response) => {
        let name = request.body.name;
        let password = request.body.password;

        let user = {name: name, password: password};
        console.log('user', name);

        Database.executeQuery("select * from admin where username = $1", [name])
        .then(result => {
            if (result.rows.length === 0)
                response.json({auth: 'NOK'});
            else{
                if (sha256(password) === result.rows[0].password){
                    let token = createToken(request, response, result.rows[0]);
                    response.json({
                        success: true,
                        token: token
                    })
                }
                else
                    response.json({auth: 'NOK'});
            }
        })
    })

    app.post('/api/verify', (request, response) => {
        let token = request.body.token;
        if (!token)
            return response.json({auth: 'NOK'});
        else{
            jsonWebToken.verify(token, process.env.JWT_SECRET, (err, decoded) => {
                if (err){
                    console.log('error', err);
                    return response.json({auth: 'NOK'})
                }
                else{
                    console.log('decoded', decoded);
                    return response.json({auth: 'OK'});
                }
            });
        }
    })
}

function createToken(request, response, user) : string {
    console.log('creating token for', user);
    return jsonWebToken.sign(user.username, process.env.JWT_SECRET);
}

export function verifyToken(request, response, next){
    console.log('verifying token');
    let token = request.headers.token;
    if (!token){
        console.log('No token found');
        response.json({error: 'Not authorized'});
    }
    else{
        jsonWebToken.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err){
                response.json({error: 'Invalid token'});
                console.log('Unauthorized');
            }
            else
                next();
        });
    }

}