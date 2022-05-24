import { gameToFree } from 'services'

export const getAllGames = async (): Promise<Game[]> => {
  try {
    const { data, status } = await gameToFree.get('games')

    if (status !== 200) return []
    return data as Game[]
  } catch (error) {
    return []
  }
}

export const getGameById = async (id: string): Promise<Game> => {
  try {
    const { data, status } = await gameToFree.get(`game?id=${id}`)

    if (status !== 200) return {} as Game
    return data as Game
  } catch (error) {
    return {} as Game
  }
}
