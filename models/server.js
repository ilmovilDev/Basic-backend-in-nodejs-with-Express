const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 4010;

        // routes
        this.authRouter = '/api/auth'
        this.eventsRouter = '/api/events'

        // middlewares
        this.middlewares();

        // Routes of my application
        this.routes();

    }

    middlewares() {

        // Cors
        this.app.use(cors());

        // Parseo del body
        this.app.use(express.json());

        // Public directory
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.authRouter, require('../routes/auth.routes'));
        this.app.use(this.eventsRouter, require('../routes/events.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port: ${this.port}`);
        });
    }

}

module.exports = Server;