import React, { useState, useEffect } from 'react'
import backgroundImages from './assets/backgroundImages'

export default function Background () {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {

  })

  return (
    <div class='bg-sky-100 flex justify-center items-center h-screen'>
      <div style={{ background: `url(${backgroundImages.chartLines})` }} class='w-1/2 h-screen hidden lg:block bg-gradient-to-r from-orange-500 to-pink-500 font-sans dark:bg-gray-900'>
        <h1 class='honkHeading text-6xl font-black text-center'>Buy Low Sell High</h1>
      </div>

      <div class='lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2'>
        <h1 class='text-2xl font-semibold mb-4'>Login</h1>
        <form action='#' method='POST'>

          <div class='mb-4 bg-sky-100'>
            <label for='username' class='block text-gray-600'>Username</label>
            <input type='text' id='username' name='username' class='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500' autocomplete='off' />
          </div>

          <div class='mb-4'>
            <label for='password' class='block text-gray-800'>Password</label>
            <input type='password' id='password' name='password' class='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500' autocomplete='off' />
          </div>

          <div class='mb-4 flex items-center'>
            <input type='checkbox' id='remember' name='remember' class='text-red-500' />
            <label for='remember' class='text-green-900 ml-2'>Remember Me</label>
          </div>

          <div class='mb-6 text-blue-500'>
            <a href='#' class='hover:underline'>Forgot Password?</a>
          </div>

          <button type='submit' class='bg-red-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full'>Login</button>
        </form>

        <div class='mt-6 text-green-500 text-center'>
          <a href='#' class='hover:underline'>Sign up Here</a>
        </div>
      </div>
    </div>
  )
}
