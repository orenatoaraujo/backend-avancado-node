module.exports = (app) => {
    let controller = {};

    controller.findAll = (req, res) => {
        res.status(200).json([{name: 'Renato'}]);
    };

    return controller;
};
