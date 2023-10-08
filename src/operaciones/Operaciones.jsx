import React from 'react'
import '../app.css'
import Bott from '../Bott'

export const Operaciones = ({cambiarResultado}) => {
  return (
    <div className=' cuadro grid grid-cols-5 sm:grid-cols-1  '>
      <Bott n='+' cambiarResultado={cambiarResultado}/>
      <Bott n='-' cambiarResultado={cambiarResultado}/>
      <Bott n='*' cambiarResultado={cambiarResultado}/>
      <Bott n='/' cambiarResultado={cambiarResultado}/>
      <Bott n='=' cambiarResultado={cambiarResultado}/>
    </div>
  )
}
