import React, { useState } from 'react'

import photo from './assests/photo.jpg';
import ieeedaylogo from  './assests/ieeedaylogo.png'

const Main = () => {

    const [isOpen,setIsOpen] = useState([false,false,false,false,false,false,false,false]);
    const array = ["0","1","2","3","4","5","6","7"];
    const detailopen = (num,dis) =>{

        isOpen.fill(false);
        
        array.map((item,i)=>{
            document.getElementById(item).classList.remove("md:max-w-[500px]","max-w-[260px]");
        document.getElementById(item).classList.add("md:max-w-[300px]","max-w-[150px]");
        document.getElementById("hsc").classList.remove("md:h-screen");
        })





        document.getElementById(dis).classList.remove("md:max-w-[300px]","max-w-[150px]");
        document.getElementById(dis).classList.add("md:max-w-[500px]","max-w-[260px]");
        

        setIsOpen(prevState => prevState.map((item,idx)=>idx ===num ?  !item : item))
        
    }


  return (
    <div >
  
     
        <div class="md:grid md:grid-cols-10 md:grid-flow-col gap-0">
             <div id='hsc' class="max-w-[200px] md:block hidden bg-teal-500 md:h-screen font-graduate text-center text-[70px]"><img src={ieeedaylogo} width={150} className='mx-auto py-4'/>I<br/>E<br/>E<br/>E<br/>D<br/>A<br/>Y</div>
             <div class=" md:hidden block bg-teal-500 text-center text-[70px]">IEEE DAY</div>
             <div class="md:col-span-9 row-end-2 text-center  bg-blue-300 ">

                    <p className='text-xl md:text-[70px] font-rampart-one py-12'>EVENT'S REGISTRATION</p>


                    <div className='grid grid-cols-1 md:grid-cols-4 gap-6 justify-center items-center md:py-[140px] place-items-center '>


                       <div id="0" onClick={()=>detailopen(0,"0")} className="max-w-[150px] md:max-w-[300px] rounded overflow-hidden shadow-lg">
                           <img class="w-full" src={photo} alt="Sunset in the mountains"/>
                           <div class=" py-4">
                           <div class="font-bold text-xl ">Photographer Contest</div>
                           {isOpen[0] &&
                         <div className='text-left px-3'> 
                              <p class=" text-center font-bold">Topic: Happiness <br/>Mode: ONLINE</p>
                              <div class=" text-md ">Attach your photos in a pdf format in the given google form. You may attach as many photos of yours combined as a pdf. Plagiarism is strictly prohibited. Decision of the jury would be final. Event starts on 19.07.23 And ends on 10.08.23</div>
                              <div class=" text-md ">Two best photographer awards will be given. Every participants will receive participant certificate The final event will be conducted on IEEE Day and two best photographs will be displayed( banner)(sponsorship) Date of presentation : Oct 4,5(IEEE Day) Registration fee- Rs.50/-</div>
                              <div class=" text-md ">Coordinators: Contact : Sri Saipriya R 9443949018 Yuvarani 9493724523</div>

                          </div>
                           }
                           </div>
                        </div>

                        <div id="1" onClick={()=>detailopen(1,"1")} className="max-w-[150px] md:max-w-[300px] rounded overflow-hidden shadow-lg">
                           <img class="w-full" src={photo} alt="Sunset in the mountains"/>
                           <div class=" py-4">
                           <div class="font-bold text-xl ">Photographer Contest</div>
                           {isOpen[1] &&
                         <div className='text-left px-3'> 
                              <p class="text-gray-700 text-center font-bold">Topic: Happiness <br/>Mode: ONLINE</p>
                              <div class=" text-md ">Attach your photos in a pdf format in the given google form. You may attach as many photos of yours combined as a pdf. Plagiarism is strictly prohibited. Decision of the jury would be final. Event starts on 19.07.23 And ends on 10.08.23</div>
                              <div class=" text-md ">Two best photographer awards will be given. Every participants will receive participant certificate The final event will be conducted on IEEE Day and two best photographs will be displayed( banner)(sponsorship) Date of presentation : Oct 4,5(IEEE Day) Registration fee- Rs.50/-</div>
                              <div class=" text-md ">Coordinators: Contact : Sri Saipriya R 9443949018 Yuvarani 9493724523</div>

                          </div>
                           }
                           </div>
                        </div>

                        <div id="2" onClick={()=>detailopen(2,"2")} className="max-w-[150px] md:max-w-[300px] rounded overflow-hidden shadow-lg">
                           <img class="w-full" src={photo} alt="Sunset in the mountains"/>
                           <div class=" py-4">
                           <div class="font-bold text-xl ">Photographer Contest</div>
                           {isOpen[2] &&
                         <div className='text-left px-3'> 
                              <p class="text-gray-700 text-center font-bold">Topic: Happiness <br/>Mode: ONLINE</p>
                              <div class=" text-md ">Attach your photos in a pdf format in the given google form. You may attach as many photos of yours combined as a pdf. Plagiarism is strictly prohibited. Decision of the jury would be final. Event starts on 19.07.23 And ends on 10.08.23</div>
                              <div class=" text-md ">Two best photographer awards will be given. Every participants will receive participant certificate The final event will be conducted on IEEE Day and two best photographs will be displayed( banner)(sponsorship) Date of presentation : Oct 4,5(IEEE Day) Registration fee- Rs.50/-</div>
                              <div class=" text-md ">Coordinators: Contact : Sri Saipriya R 9443949018 Yuvarani 9493724523</div>

                          </div>
                           }
                           </div>
                        </div>

                        <div id="3" onClick={()=>detailopen(3,"3")} className="max-w-[150px] md:max-w-[300px] rounded overflow-hidden shadow-lg">
                           <img class="w-full" src={photo} alt="Sunset in the mountains"/>
                           <div class=" py-4">
                           <div class="font-bold text-xl ">Photographer Contest</div>
                           {isOpen[3] &&
                         <div className='text-left px-3'> 
                              <p class="text-gray-700 text-center font-bold">Topic: Happiness <br/>Mode: ONLINE</p>
                              <div class=" text-md ">Attach your photos in a pdf format in the given google form. You may attach as many photos of yours combined as a pdf. Plagiarism is strictly prohibited. Decision of the jury would be final. Event starts on 19.07.23 And ends on 10.08.23</div>
                              <div class=" text-md ">Two best photographer awards will be given. Every participants will receive participant certificate The final event will be conducted on IEEE Day and two best photographs will be displayed( banner)(sponsorship) Date of presentation : Oct 4,5(IEEE Day) Registration fee- Rs.50/-</div>
                              <div class=" text-md ">Coordinators: Contact : Sri Saipriya R 9443949018 Yuvarani 9493724523</div>

                          </div>
                           }
                           </div>
                        </div>

                        <div id="4" onClick={()=>detailopen(4,"4")} className="max-w-[150px] md:max-w-[300px] rounded overflow-hidden shadow-lg">
                           <img class="w-full" src={photo} alt="Sunset in the mountains"/>
                           <div class=" py-4">
                           <div class="font-bold text-xl ">Photographer Contest</div>
                           {isOpen[4] &&
                         <div className='text-left px-3'> 
                              <p class="text-gray-700 text-center font-bold">Topic: Happiness <br/>Mode: ONLINE</p>
                              <div class=" text-md ">Attach your photos in a pdf format in the given google form. You may attach as many photos of yours combined as a pdf. Plagiarism is strictly prohibited. Decision of the jury would be final. Event starts on 19.07.23 And ends on 10.08.23</div>
                              <div class=" text-md ">Two best photographer awards will be given. Every participants will receive participant certificate The final event will be conducted on IEEE Day and two best photographs will be displayed( banner)(sponsorship) Date of presentation : Oct 4,5(IEEE Day) Registration fee- Rs.50/-</div>
                              <div class=" text-md ">Coordinators: Contact : Sri Saipriya R 9443949018 Yuvarani 9493724523</div>

                          </div>
                           }
                           </div>
                        </div>

                        <div id="5" onClick={()=>detailopen(5,"5")} className="max-w-[150px] md:max-w-[300px] rounded overflow-hidden shadow-lg">
                           <img class="w-full" src={photo} alt="Sunset in the mountains"/>
                           <div class=" py-4">
                           <div class="font-bold text-xl ">Photographer Contest</div>
                           {isOpen[5] &&
                         <div className='text-left px-3'> 
                              <p class="text-gray-700 text-center font-bold">Topic: Happiness <br/>Mode: ONLINE</p>
                              <div class=" text-md ">Attach your photos in a pdf format in the given google form. You may attach as many photos of yours combined as a pdf. Plagiarism is strictly prohibited. Decision of the jury would be final. Event starts on 19.07.23 And ends on 10.08.23</div>
                              <div class=" text-md ">Two best photographer awards will be given. Every participants will receive participant certificate The final event will be conducted on IEEE Day and two best photographs will be displayed( banner)(sponsorship) Date of presentation : Oct 4,5(IEEE Day) Registration fee- Rs.50/-</div>
                              <div class=" text-md ">Coordinators: Contact : Sri Saipriya R 9443949018 Yuvarani 9493724523</div>

                          </div>
                           }
                           </div>
                        </div>

                        <div id="6" onClick={()=>detailopen(6,"6")} className="max-w-[150px] md:max-w-[300px] rounded overflow-hidden shadow-lg">
                           <img class="w-full" src={photo} alt="Sunset in the mountains"/>
                           <div class=" py-4">
                           <div class="font-bold text-xl ">Photographer Contest</div>
                           {isOpen[6] &&
                         <div className='text-left px-3'> 
                              <p class="text-gray-700 text-center font-bold">Topic: Happiness <br/>Mode: ONLINE</p>
                              <div class=" text-md ">Attach your photos in a pdf format in the given google form. You may attach as many photos of yours combined as a pdf. Plagiarism is strictly prohibited. Decision of the jury would be final. Event starts on 19.07.23 And ends on 10.08.23</div>
                              <div class=" text-md ">Two best photographer awards will be given. Every participants will receive participant certificate The final event will be conducted on IEEE Day and two best photographs will be displayed( banner)(sponsorship) Date of presentation : Oct 4,5(IEEE Day) Registration fee- Rs.50/-</div>
                              <div class=" text-md ">Coordinators: Contact : Sri Saipriya R 9443949018 Yuvarani 9493724523</div>

                          </div>
                           }
                           </div>
                        </div>

                        <div id="7" onClick={()=>detailopen(7,"7")} className="max-w-[150px] md:max-w-[300px] rounded overflow-hidden shadow-lg">
                           <img class="w-full" src={photo} alt="Sunset in the mountains"/>
                           <div class=" py-4">
                           <div class="font-bold text-xl ">Photographer Contest</div>
                           {isOpen[7] &&
                         <div className='text-left px-3'> 
                              <p class="text-gray-700 text-center font-bold">Topic: Happiness <br/>Mode: ONLINE</p>
                              <div class=" text-md ">Attach your photos in a pdf format in the given google form. You may attach as many photos of yours combined as a pdf. Plagiarism is strictly prohibited. Decision of the jury would be final. Event starts on 19.07.23 And ends on 10.08.23</div>
                              <div class=" text-md ">Two best photographer awards will be given. Every participants will receive participant certificate The final event will be conducted on IEEE Day and two best photographs will be displayed( banner)(sponsorship) Date of presentation : Oct 4,5(IEEE Day) Registration fee- Rs.50/-</div>
                              <div class=" text-md ">Coordinators: Contact : Sri Saipriya R 9443949018 Yuvarani 9493724523</div>

                          </div>
                           }
                           </div>
                        </div>
                        
                       
                    </div>
            </div>
        </div>
    </div>

  )
}

export default Main;