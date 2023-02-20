import { Component, useState } from "react";
import  {close, logo ,menu} from "../assets";
import { navLinks } from "../constant";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
} from "react-icons/ai";


const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="bg-black-gradient w-full flex py-3  ms:auto items-center fixed px-10 navbar">
      <img src={logo} alt="Ashish" className="w-[55px] h-[px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
           
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px]  ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          > 
          <span className="flex felx-row">   <span className="mx-1 pt-1"><nav.icon /></span><Link as = {Link} to={nav.id}> {" "}{nav.title}</Link></span>
           
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-5 my-2 min-w-[140px] rounded-xl sidebar mr-10`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] flex flex-row ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
          <span className="mx-1 pt-1"><nav.icon/></span> <Link as = {Link} to={nav.id}> {" "}{nav.title}</Link>
               
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;