import React from 'react'
import gif1 from "../assets/fashion_gif/gif_1.gif";
import gif2 from "../assets/fashion_gif/gif_2.gif";
import gif3 from "../assets/fashion_gif/gif_3.gif";
import gif4 from "../assets/fashion_gif/gif_4.gif";
import gif5 from "../assets/fashion_gif/gif_5.gif";

function About() {
  return (
    <div className="max-w-[1320px] mx-auto " id='about'>
      <h1 className='font text-9xl text-center mt-8 py-5 text-white'>
        About US
      </h1>
      <div className='xs:mx-10'>
        <h2 className='text-4xl py-5 justify-center items-center flex gap-12 text-white'>
        A moment of light fashion, this trend has all of the fun.
        </h2>
        <div className='grid md:grid-cols-2 grid-cols-1 mt-10  mx-auto'>
        <div className='text-4xl md:text-3xl text-white mr-10 font'>
           
          We are very dedicated to making our products. We offer unique and creative products to a wide range of people. 
          We have a variety of styles, but for most people, all of the options are in the box. 
          We specialize in making things that make you happy.
          <br>
          </br>
          <br>
          </br>
          We strive to build on our vision. As a fashion label, we do our best to create amazing experiences for all people. 
          We are always looking to make something that is easy for everyone.
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