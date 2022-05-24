import axios from 'axios'

export const gameToFree = axios.create({
  baseURL: 'https://www.freetogame.com/api'
})
