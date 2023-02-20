import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import './App.css'

import { Card } from '../componentes/card'

function App() {
  return (
    <div className='container'>

      <h1>Lista de Presença</h1>
      <input placeholder='Digite o nome...' type="text" />
      <button>Adicionar</button>

      <Card/>
      <Card/>
      <Card/>

    </div>
  )
}

export default App
