const express = require('express');

const router = express.Router();

const movieController = require("../controllers/movies")

router.post('/movie', movieController.createMovie);

router.get('/movies', movieController.getAllMovies);

router.get('/movie/:id', movieController.getMovieById);

router.put('/movie/:id', movieController.updateMovie);

router.delete('/movie/:id', movieController.deleteMovie);

module.exports = router;
