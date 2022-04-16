import React from 'react';
import {Link} from "react-router-dom"


function HomePage(props) {
  return(
    <div className="min-h-screen bg-cyan-800 flex flex-col justify-between">
      <div className=" sm:px-20  space-y-5 px-5 pt-24 pb-10">
      <p className="text-3xl text-teal-300">Hi, my name is</p>
      <h1 className="text-5xl font-extrabold text-cyan-200 sm:text-8xl">Lalit Kiroula</h1>
      <p className="text-gray-400 ">I’m a<span className="text-teal-300 mx-2">FullStack web developer</span> who loves to design and develop beautiful websites. I have been coding for over a year and enjoying every part of my journey. I love documenting my journey by writing blog posts and teaching others through my writing.🤓</p>
      <div className="flex flex-col">
      <div className="flex space-x-3">
      <Link to="/contact" className="border-2 border-teal-300 text-teal-300 px-5 py-2 rounded-md hover:bg-teal-300 hover:text-black">Reach out to me!</Link>
        <Link to="/projects" className="border-2 border-teal-300 text-black px-5 bg-teal-300 py-2 rounded-md hover:bg-transparent hover:text-teal-300">Check out my work!</Link>
        </div>
        <div className="text-3xl text-gray-400 sm:text-5xl mt-3">I build awesome websites!</div>
      </div>
        </div>
      <div className="text-white text-center sm:space-y-3 text-xl mb-5 sm:mb-10">
        <div> Made with ❤️ at CodeYogi </div>
        <div>Copyright ©2022 All rights reserved </div>
          </div>
       </div>
  );
}
export default HomePage;
