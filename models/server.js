const express = require('express');
const cors = require('cors');

require('dotenv').config();

class Server {

    constructor() {
        this.app = express();
        this.usersPath = '/api/users';

        this.middlewares();

        this.routes();
    }

    routes() {
        this.app.get('*', (req, res) => {
            res.send('404 | API no encontrada')
        });
        this.app.use(this.usersPath, require('../routes/user.routes'));
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log("El servidor está inicializado en el puerto " + process.env.PORT);
        });
    }

}

module.exports = Server;