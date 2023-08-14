import React, { useState } from 'react';
import Table from './Table';


import ieeedaylogo from  './assests/ieeedaylogo.png';

import vr from './assests/vr.png';


const Main = () => {

    
    // const close = ()=>{
    //   setIsOpen(prevState => prevState.map((item,idx)=>false))
    // }


  return (
    <div >
  
     
        <div class="md:grid md:grid-cols-10 md:grid-flow-col gap-0 ">
             <div id='hsc' class="max-w-[200px] md:block hidden bg-teal-500 h-screen  font-graduate text-center text-[70px]"><img src={ieeedaylogo} width={150} className='mx-auto py-4'/>I<br/>E<br/>E<br/>E<br/>D<br/>A<br/>Y     <br/> <br/>        </div>
             <div class=" md:hidden block bg-teal-500 text-center text-[70px]"> IEEE DAY</div>
             <div class="md:col-span-9 row-end-2 text-center pb-4  bg-[#6cb3c1] ">
             
             <img src={ieeedaylogo} width={150} className='mx-auto py-4 block md:hidden'/>
                   <p className='fcuk text-[50px] md:text-[90px] font-henny py-4 md:py-8 from-rose-200 from-40% to-yellow-100 text-transparent bg-gradient-to-r bg-clip-text'  >ZENORA</p>
                   <p className='text-xl md:text-[70px] font-rampart-one py-2 md:py-6'>EVENT'S REGISTRATION</p>

                    <Table/>

       {/* Workshop */}
                    <div   className="max-w-[350px] md:max-w-[600px] shadow-light-inner-neumorphism-xl bg-[#6cb3c1] rounded-[20px] overflow-hidden mx-auto py-2">
                           <img class="w-[40%] mx-auto py-2" src={vr} alt="Sunset in the mountains"/>
                           <div class="font-bold text-xl ">AR/VR development Workshop</div>
                           <div class=" py-4" style={{maxHeight: "1000px" , overflow: "hidden",transition: "opacity 1s, max-height 1s",}}>
                           
                            
                                  <div className='text-left px-3'> 
                                  <div class=" text-center font-bold text-teal-800">Mode: OFFLINE <br/><span className='text-yellow-600'>Workshop on 25(or26).08.23 (9 AM to 5 PM)</span><br/>Registration fee- ₹800</div>
                                  <ul className='list-outside list-decimal pl-4'>
                                    <li className='leading-5 py-1'>Registration is first-come-first-served.</li>
                                    <li className='leading-5 py-1'>The workshop is for 2 days workshop.</li>
                                    <li className='leading-5 py-1'><b>Laptop is necessary.</b>  A group of 2-3 participants can accommodate a single system. </li>
                                    <li className='leading-5 py-1'> Software will be provided in the Whatsapp Group. Participants must download it prior to the workshop. </li>
                                    <li className='leading-5 py-1'> Bring your own lunch.</li>
                                    <li className='leading-5 py-1'>Participants must bring their college ID and payment confirmation screenshot.</li>
                                    <li className='leading-5 py-1 font-semibold'>Registration closes on 23rd August 2023 at 5:00pm. <b>Amount paid will not be refunded after registration.</b></li>
                                    <li className='leading-5 py-1'>A participation certificate from IEEE and IoE hub will be issued.</li>
                                  </ul>  
                                   <div className='text-center'>Coordinators Contact : <br/>PRAVEENE R (8438778446)<br/> <div className='pt-2'><button onClick={()=>window.open("https://forms.gle/udgUGpmixWjF29v37")} className='btn btn-primary w-32 bg-green-500 rounded-2xl py-1' title='Link'>REGISTER</button></div></div>
                                   </div>
                              
                            </div>
                      </div>
                
               

                 
            </div>
        </div>
    </div>

  )
}

export default Main;