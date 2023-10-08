import React from 'react'
import '../app.css'
import Bott from '../Bott'

export const Operaciones = ({cambiarResultado}) => {
  return (
    <div className='cuadro'>
      <Bott n='+' cambiarResultado={cambiarResultado}/>
      <Bott n='-' cambiarResultado={cambiarResultado}/>
      <Bott n='*' cambiarResultado={cambiarResultado}/>
      <Bott n='/' cambiarResultado={cambiarResultado}/>
      <Bott n='=' cambiarResultado={cambiarResultado}/>
    </div>
  )
}
