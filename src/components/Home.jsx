import React from 'react'
import image1 from '../assets/Images/image4.jpeg';
import image2 from '../assets/Images/image7.jpeg';
import image3 from '../assets/Images/image3.jpeg';
import image4 from '../assets/Images/image4.jpeg';
import image5 from '../assets/Images/image5.jpeg';
import image6 from '../assets/Images/image6.jpeg';
import Example from './Carouselslider';
import Product from './Product';
function Home() {
  return (
    <div className='mt-[10px] md:mt-[300px] sm:mt-[180px] ss:mt-[110px]  '  id='product' >
      <h1  className='text-5xl flex justify-center text-white px-2 py-4 ' > 
        Gallery
      </h1>
    <div className='mx-10'>
    <div className="-m-1 flex flex-wrap md:-m-2 ">
    <div className="flex w-1/2 flex-wrap">
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={image1} />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={image2} />
      </div>
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={image3} />
      </div>
    </div>
    <div className="flex w-1/2 flex-wrap">
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={image4} />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={image5}/>      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={image6} />
      </div>
    </div>
  </div>
<div className='mr-0'>
<Product/>
</div>
  
    </div>
    
    </div>
  )
}

export default Home