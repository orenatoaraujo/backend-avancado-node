const express = require('express');

const consign = require('consign');
const bodyParser = require('body-parser');
const router = express.Router();

module.exports = () => {
    const app = express();

    app.set('port', 3000);
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(require('method-override')());

    consign({cwd: 'api'})
        .include('models')
        .then('services')
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
};