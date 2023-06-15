const mongoose = require('mongoose');


const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  director: {type:String, required: true},
  fecha_estreno: {type:String, required:true},
  imagen: {type:String, required:true},
  description: { type: String, required: true },
});


module.exports = mongoose.model('Item', itemSchema);