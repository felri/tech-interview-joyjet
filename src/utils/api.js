import { URL } from 'src/utils/env'

export const getItems = async () => {
  const response = await fetch(`${URL}`, { method: 'GET' })
  const data = await response.json()
  return data
}