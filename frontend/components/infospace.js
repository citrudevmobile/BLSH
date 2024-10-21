import React from 'react'
import backgroundImages from './assets/backgroundImages'
import { NavLink } from 'react-router-dom'

export default function Infospace () {
  return (
    <div class='h-full w-full relative space-y-10 pt-5 md:pt-14'>
      <div style={{ background: `url(${backgroundImages.chartLines})` }} class='bg-no-repeat bg-cover bg-center flex justify-center items-center'>
        <div class='text-white text-center bg-black/40 w-10/12 h-full rounded-xl space-y-5 md:space-y-12 px-4 py-4 flex flex-col items-center'>
          <div class='flex flex-col justify-center bg-contain items-center pt-5'>
            <button class='border-x-8 border-x-transparent bg-transparent text-lg font-bold  text-white  py-2 px-4 border-4 border-orange-500 hover:border-transparent rounded-full mt-10'>
              Why BLSH
            </button>
          </div>
          <div class='px-6 bg-black/70 rounded-lg backdrop-blur-sm py-6 '>
            <p class='text-sm md:text-xl text-white font-bold space-y-4'>
              <p>Aside from the risks of hacks and frauds, one of the most common sources of potential money losses is misconfiguration of cryptocurrency trading bots owing to a lack of adequate knowledge and experience. </p>
              <p>Configuring cryptocurrency trading bots can be a difficult task, especially for inexperienced traders. To effectively configure the bots, traders must first comprehend technical indicators and trading strategies. So we built a product that makes it easier to configure the bots while simultaneously providing you with advanced control over them.</p>
              <p class='px-4 py-2 bg-white/80 text-black rounded-xl backdrop-blur-sm'>BLSH code is opensource and built on top of Freqtrade  a free and open source crypto trading bot that has been battle tested.</p>
            </p>
          </div>

          <NavLink end to='/signup' className='px-4 py-2  text-sm md:text-lg font-black text-white uppercase transition-all duration-150 bg-teal-500 rounded-full shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease'>Get Started</NavLink>
        </div>
      </div>

      <div class='text-center md:pt-0 mb-10'>
        <div class='w-full h-96 flex flex-cols justify-center items-center px-8 space-x-20 py-8'>
          <div class='space-y-12 w-full'>
            <div class='relative px-2 bg-white/70 rounded-lg backdrop-blur-sm py-4 w-full font-semibold'>
              <p>Discover and use high-performing recipes, or create your own recipe. Our state-of-the-art dashboard will make creating a recipe a breeze.</p>
              <div class='absolute -top-5 -left-3 px-2.5 py-0.5 bg-teal-500 rounded-full text-xs text-white'>Step 1</div>
            </div>
            <div class='relative px-2 bg-white/70 rounded-lg backdrop-blur-sm py-4 w-full font-semibold'>
              <p> Use your recipes to cook profits! Automatically stir the pot with machine learning, thereby optimizing your recipes and making sure your profit sauce doesn't get burned. Time to taste the profits...</p>
              <div class='absolute -top-5 -left-3 px-2.5 py-0.5 bg-teal-500 rounded-full text-xs text-white'>Step 2</div>
            </div>
          </div>

        </div>
      </div>

      <footer class='bg-gradient-to-r from-orange-500 to-pink-500 font-sans dark:bg-gray-900'>
        <div class='container px-6 py-12 mx-auto'>
          <div class='grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4'>
            <div class='sm:col-span-2'>
              <h1 class='max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white'>Subscribe our newsletter to get an update.</h1>

              <div class='flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row'>
                <input id='email' type='text' class='px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300' placeholder='Email Address' />

                <button class='w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80'>
                  Subscribe
                </button>
              </div>
            </div>

            <div>
              <p class='font-semibold text-gray-800 dark:text-white'>Quick Link</p>

              <div class='flex flex-col items-start mt-5 space-y-2'>
                <NavLink end to='/' className='text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500'>Home</NavLink>
                <NavLink end to='/about' className='text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500'>About</NavLink>
                <NavLink end to='/login' className='text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500'>Login</NavLink>
                <NavLink end to='/signup' className='text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500'>Sign Up</NavLink>
              </div>
            </div>

            <div>
              <p class='font-semibold text-gray-800 dark:text-white'>Blog</p>

              <div class='flex flex-col items-start mt-5 space-y-2'>
                <p class='text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500'>What is Microfinance</p>
                <p class='text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500'>9 Psychological trading mistakes and how to avoid them</p>
                <p class='text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500'>7 Traits of Successful Traders, What It Takes To Become Successful In Trading</p>
              </div>
            </div>
          </div>

          <hr class='my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2' />

          <div class='sm:flex sm:items-center sm:justify-between'>

            <div class='flex gap-4 hover:cursor-pointer'>

              <img src='https://www.svgrepo.com/show/303115/twitter-3-logo.svg' width='30' height='30' alt='tw' />

              <img src='https://www.svgrepo.com/show/94698/github.svg' class='' width='30' height='30' alt='gt' />

              <img src='https://www.svgrepo.com/show/28145/linkedin.svg' width='30' height='30' alt='in' />

            </div>
          </div>
          <p class='font-sans p-8 text-start md:text-center md:text-lg md:p-4'>© 2024 BLSH. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
