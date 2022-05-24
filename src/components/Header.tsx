import React from 'react'
import { Container } from 'react-grid-system'

const Header = () => {
  return (
    <header className="absolute top-0 right-0 left-0 z-40">
      <Container className="h-16 flex items-center">
        <h2 className="font-black text-xl text-white">Playfree</h2>
      </Container>
    </header>
  )
}

export default Header
