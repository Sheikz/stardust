export class Config {
    
    static database : {
        readonly user : string,
        readonly password : string,
        readonly host : string,
        readonly port : number,
        readonly database : string,
        readonly ssl : boolean
    }

    static init(){
        let DATABASE_URL : string = process.env.DATABASE_URL;
        let regex = /postgres:\/\/([^:]+):([^@]+)@([^:]+):([^\/]+)\/(.*)+/g;
        let values = regex.exec(DATABASE_URL);

        Config.database = {
            user: values[1],
            password: values[2],
            host: values[3],
            port: parseInt(values[4]),
            database: values[5],
            ssl : true
        }
    }
}