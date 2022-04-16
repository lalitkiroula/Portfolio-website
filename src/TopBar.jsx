import React from "react"
import NavLinks from "./NavLinks"
import PopUp from "./PopUp"
import {GiHamburgerMenu} from "react-icons/gi"


function TopBar(props) {
  const [showPopUp, setShowPopUp] = React.useState(false)
  const togglePopUp = () => {
    setShowPopUp(!showPopUp)
  }
  return(
    
    <div className="bg-cyan-800/80 py-7 text-white shadow-lg fixed top-0 w-full ">
       <GiHamburgerMenu onClick={togglePopUp}  className="sm:hidden fixed p-2 w-10 h-10 text-black bg-teal-300 rounded-full right-5 top-2"/>
      {showPopUp &&
        <PopUp onClick={togglePopUp}/>
      }
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