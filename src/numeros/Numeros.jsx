import React from 'react'
import Bott from '../Bott'
import '../app.css'

const ingresarNum = (e,resultado) => {
  console.log('pedo')
}

export const Numeros = ({cambiarResultado}) => {
  return (
    <>
      <div  className='cuadro grid grid-cols-3 '>
        {
            Array.from({ length: 9 }).map((_, index) => (
              <Bott key={index} n={index+1} cambiarResultado={cambiarResultado} />
            ))
        }
        <Bott classDe0='col-span-3' n={0}  cambiarResultado={cambiarResultado}/>
      </div>
    
    </>
  )
}
