const UserService = require('../services/user.service')

class UserController {

  constructor() {
    this.userService = new UserService()
  }

  insert(req, res) {}

  find(req, res) {
    let { params = '{}', fields = '{}' } = req.query
    
    params = JSON.parse(params)
    fields = JSON.parse(fields)

    this.userService.find(params, fields)
      .then(data => res.json(data))
      .catch(error => res.error(error))
  }

  findOne(req, res) {
    const _id = { params } = req
    let { fields = '{}' } = req.query
    
    fields = JSON.parse(fields)

    this.userService.findOne({ _id }, fields)
      .then(data => res.json(data))
      .catch(error => res.error(error))
  }

  update(req, res) {}

  delete(req, res) {}

  login(req, res) {}

  logout(req, res) {}

  changePassword(req, res) {}

  resetPassword(req, res) {}

}

module.exports = UserController