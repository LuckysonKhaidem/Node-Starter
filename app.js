const express = require('express')
const morgan = require('morgan')
const compression = require('compression')
const appConfig = require('./config/applicationConfig')
const LOG = require('./logger/log')

const app = express()

const deploymentMode = appConfig.deploymentMode || 'dev'

app.use(express.json())

app.use(compression())

app.use(morgan(deploymentMode))

app.get("/index", function(req,res) {

    LOG.info(`Got request!`)
    res.send("THIS IS IT!");

})
module.exports = app