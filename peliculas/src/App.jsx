import React from 'react'
import { Header } from './components/Header'
import { Peliculas } from './components/Peliculas'
import { PeliculaProvider } from './context/peliculas'

export const App = () => {
  return (
    <main>
      <PeliculaProvider>
        <Header />
        <Peliculas />
      </PeliculaProvider>
    </main>
  )
}
