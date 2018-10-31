module.exports = (app) => {
    let controller = {};

    let Client = app.models.client;

    controller.findAll = (req, res) => {
        Client.find().exec().then((response) => {
            res.status(200).json(response);
        }, (error) => {
            res.status(500).json(error);
        });
    };

    controller.create = (req, res) => {
        let client = req.body;

        Client.create(client).then((response) => {
            res.status(201).json(response);
        }, (error) => {
            console.log(error);
            res.status(500).json(error);
        });
    };

    return controller;
};
