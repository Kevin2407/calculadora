import React from 'react'
import '../app.css'

export const Resultado = ({resultado}) => {
  return (
    <>
      <div className='cuadro resultado text-center'>
        <input className=' bg-oscuro rounded text-white font-bold text-5xl font- p-5 mx-12 w-1/2 md:w-3/4' value={resultado} readOnly>
        </input>
      </div>
    </>
  )
}
