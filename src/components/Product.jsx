import React from 'react'
import img1 from "../assets/Images/1.webp";
import img2 from "../assets/Images/2.webp";
import img3 from "../assets/Images/3.webp";
import img4 from "../assets/Images/4.webp";
import img5 from "../assets/Images/5.webp";
import img6 from "../assets/Images/6.webp";
import img10 from "../assets/Images/10.webp";
import img11 from "../assets/Images/11.webp";

function Product() {
  return (
  <div className=" mx-auto  justify-center item-center " id='product'>
    <h1 className=' pt-32 flex md:text-4xl sm:text-3xl ss:text-2xl text-sm  text-white justify-center item-center'>Fashion is like eating, you shouldn't stick to the same menu </h1>  
<div className="max-w-[1320px] grid md:grid-cols-4  sm:grid-cols-3 ss:grid-cols-2 xs:grid-cols-1 grid-flow-row gap-4 mx-auto px-[20px] mt-10">
<div className=' shadow-lg overflow-hidden'>
    <img className = "hover:scale-125  w-72 p-4 m-4"src={img1} alt="images">
    </img>

  </div>
  <div className='shadow-lg overflow-hidden'>
    <img className = "hover:scale-125  w-72 p-4 m-4"src={img2} alt="images">
    </img>

  </div>
  <div className=' shadow-lg overflow-hidden'>
    <img className = "hover:scale-125 w-72 p-4 m-4"src={img3} alt="images">
    </img>

  </div>
  <div className=' shadow-lg overflow-hidden'>
    <img className = "hover:scale-125 w-72 p-4 m-4"src={img4} alt="images">
    </img>

  </div>
  <div className='shadow-lg overflow-hidden'>
    <img className = "hover:scale-125 w-72 p-4 m-4"src={img5} alt="images">
    </img>

  </div>
  <div className=' shadow-lg overflow-hidden '>
    <img className = "hover:scale-125 w-72 p-4 m-4"src={img6} alt="images">
    </img>

  </div>
  <div className=' shadow-lg overflow-hidden'>
    <img className = "hover:scale-125 w-72 p-4 m-4"src={img10} alt="images">
    </img>

  </div>
  <div className='shadow-lg overflow-hidden'>
    <img className = "hover:scale-125 w-72 p-4 m-4"src={img11} alt="images">
    </img>

  </div>
</div>
  
  </div> 
  

  
  )
}

export default Product
