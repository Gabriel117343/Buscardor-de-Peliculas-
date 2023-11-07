import React from 'react'
import { MagicMotion } from 'react-magic-motion'
export const ListaPeliculas = ({ listaPeliculas }) => {
  return (
    <section className='container pt-5'>
      <h1 className='text-center text-white pb-4'>Peliculas Encontradas</h1>
      <ul className='peliculas'>
        <MagicMotion>
          {listaPeliculas.map(p => (
            <li key={p.imdbID} className='titulo-pelicula pelicula'>
              <h3 className=''>{p.Title}</h3>
              <img src={p.Poster} alt='Esto es una imagen de una pelicula' />
              <strong>{p.Year}</strong>
            </li>
          ))}
        </MagicMotion>
      </ul>
    </section>
  )
}
export const SinPeliculas = () => {
  return (
    <section className='container pt-4'>
      <h1 className='text-center pt-3 text-white'>No se encontraron Peliculas!</h1>

    </section>
  )
}
export const ValidarListaPeliculas = ({ listaPeliculas }) => {
  console.log(listaPeliculas)
  const peliculasContadas = listaPeliculas?.length > 0
  return (peliculasContadas
    ? <ListaPeliculas listaPeliculas={listaPeliculas} />
    : <SinPeliculas />
  )
}
