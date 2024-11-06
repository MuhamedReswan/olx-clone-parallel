import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const TopBar = () => {
    return (
        <div className='mt-[80px] mb-2 w-full shadow-md shadow-gray-300'>
          <div className='w-full h-[2px] bg-white'></div>
          <div className=' mx-8 h-[38px] flex justify-normal items-center'>
            <h5 className='relative font-semibold flex'>All Categories <IoIosArrowDown className='h-6 w-6 left-[100px] absolute top-1/2 transform -translate-y-1/2 '/></h5>
            <div className='px-3 ml-4 flex justify-between items-start'>
    <p className='main-p'>Cars</p>
    <p className='main-p'>MotorCyles</p>
    <p className='main-p'>Mobile Phones</p>
    <p className='main-p'>For Sale: Houses & Apartments</p>
    <p className='main-p'>Scooters</p>
    <p className='main-p'>Commercial & Other Vehicles</p>
    <p className='main-p'>For Rent: Houses & Apartments</p>
    </div>
          </div>
          <div>
    
          </div>
        </div>
      )
}

export default TopBar
