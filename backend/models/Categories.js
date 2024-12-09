const mongoose = require('mongoose');
const slugify = require('slugify');

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
    image:{type:String , required:false , unique : true},
    link: { type: String, unique: true, required: true },
    slug: { type: String, unique: true, required: true },
    is_active: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model('Category', categorySchema);
