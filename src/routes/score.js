export const score = [{
  method: 'GET',
  path: '/api/score',
  async handler(request, reply) {
    return reply([
      'some stuff',
      'some more stuff',
    ])
  },
}]