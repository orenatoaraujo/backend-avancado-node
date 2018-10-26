var express = require('express');

var consign = require('consign');
var bodyParser = require('body-parser');
var router = express.Router();

module.exports = function() {
    var app = express();

    app.set('port', 3000);
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(require('method-override')());

    consign({cwd: 'api'})
        .include('models')
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
};