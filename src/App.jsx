import React from 'react'
import {Navbar ,Hero, Home,About ,Product, Footer } from "./components"
import styles from "../Style"
import { background} from './assets'
import Particles from './components/particle'
import Contactus from './components/Contactus'
import './App.css'

function App() {

  return (
    <div className="App ">
      <Particles/>
    <div className=' w-full overflow-hidden ' id='Home'>
        <div className={`${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
          <Navbar />
          <div className='video xs:mt-[20px] w-full'>
     <video autoPlay loop muted id ='video' className='xs:mt-14 w-full' >
        <source src={background} type = 'video/mp4' />
      </video>
      
          <Hero/>
     </div>
        
       <div className='bg-primary'>
       <Home/>
          <About/>
          <Contactus/>
       </div>
            </div>  
        </div>
        <div className={`${styles.boxWidth}`}>
                  <Footer /> 
            </div>
    </div> 
    </div>
  )
}

export default App
