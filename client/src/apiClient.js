let instance = null

const baseUrl = process.env.NODE_ENV === 'production'
  ? ''
  : ''

class ApiClient {
  constructor() {
    if (!instance) {
      instance = this
    }
    return instance
  }

  async get(url) {
    const response = await fetch(baseUrl + url, {
      headers: {
        'Authorization': this.token,
      }
    })
    if (!response.ok) throw Error(response.statusText)
    return response.json()
  }

  async post(url, data) {
    const response = await fetch(baseUrl + url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.token,
      },
    })
    if (!response.ok) throw Error(response.statusText)
    return response.json()
  }

  async delete(url) {
    const response = await fetch(baseUrl + url, {
      method: 'DELETE',
      headers: {
        'Authorization': this.token,
      }
    })
    if (!response.ok) throw Error(response.statusText)
    return response.json()
  }
  token = null
  isRehydrated = false
}

const client = new ApiClient()

export { client }
