import React from 'react'
import {Navbar , Hero, Home,About ,Product, Footer  } from "./components"
import styles from "../Style"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import './App.css'

function App() {

  return (
    <div className="App ">
     <Router>
    <div className=' w-full overflow-hidden '>
        <div className={`${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
          <Navbar />
          <Routes>
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/"/>} />   
            </Routes>
            </div>  
        </div>
        <div className={`${styles.boxWidth}`}>
                  <Footer /> 
            </div>
    </div> 
    </Router>
    </div>
  )
}

export default App
