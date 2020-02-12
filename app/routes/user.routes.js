const UserController = require('../controllers/user.controller')
const user = new UserController()

module.exports = app => {
  
  const basePath = '/user'

  app.post(basePath, user.insert)
  app.get(basePath, user.find)
  app.get(`${basePath}/:_id`, user.findOne)
  app.put(basePath, user.update);
  app.patch(basePath, user.update);
  app.delete(basePath, user.delete)

}
