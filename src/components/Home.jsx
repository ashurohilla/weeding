import React from 'react'
import image1 from '../assets/Images/1.webp'
import image2 from '../assets/Images/2.webp'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
function Home() {
  return (
    <div className='mt-[px] md:mt-[300px] sm:mt-[180px] ss:mt-[110px] '  >
     <CarouselProvider
        naturalSlideWidth={50}
        naturalSlideHeight={25}
        totalSlides={3}
      >
     <div className=''>
     <Slider>
          <Slide index={0}><img className='w-44' src={image1} alt="image1" /></Slide>
          <Slide index={1}><img className='w-44' src={image2} alt="image2" /></Slide>
          <Slide index={2}><img className='w-44' src={image1} alt="image3" /></Slide>
        </Slider>
     </div>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    </div>
  )
}

export default Home