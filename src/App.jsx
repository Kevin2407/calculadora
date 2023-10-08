import React from 'react'
import { Numeros } from './numeros/Numeros'
import { Operaciones } from './operaciones/Operaciones'
import { Resultado } from './resultado/Resultado'
import { useState } from 'react'
import './app.css'


export const App = () => {
    const [ panel, setPanel] = useState('');

    const evaluarPanel = (panel)=>{
        try {
            return eval(panel);
        } catch (error) {
            console.error("Error evaluando la cadena:", error);
            return null;
        }
    }   

    const cambiarPanel = (caracter)=>{

        switch(caracter){
            case '=':
                setPanel(evaluarPanel(panel));
            break;
            case 'C':
                setPanel('');
            break;
            default:
                setPanel(panel.toString() + caracter);

        }

    }
    
  return (
    <div className='container mx-auto h-screen'>
    <div className='grid grid-cols-4'>
      <div className='col-span-4'><Resultado resultado={panel} cambiarResultado={cambiarPanel}/></div>
      <div className='sm:col-span-3 col-span-4'><Numeros cambiarResultado={cambiarPanel} /></div>
      <div className='sm:col-span-1 col-span-4'><Operaciones cambiarResultado={cambiarPanel} /></div>
    </div>
  </div>
  )
}
