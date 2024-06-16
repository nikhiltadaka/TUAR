import { useRef } from 'react';
import './App.css';
import AboutTourism from './Components/AboutTourism';
import { AboutTuar } from './Components/AboutTuar';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import HeroSection from './Components/HeroSection';
import members from "./data"
import { QRSection } from './Components/QRSection';


function App() {

  const homeRef = useRef(null);
  const tuarRef = useRef(null);
  const tourismRef = useRef(null);
  const teamRef = useRef(null);

  const allRefs = {homeref:homeRef,tuarref:tuarRef,tourismref:tourismRef,teamref:teamRef}

  return (
    <div className="w-[100%]">
      <HeroSection allRefs={allRefs} />
      <QRSection/>
      <AboutTuar tuarRef={tuarRef}/>
      <AboutTourism tourismRef={tourismRef}/>
      <div ref={teamRef} className='p-3 flex flex-col justify-center items-center'>
        <p className='font-extrabold text-[28px]'>Our Team</p>
        <Cards members={members}></Cards>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
