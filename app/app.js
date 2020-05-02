const fs = require('fs')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const errorHandler = require('./middlewares/errorHandler')
const { color } = require('./constants')

class App {

  constructor() {
    this.express = express()
  }

  requireDirectory(path, passApp) {
    const files = fs.readdirSync(`${__dirname}/${path}`)

    files.forEach(file => {
      console.log(color.GREEN, file)
      
      if (passApp) require(`${__dirname}/${path}/${file}`)(this.express)
      else require(`${__dirname}/${path}/${file}`)
    })
  }

  loadMiddlewares() {
    console.log(color.BLUE, '\nLOADING MIDDLEWARES')
    this.express.use(cors())
    this.express.use(errorHandler)
    this.express.use(bodyParser.json())
  }

  loadModels() {
    console.log(color.BLUE, '\nLOADING MODELS')
    this.requireDirectory('models')
  }

  loadControllers() {
    console.log(color.BLUE, '\nLOADING CONTROLLERS')
    this.requireDirectory('controllers')
  }

  loadRoutes() {
    console.log(color.BLUE, '\nLOADING ROUTES')
    this.requireDirectory('routes', true)
  }

  loadBootstraps() {
    console.log(color.BLUE, '\nLOADING BOOTSTRAPS')
    this.requireDirectory('bootstraps')
  }

  run() {
    this.loadModels()
    this.loadControllers()
    this.loadRoutes()
    this.loadMiddlewares()
    this.loadBootstraps()
  }

}

module.exports = new App()