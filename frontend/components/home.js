import React from 'react'
import Background from './background.js'
import Foreground from './foreground.js'
import './styles/positions.css'

export default function Home () {
  return (
    <div>
      <Background class='stack background' />
      <Foreground class='stack foreground' />
    </div>
  )
}
