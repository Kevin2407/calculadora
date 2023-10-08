import React from 'react'
import '../app.css'

export const Resultado = ({resultado}) => {
  return (
    <>
      <div className='cuadro resultado text-center'>
        <input className=' bg-oscuro rounded text-white font-bold text-5xl p-5 mx-12 w-3/4 md:w-3/4' value={resultado} readOnly>
        </input>
      </div>
    </>
  )
}
