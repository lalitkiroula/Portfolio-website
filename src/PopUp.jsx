import React from 'react'
import NavLinks from './NavLinks';
import {GiCancel} from "react-icons/gi"

function PopUp(props){
  return(
    <div className="bg-cyan-800 h-screen fixed inset-x-0 inset-y-0  flex justify-center items-center">
      <GiCancel className="fixed right-5 top-2 w-8 h-8 text-white " onClick={props.onClick}/>
     <div className='space-y-10 flex flex-col text-3xl font-bold '>
      <NavLinks to='home'>Home</NavLinks>
      <NavLinks to='about'>About</NavLinks>
      <NavLinks to='skills'>Skill</NavLinks>
      <NavLinks to='projects'>Project</NavLinks>
      <NavLinks to='contact'>Contact</NavLinks>
        </div>
      </div>
  );
}
export default PopUp;