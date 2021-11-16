const express = require('express');
const cors = require('cors');


class Server {

    constructor() {
        this.app = express();
        this.usersPath = '/api/users';

        this.middlewares();

        this.routes();
    }

    routes() {
        this.app.use(this.usersPath, require('../routes/user.routes'));
    }

    middlewares() {
        this.app.use(cors());
        this.app.use( express.json());
    }

    listen() {
        this.app.listen(3000, () => {
            console.log("El servidor está inicializado en el puerto 3000");
        });
    }

}

module.exports = Server;