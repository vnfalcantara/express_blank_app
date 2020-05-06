const movie = require('../controllers/movie.controller')

module.exports = app => {
  
  const basePath = '/movie'

  app.post(basePath, movie.insert)
  app.get(`${basePath}/count`, movie.count)
  app.get(basePath, movie.find)
  app.get(`${basePath}/:id`, movie.findOne)
  app.put(`${basePath}`, movie.updateMany)
  app.put(`${basePath}/:id`, movie.update)
  app.delete(`${basePath}`, movie.removeMany)
  app.delete(`${basePath}/:id`, movie.remove)

}
