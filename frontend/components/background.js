import './styles/main.css'
import React, { useState, useEffect } from 'react'
import images from './assets/images'
import Infospace from './infospace'

export default function Background () {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.getElementById('feed-scroll').addEventListener('scroll', async function () {
      const st = window.pageYOffset || document.documentElement.scrollTop // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      if (st > lastScrollTop) {
        // downscroll code
        alert('down scroll')
      } else if (st < lastScrollTop) {
        // upscroll code
        alert('down scroll')
      } // else was horizontal scroll
      lastScrollTop = st <= 0 ? 0 : st
    })
  })

  return (
    <div id='feed-scroll' class='parallax'>
      <div class='parallax__layer parallax__layer__0'>
        <img src={images.imageOne} />
      </div>
      <div class='parallax__layer parallax__layer__1'>
        <img src={images.imageTwo} />
      </div>
      <div class='parallax__layer parallax__layer__2'>
        <img src={images.imageThree} />
      </div>
      <div class='parallax__layer parallax__layer__3'>
        <img src={images.imageFour} />
      </div>
      <div class='parallax__layer parallax__layer__4'>
        <img src={images.imageFive} />
      </div>
      <div class='parallax__layer parallax__layer__5'>
        <img src={images.imageSix} />
      </div>
      <div class='parallax__layer parallax__layer__6'>
        <img src={images.imageSeven} />
      </div>
      <div class='parallax__cover'>
        <div class='flex justify-center'>
          <header class='w-5/6 mt-5 text-white  bg-black/50 rounded-full shadow-sm body-font'>
            <div class='container flex flex-row items-start p-2 md:p-4 mx-auto md:flex-row items-center'>
              <a class='flex honkHeading hidden md:block text-2xl items-center font-black text-gray-900 title-font md:mb-0'>
                BLSH
              </a>
              <nav class='flex items-center justify-center text-base ml-4 md:ml-auto'>
                <a href='#_' class='mr-5 font-medium hover:text-gray-900'>Home</a>
                <a href='#_' class='mr-5 font-medium hover:text-gray-900'>About</a>
              </nav>
              <div class='items-center h-full pl-10 md:pl-6 md:ml-6 border-l border-gray-200'>
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
        <Infospace />
      </div>

    </div>
  )
}
