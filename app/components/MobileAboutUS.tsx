import React from "react"
import  { FaLinkedin } from "react-icons/fa";
import  { FaTwitter } from "react-icons/fa";
import  Image  from 'next/image'
import dribble from '../Assets/dribble.png'
import img1 from '../Assets/about-img-1.png'
import img2 from '../Assets/about-img-2.png'
import img3 from '../Assets/about-img-3.png'
 
 
   
export default function MobileAboutUs(){
  return (
    <section  className="w-[428px] h-[1075px] bg-[#F7F7F7]   px-[24px] py-[48px] flex flex-col gap-[48px] ">
    <div className="w-[336px]  h-[120px]  flex flex-col gap-[24px]">
        <h4 className="font-bold text-[32px] leading-[41.5px] text-center"> Our team</h4>
    <p className="text-center text-[18px] leading-[27px]">Lorem ipsum dolor sit amet, concectetur adipiscing elit.</p>
    </div>
    < div className="h-[732px] w-[380px] flex flex-col items-center gap-[48px]" >
      {/* 1 */}
            <div className="w-[394.67px] h-[209px] flex flex-col gap-[24px] items-center ">
                <div className="w-[80px] h-[80px] mx-[157.33px]"><Image src={img1} alt=""/></div>
                <div className="w-[394.67px] h-[57px]">
                 <p className="text-center font-semibold text-[20px] leading-[30px]">James Nduku</p>
                  <p className="text-center text-[18px] leading-[27px]">Marketing Coordinator</p>
                </div>
                <div className="w-[100px] h-[24px] flex gap-[14px] mx-[147.33px]">
                    <div className="w-[24px] h-[24px] flex items-center justify-center"><FaLinkedin/></div>
                     <div className="w-[24px] h-[24px] flex items-center justify-center"><FaTwitter/></div>
                     <div className="w-[24px] h-[24px] flex items-center justify-center"><Image  className="w-[18px] h-[18px]" src={dribble} alt=""/></div>
                </div>
            </div>
            {/* 2 */}
            <div className="w-[394.67px] h-[209px] flex flex-col gap-[24px] items-center">
            <div className="w-[80px] h-[80px] mx-[157.33]"><Image  src={img2} alt=""/></div>
            <div className="w-[394.px] h-[57px]">
            <p className="text-center font-semibold text-[20px] leading-[30px]">Joseph Munyambu</p>
            <p className="text-center text-[18px] laeding-[27px]">Marketing Coordinator</p>
           </div>
           <div className="w-[100px] h-[24px] flex gap-[14px] mx-[147.33px]">
                    <div className="w-[24px] h-[24px] flex items-center justify-center"><FaLinkedin/></div>
                     <div className="w-[24px] h-[24px] flex items-center justify-center"><FaTwitter/></div>
                     <div className="w-[24px] h-[24px] flex items-center justify-center"><Image  className="w-[18px] h-[18px]" src={dribble} alt=""/></div>
            </div>
           </div>
            {/* 3 */}
            <div className="w-[394.67px] h-[209px]   flex-col gap-[24px] items-center sm:flex">
           <div className="w-[80px] h-[80px] mx-[157.33px]"><Image src={img3} alt=""/></div>
             <div className="w-[394.67px] h-[57px]">
             <p className="text-center font-semibold text-[20px] leading-[30px]">Joseph Munyambu</p>
            <p className="text-center text-[18px] laeding-[27px]">Nursing Assistant</p>
             </div>
             <div className="w-[100px] h-[24px] flex gap-[14px] mx-[147.33px]">
             <div className="w-[24px] h-[24px] flex items-center justify-center"><FaLinkedin/></div>
             <div className="w-[24px] h-[24px] flex items-center justify-center"><FaTwitter/></div>
             <div className="w-[24px] h-[24px] flex items-center justify-center"><Image  className="w-[18px] h-[18px]" src={dribble} alt=""/></div>
           </div>
            </div>
            <div className="w-[155px] h-[48px] border-solid mx-[112.5px] flex justify-center">
              <button className="w-[89px] h-[40px] mx-[45.5px] border-solid border-black border-[1px] rounded-[5px]">View All</button>
            </div>
            </div>
     </section>   
  )
}
