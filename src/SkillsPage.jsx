import React from "react";
import {FaReact, FaHtml5} from "react-icons/fa"
import {SiTailwindcss, SiJavascript, SiCss3} from "react-icons/si"


function SkillsPage() {
  return(
    <div className="min-h-screen bg-cyan-800">
      <div className="pt-24 sm:px-20 px-5">
      <h1 className="text-4xl text-white font-bold sm:text-6xl underline text-center sm:text-left">Skills</h1>
        <div className="text-teal-300 sm:flex-row sm:justify-between flex flex-col items-center sm:py-40 py-10 sm:space-y-0 space-y-14">
          <div className="flex flex-col">
         <FaReact className="h-24 w-24"/>
          <a href="https://reactjs.org/" target="_blank" className="text-gray-400 text-xl hover:border-b-2 border-gray-400 self-center">React</a>
            </div>
          <div className="flex flex-col">
          <FaHtml5 className="h-24 w-24"/>
        <a href="https://html.com/" target="_blank" className="text-gray-400 text-xl hover:border-b-2 border-gray-400 self-center">HTML </a>
            </div>
          <div className="flex flex-col">
          <SiTailwindcss className="h-24 w-24"/>
           <a href="https://tailwindcss.com/" target="_blank" className="text-gray-400 text-xl hover:border-b-2 border-gray-400 self-center"> TailwindCSS</a>
            </div>
          <div className="flex flex-col">
          <SiJavascript className="h-24 w-24"/>
          <a href="https://www.javascript.com/try" target="_blank" className="text-gray-400 text-xl hover:border-b-2 border-gray-400 self-center"> JavaScript</a>
            </div>
          <div className="flex flex-col">
          <SiCss3 className="h-24 w-24"/>
          <a href="https://en.wikipedia.org/wiki/CSS" target="_blank" className="text-gray-400 text-xl hover:border-b-2 border-gray-400 self-center"> CSS</a>
            </div>
          </div>
      </div>
    </div>
  );
}
export default SkillsPage;