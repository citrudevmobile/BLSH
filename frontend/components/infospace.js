import React from 'react'
import backgroundImages from './assets/backgroundImages'
//
export default function Infospace () {
  return (
    <div class='h-full w-full relative space-y-10 pt-36'>
      <div style={{ background: `url(${backgroundImages.chartLines})`, height: '700px' }} class='bg-no-repeat bg-cover bg-center flex justify-center items-center'>
        <div class='text-white text-center bg-black/40 w-10/12 h-full rounded-xl space-y-12 px-4 flex flex-col items-center'>
          <div class='flex flex-col justify-center bg-contain items-center pt-5'>
            <button class='border-x-8 border-x-transparent bg-transparent text-lg font-bold  text-white  py-2 px-4 border-4 border-orange-500 hover:border-transparent rounded-full mt-10'>
              Why BLSH
            </button>
          </div>
          <div class="px-6 bg-black/80 rounded-lg backdrop-blur-sm py-6 ">

            <p class="text-xl text-white font-bold space-y-4">
              <p>Aside from the risks of hacks and frauds, one of the most common sources of potential money losses is misconfiguration of cryptocurrency trading bots owing to a lack of adequate knowledge and experience. Configuring cryptocurrency trading bots can be a difficult task, especially for inexperienced traders. To effectively configure the bots, traders must first comprehend technical indicators and trading strategies. So we built a product that makes it easier to configure the bots while simultaneously providing you with advanced control over them.</p>
              <p class="px-4 py-2 bg-white/80 text-black rounded-xl backdrop-blur-sm">BLSH code is opensource and built on top of Freqtrade  a free and open source crypto trading bot that has been battle tested.</p>
            </p>
          </div>
          <a
                href='#_'
                class='px-4 py-2 text-lg font-black text-white uppercase transition-all duration-150 bg-teal-500 rounded-full shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease'
              >
                Get Started
              </a>
        </div>
      </div>

      <div style={{ height: '700px' }} class=' bg-no-repeat bg-cover bg-center flex justify-center items-center' />

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
                <p class='text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500'>Home</p>
                <p class='text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500'>Who We Are</p>
                <p class='text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500'>Our Philosophy</p>
              </div>
            </div>

            <div>
              <p class='font-semibold text-gray-800 dark:text-white'>Industries</p>

              <div class='flex flex-col items-start mt-5 space-y-2'>
                <p class='text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500'>Retail & E-Commerce</p>
                <p class='text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500'>Information Technology</p>
                <p class='text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500'>Finance & Insurance</p>
              </div>
            </div>
          </div>

          <hr class='my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2' />

          <div class='sm:flex sm:items-center sm:justify-between'>
            <div class='flex flex-1 gap-4 hover:cursor-pointer'>
              <img src='https://www.svgrepo.com/show/303139/google-play-badge-logo.svg' width='130' height='110' alt='' />
              <img src='https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg' width='130' height='110' alt='' />
            </div>

            <div class='flex gap-4 hover:cursor-pointer'>
              <img src='https://www.svgrepo.com/show/303114/facebook-3-logo.svg' width='30' height='30' alt='fb' />
              <img src='https://www.svgrepo.com/show/303115/twitter-3-logo.svg' width='30' height='30' alt='tw' />
              <img src='https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg' width='30' height='30' alt='inst' />
              <img src='https://www.svgrepo.com/show/94698/github.svg' class='' width='30' height='30' alt='gt' />
              <img src='https://www.svgrepo.com/show/22037/path.svg' width='30' height='30' alt='pn' />
              <img src='https://www.svgrepo.com/show/28145/linkedin.svg' width='30' height='30' alt='in' />
              <img src='https://www.svgrepo.com/show/22048/dribbble.svg' class='' width='30' height='30' alt='db' />
            </div>
          </div>
          <p class='font-sans p-8 text-start md:text-center md:text-lg md:p-4'>© 2023 BLSH. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
