module.exports = (app) => {
    const controller = {};

    const Client = app.models.client;

    const contacts = app.services.contacts;

    controller.findAll = (req, res) => {
        let id = req.params.id;

        Client.findById(id).exec().then((response) => {
            if(!response) {
                res.status(404).json('Client not found.');
            }

            contacts.findByCpf(response.cpf).then((response) => {
                res.status(200).json(response);
            });
        }, (error) => {
            console.log(error);
            res.status(500).json(error);
        });
    };

    controller.create = (req, res) => {
        let id = req.params.id;
        let contact = req.body;

        Client.findById(id).exec().then((response) => {
            if(!response) {
                res.status(404).json('Client not found.');
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

    return controller;
};
