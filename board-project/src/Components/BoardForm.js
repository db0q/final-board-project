import React from "react";
import logo from './logo.png';



function BoardForm({onSubmitt,onChange,newBoard}) {
 
  return (
    <div className='font ml-80'>
     
     <div className="grid grid-cols-2 justify-between content-center w-full">
       {/*LOGO*/}
       <div className="w-48 pt-10  pl-0 pb-10">
        <img src={logo} alt='logo'></img>
       </div>

       {/*USER NAME */}
       <div className="text-xl justify-self-end grid grid-cols-2 content-center mr-0">
       <img
              src="https://avatars.githubusercontent.com/u/57622665?s=460&u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&v=4"
              alt="Avatar user"
              className="w-10 md:w-16 rounded-full mx-auto"
            ></img>
        <p className="pt-4 pl-1">Ahmad</p>
       </div>
     </div>


      {/*USER GREETING*/}
      <div className="mb-6 bg-yellow-100 pl-8 pr-10 pt-6 pb-8 rounded-3xl">
        <h2 className="pb-2 text-2xl font-semibold">Welcome back, Ahmad!</h2>
        <p>Get things done and start your day <br></br>more productively.</p>
      </div>

      {/*TASKS SUMMARY*/}
      <div>
        <h2 className="pb-6 font-semibold text-2xl pt-2">Weekly Tasks Summary</h2>
        <div className="grid grid-cols-3 gap-x-6 pb-8  ">
          <div className="bg-green-900	 py-10 px-8 rounded-3xl grid place-items-center">
            <p className="text-white text-6xl font-black	mb-2	">4</p>
            <p className="text-white font-medium text-xl">Today's Tasks</p>
          </div>
          <div className="bg-green-900	 py-10 px-8 rounded-3xl grid place-items-center">
            <p className="text-white text-6xl font-black	mb-2">3</p>
            <p className="text-white font-medium text-xl">Pending Tasks</p>
          </div>
          <div className="bg-green-900	 py-10 px-8 rounded-3xl grid place-items-center mr-10">
            <p className="text-white text-6xl font-black mb-2	">6</p>
            <p className="text-white font-medium text-xl">Completed Tasks</p>
          </div>
        </div>
      </div>


    <div className="flex  w-full mb-6">
      <form
        className="flex flex-col  border-2 rounded-lg  shadow-lg
        text-xl px-10 pb-10 bg-yellow-800	  mb-18" 
      onSubmit={onSubmitt}
      >
        <h1 className="text-center text-white my-4 font-bold text-3xl">Create your Board</h1>
        <input
           className="mr-2 w-3/4 rounded-tl-md rounded-bl-md px-2 py-3 text-sm text-gray-600 focus:outline-none"
          value={newBoard.title}
          type="text"
          name="title"
          placeholder="Board Title"
          onChange={onChange}
        />
        <input
         className="flex justify-center items-center rounded shadow-lg my-4 w-2/4 bg-purple-900 text-white font-bold px-2 hover:bg-purple-300"
          type="submit"
          value="Create"
        />
      </form>
    </div>




    </div>
  );
}

export default BoardForm;

