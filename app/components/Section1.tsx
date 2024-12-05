
import React from 'react'
import pic from '../Assets/Image 2.png'
import air1 from '../Assets/Airbnb Logo (1).png'
import air2 from '../Assets/Airbnb Logo(2).png' 
import air3 from '../Assets/Airbnb Logo (3).png'
import air4 from '../Assets/Airbnb Logo (4).png'
import air5 from '../Assets/Airbnb Logo (5).png'
import air6 from '../Assets/Airbnb Logo (6).png'
import Image from "next/image";
  
export default function Section1(){
  return(
    <section id='Home'  className=" w-[1280px] h-full font-roboto">
      <div className='flex justify-between items-center md:flex-row flex-col'>
   <div className='w-[640px] h-[300px] xl:my-[250px] lg:my-[170px] md:my-[14px] my-[50px] xl:pl-[80px] xl:pr-[60px] pl-[10px] flex flex-col gap-[24px]'>
    <div className='w-[500px] h-[212px] flex flex-col gap-[24px]'>
      <h1 className='text-[56px] font-bold leading-[67.2px] h-[134px]'>Learn new skills online with ease </h1>
      <p className='text-[18px] leading-[27px] h-[54px]'> Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
    </div>
    <div className=' w-[358px] h-[64px] pt-[16px] flex gap-[16px]'>
      <button className='w-[178px] h-[48px] rounded-[5px] bg-black text-white'>Start Learning now</button>
      <button className=' w-[164px] h-[48px] rounded-[5px] border-solid border-black border-[1px]'>Start Learning now</button>
    </div>
   </div>
    <div className='w-[440px]'><Image src={pic} alt=''/></div>
      </div>
      <div className='h-[228px] bg-[#F7F7F7]flex justify-between'></div>
      <div className='w-[315px] h-[68px]'>
     <h5 className='font-bold text-[24px] leading-[33.6px] py-[80px] ml-[8px]'>Trusted by 2000+ companies worldwide.</h5>
     </div>
     <div className='w-[880px] h-[56px] flex my-[86px] py-[8.74px] xl:gap-[19.2px] xl:pl-[41.56px]'>
     <Image src={air2} alt=''/>
     <Image src={air5} alt=''/>
     <Image src={air4} alt=''/>
     <Image className='hidden lg:block' src={air6} alt=''/>
     <Image className='hidden lg:block' src={air1} alt=''/>
     <Image className='hidden lg:block' src={air3} alt=''/>
     </div>
    
      </section>
 )    
} ;
