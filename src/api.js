import Path from 'path'
import { staticFiles } from './routes/staticFiles'
import { score } from './routes/session'
import { authenticate } from './routes/authenticate'

const api = (server, options, next) => {
  server.route([
    ...staticFiles,
    ...score,
    ...authenticate,
  ])

  server.ext('onPostHandler', (request, reply) => {
    const { response } = request
    if (response.isBoom && response.output.statusCode === 404) {
      return reply.file(Path.join(__dirname, '../client/build/index.html'))
    }
    return reply.continue()
  })
  next()
}

api.attributes = {
  name: 'api',
  version: '0.1',
}

export { api }

