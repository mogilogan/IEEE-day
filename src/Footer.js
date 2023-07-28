import React from 'react'

const Footer = () => {

  return (
    <div className='w-full bg-yellow-500   h-[80px] flex justify-center items-center'>
        <p onClick={()=>window.open("https://github.com/mogilogan")} className='text-center shadow-yellow-inner-neumorphism-xl py-4 px-2 rounded-[10px]'>Developed by PTU IEEE-WEB MASTER</p>
    </div>
  );

  }
export default Footer;