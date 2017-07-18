const controller = require('../controllers/memoryController');

module.exports = (app) => {
  app.route('/memories')
    .get(controller.list_memories)
    .post(controller.create_memory);

  app.route('/memories/:memoryId')
    .get(controller.find_memory)
    .put(controller.update_memory)
    .delete(controller.delete_memory);
};
