import React from 'react'
import bgImg21 from '../Assect/bgImg21.jpg';
import { NavBar } from './NavBar';
import MainSection from './MainSection';


function HeroSection({allRefs}) {
    
  return (
    <div ref={allRefs.homeref} style={{ backgroundImage:`url(${bgImg21})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}} className='w-[100%] min-h-screen p-2 flex justify-between'>
        <NavBar allRefs={allRefs}/>
        <MainSection/>
    </div>
    
  )
}

export default HeroSection;