import React from 'react'
import image1 from '../assets/Images/1.webp'
import image2 from '../assets/Images/2.webp'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
function Home() {
  return (
    <div className='mt-[10px] md:mt-[300px] sm:mt-[180px] ss:mt-[110px]  '  >
     <CarouselProvider
        naturalSlideWidth={50}
        naturalSlideHeight={20}
        totalSlides={4}
      >
     <Slider>
          <Slide index={0}><div className='item-center justify-center flex'>
          <img className='  flex mt-14 md:w-96 md:h-[420px] w-[300px] h-[400px]' src={image1} alt="image1" />
          </div>
          </Slide>
          <Slide index={1}><div className='item-center justify-center flex'>
          <img className='  flex mt-14 w-96 h-[420px]' src={image1} alt="image1" />
          </div>
          </Slide>
          <Slide index={2}><div className='item-center justify-center flex'>
          <img className='  flex mt-14 w-96 h-[420px]' src={image2} alt="image1" />
          </div>
          </Slide>
          <Slide index={3}><div className='item-center justify-center flex'>
          <img className='  flex mt-14 w-96 h-[420px]' src={image2} alt="image1" />
          </div></Slide>

        </Slider>
     
      <div className='flex items-center justify-center mt-5'>  <ButtonBack><span className=' text-2xl project-button py-2 px-2 text-white mx-2'>Back</span></ButtonBack>
        <ButtonNext><span className=' text-2xl project-button py-2 px-2 text-white mx-2'>Next</span></ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  )
}

export default Home