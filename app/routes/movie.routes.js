const movie = require('../controllers/movie.controller')

module.exports = app => {
  
  const basePath = '/movie'

  app.post(basePath, movie.insert)
  app.get(basePath, movie.find)
  app.get(`${basePath}/:id`, movie.findOne)

}
