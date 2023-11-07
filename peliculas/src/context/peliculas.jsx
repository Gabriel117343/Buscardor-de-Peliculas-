import { createContext, useState } from 'react'

export const PeliculaContext = createContext()

export const PeliculaProvider = ({ children }) => {
  const [peliculas, setPeliculas] = useState([])
  return (
    <PeliculaContext.Provider value={{
      peliculas,
      setPeliculas
    }}
    >{children}
    </PeliculaContext.Provider>
  )
}
