const express = require('express');

const consign = require('consign');
const bodyParser = require('body-parser');
const APP_PORT = parseInt(process.env.PORT || 3000);

module.exports = () => {
    const app = express();

    app.set('port', APP_PORT);
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