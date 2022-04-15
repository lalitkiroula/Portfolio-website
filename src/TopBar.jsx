import React from "react"
import NavLinks from "./NavLinks"
import {GiHamburgerMenu} from "react-icons/gi"

function TopBar(props) {
  return(
    <div className="bg-cyan-800/80 py-7 text-white shadow-lg fixed top-0 w-full ">
      <GiHamburgerMenu className="sm:hidden p-2 w-10 h-10 text-black bg-teal-300 rounded-full right-0"/>
      <div className="hidden sm:flex justify-center space-x-5 ">
    <NavLinks to="home">Home</NavLinks>
      <NavLinks to="about">About Me</NavLinks>
      <NavLinks to="skills">Skills</NavLinks>
      <NavLinks to="projects">My Project</NavLinks>
      <NavLinks to="contact" >Contact Me</NavLinks>
      </div>
    </div>
  );
}
export default TopBar;