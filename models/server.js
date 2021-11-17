const express = require('express');
const cors = require('cors');
const { dbConection } = require('../database/config')

require('dotenv').config();

class Server {

    constructor() {
        this.app = express();
        this.usersPath = '/api/users';

        this.dataBase();

        this.middlewares();

        this.routes();
    }

    async dataBase() {
        await dbConection();
    }

    routes() {
        this.app.use(this.usersPath, require('../routes/user.routes'));
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log("El servidor está inicializado en el puerto " + process.env.PORT);
        });
    }

}

module.exports = Server;