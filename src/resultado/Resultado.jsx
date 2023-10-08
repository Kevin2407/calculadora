import React from 'react'
import '../app.css'

export const Resultado = ({resultado}) => {
  return (
    <>
      <div className='cuadro resultado text-center'>
        <input className=' bg-slate-800 text-white font-bold text-5xl font- p-5 mx-12' value={resultado}>
        </input>
      </div>
    </>
  )
}
