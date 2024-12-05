const mongoose = require('mongoose');
const slugify = require('slugify');

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
    link: { type: String, unique: true, required: true },
    is_active: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

// Middleware to generate a slug from the name
// categorySchema.pre('save', function (next) {
//   if (!this.link) {
//     this.link = slugify(this.name, { lower: true, strict: true });
//   }
//   next();
// });

module.exports = mongoose.model('Category', categorySchema);
