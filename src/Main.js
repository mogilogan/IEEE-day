import React, { useState } from 'react';

import ieeedaylogo from  './assests/ieeedaylogo.png';

import photo from './assests/photo.png';
import panel from './assests/panel.png';
import conn from './assests/conn.png';
import code from './assests/code.png';
import trea from './assests/trea.png';
import tdes from './assests/tdes.png';

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


                      <div id="0" onClick={()=>detailopen(0,"0")} className="max-w-[150px] md:max-w-[300px] rounded overflow-hidden shadow-lg bg-slate-400">
                           <img class="w-[80%] mx-auto" src={photo} alt="Sunset in the mountains"/>
                           <div class=" py-4">
                           <div class="font-bold text-xl ">Photographer Contest</div>
                              {isOpen[0] &&
                                  <div className='text-left px-3'> 
                                  <div class=" text-center font-bold text-teal-800">Topic: Happiness <br/>Mode: ONLINE <br/><span className='text-yellow-600'>Event starts on 19.07.23 And ends on 10.08.23</span><br/>Registration fee- Rs.50/</div>
                                  <ul className='list-outside list-decimal pl-4'>
                                    <li cclassName='leading-5 py-1'>Attach your photos in a pdf format in the given google form.</li>
                                    <li className='leading-5 py-1'>You may attach as many photos of yours combined as a pdf. </li>
                                    <li className='leading-5 py-1'>Plagiarism is strictly prohibited. Decision of the jury would be final. </li>
                                    <li className='leading-5 py-1'>Two best photographer awards will be given. </li>
                                    <li className='leading-5 py-1'>Every participants will receive participant certificate. </li>
                                    <li className='leading-5 py-1'>The final event will be conducted on IEEE Day and two best photographs will be displayed.( banner)(sponsorship) </li>
                                    <li className='leading-5 py-1'>Date of presentation : Oct 4,5(IEEE Day) </li>
                                  </ul>  
                                   <div className='text-center'>Coordinators Contact : <br/>Sri Saipriya R-9443949018,<br/> Yuvarani-9493724523 <br/><div className='pt-2'><button onClick={()=>window.open("https://docs.google.com/forms/d/e/1FAIpQLSdWgbN_1vGTmIp5t2Z__WPG2Tm-zDOme7cPRjUYNNj0_b99dw/viewform")} className='btn btn-primary w-32 bg-green-500 rounded-2xl py-1' title='Link'>REGISTER</button></div></div>
                                   </div>
                              }
                            </div>
                      </div>

                      <div id="1" onClick={()=>detailopen(1,"1")} className="max-w-[150px]  md:max-w-[300px] rounded overflow-hidden shadow-lg bg-slate-400">
                           <img class="w-[80%] mx-auto" src={panel} alt="Sunset in the mountains"/>
                           <div class=" py-4">
                           <div class="font-bold text-xl ">Panel Discussion</div>
                              {isOpen[1] &&
                                  <div className='text-left px-3'> 
                                  <div class=" text-center font-bold text-teal-800">Topic: *** <br/>Mode: OFFLINE <br/><span className='text-yellow-600'>Event starts on 21 august And ends on ***</span><br/>Registration fee- Rs.50/</div>
                                  <ul className='list-outside list-decimal pl-4'>
                                    <li className='leading-5 py-1'>A pannel must consist 4 to 6 people.</li>
                                    <li className='leading-5 py-1'>Team members should decide a moderator among themselves.</li>
                                    <li className='leading-5 py-1'>Panelists should wind up the discussion with in 15 minutes</li>
                                    <li className='leading-5 py-1'>Audience of the event can also participate in the discussion and share their opinions. After the 15 minutes of discussion 5 minutes will be given to the audience to ask questions or to share their views</li>
                                    <li className='leading-5 py-1'>Participants should choose thought provoking topics which are currently active and evolving. <b className='text-center mx-auto'>Decision of the jury is final.</b></li>
                                    <li className='leading-5 py-1'>The top-scoring team will be awarded. Every participant will receive a participation certificate. </li>
                                    <li className='leading-5 py-1'>Final Event day : Oct 4, 5</li>
                                  </ul>  
                                   <div className='text-center'>Coordinators Contact : <br/>SREE HARSHITHA-9493188149,<br/> KRISHNA TEJA-9652224274<br/><div className='pt-2'><button onClick={()=>window.open("")} className='btn btn-primary w-32 bg-green-500 rounded-2xl py-1' title='Link'>REGISTER</button></div></div>
                                   </div>
                              }
                            </div>
                      </div>

                      <div id="2" onClick={()=>detailopen(2,"2")} className="max-w-[150px] md:max-w-[300px] rounded overflow-hidden shadow-lg bg-slate-400">
                           <img class="w-full mx-auto py-2" src={conn} alt="Sunset in the mountains"/>
                           <div class=" py-4">
                           <div class="font-bold text-xl ">Technical Connexion</div>
                              {isOpen[2] &&
                                  <div className='text-left px-3'> 
                                  <div class=" text-center font-bold text-teal-800">Theme: Technology <br/>Mode: OFFLINE <br/><span className='text-yellow-600'>Event starts on 19.07.23 And ends on 30.07.23</span><br/>Registration fee- FREE</div>
                                  <ul className='list-outside list-decimal pl-4'>
                                    <li className='leading-5 py-1'>Connect the common point to words or pictures provided.</li>
                                    <li className='leading-5 py-1'>Partcipants can participate individually or in groups of maximum "3". Every participant will receive a participant certificate.</li>
                                    <li className='leading-5 py-1'>Total number of rounds: 2</li>
                                    <li className='leading-5 py-1'>Round 1: Qualifier round</li>
                                    <li className='leading-5 py-1'>Round 2: Final.</li>
                                    <li className='leading-5 py-1 font-semibold'>Decision of the jury would be final.</li>
                                    <li className='leading-5 py-1'>Final Event day : Oct 4, 5</li>
                                  </ul>  
                                   <div className='text-center'>Coordinators Contact : <br/>Seevaranjinee S-8148068869<br/> <div className='pt-2'><button onClick={()=>window.open("https://forms.gle/NVcXhPpEw8zKWeqj7")} className='btn btn-primary w-32 bg-green-500 rounded-2xl py-1' title='Link'>REGISTER</button></div></div>
                                   </div>
                              }
                            </div>
                      </div>

                      <div id="3" onClick={()=>detailopen(3,"3")} className="max-w-[150px] md:max-w-[300px] rounded overflow-hidden shadow-lg bg-slate-400">
                           <img class="w-[80%] mx-auto py-2" src={code} alt="Sunset in the mountains"/>
                           <div class=" py-4">
                           <div class="font-bold text-xl ">Coding Competition</div>
                              {isOpen[3] &&
                                  <div className='text-left px-3'> 
                                  <div class=" text-center font-bold text-teal-800">Mode: OFFLINE <br/><span className='text-yellow-600'>Event starts on 18.07.23 And ends on 18.07.23</span><br/>Registration fee- FREE</div>
                                  <ul className='list-outside list-decimal pl-4'>
                                    <li className='leading-5 py-1'>Code your brains out.</li>
                                    <li className='leading-5 py-1'>Partcipants can participate individually or in groups of maximum "2". Every participant will receive a participant certificate.</li>
                                    <li className='leading-5 py-1'>3 rounds will be conducted with the best teams progressing to the subsequent rounds.</li>
                                    <li className='leading-5 py-1'>Round-1: (Just-a-quiz)</li>
                                    <li className='leading-5 py-1'>Round-2: (Problems with a little twist)</li>
                                    <li className='leading-5 py-1'>Round-3: (The Finale) Teams showcase their programming skills for various challenges.</li>
                                    <li className='leading-5 py-1 font-semibold'>The top 2 teams will be given awards. Decision of the jury would be final.</li>
                                    <li className='leading-5 py-1'>Final Event day : Oct 4, 5</li>
                                  </ul>  
                                   <div className='text-center'>Coordinators Contact : <br/>Nimal Vardhan M - 9600938404 Seshan S - 6385635310 Nivesh S - 9677747762<br/> <div className='pt-2'><button onClick={()=>window.open("https://docs.google.com/forms/d/e/1FAIpQLSf0-y8TMXg0lJrtQNxfHJv7e-ebe-Ot4wQwJGB7QodAguZ9gw/viewform?usp=sf_link")} className='btn btn-primary w-32 bg-green-500 rounded-2xl py-1' title='Link'>REGISTER</button></div></div>
                                   </div>
                              }
                            </div>
                      </div>

                      <div id="4" onClick={()=>detailopen(4,"4")} className="max-w-[150px] md:max-w-[300px] rounded overflow-hidden shadow-lg bg-slate-400">
                           <img class="w-[80%] mx-auto py-2" src={trea} alt="Sunset in the mountains"/>
                           <div class=" py-4">
                           <div class="font-bold text-xl ">Treasure Hunt</div>
                              {isOpen[4] &&
                                  <div className='text-left px-3'> 
                                  <div class=" text-center font-bold text-teal-800">Mode: OFFLINE <br/><span className='text-yellow-600'>Event starts on 18.07.23 And ends on 18.07.23</span><br/>Registration fee- **</div>
                                  <ul className='list-outside list-decimal pl-4'>
                                    <li className='leading-5 py-1'>Each team consist of three member in which one will be CODER, Second person will be solving APTITUDE and the third person will be the HUNTER.</li>
                                    <li className='leading-5 py-1'>Partcipants can participate individually or in groups of maximum "2". Every participant will receive a participant certificate.</li>
                                    <li className='leading-5 py-1'>A coder from each team will be given a problem to solve. They can use any type of language to solve it.</li>
                                    <li className='leading-5 py-1'>Teammate of the person who first solve the coding problem will be given an aptitude question to solve.</li>
                                    <li className='leading-5 py-1'>After completing the aptitude problem the place for the treasure will be given. the hunter will have to find the treasure and return it to the coordinator.(Out of four rooms one room will be given for you to find the treasure which is nothing but a three digit number) </li>
                                    <li className='leading-5 py-1'>the first five teams who finish this three tasks will qualify to the next round. </li>
                                    <li className='leading-5 py-1'>In the second round difficult level will be raised in the coding session the remaining part continues the same only two teams will be selected as winners.</li>
                                    <li className='leading-5 py-1 font-semibold'>Decision of the jury would be final.</li>
                                    <li className='leading-5 py-1'>Final Event day : Oct 4, 5</li>
                                  </ul>  
                                   <div className='text-center'>Coordinators Contact : <br/>Nappinnai-7708162426, Danaprasad-9487046805,Gnanavendane-9443670650,Ragavi K-8610099669
<br/> <div className='pt-2'><button className='btn btn-primary w-32 bg-green-500 rounded-2xl py-1' title='Link'>REGISTER</button></div></div>
                                   </div>
                              }
                            </div>
                      </div>

                      <div id="5" onClick={()=>detailopen(5,"5")} className="max-w-[150px] md:max-w-[300px] rounded overflow-hidden shadow-lg bg-slate-400">
                           <img class="w-[80%] mx-auto py-2" src={tdes} alt="Sunset in the mountains"/>
                           <div class=" py-4">
                           <div class="font-bold text-xl ">3D Design</div>
                              {isOpen[5] &&
                                  <div className='text-left px-3'> 
                                  <div class=" text-center font-bold text-teal-800">Theme: Importance of Studentship <br/>Mode: ONLINE <br/><span className='text-yellow-600'>Event starts on 18.07.23 And ends on 18.07.23</span><br/>Registration fee- **</div>
                                  <ul className='list-outside list-decimal pl-4'>
                                    <li className='leading-5 py-1'>Participants can use any 3D modeling software of their choice and should have the necessary software installed</li>
                                    <li className='leading-5 py-1'>Individual Event</li>
                                    <li className='leading-5 py-1'>The contest will consist of two levels, each with different challenges to test the participants' abilities.</li>
                                    <li className='leading-5 py-1'>Level 1 is an elimination round. Participants will be given specific details and reference materials to guide their 3D modeling. Each participant must create a 3D model based on the given details. The duration of Level 1 is 90 minutes. The designs will be judged based on accuracy, attention to detail, and neatness. The top-scoring participants to proceed to Level 2.</li>
                                    <li className='leading-5 py-1'>Level 2 is the final round of the contest. In Level 2, participants will be presented with an innovative question or challenge related to 3D designing. The participants must create a 3D model that addresses the innovative question or challenge. The duration of Level 2 is also 90 minutes. The designs will be judged based on innovation, creativity, technical skill, and presentation.</li>
                                    <li className='leading-5 py-1 font-semibold'>The use of pre-existing models or copyrighted content is not allowed. All designs must be original.</li>
                                    <li className='leading-5 py-1 font-semibold'>The top-scoring participant in Level 2 will be awarded the prizes. Participants who successfully complete Level 1 will receive participation certificates.</li>
                                    <li className='leading-5 py-1'>Final Event day : Oct 4, 5</li>
                                  </ul>  
                                   <div className='text-center'>Coordinators Contact : <br/>Hemanth Kattoju-9381897926<br/> <div className='pt-2'><button onClick={()=>window.open("")} className='btn btn-primary w-32 bg-green-500 rounded-2xl py-1' title='Link'>REGISTER</button></div></div>
                                   </div>
                              }
                            </div>
                      </div>

                      <div id="6" onClick={()=>detailopen(6,"6")} className="max-w-[150px] md:max-w-[300px] rounded overflow-hidden shadow-lg bg-slate-400">
                           <img class="w-[80%] mx-auto py-2" src={code} alt="Sunset in the mountains"/>
                           <div class=" py-4">
                           <div class="font-bold text-xl ">Delicate designs</div>
                              {isOpen[3] &&
                                  <div className='text-left px-3'> 
                                  <div class=" text-center font-bold text-teal-800">Mode: OFFLINE <br/><span className='text-yellow-600'>Event starts on ** And ends on **</span><br/>Registration fee- FREE</div>
                                  <ul className='list-outside list-decimal pl-4'>
                                    <li className='leading-5 py-1'>Code your brains out.</li>
                                    <li className='leading-5 py-1'>Partcipants can participate individually or in groups of maximum "2". Every participant will receive a participant certificate.</li>
                                    <li className='leading-5 py-1'>3 rounds will be conducted with the best teams progressing to the subsequent rounds.</li>
                                    <li className='leading-5 py-1'>Round-1: (Just-a-quiz)</li>
                                    <li className='leading-5 py-1'>Round-2: (Problems with a little twist)</li>
                                    <li className='leading-5 py-1'>Round-3: (The Finale) Teams showcase their programming skills for various challenges.</li>
                                    <li className='leading-5 py-1 font-semibold'>The top 2 teams will be given awards. Decision of the jury would be final.</li>
                                    <li className='leading-5 py-1'>Final Event day : Oct 4, 5</li>
                                  </ul>  
                                   <div className='text-center'>Coordinators Contact : <br/>Nimal Vardhan M - 9600938404 Seshan S - 6385635310 Nivesh S - 9677747762<br/> <div className='pt-2'><button onClick={()=>window.open("https://docs.google.com/forms/d/e/1FAIpQLSf0-y8TMXg0lJrtQNxfHJv7e-ebe-Ot4wQwJGB7QodAguZ9gw/viewform?usp=sf_link")} className='btn btn-primary w-32 bg-green-500 rounded-2xl py-1' title='Link'>REGISTER</button></div></div>
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