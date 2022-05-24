import { createContext, FC, useContext } from 'react'

export const GamesContext = createContext<Game[]>([])

export const GamesContextProvider: FC<{ data: Game[]; children: any }> = ({
  data,
  children
}) => {
  return <GamesContext.Provider value={data}>{children}</GamesContext.Provider>
}

export const useGamesContext = () => useContext(GamesContext)
