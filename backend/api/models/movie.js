const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  director: String,
  genre: String,
  year: Number,
  description: String,
  image_url: String,
  
});

movieSchema.virtual('id').get(function(){
  return this._id.toHexString();
});

movieSchema.set('toJSON', {
  virtuals: true
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;