
import React from 'react'
import Image from "next/image"
import star from '../Assets/testeniol-star.png'
import img1 from '../Assets/about-img-1.png'
import rArrow from '../Assets/left.png'
import lArrow from '../Assets/right.png'

 export default function MobileTestimonials(){
    return(
     <section className='h-[681.89px] w-[428px] py-[48px] px-[24px] gap-[48px] flex flex-col items-center '>
   <div className='-w-[361px] h-[120px] flex flex-col gap-[24px]'>
   <h4 className='tracking-tight tetx-[32px] leading-[41.5px] text-center font-bold'>What Our Students Say</h4>
    <p className='text-[18px] items-center leading-[27px]'>Lorem ipsum dolor sit amet, concectetur adipiscing elit.</p>
   </div>
     <div className='h-[321.89px] w-[362.27px] p-[32px] flex flex-col gap-[24px] border-solid border-black border-[1px] '>
     <div className='w-[116px] h-[18.89px] flex flex-row gap-[4px]'> 
     <Image className='w-[20px]'src={star} alt=''/>
     <Image className='w-[20px]'src={star} alt=''/>
     <Image className='w-[20px]'src={star} alt=''/>
     <Image className='w-[20px]'src={star} alt=''/>
     <Image className='w-[20px]'src={star} alt=''/>
     </div>
      <div className='w-[298.67px] h-[215px] flex flex-col gap-[24xp]'>
        <p className='text-[18px] leading-[27px]'>&quot;Lorem ipsum dolor sit amet,  consecteture  adipiscing elit. susoendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;</p>
        <div className='w-[254px] h-[56px] flex flex-row gap-[20px]'>
            <Image className='w-[6px] h-[56px]' src={img1} alt=''/>
            <div className='w-[178px] h-[48px] my-[4px]'>
             <p className='text-[16px] h-[24px] leading-[24px] font-semibold'>James Nduku</p>
                <p className='text-[16px] h-[24px] leading-[24px]'>Softaware Developer</p>
            </div>
        </div>
      </div>
     </div>
     <div className='h-[48px] w-[380px] flex justify-between'>
       <div className='w-[72px] h-[8px] flex gap-[8px] my-[5] '>
       <div className='rounded-full h-2 w-2 bg-[#8D8D8D]'></div>
       <div className='rounded-full h-2 w-2 bg-[#8D8D8D]'></div>
       <div className='rounded-full h-2 w-2 bg-[#8D8D8D]'></div>
       <div className='rounded-full h-2 w-2 bg-[#8D8D8D]'></div>
       <div className='rounded-full h-2 w-2 bg-[#8D8D8D]'></div>
       </div>
       <div className='w-[111px] h-[48px] flex gap-[15px]'>
        <button className='w-[12px] h-[12px]'><Image src={lArrow} alt=''/></button>
        <button className='w-[12px] h-[12px]'><Image src={rArrow} alt=''/></button>
       </div>
     </div>
     </section>
    )
 };
