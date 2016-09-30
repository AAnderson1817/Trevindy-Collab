var express = require('express');
var router = express.Router();

var controller = require('../controllers/menuItems.js');

router.route('/')
  .get(controller.index)
  .post(controller.create);

router.route('/:id')
  .get(controller.show)
  .patch(controller.update)
  .delete(controller.delete);

module.exports = router;
