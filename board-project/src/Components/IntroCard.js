import React from 'react'
function IntroCard() {
  return (
    <div className='ml-72 felx flex-row mt-2 '>

<section className="container mx-auto px-6 p-10">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Features
      </h2>
      <div className="flex items-center flex-wrap mb-20">
        <div className="w-full md:w-1/2 rounded shadow-lg rounded p-2 bg-white">
          <h4 className="text-3xl text-gray-800 font-bold mb-3">Exercise Metric</h4>
          <p className="text-gray-600 mb-8 text-xl font-bold">Our Smart Health Monitoring Wristwatch is able to capture you vitals while you exercise. You can create different category of exercises and can track your vitals on the go.</p>
        </div>
        <div className="w-2/4 md:w-1/2">
          <img src="https://tse3.mm.bing.net/th?id=OIP.Z4tXagFBE2WF80e2ORhIIgHaE7&pid=Api&P=0" alt="Monitoring" className=' ml-10 bg-slate-100 rounded shadow-lg w-3/4' />
        </div>
      </div>

      <div className="flex items-center flex-wrap mb-20">
        <div className="w-full md:w-1/2">
          <img src="https://tse2.mm.bing.net/th?id=OIP.I8zYVp1Tm0lgJN_fuREXcAHaEK&pid=Api&P=0" alt="Reporting" className=' ml-10 bg-slate-100 rounded shadow-lg w-3/4' />
        </div>
        <div className="w-full md:w-1/2 pl-10 rounded shadow-lg rounded p-2 bg-white">
          <h4 className="text-3xl text-gray-800 font-bold mb-3">Reporting</h4>
          <p className="text-gray-600 mb-8 text-xl font-bold">Our Smart Health Monitoring Wristwatch can generate a comprehensive report on your vitals depending on your settings either daily, weekly, monthly, quarterly or yearly.</p>
        </div>
      </div>

      <div className="flex items-center flex-wrap mb-20 ">
        <div className="w-full md:w-1/2 rounded shadow-lg rounded p-2 bg-white">
          <h4 className="text-3xl text-gray-800 font-bold mb-3">Syncing</h4>
          <p className="text-gray-600 mb-8 text-xl font-bold">Our Smart Health Monitoring Wristwatch allows you to sync data across all your mobile devices whether iOS, Android or Windows OS and also to your laptop whether MacOS, GNU/Linux or Windows OS.</p>
        </div>
        <div className="w-full md:w-1/2">
          <img src="https://tse4.mm.bing.net/th?id=OIP.cAS20LBVq6sZYi90JHcKNwHaE8&pid=Api&P=0" alt="Syncing" className=' ml-10 bg-slate-100 rounded shadow-lg w-3/4' />
        </div>
      </div>
    </section>

    </div>
  )
}

export default IntroCard