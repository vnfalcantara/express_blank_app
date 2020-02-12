const UserService = require('../services/user.service')
const userService = new UserService()
const { color } = require('../constants')

const run = async () => {

  try {
    const hasUser = await userService.count({ email: 'vnfalcantara@gmail.com' })

    if (!hasUser)
      userService.insert({
        name: 'Vinícius Ferreira de Alcântara',
        email: 'vnfalcantara@gmail.com'
      })
  } catch (error) {
    console.log(color.RED, error)
  }

}

run()