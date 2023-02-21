import React from 'react'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
     <div className='grid sm:grid-cols-2  grid-cols-1 grid-flow-cols justify-center items-center bg-black-gradient px-2 pb-5  rounded-lg'>
      <div className='flex text-white md:text-2xl  xs:text-xl text-lg justify-center mt-3 '>
        <h3 className=''> Developed by CodeBuzz </h3>
      </div>
      <div className='justify-center items-center text-white mt-3  md:text-2xl  xs:text-1xl text-lg'>
        <ul className='flex justify-center'>
            <li className='flex px-2 py-2 '>
            <a
                href="https://github.com/ashurohilla"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className='flex  px-2 py-2  '>
            <a
                href="https://twitter.com/Ashu77914082?t=oCkvBXfuRr2yB5Dz9OAVMg&s=09"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className='flex px-2 py-2 '>
            <a
                href="https://www.linkedin.com/in/ashish-rohilla-3200011ba"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className='flex px-2 py-2 '>
            <a
                href="https://instagram.com/ashish__oo1?igshid=ZDdkNTZiNTM="
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer