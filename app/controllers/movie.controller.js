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

exports.count = async (req, res) => {
  let { params } = req.query

  try {
    const movies = await movieService.count(params)
    res.json(movies)
  } catch (error) {
    throw new Error(error)
  }
}

exports.find = async (req, res) => {
  let { params, fields, sort, skip, limit } = req.query

  try {
    const movies = await movieService.find(params, fields, sort, Number(skip), Number(limit))
    res.json(movies)
  } catch (error) {
    throw new Error(error)
  }
}

exports.findOne = async (req, res) => {
  const _id = req.params.id
  const { fields } = req.query

  try {
    const movie = await movieService.findOne({ _id }, fields)
    res.json(movie)
  } catch (error) {
    throw new Error(error)
  }
}

exports.update = async (req, res) => {}

exports.updateMany = async (req, res) => {}

exports.remove = async (req, res) => {}

exports.removeMany = async (req, res) => {}