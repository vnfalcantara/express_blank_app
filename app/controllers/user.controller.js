const UserService = require('../services/user.service')
const userService = new UserService()

exports.insert = async (req, res) => {
  try {
    const user = userService.insert(req.body)
    res.json(user)
  } catch (error) {
    throw new Error(error)
  }
}

exports.find = async (req, res) => {
  let { params = '{}', fields = '{}' } = req.query
  
  params = JSON.parse(params)
  fields = JSON.parse(fields)

  try {
    const users = await userService.find(params, fields)
    res.json(users)
  } catch (error) {
    throw new Error(error)
  }
}

exports.findOne = async (req, res) => {

}

exports.update = async (req, res) => {}

exports.delete = async (req, res) => {}

exports.login = async (req, res) => {}

exports.logout = async (req, res) => {}

exports.changePassword = async (req, res) => {}

exports.resetPassword = async (req, res) => {}

/*
const UserService = require('../services/user.service')

class UserController {

  constructor() {
    this.userService = new UserService()

    this.insert = this.insert.bind(this)
    this.find = this.find.bind(this)
    this.findOne = this.findOne.bind(this)
    this.update = this.update.bind(this)
    this.delete = this.delete.bind(this)
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.resetPassword = this.resetPassword.bind(this)
  }

  insert(req, res) {
    const { body } = req

    this.userService.insert(body)
      .then(data => res.json(data))
      .catch(error => { throw new Error(error) })
  }

  find(req, res) {
    let { params = '{}', fields = '{}' } = req.query

    params = JSON.parse(params)
    fields = JSON.parse(fields)

    this.userService.find(params, fields)
      .then(data => res.json(data))
      .catch(error => { throw new Error(error) })
  }

  findOne(req, res) {
    const { _id } = req.params
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
*/