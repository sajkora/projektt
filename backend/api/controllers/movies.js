const User = require('../models/movie');
const ObjectId = require('mongodb').ObjectId;

exports.createMovie = (async (req, res) => {
  const { title, director, genre, year, description, image_url} = req.body;

  try {
    const movie = new User({ title, director, genre, year, description, image_url});
    await movie.save();
    res.send(movie);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

exports.getAllMovies = (async (req, res) => {
  try {
    const movies = await User.find({});
    res.send(movies);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

exports.getMovieById = (async (req, res) => {
    const { id } = req.params;
  
    try {
      const movie = await User.find({_id : new ObjectId(id)});
      res.send(movie);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  });

exports.updateMovie = (async (req, res) => {
  const { id } = req.params;
  const {  title, director, genre, year, description, image_url } = req.body;

  try {
    const movie = await User.findByIdAndUpdate(id, {  title, director, genre, year, description, image_url }, { new: true });
    res.send(movie);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

exports.deleteMovie = (async (req, res) => {
  const { id } = req.params;

  try {
    const movie = await User.findByIdAndDelete(id);
    res.send(movie);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});