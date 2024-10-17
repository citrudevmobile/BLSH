import React from 'react'
import './styles/styletext.css'


export default function Foreground () {
  return (
    <div class='h-screen  w-full  bg-white flex flex-col'>
      <div
        class='flex flex-col justify-center bg-contain items-center pt-5'
      >
        <h1 class='honkHeading text-center'>Buy Low Sell High</h1>
        <p class='text-xl font-black text-center'>The path to profits sounds easy; therefore, we created a product to reflect that.</p>
        <p class='text-lg font-black text-center obitron'>Automated Crypto Trading Simplified</p>
        <p class='text-sm font-black text-center obitron'>Accessible and Powerful</p>
        <button class=' border-x-8 border-x-transparent bg-transparent text-xs font-bold  text-pink-500 font-semibold hover:text-orange-700 py-2 px-4 border border-orange-500 hover:border-transparent rounded-full mt-10'>
          Scroll Down to Learn More
        </button>
      </div>
    </div>
  )
}
