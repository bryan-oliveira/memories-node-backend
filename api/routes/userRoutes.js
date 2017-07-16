module.exports = (app) => {
  const controller = require('../controllers/userController')

  app.route('/users')
    .get(controller.list_users)
    .post(controller.create_user)

  app.route('/users/:userId')
    .get(controller.find_user)
    .put(controller.update_user)
    .delete(controller.delete_user)
};
