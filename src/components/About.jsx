import React from 'react'
import gif1 from "../assets/fashion_gif/gif_1.gif";
import gif2 from "../assets/fashion_gif/gif_2.gif";
import gif3 from "../assets/fashion_gif/gif_3.gif";
import gif4 from "../assets/fashion_gif/gif_4.gif";
import gif5 from "../assets/fashion_gif/gif_5.gif";

function About() {
  return (
    <div className="max-w-[1320px] mx-auto " id='product'>
      <h1 className='text-4xl text-center py-5'>
        Featured Products
      </h1>
      <div>
        <h2 className='text-4xl  py-5'>
        A moment of light fashion, this trend has all of the fun.
        </h2>
        <img  className =" h-100" src={gif1} alt="fashion">
        </img>
        {/* <img className =" h-100" src={gif2} alt="" />
          <img className =" h-100" src={gif3} alt="" />
          <img className =" h-100" src={gif4} alt="" />
          <img className =" h-100" src={gif5} alt="" /> */}
      </div>
    </div>
  )
}

export default About