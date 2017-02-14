require('dotenv').config({ silent: true })

import Hapi from 'hapi'
import inert from 'inert'
import mongoose from 'mongoose'

import { api } from './api'

const server = new Hapi.Server()

server.connection({
  host: 'localhost',
  port: process.env.PORT,
})

server.register([
  inert,
  api,
], registerError => {
  if (registerError) throw registerError
  server.start(startError => {
    if (startError) throw startError
    mongoose.connect('mongodb://localhost/eventhescore')
    const db = mongoose.connection
    db.on('error', console.error.bind(console, 'connection error:'))
    db.once('open', () => {
      const kittySchema = mongoose.Schema({
        name: String,
      })
      kittySchema.methods.speak = function () {
        console.log(`sup, I'm ${this.name}`)
      }
      const Kitten = mongoose.model('Kitten', kittySchema)
      const fluffy = new Kitten({ name: 'fluffy' })
      fluffy.speak()
      fluffy.save()
    })
    console.log('server running at:', server.info.uri)
  })
})

