'use strict';
module.exports = function(app) {
  var user = require('../controllers/userController');

  // User Routes
  app.route('/users')
    .get(user.list_all_users)
    .post(user.create_user);


  app.route('/users/:userId')
    .get(user.get_user_by_id)
    .put(user.update_user)
    .delete(user.delete_user);
};
