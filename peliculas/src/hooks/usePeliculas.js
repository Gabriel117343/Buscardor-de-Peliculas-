import { useContext, useState } from 'react'
import { PeliculaContext } from '../context/peliculas'
const URlPELICULAS = 'https://www.omdbapi.com/?apikey=34698b77&s='
export const usePeliculas = () => {
  const { peliculas, setPeliculas } = useContext(PeliculaContext)
  const [loading, setLoading] = useState(false)
  const [tituloBusqueda, setTituloBusqueda] = useState()
  const getPeliculas = async () => {
    try {
      const res = await fetch(`${URlPELICULAS}Avengers`)
      if (!res.ok) {
        throw new Error('no se pudo obtener las peliculas')
      }
      const data = await res.json()
      const newPeliculas = data.Search
      console.log(newPeliculas)
      setPeliculas(newPeliculas)
    } catch (error) {
      console.log('Hubo un', error)
      throw new Error('no se pudo encontrar')
    }
  }

  const buscarPeliculas = async (titulo) => {
    if (tituloBusqueda === titulo) {
      console.log('No se puede realizar la misma busqueda')
      return
    }
    setTituloBusqueda(titulo)
    try {
      setLoading(true)
      const res = await fetch(`${URlPELICULAS}${titulo}`)
      if (!res.ok) {
        throw new Error('no se pudo obtener las peliculas')
      }
      const data = await res.json()
      const newPeliculas = data.Search
      console.log(newPeliculas)
      setPeliculas(newPeliculas)
    } catch (error) {
      console.log('Error', error)
      throw new Error('Error de busqueda de pelicula')
    } finally {
      setLoading(false)
    }
  }

  return { peliculas, getPeliculas, buscarPeliculas, loading }
}
