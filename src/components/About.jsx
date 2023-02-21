import React from 'react'
import gif1 from "../assets/fashion_gif/gif_1.gif";
import gif2 from "../assets/fashion_gif/gif_2.gif";
import gif3 from "../assets/fashion_gif/gif_3.gif";
import gif4 from "../assets/fashion_gif/gif_4.gif";
import gif5 from "../assets/fashion_gif/gif_5.gif";

function About() {
  return (
    <div className="max-w-[1320px] mx-auto " id='about'>
      <h1 className='text-4xl text-center py-5 text-white'>
        About US
      </h1>
      <div>
        <h2 className='text-4xl py-5 justify-center items-center flex gap-12 text-white'>
        A moment of light fashion, this trend has all of the fun.
        </h2>
        <div className='grid md:grid-cols-2 grid-cols-1 mt-10  mx-auto'>
        <div className='text-2xl md:text-3xl text-white'>
           <h1>
            what w edo  what can we do we 

           </h1>
           <h2>
            we selll premium products where we are listed
           </h2>
           <h3>
            here we transmit data
           </h3>
          </div>
          <div className='flex'>
          <img  className ="w-full py-10" src={gif1} alt="fashion">
        </img>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default About