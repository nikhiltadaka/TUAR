import React, { useState } from 'react'
import logo from '../Assect/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import './NavBar.css'

export const NavBar = ({allRefs}) => {

  const [hamburgClick,setHamburgClick] = useState(false);
  
  return (
    <div className='fixed w-[100%] px-5'>
      <div className='max-w-[1200px] m-auto border p-2 nav-bg'>
        <div className='w-[100%] flex justify-between items-center'>
          <button onClick={()=>allRefs.homeref.current.scrollIntoView({behavior:"smooth"})}>
              <img src={logo} alt='logo'  className='md:w-[150px] w-[100px] border rounded-[23px] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]'></img>
          </button>
          <div className='lg:flex md:flex justify-center items-center w-[80%] hidden'>
              <ul className='flex justify-center space-x-12 font-extrabold text-black flex-wrap'>
                  <li onClick={()=>allRefs.homeref.current.scrollIntoView({behavior:"smooth"})} className='cursor-pointer hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] p-2 rounded-lg'>Home</li>
                  <li onClick={()=>allRefs.tuarref.current.scrollIntoView({behavior:"smooth"})} className='cursor-pointer hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] p-2 rounded-lg'>About Tuar</li>
                  <li onClick={()=>allRefs.tourismref.current.scrollIntoView({behavior:"smooth"})} className='cursor-pointer hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] p-2 rounded-lg'>About Tourism</li>
                  <li onClick={()=>allRefs.teamref.current.scrollIntoView({behavior:"smooth"})} className='cursor-pointer hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] p-2 rounded-lg'>Our Team</li>
                  <a href='https://github.com/MohammedMujahidAhmed/TUAR' target='_blank' className='cursor-pointer hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] p-2 rounded-lg'>GitHub</a>
              </ul>
          </div>
          <GiHamburgerMenu onClick={()=>{setHamburgClick(!hamburgClick)}} className='text-[30px] md:hidden'/>
        </div>
        <div className={`w-[100%] py-2 ${hamburgClick ? 'flex' : 'hidden'}`}> 
          <ul className='w-[100%] flex flex-col justify-center font-extrabold text-black text-center md:hidden'>
            <li onClick={()=>allRefs.homeref.current.scrollIntoView({behavior:"smooth"})} className='cursor-pointer hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] p-2 rounded-lg'>Home</li>
            <li onClick={()=>allRefs.tuarref.current.scrollIntoView({behavior:"smooth"})} className='cursor-pointer hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] p-2 rounded-lg'>About Tuar</li>
            <li onClick={()=>allRefs.tourismref.current.scrollIntoView({behavior:"smooth"})} className='cursor-pointer hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] p-2 rounded-lg'>About Tourism</li>
            <li onClick={()=>allRefs.teamref.current.scrollIntoView({behavior:"smooth"})} className='cursor-pointer hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] p-2 rounded-lg'>Our Team</li>
            <a href='https://github.com/MohammedMujahidAhmed/TUAR' target='_blank' className='cursor-pointer hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] p-2 rounded-lg'>GitHub</a>
          </ul>
        </div>
      </div>
    </div>
  )
}
