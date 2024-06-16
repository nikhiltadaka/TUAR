import React from 'react'
import logo from '../Assect/logo.png'

export default function Footer() {
  return (
    <div className='bg-[#23272A] text-center'>
        <div className='max-w-[1200px] m-auto flex justify-between items-center text-[#233BD2] min-h-[100px] '>
          <button>
            <img src={logo} alt='logo'  className='md:w-[150px] min-w-[70px] border rounded-[23px] '></img>
          </button>
          <p className='font-semibold'>Discover the wonders of Visual Tourism : Transforming your travel adventures through the power of AR.</p>
        </div>
        <p className='text-gray-500'>Team Vision - 2023</p>
    </div>
  )
}
