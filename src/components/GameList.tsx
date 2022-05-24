import React, { FC, Fragment, useMemo, useState } from 'react'
import { useGamesContext } from 'contexts'
import Image from 'next/image'
import { Col, Container, Row } from 'react-grid-system'

const GameItem: FC<Game> = ({
  title,
  thumbnail,
  game_url,
  short_description,
  genre,
  platform,
  release_date
}) => {
  return (
    <Col xs={12} sm={6} md={4} lg={3} xl={3} xxl={2.4} className="mb-12">
      <a
        className="group block w-full transition duration-500 hover:scale-105"
        href={game_url}
        target="_blank"
      >
        <div className="w-full relative pt-[56%] rounded overflow-hidden bg-zinc-800">
          <Image
            src={thumbnail}
            layout="fill"
            objectFit="cover"
            className="w-full absolute top-0 left-0 right-0 bottom-0"
          />
        </div>
        <div className="flex space-x-4 mt-2">
          <div className="flex-1">
            <div className="text-xs text-white text-opacity-50 tracking-widest">
              {genre}
            </div>
            <h4 className="font-black mb-2 transition duration-300 group-hover:text-blue-400">
              {title}
            </h4>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-xs text-white text-opacity-50">{platform}</div>
            <div className="text-xs font-bold text-white text-opacity-50">
              {release_date.slice(0, 4)}
            </div>
          </div>
        </div>
        <h5 className="text-sm font-light text-white text-opacity-75">
          {short_description}
        </h5>
      </a>
    </Col>
  )
}

const GameList = () => {
  const data = useGamesContext()
  const [searchText, setSearchText] = useState('')
  const games = useMemo(() => {
    if (!searchText) return data
    return data.filter((game) => {
      const lowerSearchText = searchText.toLowerCase()
      const title = game.title.toLowerCase()
      return title.includes(lowerSearchText)
    })
  }, [data, searchText])

  return (
    <Container className="pt-24">
      <input
        className="mb-8 w-full max-w-md py-3 px-5 rounded-xl outline-none border border-zinc-900 bg-zinc-900 text-zinc-300 placeholder:text-zinc-500 focus:border-zinc-700"
        placeholder="Search games"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <Row>
        {games.map((game) => (
          <GameItem key={game.id} {...game} />
        ))}
      </Row>
    </Container>
  )
}

export default GameList
