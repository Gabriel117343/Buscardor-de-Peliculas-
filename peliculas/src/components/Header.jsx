import React, { useRef } from 'react'
import { usePeliculas } from '../hooks/usePeliculas'
import debounce from 'lodash/debounce'

export const Header = () => {
  const { buscarPeliculas } = usePeliculas()
  const title = useRef()
  const buscar = (event) => {
    event.preventDefault()
    const fields = Object.fromEntries(new window.FormData(event.target))
    // Fields sera un objeto con los valores de los inputs
    console.log(fields)
    const tit = fields.titulo
    const otroTit = fields.descripcion
    console.log(otroTit)
    buscarPeliculas(tit)
  }
  const busquedaRapida = () => {
    const tit = title.current.value
    buscarPeliculas(tit)
  }
  const debouncedBuscar = debounce(busquedaRapida, 100)
  return (
    <header className='bg-primary '>
      <div className='container pt-4 pb-4'>
        <form onSubmit={buscar}>
          <div className='d-flex justify-content-center gap-3'>
            <div className='form-group'>
              <input ref={title} onChange={debouncedBuscar} type='text' className='form-control ' placeholder='Avengers....' name='titulo' />
            </div>
            <button type='submit' className='btn btn-success'>Buscar</button>
          </div>
        </form>
      </div>
    </header>
  )
}
