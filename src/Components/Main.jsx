import React from 'react'
import chart from '../assets/dashboard.png';
import drops from '../assets/46.png';
import features from '../assets/Frame 2608963.png';
import card from '../assets/Frame 2608975.png';
import tracking from '../assets/Frame 2608985.png';
import cols from '../assets/Frame 2608990.png';
import footer from '../assets/Frame 2608989.png';





const Main = () => {
  return (
      <div className='h-[30rem] w-screen bg-indigo-800  '>
        <div>
                <img src={drops} alt=" drops" className='relative top-full left-0 ' />
        </div>
        <div className= ' grid place-content-center'>
                <img src={chart} alt=""  className=''/>
        </div>
        <div>
            <img src={features} alt=""  className=''/>
        </div>
        <div>
            <img src={card} alt=""  className=''/>
        </div>
        <div>
            <img src={tracking} alt=""  className=''/>
        </div>
      
        <div>
            <img src={cols} alt=""  className=''/>  
        </div>

        <div>
            <img src={footer} alt=""  className='mt-[4rem]'/>  
        </div>
    </div>
  )
}

export default Main
