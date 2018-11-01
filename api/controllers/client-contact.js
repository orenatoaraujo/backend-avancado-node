module.exports = (app) => {
    const controller = {};

    const Client = app.models.client;

    const contacts = app.services.contacts;

    controller.findAll = (req, res) => {
        let client_id = req.params.client_id;

        Client.findById(client_id).exec().then((response) => {
            if(!response) {
                res.status(404).json('Client not found.');
                return ;
            }

            contacts.findByCpf(response.cpf).then((response) => {
                res.status(200).json(response);
            });
        }, (error) => {
            console.log(error);
            res.status(500).json(error);
        });
    };

    controller.findById = (req, res) => {
        let client_id = req.params.client_id;
        let id = req.params.id;

        Client.findById(client_id).exec().then((response) => {
            if(!response) {
                res.status(404).json('Client not found.');
            }

            contacts.findById(id).then((response) => {
                if(!response) {
                    res.status(404).json('Contact not found');
                    return ;
                }

                res.status(200).json(response);
            });
        }, (error) => {
            console.log(error);
            res.status(500).json(error);
        });
    };

    controller.create = (req, res) => {
        let client_id = req.params.client_id;
        let contact = req.body;

        Client.findById(client_id).exec().then((response) => {
            if(!response) {
                res.status(404).json('Client not found.');
                return ;
            }

            contact.cpf = response.cpf;

            contacts.create(contact).then((response) => {
                res.status(200).json(response);
            });
        }, (error) => {
            console.log(error);
            res.status(500).json(error);
        });
    };

    controller.delete = (req, res) => {
        let client_id = req.params.client_id;
        let id = req.params.id;

        contacts.findById(id).then((response) => {
            if(!response) {
                res.status(404).json('Contact not found.');
                return ;
            }

            contacts.delete(id).then((response) => {
                res.status(200).json(response);
            });
        });
    };

    controller.update = (req, res) => {
        let client_id = req.params.client_id;
        let id = req.params.id;
        let contact = req.body;

        Client.findById(client_id).exec().then((response) => {
            if(!response) {
                res.status(404).json('Client not found.');
                return ;
            }

            contact.cpf = response.cpf;

            contacts.findById(id).then((response) => {
                if(!response) {
                    res.status(404).json('Contact not found.');
                    return ;
                }

                contacts.update(id, contact).then((response) => {
                    res.status(200).json(response);
                });
            });
        }, (error) => {
            console.log(error);
            res.status(500).json(error);
        });
    };

    return controller;
};
