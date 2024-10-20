import React, { useState, useEffect } from 'react'
import './styles/styletext.css'

export default function Foreground () {
  return (
    <div id='feed-scroll' class='h-screen w-full bg-transparent flex flex-col'>

      <div
        class='flex flex-col justify-center bg-contain items-center pt-5 space-y-8'
      >
        <div class='space-y-2 px-2'>
          <h1 class='honkHeading text-6xl font-black text-center'>Buy Low Sell High</h1>
          <p class='font-bold text-center'>The path to profits sounds easy; why should the setup and use of automated trading software be complex?</p>
        </div>
        <div>
          <p class='text-2xl font-black text-center obitron'>Automated Crypto Trading Simplified</p>
          <p class='text-lg font-bold text-center obitron'>Accessible and Powerful</p>
        </div>
        <button class='border-x-8 border-x-transparent bg-transparent text-xs font-bold  text-pink-500 font-semibold hover:text-orange-700 py-2 px-4 border border-orange-500 hover:border-transparent rounded-full mt-10'>
          Scroll Down to Learn More
        </button>
      </div>
    </div>
  )
}
