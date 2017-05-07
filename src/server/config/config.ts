export const Config = {

    database :  {
        user: process.env.USER,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
        port: process.env.PORT,
        host: process.env.HOST,
        ssl: true
    },

    admins : [
        {
            name: process.env.ADMIN_USERNAME,
            password: process.env.ADMIN_PASSWORD,
        }
    ]
}