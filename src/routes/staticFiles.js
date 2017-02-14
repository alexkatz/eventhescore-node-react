import Path from 'path'

export const staticFiles = [{
  method: 'GET',
  path: '/{param*}',
  config: { auth: false },
  handler: {
    directory: {
      path: Path.join(__dirname, '../../client/build'),
      index: true,
    },
  },
}]
