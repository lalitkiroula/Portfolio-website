import React from 'react';

function Project(props) {
  return(
    <div className="mt-14 space-y-6">
    <h2 className="sm:text-4xl text-center text-3xl font-semibold text-teal-300 sm:text-left">{props.projectNumber} {props.projectName}</h2>
      <div className="sm:flex sm:space-x-6">
      <img src={props.image} className="h-96 sm:w-96 block sm:mx-0 mx-auto rounded-lg"/>
      <div className="sm:w-1/2 sm:grow sm:self-center">
      <div className=" text-gray-400">{props.children}</div>
        <div className=" text-center pb-10 mt-10 sm:text-left">
        <a href={props.link} className="px-5 py-2 border-2 border-teal-300 bg-teal-300 rounded-md hover:bg-transparent hover:text-teal-300" target="_blank">View Project ></a>
          </div>
      </div>
     </div>
    </div>
  );
}
export default Project;