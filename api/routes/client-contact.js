module.exports = (app) => {
    const controller = app.controllers['client-contact'];

    app.route('/client/:client_id/contact')
        .get(controller.findAll)
        .post(controller.create);
    
    app.route('/client/:client_id/contact/:id')
        .get(controller.findById)
        .delete(controller.delete)
        .put(controller.update);
};
