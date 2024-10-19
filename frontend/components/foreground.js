import React, { useState, useEffect } from 'react'
import './styles/styletext.css'

export default function Foreground () {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.getElementById('feed-scroll').addEventListener('scroll', async function () {
      alert('works')
      const diff = difference((this.scrollTop + this.clientHeight), (this.scrollHeight))
      if (diff < 1) {
        alert('scrolling...')
      }
    })
  })

  return (
    <div id='feed-scroll' class='h-screen w-full bg-white flex flex-col'>
      <div class='flex justify-center'>
        <header class='w-5/6 mt-5 text-white hidden md:block bg-black/50 rounded-full shadow-sm body-font'>
          <div class='container flex flex-col items-start p-4 mx-auto md:flex-row items-center'>
            <a class='flex honkHeading text-2xl items-center font-black text-gray-900 title-font md:mb-0'>
              BLSH
            </a>
            <nav class='flex items-center justify-center text-base md:ml-auto'>
              <a href='#_' class='mr-5 font-medium hover:text-gray-900'>Home</a>
              <a href='#_' class='mr-5 font-medium hover:text-gray-900'>About</a>
            </nav>
            <div class='items-center h-full pl-6 ml-6 border-l border-gray-200'>
              <a href='#_' class='mr-5 font-medium hover:text-gray-900'>Login</a>
              <a
                href='#_'
                class='px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-teal-500 rounded-full shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease'
              >
                Sign Up
              </a>
            </div>
          </div>
        </header>
      </div>

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
