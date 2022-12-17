import React from "react";
import logo from './logo.png'
import image1 from './image1.jpeg'

function About() {
  return (
    <div className="flex flex-col ml-32 w-full justify-center items-center bg-slate-100">
    <div className="logo flex flex-col">
    <img src={logo} alt="Logo" />
      
      <div>
      <button className=" rounded shadow-lg my-4 w-44 bg-gray-900 text-white font-bold p-2 hover:bg-gray-300
          hover:cursor-pointer hover:text-white">Login</button>
          <button className="ml-5 rounded shadow-lg my-4 w-44 bg-white text-black font-bold p-2 hover:bg-gray-300
          hover:cursor-pointer hover:text-white" >Sign Up</button>
        </div>
    </div>
    <div className="flex flex-col paragraph justify-center items-center w-2/4 mt-5">
      <p className="text-3xl"><b>TaskGuru helps teams move work forward.</b></p>
      <span className="text-sm w-3/4 my-5">Collaborate, manage projetcs, and reach new productivity peaks.</span>
      <div className="flex flex-col justify-center items-center border  py-10 px-32 bg-white">
      <input type="email" id="email" name="email" className="py-1 w-72 bg-gray-200 border-2 outline-1" placeholder="Enter you Email"></input>
      <button className="rounded shadow-lg my-4 w-44 bg-gray-900 text-white font-bold p-2 hover:bg-gray-300
          hover:cursor-pointer hover:text-white mt-10" >Sign up-it's free!</button>
          </div>
         
    </div>
    <div className="flex flex-col footer paragrpagh justify-center items-center w-3/4 mt-5">
      <p><b>It's more than work, it's a way of working together.</b></p>
      <span className="w-3/4 mt-5">Start with a TaskGuru board, lists, and cards. Customize and expand with more features as your teamwork grows. Manage projects, organize tasks, and build team spirit- all in one place.</span>
    </div>
    </div>
    
  
  );
}

export default About;
