import React from 'react'
import Background from './components/background.js'
import Foreground from './components/foreground.js'
import './components/styles/positions.css'

function App () {
  return (
    <div>
      <Background class='stack background' />
      <Foreground class='stack foreground' />
    </div>

  )
}

export default App
