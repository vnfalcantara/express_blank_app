const fs = require('fs')
const express = require('express')

const cors = require('cors')
const bodyParser = require('body-parser')
const errorHandler = require('./middlewares/errorHandler')

const { color } = require('./constants')
const { LOG_START } = process.env

class App {

  constructor() {
    this.express = express()
  }

  requireDirectory(path, passApp) {
    const files = fs.readdirSync(`${__dirname}/${path}`)

    if (LOG_START) console.log(color.BLUE, `\nLoading ${path}`)

    files.forEach(file => {
      if (LOG_START) console.log(color.GREEN, file)
      
      if (passApp) require(`${__dirname}/${path}/${file}`)(this.express)
      else require(`${__dirname}/${path}/${file}`)
    })
  }

  loadMiddlewares() {
    this.express.use(cors())
    this.express.use(errorHandler)
    this.express.use(bodyParser.json())
  }

  loadModels() {
    this.requireDirectory('models')
  }

  loadControllers() {
    this.requireDirectory('controllers')
  }

  loadRoutes() {
    this.requireDirectory('routes', true)
  }

  loadBootstraps() {
    this.requireDirectory('bootstraps')
  }

  start() {
    this.loadMiddlewares()
    this.loadModels()
    this.loadControllers()
    this.loadRoutes()
    this.loadBootstraps()
  }

}

module.exports = new App()