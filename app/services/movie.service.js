const mongoose = require('mongoose')
const Movie = mongoose.model('Movie')

exports.insert = data => {
  const movie = new Movie(data)
  return movie.save()
}

exports.find = (params = {}, fields = {}, sort, skip, limit) => {
  return Movie.find(params, fields)
    .sort(sort)
    .skip(skip)
    .limit(limit)
}

exports.findOne = (query = {}, fields) => {
  return Movie.findOne(query, fields)
}

exports.count = (query = {}) => {
  return Movie.count(query)
}

exports.update = (query, data) => {
  return Movie.update(query, data)
}

exports.remove = query => {
  return Movie.deleteMany(query)
}