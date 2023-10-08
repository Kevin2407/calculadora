import React from 'react'
import Bott from '../Bott'
import '../app.css'

const ingresarNum = (resultado) => {

}

export const Numeros = ({resultado}) => {
  return (
    <>
      <div  className='cuadro grid grid-cols-3 '>
        {
            Array.from({ length: 9 }).map((_, index) => (
              <Bott key={index} n={index+1} />
            ))
        }
        <Bott classDe0='col-span-3' n={0} />
      </div>
    
    </>
  )
}
