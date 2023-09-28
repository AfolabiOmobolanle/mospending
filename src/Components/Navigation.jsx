import React from 'react'
import logo from '../assets/Group 137.png'
import drops1 from '../assets/47.png';


const Navigation = () => {
  return (
    <div className='h-[100vh]'>

    <div className="relative  w-screen h-screen bg-indigo-800">
      {/* my navigation bar section. */}
    <div className=' flex justify-between items-start p-2'>
        <img src={logo} alt="nav" />
      
        <div className='flex flex-row space-x-2  p-2 text-white font-sans'>
        <ul className='flex flex-row gap-5 text-sm font-semibold'>
            <li className=' text-white'>Home</li>
            <li className=' text-white'>Product</li>
            <li className=' text-white'>Company</li>
            <li className=' text-white'>Utility</li>
          <button type="button" className='bg-blue-500 rounded-full w-24 h-6'>Login</button>
        </ul>
          <img src={drops1} alt=" drops" className='relative top-full right-0 h-22 mt-20' />
        </div>
      </div>
      <div className='grid place-items-center'>
        <div >
          <h1 className='text-white text-center font-semibold text-7xl flex justify-center items-center'>
            our fintech app makes 
          managing your transaction a <br/>
                      breeze.
          </h1>
        </div>
        <div className=' mt-12'>
          <p className='text-center text-slate-400 text-lg'>our fintech app simplifies transaction management,making it effortless to track our spending, monitor <br /> 
            balances and stay on top of our finances.
          </p>
        </div>
          <div className='flex justify-between align-middle  text-center text-md rounded-full  text-slate-200 bg-slate-500 mt-[1rem]'>
            <p className='text-center w-[15rem] h-[3rem] p-[.5rem] '> Enter your email</p>
            <button className='bg-[#ffa051] w-[10rem] rounded-full'>Create Account</button>
          </div>
       
      </div>
    </div>
    </div>
  )
}

export default Navigation