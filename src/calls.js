import fetch from 'node-fetch'

export const get = async url => {
  const response = await fetch(url)
  if (!response.ok) throw new Error(response.statusText)
  return response.json()
}
