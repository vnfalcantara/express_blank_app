const movieService = require('../services/movie.service')

exports.insert = async (req, res) => {
  const { body } = req

  try {
    const movie = movieService.insert(body)
    res.json(movie)
  } catch (error) {
    throw new Error(error)
  }
}

exports.find = async (req, res) => {
  let { params, fields, sort } = req.query

  try {
    const movies = await movieService.find(params, fields, sort)
    res.json(movies)
  } catch (error) {
    throw new Error(error)
  }
}

exports.findOne = async (req, res) => {
  let { params, fields } = req.query

  try {
    const movie = await movieService.findOne(params, fields)
    res.json(movie)
  } catch (error) {
    throw new Error(error)
  }
}