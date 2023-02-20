import React from 'react'
import {close} from "../assets"

function Navbar() {
  return (
    <div>
        <div>
            <h1 className='flex text-black justify-center item-center '>
                this is the nav bar
                <img className='className="w-[100px] h-[px]' src={close }alt="" />
            </h1>
        </div>
    </div>
  )
}

export default Navbar