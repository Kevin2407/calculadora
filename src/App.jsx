import React from 'react'
import { Numeros } from './numeros/Numeros'
import { Operaciones } from './operaciones/Operaciones'
import { Resultado } from './resultado/Resultado'
import { useState } from 'react'
import './app.css'


export const App = () => {
    const [ panel, setPanel] = useState('');
    
  return (
    <div className='container mx-auto bg-cyan-950'>
    <div className='grid grid-cols-4'>
      <div className='col-span-4'><Resultado resultado={panel} cambiarResultado={setPanel}/></div>
      <div className='sm:col-span-3 col-span-4'><Numeros cambiarResultado={setPanel} /></div>
      <div className='sm:col-span-1 col-span-4'><Operaciones cambiarResultado={setPanel} /></div>
    </div>
  </div>
  )
}
