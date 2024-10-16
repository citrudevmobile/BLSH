import './styles/main.css'
import React from 'react'
import images from './assets/images'

export default function Background () {
  return (
    <div class='parallax'>
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
        <div class="flex justify-center pt-20">
            <p class="text-white text-lg">Hello there</p>
        </div>
      </div>

    </div>
  )
}
