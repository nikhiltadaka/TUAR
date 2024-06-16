import React from 'react'
import Andriod1 from '../Assect/Andriod1.jpg'
import Andriod2 from '../Assect/Andriod2.jpg'

export const QRSection = () => {
  return (
    <div className='w-[100%] text-center'>
        <div className='max-w-[1200px]'>
            <h1 className='text-center p-2 font-extrabold md:text-[34px]'>App Download QR</h1>
            <div className='w-[100%] flex md:flex-row justify-around items-center flex-col min-h-[500px]'>
                <img src={Andriod1} width={300} alt="qr1"></img>
                <img src={Andriod2} width={300} alt='qr2'></img>
            </div>
        </div>
    </div>
  )
}
