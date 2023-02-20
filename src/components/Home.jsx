import React from 'react'
import { walking} from '../assets'
import {Hero} from "../components"
import Particle from './particle'
function Home() {
  return (
    <div className='mt-18'>
         <Particle/>
         <div className='video '>
     <video autoPlay loop muted id ='video'>
        <source src={walking} type = 'video/mp4' />
      </video>
     </div>
         <Hero/>
    </div>
  )
}

export default Home