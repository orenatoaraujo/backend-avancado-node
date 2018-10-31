module.exports = (app) => {
    const controller = {};

    const Client = app.models.client;

    controller.create = (req, res) => {
        let client = req.body;

        Client.create(client).then((response) => {
            res.status(201).json(response);
        }, (error) => {
            console.log(error);
            res.status(500).json(error);
        });
    };

    controller.update = (req, res) => {
        let id = req.params.id;
        let client = req.body;

        Client.findByIdAndUpdate(id, client, {new: true}).then((response) => {
            res.status(201).json(response);
        }, (error) => {
            console.log(error);
            res.status(500).json(error);
        });
    };

    controller.delete = (req, res) => {
        let id = req.params.id;

        Client.findByIdAndDelete(id).then((response) => {
            res.status(201).json(response);
        }, (error) => {
            console.log(error);
            res.status(500).json(error);
        });
    };

    controller.findAll = (req, res) => {
        Client.find().exec().then((response) => {
            res.status(200).json(response);
        }, (error) => {
            console.log(error);
            res.status(500).json(error);
        });
    };

    controller.findById = (req, res) => {
        let id = req.params.id;

        Client.findById(id).exec().then((response) => {
            if(!response) {
                res.status(404).json('Client not found.');
            }

            res.status(200).json(response);
        }, (error) => {
            console.log(error);
            res.status(500).json(error);
        });
    };

    return controller;
};
