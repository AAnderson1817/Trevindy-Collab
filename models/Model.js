var mongoose = reqiure('mongoose');

var MenuItemSchema = mongoose.Schema({
  name: String,
  ingredients: []
});

var MenuItem = mongoose.model('MenuItem', MenuItemSchema);

module.exports = MenuItem;
