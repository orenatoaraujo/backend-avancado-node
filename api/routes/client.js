module.exports = (app) => {
    let controller = app.controllers.client;

    app.route('/client')
        .get(controller.findAll)
        .post(controller.create);
    
    app.route('/client/:id')
        .get(controller.findById)
        .delete(controller.delete)
        .put(controller.update);
};
