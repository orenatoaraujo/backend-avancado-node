const services = require('./../../config/services');

const request = require('request');

const CLIENT_CONTACTS_HOME = services.CLIENT_CONTACTS_HOME;

module.exports = () => {
    const service = {};

    service.findByCpf = (cpf) => {
        return new Promise((resolve, reject) => {
            request.get(CLIENT_CONTACTS_HOME + '/search/findByCpf?cpf=' + cpf, { json: true }, (err, res, body) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(body._embedded.contatos);
                }
            });
        });
    };

    service.create = (contact) => {
        return new Promise((resolve, reject) => {
            request.post({url: CLIENT_CONTACTS_HOME, body: contact, json: true }, (err, res, body) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(body);
                }
            });
        });
    };

    return service;
};
