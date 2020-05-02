const app = require('../../app/app')
const UserService = require('../../app/services/user.service')
const usersMock = require('../__mocks__/users.json')

describe('foo', () => {

  userService

  const init = async () => {
    await app.run()
    // await userService.remove({})
    // await userService.insert(usersMock)
  }

  beforeAll(async done => {
    await init()
    done()
  })

  it('insert', async done => {
    debugger
    done()
  })

})