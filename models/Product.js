const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
    maxlength: 30,
  },
  price: {
    type: Number,
    required: [true, 'Please provide price'],
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Product', ProductSchema);
