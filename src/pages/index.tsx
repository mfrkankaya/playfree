import { getAllGames } from 'api'
import GameList from 'components/GameList'
import Header from 'components/Header'
import { GamesContextProvider } from 'contexts'
import { GetStaticProps, NextPage } from 'next'
import React from 'react'

const HomePage: NextPage<{ data: Game[] }> = ({ data }) => {
  return (
    <GamesContextProvider data={data}>
      <Header />
      <GameList />
    </GamesContextProvider>
  )
}

export default HomePage

export const getStaticProps: GetStaticProps = async () => {
  try {
    const games = await getAllGames()

    return {
      props: {
        data: games
      }
    }
  } catch (error) {
    return {
      props: {
        data: []
      }
    }
  }
}
