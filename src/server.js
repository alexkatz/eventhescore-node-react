require('dotenv').config({ silent: true })

import Hapi from 'hapi'
import inert from 'inert'
import mongoose from 'mongoose'
import hapiAuthjwt2 from 'hapi-auth-jwt2'
import hapiRequireHttps from 'hapi-require-https'

import { Player } from './models/Player'
import { api } from './api'

mongoose.Promise = Promise

const server = new Hapi.Server()
server.connection({ port: process.env.PORT })
server.register([
  inert,
  hapiRequireHttps,
  hapiAuthjwt2,
  api,
], registerError => {
  if (registerError) throw registerError

  server.auth.strategy('jwt', 'jwt', {
    key: process.env.SECRET_KEY,
    verifyOptions: { algorithms: ['HS256'] },
    validateFunc: (decoded, request, callback) => {
      return (decoded.email && decoded.firstName && decoded.lastName)
        ? callback(null, true)
        : callback(null, false)
    },
  })

  server.auth.default('jwt')

  server.start(startError => {
    if (startError) throw startError
    mongoose.connect('mongodb://localhost/eventhescore')
    const db = mongoose.connection
    db.on('error', console.error.bind(console, 'connection error:'))
    db.once('open', async () => {
      db.dropDatabase()
    })
    console.log('server running at:', server.info.uri)
  })
})

