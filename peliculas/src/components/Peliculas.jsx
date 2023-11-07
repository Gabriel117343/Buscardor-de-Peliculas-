import React, { useEffect } from 'react'
import { usePeliculas } from '../hooks/usePeliculas'
import './peliculas.css'
import { ValidarListaPeliculas } from './ListaPeliculas'

export const Peliculas = () => {
  const { peliculas, getPeliculas, loading } = usePeliculas()
  console.log(loading)
  console.log(peliculas)
  useEffect(() => {
    async function cargarPelicula () {
      console.log('sdf')
      await getPeliculas()
    }
    cargarPelicula()
  }, [])
  return (
    <main>
      {
        loading
          ? <h1 className='text-center text-white'>Cargando...</h1>
          : <ValidarListaPeliculas listaPeliculas={peliculas} />
      }

    </main>
  )
}
