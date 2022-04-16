import React from "react";
import {BsTwitter, BsGithub, BsTelephoneFill} from "react-icons/bs"
import {MdEmail} from "react-icons/md"

function ContactMePage() {
  return(
    <div className="min-h-screen bg-cyan-800">
      <div className="pt-24 sm:px-20 px-5 pb-10">
        <h1 className="text-4xl text-white font-bold sm:text-6xl underline">Contact Me At →</h1>
        <div className="mt-10 flex flex-col sm:text-left text-teal-300 space-y-10">
          <div className="flex space-x-3 text-2xl sm:text-3xl">
          <BsGithub className="self-center"/>
            <div className="text-black font-bold">lalitkiroula</div>
          </div>
          <div className="flex space-x-3 text-2xl sm:text-3xl">
          <BsTwitter className="self-center"/>
            <div className="text-black font-bold">LalitLK2</div>
                </div>
            <div className="flex space-x-3 text-2xl sm:text-3xl">
          <MdEmail className="self-center"/>
            <div className="text-black font-bold">lalitkiroula874@gmail.com</div>
      </div>
          <div className="flex space-x-3 text-2xl sm:text-3xl">
          <BsTelephoneFill className="self-center "/>
            <div className="text-black font-bold">+91 8218033234</div>
      </div>
            </div>
      </div>
        </div>
  );
}
export default ContactMePage;