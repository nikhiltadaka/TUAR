import { saveAs } from 'file-saver';
import React from 'react'
import { FaDownload } from "react-icons/fa6";

export default function MainSection() {
    
    const downloadFile = () => {
        const fileUrl = "https://drive.google.com/uc?export=download&id=1CdjHU-4Hxux6jhkn7p1GdMhYdIWE5X3n";
        const fileName = "Tuar1.apk";
    
        saveAs(fileUrl, fileName);
    };
    
    const downloadFile1 = () => {
        const fileUrl = "https://drive.google.com/uc?export=download&id=1M28CUzqIppUZ3rtYjHoDdZaiwwTWtvr2";
        const fileName = "Tuar2.apk";
    
        saveAs(fileUrl, fileName);
    };

  return (
    <div className='max-w-[1200px] m-auto flex justify-center items-center min-h-[500px]'>
        <div className='flex flex-col items-center justify-center p-4 space-y-4'>
            <h1 className='font-extrabold text-neutral-950 text-[36px] sm:text-[54px] '>Visulize TOUR</h1>
            <div className='flex flex-col items-center'> 
                {/* <p className='font-bold bg-purple-300 text-stone-950 text-[24px]'>Discover the wonders of Visual Tourism:</p>
                <p className='font-bold bg-purple-300 text-stone-950 text-[24px]'>Transforming your travel adventures through the power of AR.</p> */}
                <p className='font-bold  text-stone-950 text-[24px]'>Discover the wonders of Visual Tourism:</p>
                <p className='font-bold  text-stone-950 text-[24px]'>Transforming your travel adventures through the power of AR.</p>
            </div>
            <div className='md:flex-row flex flex-col justify-center items-center w-[100%] md:space-x-2'>
                <button onClick={downloadFile} className="w-[90%] md:w-fit p-2 rounded-3xl bg-white sm:text-[18px] hover:drop-shadow-2xl group px-7 font-semibold text-gray-900 group flex items-center justify-center space-x-3">
                    <FaDownload />
                    <span className="group-hover:text-blueText">Download for Android1</span>
                </button>
                <button onClick={downloadFile1} className="w-[90%] md:w-fit p-2 rounded-3xl bg-white sm:text-[18px] hover:drop-shadow-2xl group px-7 font-semibold text-gray-900 group flex items-center justify-center space-x-3">
                    <FaDownload />
                    <span className="group-hover:text-blueText">Download for Android2</span>
                </button>
            </div>
        </div>
    </div>
  )
}
