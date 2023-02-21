import React from 'react'
import {Navbar ,Hero, Home,About ,Product, Footer } from "./components"
import styles from "../Style"
import { walking} from './assets'
import Particles from './components/particle'
import './App.css'

function App() {

  return (
    <div className="App ">
      <Particles/>
    <div className=' w-full overflow-hidden ' id='Home'>
        <div className={`${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
          <Navbar />
          <div className='video xs:mt-[10px] w-full'>
     <video autoPlay loop muted id ='video' >
        <source src={walking} type = 'video/mp4' />
      </video>
      
          <Hero/>
     </div>
        
       <div className='bg-black-gradient'>
       <Home/>
          <Product/>
          <About/>
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
