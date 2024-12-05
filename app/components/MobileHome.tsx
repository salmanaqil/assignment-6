import Link from "next/link";
import React from "react";
import Image from "next/image";
import img1 from '../Assets/Airbnb Logo (1).png';
import img2 from '../Assets/Airbnb Logo(2).png';
import img3 from '../Assets/Airbnb Logo (3).png';
import img4 from '../Assets/Airbnb Logo (4).png';
import image from '../app/Image 2.png';

export default function MobileHome(){
  return(
   <section className=" w-[428px]">
    <div className="w-[428px] h-[390px] px-[24px] py-[64px] flex flex-col gap-[24px] items-center">
    <div className="w-[380px] h-[174px] flex flex-col gap-[24px]">
      <h3 className="w-[380px] text-[40px] font-bold leading-[48px]">Learn new skills </h3>
      <p className="">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
    </div>
    <div className='w-[358px] h-[64px] pt-[16px] flex gap-[16px]'>
            <button className=' h-[12px] w-[178px] bg-black text-white rounded-[5px]'>Start Learning now</button>
            <button className=' h-[12px] w-[164px] bg-black border-solid border-[1px] rounded-[5px]'> Explore courses.</button>
           </div>
            </div>
            <div className='w-[428px] h-[239.343px] px-[48px] py-[48px]  flex flex-col gap-[24px] items-center'>
                <div className='w-[327px] h-[54px] text-[18px] font-bold leading-[27px] tracking-tighter'>
             <p className=' text-[18px] leading-[27px] font-bold'>Trusted by the world's best comapnies &#91; socail prooof to build credibility&#93; </p>
                </div>
        <div className="h-[65.34px] py-[16px] flex custom420:gap-[16px]">
       <Image src={img1} alt=""/>
       <Image src={img3} alt=""/>
       <Image src={img4} alt=""/>
       <Image src={img2} alt=""/>
       <Image className="custom420:block hidden " src={img2} alt=""/>
        </div>
    </div>
   </section>
  )
};
