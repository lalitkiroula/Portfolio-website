import React from "react"
import Lalit from "./Lalit.jpg"

function AboutMePage() {
  return(
    <div className="min-h-screen bg-cyan-800">
      <div className="pt-24 sm:pl-20 px-5">
        <h1 className="text-4xl text-white font-bold sm:text-6xl underline text-center sm:text-left">About Me</h1>
        <div className= "sm:flex sm:flex-row-reverse">
         <img src={Lalit} className=" block rounded-full w-80 h-80 my-10 flex justify-center mx-auto sm:my-0"/>
        <div className=" sm:self-center sm:w-3/4">
    
      <p className="text-gray-400">I am a full-stack web developer who loves to design and develop beautiful websites. I have been coding for over a year and enjoying every part of my journey. I love documenting my journey by writing blog posts and teaching others through my writing.</p>
          <div className="mt-10 text-center pb-10 sm:text-left">
          <a className="px-5 py-2 border-2 border-teal-300 bg-teal-300 rounded-md hover:bg-transparent hover:text-teal-300">View Resume ></a>
            </div>
          </div>
          </div>
        </div>
    </div>
  );
}
export default AboutMePage;