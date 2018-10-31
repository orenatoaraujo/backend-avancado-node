module.exports = (app) => {
    const controller = app.controllers['client-contact'];

    app.route('/client/:id/contacts')
        .get(controller.findAll)
        .post(controller.create);
};
