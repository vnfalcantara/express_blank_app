const user = require('../controllers/user.controller')

module.exports = app => {
  
  const basePath = '/user'

  app.post(basePath, user.insert)
  app.get(basePath, user.find)
  app.get(`${basePath}/:id`, user.findOne)
  app.put(basePath, user.update)
  app.patch(basePath, user.update)
  app.delete(`${basePath}/:id`, user.delete)

}
