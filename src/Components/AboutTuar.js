import React from 'react'
import ArMobilePic from '../Assect/AR_mobile_pic.png'

export const AboutTuar = ({tuarRef}) => {



  return (
    <div ref={tuarRef} className='flex flex-col lg:flex-row justify-between items-center max-w-[1200px] min-h-[550px] m-auto p-2 text-center'>
        <img src={ArMobilePic} alt='ArMobileImage'></img>
        <div className='font-semibold min-w-[280px] p-4'>
            <p><span>TUAR</span> (Tourism Using AR) is an innovative augmented reality application that leverages a smartphone's camera to provide users    with contextual information in real-time. Through advanced computer vision algorithms, TUAR overlays 3D objects enriched with informative data onto the user's live camera feed, enhancing their tourism experience. 
            </p>
            <p>This cutting-edge technology seamlessly blends digital and physical worlds, offering an immersive and informative journey for users exploring new destinations.
            </p>
        </div>
    </div>
  )
}
