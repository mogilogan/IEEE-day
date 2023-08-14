import React, {useState} from 'react';

import photo from './assests/photo.png';
import panel from './assests/panel.png';
import conn from './assests/conn.png';
import code from './assests/code.png';
import trea from './assests/trea.png';
import tdes from './assests/tdes.png';
import deli from './assests/deli.png';
import short from './assests/short.png';


const Events = () => {

    const [isOpen,setIsOpen] = useState([false,false,false,false,false,false,false,false]);
    const array = ["0","1","2","3","4","5","6","7"];
    const detailopen = (num,dis) =>{

        isOpen.fill(false);
        
        array.map((item,i)=>{
            document.getElementById(item).classList.remove("md:max-w-[300px]","max-w-[260px]");
        document.getElementById(item).classList.add("md:max-w-[350px]","max-w-[150px]");
        document.getElementById("hsc").classList.remove("md:h-screen");
        })

        document.getElementById(dis).classList.remove("md:max-w-[350px]","max-w-[150px]");
        document.getElementById(dis).classList.add("md:max-w-[300px]","max-w-[260px]");

        setIsOpen(prevState => prevState.map((item,idx)=>idx ===num ?  !item : item))
        
    }

  return (
    <div className='bg-[#b06a9f] text-center max-w-full'>

<div className='grid grid-cols-1 pb-8 md:pb-11 md:grid-cols-4 gap-6 justify-center items-center md:py-[10px]  place-items-center pt-8'>


<div id="0" onClick={()=>detailopen(0,"0")} className="max-w-[150px] md:max-w-[300px] shadow-light-inners-neumorphism-xl bg-[#b06a9f] rounded-[20px] overflow-hidden  ">
     <img class="w-[80%] mx-auto" src={photo} alt="Sunset in the mountains"/>
     <div class="font-bold text-xl ">Photographer Contest</div>
     <div class=" py-4" style={{opacity: isOpen[0] ? 1 : 0,maxHeight: isOpen[0] ? "1000px" : "0", overflow: "hidden",transition: "opacity 1s, max-height 1s",}}>
     
        {isOpen[0] &&
            <div className='text-left px-3'> 
            <div class=" text-center font-bold text-teal-800">Topic: Happiness <br/>Mode: ONLINE <br/><span className='text-yellow-600'>Event starts on 19.07.23 And ends on 10.08.23</span><br/>Registration fee- Rs.50/</div>
            <ul className='list-outside list-decimal pl-4'>
              <li cclassName='leading-5 py-1'>Attach your photos in a pdf format in the given google form.</li>
              <li className='leading-5 py-1'>You may attach as many photos of yours combined as a pdf. </li>
              <li className='leading-5 py-1'>Plagiarism is strictly prohibited. Decision of the jury would be final. </li>
              <li className='leading-5 py-1'>Two best photographer awards will be given. </li>
              <li className='leading-5 py-1'>Every participants will receive participant certificate. </li>
              <li className='leading-5 py-1'>The final event will be conducted on IEEE Day and two best photographs will be displayed.</li>
              <li className='leading-5 py-1'>Date of presentation : Oct 4,5(IEEE Day) </li>
            </ul>  
             <div className='text-center'>Coordinators Contact : <br/>Sri Saipriya R-9443949018,<br/> Yuvarani-9493724523 <br/><div className='pt-2'><button onClick={()=>window.open("https://docs.google.com/forms/d/e/1FAIpQLSdWgbN_1vGTmIp5t2Z__WPG2Tm-zDOme7cPRjUYNNj0_b99dw/viewform")} className='btn btn-primary w-32 bg-green-500 rounded-2xl py-1' title='Link'>REGISTER</button></div></div>
             </div>
        }
      </div>
</div>

<div id="1" onClick={()=>detailopen(1,"1")} className="max-w-[150px]   md:max-w-[300px] shadow-light-inners-neumorphism-xl bg-[#b06a9f] rounded-[20px] overflow-hidden ">
     <img class="w-[80%] mx-auto" src={panel} alt="Sunset in the mountains"/>
     <div class="font-bold text-xl ">Panel Discussion</div>
     <div class=" py-4" style={{opacity: isOpen[1] ? 1 : 0,maxHeight: isOpen[1] ? "1000px" : "0", overflow: "hidden",transition: "opacity 1s, max-height 1s",}}>
     
        {isOpen[1] &&
            <div className='text-left px-3'> 
            <div class=" text-center font-bold text-teal-800">Topic: Technology <br/>Mode: OFFLINE <br/><span className='text-yellow-600'>Event on 21st august(tentative), Venue: ECE Seminar Hall </span><br/>Registration fee- Rs.100/</div>
            <ul className='list-outside list-decimal pl-4'>
              <li className='leading-5 py-1'>A pannel must consist 4 to 6 people.</li>
              <li className='leading-5 py-1'>Team members should decide a moderator among themselves.</li>
              <li className='leading-5 py-1'>Panelists should wind up the discussion with in 15 minutes</li>
              <li className='leading-5 py-1'>Audience of the event can also participate in the discussion and share their opinions. After the 15 minutes of discussion 5 minutes will be given to the audience to ask questions or to share their views</li>
              <li className='leading-5 py-1'>Participants should choose thought provoking topics which are currently active and evolving. <b className='text-center mx-auto'>Decision of the jury is final.</b></li>
              <li className='leading-5 py-1'>The top-scoring team will be awarded. Every participant will receive a participation certificate. </li>
              <li className='leading-5 py-1'>Final Event day : Oct 4, 5</li>
            </ul>  
             <div className='text-center'>Coordinators Contact : <br/>SREE HARSHITHA-9493188149,<br/> KRISHNA TEJA-9652224274<br/><div className='pt-2'><button onClick={()=>window.open("https://forms.gle/Ccrk6X2ZqAN7zUok6")} className='btn btn-primary w-32 bg-green-500 rounded-2xl py-1' title='Link'>REGISTER</button></div></div>
             </div>
        }
      </div>
</div>

<div id="2" onClick={()=>detailopen(2,"2")} className="max-w-[150px] md:max-w-[300px] shadow-light-inners-neumorphism-xl bg-[#b06a9f] rounded-[20px] overflow-hidden ">
     <img class="w-full mx-auto py-2" src={conn} alt="Sunset in the mountains"/>
     <div class="font-bold text-xl ">Technical Connexion</div>
     <div class=" py-4" style={{opacity: isOpen[2] ? 1 : 0,maxHeight: isOpen[2] ? "1000px" : "0", overflow: "hidden",transition: "opacity 1s, max-height 1s",}}>
    
        {isOpen[2] &&
            <div className='text-left px-3 transform transition-opacity duration-500 '> 
            <div class=" text-center font-bold text-teal-800">Theme: Technology <br/>Mode: OFFLINE <br/><span className='text-yellow-600'>Event starts on 29.08.23</span><br/>Registration fee- FREE</div>
            <ul className='list-outside list-decimal pl-4'>
              <li className='leading-5 py-1'>Connect the common point to words or pictures provided.</li>
              <li className='leading-5 py-1'>Partcipants can participate individually or in groups of maximum "3". Every participant will receive a participant certificate.</li>
              <li className='leading-5 py-1'>Total number of rounds: 2</li>
              <li className='leading-5 py-1'>Round 1: Qualifier round</li>
              <li className='leading-5 py-1'>Round 2: Final.</li>
              <li className='leading-5 py-1 font-semibold'>Decision of the jury would be final.</li>
              <li className='leading-5 py-1'>Final Event day : Oct 4, 5</li>
            </ul>  
             <div className='text-center'>Coordinators Contact : <br/>Seevaranjinee S-8148068869,Sivaranjini G, Sadhana Sri<br/> <div className='pt-2'><button onClick={()=>window.open("https://forms.gle/PXBVLWDktH5JNX3n8")} className='btn btn-primary w-32 bg-green-500 rounded-2xl py-1' title='Link'>REGISTER</button></div></div>
             </div>
        }
      </div>
</div>

<div id="3" onClick={()=>detailopen(3,"3")} className="max-w-[150px] md:max-w-[300px] shadow-light-inners-neumorphism-xl bg-[#b06a9f] rounded-[20px] overflow-hidden ">
     <img class="w-[80%] mx-auto py-2" src={code} alt="Sunset in the mountains"/>
     <div class="font-bold text-xl ">Coding Competition</div>
     <div class=" py-4" style={{opacity: isOpen[3] ? 1 : 0,maxHeight: isOpen[3] ? "1000px" : "0", overflow: "hidden",transition: "opacity 1s, max-height 1s",}}>
     
        {isOpen[3] &&
            <div className='text-left px-3'> 
            <div class=" text-center font-bold text-teal-800">Mode: OFFLINE <br/><span className='text-yellow-600'>Event on 18.07.23 </span><br/>Registration fee- FREE</div>
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

<div id="4" onClick={()=>detailopen(4,"4")} className="max-w-[150px] md:max-w-[300px] shadow-light-inners-neumorphism-xl bg-[#b06a9f] rounded-[20px] overflow-hidden ">
     <img class="w-[80%] mx-auto py-2" src={trea} alt="Sunset in the mountains"/>
     <div class="font-bold text-xl ">Treasure Hunt</div>
     <div class=" py-4" style={{opacity: isOpen[4] ? 1 : 0,maxHeight: isOpen[4] ? "1000px" : "0", overflow: "hidden",transition: "opacity 1s, max-height 1s",}}>
     
        {isOpen[4] &&
            <div className='text-left px-3'> 
            <div class=" text-center font-bold text-teal-800">Mode: OFFLINE <br/><span className='text-yellow-600'>Event on 23.08.23</span><br/>Registration fee- 300/Team</div>
            <ul className='list-outside list-decimal pl-4'>
              <li className='leading-5 py-1'>Each team consist of three member in which one will be CODER, Second person will be solving APTITUDE and the third person will be the HUNTER.</li>
              <li className='leading-5 py-1'>Partcipants must be in a groups of"3". Every participant will receive a participant certificate.</li>
              <li className='leading-5 py-1'>A coder from each team will be given a problem to solve. They can use any type of language to solve it.</li>
              <li className='leading-5 py-1'>Teammate of the person who first solve the coding problem will be given an aptitude question to solve.</li>
              <li className='leading-5 py-1'>After completing the aptitude problem the place for the treasure will be given. The hunter will have to find the treasure and return it to the coordinator.(Out of four rooms one room will be given for you to find the treasure which is nothing but a three digit number) </li>
              <li className='leading-5 py-1'>The first five teams who finish this three tasks will qualify to the next round. </li>
              <li className='leading-5 py-1'>In the second round difficult level will be raised in the coding session the remaining part continues the same only two teams will be selected as winners.</li>
              <li className='leading-5 py-1 font-semibold'>Decision of the jury would be final.</li>
            </ul>  
             <div className='text-center'>Coordinators Contact : <br/>Nappinnai-7708162426, Danaprasad-9487046805, Gnanavendane-9443670650, Ragavi K-8610099669<br/> <div className='pt-2'><button onClick={()=>window.open("https://docs.google.com/forms/d/e/1FAIpQLSevFdUB_5h5x9gIuJ_lwKFpEEZrjoo5yh4ASyRmnC4e16alxQ/viewform")} className='btn btn-primary w-32 bg-green-500 rounded-2xl py-1' title='Link'>REGISTER</button></div></div>
             </div>
        }
      </div>
</div>

<div id="5" onClick={()=>detailopen(5,"5")} className="max-w-[150px] md:max-w-[300px] shadow-light-inners-neumorphism-xl bg-[#b06a9f] rounded-[20px] overflow-hidden ">
     <img class="w-[80%] mx-auto py-2" src={tdes} alt="Sunset in the mountains"/>
     <div class="font-bold text-xl ">3D Design</div>
     <div class=" py-4" style={{opacity: isOpen[5] ? 1 : 0,maxHeight: isOpen[5] ? "1500px" : "0", overflow: "hidden",transition: "opacity 1s, max-height 1s",}}>
   
        {isOpen[5] &&
            <div className='text-left px-3'> 
            <div class=" text-center font-bold text-teal-800">Theme: Importance of Studentship <br/>Mode: OFFLINE <br/><span className='text-yellow-600'>Event Registration ends on 10.08.23</span><br/>Registration fee- **</div>
            <ul className='list-outside list-decimal pl-4'>
              <li className='leading-5 py-1'>Participants can use any 3D modeling software of their choice and should have the necessary software installed</li>
              <li className='leading-5 py-1'>Individual Event</li>
              <li className='leading-5 py-1'>The contest will consist of two levels, each with different challenges to test the participants' abilities.</li>
              <li className='leading-5 py-1'>Level 1 is an elimination round. Participants will be given specific details and reference materials to guide their 3D modeling. Each participant must create a 3D model based on the given details. The duration of Level 1 is 90 minutes. The designs will be judged based on accuracy, attention to detail, and neatness. The top-scoring participants to proceed to Level 2.</li>
              <li className='leading-5 py-1'>Level 2 is the final round of the contest. In Level 2, participants will be presented with an innovative question or challenge related to 3D designing. The participants must create a 3D model that addresses the innovative question or challenge. The duration of Level 2 is also 90 minutes. The designs will be judged based on innovation, creativity, technical skill, and presentation.</li>
              <li className='leading-5 py-1 font-semibold'>The use of pre-existing models or copyrighted content is not allowed. All designs must be original.</li>
              <li className='leading-5 py-1 font-semibold'>The top-scoring participant in Level 2 will be awarded the prizes. Participants who successfully complete Level 1 will receive participation certificates.</li>
              <li className='leading-5 py-1 font-bold'>After registration a whatsapp group will be created and all further info. will be shared there.</li>
            </ul>  
             <div className='text-center'>Coordinators Contact : <br/>Praveene R-8438778446<br/> <div className='pt-2'><button onClick={()=>window.open("https://forms.gle/DJMSQoRnzPHSJUJi8")} className='btn btn-primary w-32 bg-green-500 rounded-2xl py-1' title='Link'>REGISTER</button></div></div>
             </div>
        }
      </div>
</div>

<div id="6" onClick={()=>detailopen(6,"6")} className="max-w-[150px] md:max-w-[300px] shadow-light-inners-neumorphism-xl bg-[#b06a9f] rounded-[20px] overflow-hidden ">
     <img class="w-[85%] mx-auto py-2" src={deli} alt="Sunset in the mountains"/>
     <div class="font-bold text-xl ">Delicate designs</div>
     <div class=" py-4" style={{opacity: isOpen[6] ? 1 : 0,maxHeight: isOpen[6] ? "1000px" : "0", overflow: "hidden",transition: "opacity 1s, max-height 1s",}}>
     
        {isOpen[6] &&
            <div className='text-left px-3'> 
            <div class=" text-center font-bold text-teal-800">Mode: OFFLINE <br/><span className='text-yellow-600'>Event starts on 28.08.23, VENUE: ECE SEMINAR HALL</span><br/>Registration fee- FREE</div>
            <ul className='list-outside list-decimal pl-4'>
              <li className='leading-5 py-1'>Open to any student from any college.</li>
              <li className='leading-5 py-1'>Focuses on the art of mandala, calligraphy and chalk carving.</li>
              <li className='leading-5 py-1'>Each student is required to bring their own materials(brush pens, chalk etc) for the competition. </li>
              <li className='leading-5 py-1'>The total time for the competition is 1.15 hours</li>
              <li className='leading-5 py-1'>The jury will evaluate the artworks based on creativity and overall presentation</li>
              <li className='leading-5 py-1'>Participation certificate will be awarded to each participants</li>
              <li className='leading-5 py-1 font-semibold'>Decision of the jury would be final</li>
            </ul>  
             <div className='text-center'>Coordinators Contact : <br/>SIVAPRAGASH R (7397163264), YUVARANI VD, SHAANTHAPRIYAN B<br/> <div className='pt-2'><button onClick={()=>window.open("https://docs.google.com/forms/d/e/1FAIpQLScj9AZVaTTKoO3-nlVjoeJUDgzCVV42egj4j2eqpp0sNW6kig/viewform?usp=pp_url")} className='btn btn-primary w-32 bg-green-500 rounded-2xl py-1' title='Link'>REGISTER</button></div></div>
             </div>
        }
      </div>
</div>

<div id="7" onClick={()=>detailopen(7,"7")} className="max-w-[150px] md:max-w-[300px] shadow-light-inners-neumorphism-xl bg-[#b06a9f] rounded-[20px] overflow-hidden ">
     <img class="w-[80%] mx-auto py-2" src={short} alt="Sunset in the mountains"/>
     <div class="font-bold text-xl ">Short Film</div>
     <div class=" py-4" style={{opacity: isOpen[7] ? 1 : 0,maxHeight: isOpen[7] ? "1000px" : "0", overflow: "hidden",transition: "opacity 1s, max-height 1s",}}>
     
        {isOpen[7] &&
            <div className='text-left px-3'> 
            <div class=" text-center font-bold text-teal-800">Topic: The importance of studentship<br/>Mode: ONLINE <br/><span className='text-yellow-600'>Event ends on 10-08-2023</span><br/>Registration fee- 50</div>
            <ul className='list-outside list-decimal pl-4'>
              <li className='leading-5 py-1'>Open to any student from any college.</li>
              <li className='leading-5 py-1'>The maximum duration of a short film is 3 minutes.</li>
              <li className='leading-5 py-1'>The short films will be judged based on your understanding of the theme, screenplay, dialogue, creativity.</li>
              <li className='leading-5 py-1'> The short film with obscenity and profanity will be disqualified </li>
              <li className='leading-5 py-1'>The activity of plagiarism is strictly prohibited from participation</li>
              <li className='leading-5 py-1'>Participation certificate will be awarded to each participants</li>
              <li className='leading-5 py-1 font-semibold'>Decision of the jury would be final</li>
              <li className='leading-5 py-1'>Final Event day : Oct 4, 5</li>
            </ul>  
             <div className='text-center'>Coordinators Contact : <br/>Jayaraj Pozhilan-9486901377<br/> <div className='pt-2'><button onClick={()=>window.open("https://docs.google.com/forms/d/e/1FAIpQLScnJhsvFo2G9bFLVmz--kkeSV8-n6ZIS7fkjwMJNsIR1U0D8g/viewform?usp=pp_url")} className='btn btn-primary w-32 bg-green-500 rounded-2xl py-1' title='Link'>REGISTER</button></div></div>
             </div>
        }
      </div>
</div>
  
 
</div>
    </div>
  )
}

export default Events