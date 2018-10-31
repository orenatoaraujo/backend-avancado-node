module.exports = (app) => {
    let controller = app.controllers.client;

    app.route('/client')
        .get(controller.findAll)
        .post(controller.create);
};
