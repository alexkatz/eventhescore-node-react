import Boom from 'boom'
import jwt from 'jsonwebtoken'
import { get } from './../calls'
import { Player } from '../models/Player'

const authenticateFacebook = async ({ accessToken, profile }) => {
  const response = await get(`https://graph.facebook.com/me?access_token=${accessToken}`)
  return response.id && response.name && profile
}

export const authenticate = [{
  method: 'POST',
  path: '/api/authenticate',
  config: { auth: false },
  async handler(request, reply) {
    try {
      const { payload } = request
      const { email, firstName, lastName, imageUrl } = await authenticateFacebook(payload)
      const player = await Player.findOne({ email }).exec()
      if (player) return reply({
        ...player.toObject(),
        token: jwt.sign(player, process.env.SECRET_KEY)
      })
      const newPlayer = new Player({ email, firstName, lastName, imageUrl })
      await newPlayer.save()
      return reply({
        ...newPlayer.toObject(),
        token: jwt.sign(newPlayer, process.env.SECRET_KEY)
      })
    } catch (err) {
      console.log('Error authenticating', err)
      return reply(Boom.badImplementation())
    }
  },
}]