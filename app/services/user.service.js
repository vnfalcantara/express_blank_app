const mongoose = require('mongoose')
const User = mongoose.model('User')

class UserService {

  constructor() {}

  insert(data) {
    let user = new User(data)
    return user.save()
  }

  find(query, fields) {
    return User.find(query, fields)
  }

  findOne(query = {}, fields = {}) {
    console.log(query)
    return User.findOne(query, fields)
  }

  count(query) {
    return User.countDocuments(query)
  }

  update(query, data) {
    return User.findOneAndUpdate(query, data, { new: true })
  }

  remove(query) {
    return User.remove(query)
  }

  login(email, password) {}

  logout() {}

}

module.exports = UserService