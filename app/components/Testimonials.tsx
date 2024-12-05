import React from 'react'
import Image from "next/image"
import star from '../Assets/testeniol-star.png'
import img1 from '../Assets/about-img-3.png'
import img2 from '../Assets/about-img-1.png'
import img3 from '../Assets/about-img-2.png'
import rArrow from '../Assets/left.png'
import lArrow from '../Assets/right.png'

 export default function Testimonials(){
    return(
        <section id='Testimonial' className='h-full w-[1280px] py-[112px]  bg-[#F7F7F7] gap-[80px] flex flex-col items-start '>
        <div className='w-[560px] h-[109px] flex flex-col gap-[24px] ml-[64px]'>
        <h4 className=' tetx-[48px] leading-[57.6px] font-bold'>Customer testimonials</h4>
         <p className='text-[18px]  leading-[27px]'>Lorem ipsum dolor sit amet, concectetur adipiscing elit.</p>
        </div>
      <div className='xl:w-[1152px] w-[768px] h-[417.89px] flex flex-col gap-[48px] mx-[64px]'>
        <div className='h-[321.89px] flex flex-row gap-[32px]'>
    {/* 1 */}
    <div className='h-[321.89px] w-[362.27px] p-[32px] flex flex-col gap-[24px] border-solid border-black border-[1px]'>
    <div className='w-[116px] h-[18.89px] flex flex-[row] gap-[4px]'>
    <Image className='w-[20px]' src={star} alt=''/>
    <Image className='w-[20px]' src={star} alt=''/>
    <Image className='w-[20px]' src={star} alt=''/>
    <Image className='w-[20px]' src={star} alt=''/>
    <Image className='w-[20px]' src={star} alt=''/>
    </div>
    <div className='w-[298.67px] h-[215px] flex flex-col gap-[24xp]'>
        <p className='text-[18px] leading-[27px]'>&quot;Lorem ipsum dolor sit amet,  consecteture  adipiscing elit. susoendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;</p>
        <div className='w-[254px] h-[56px] flex flex-row gap-[20px]'>
            <Image className='w-[64px] h-[56px]' src={img1} alt=''/>
            <div className='w-[178px] h-[48px] my-[4px]'>
             <p className='text-[16px] h-[24px] leading-[24px] font-semibold'>James Nduku</p>
                <p className='text-[16px] h-[24px] leading-[24px]'>Softaware Developer</p>
            </div>
        </div>
      </div>
    </div>
   {/* 2 */}
   <div className='h-[321.89px] w-[362.27px] p-[32px] flex flex-col gap-[24px] border-solid border-black border-[1px]'>
    <div className='w-[116px] h-[18.89px] flex flex-row gap-[4px]'>
    <Image className='w-[20px]' src={star} alt=''/>
    <Image className='w-[20px]' src={star} alt=''/>
    <Image className='w-[20px]' src={star} alt=''/>
    <Image className='w-[20px]' src={star} alt=''/>
    <Image className='w-[20px]' src={star} alt=''/>
    </div>
    <div className='w-[298.67px] h-[215px] flex flex-col gap-[24xp]'>
        <p className='text-[18px] leading-[27px]'>&quot;Lorem ipsum dolor sit amet,  consecteture  adipiscing elit. susoendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;</p>
        <div className='w-[254px] h-[56px] flex flex-row gap-[20px]'>
            <Image className='w-[64px] h-[56px]' src={img2} alt=''/>
            <div className='w-[178px] h-[48px] my-[4px]'>
             <p className='text-[16px] h-[24px] leading-[24px] font-semibold'>Erick Kipkemboi</p>
                <p className='text-[16px] h-[24px] leading-[24px]'>Scrum Master</p>
            </div>
        </div>
      </div>
    </div> 
    {/* 3 */}
    <div className='h-[321.89px] w-[362.27px] p-[32px] flex flex-col gap-[24px] border-solid border-black border-[1px]'>
    <div className='w-[116px] h-[18.89px] flex flex-row gap-[4px]'>
    <Image className='w-[20px]' src={star} alt=''/>
    <Image className='w-[20px]' src={star} alt=''/>
    <Image className='w-[20px]' src={star} alt=''/>
    <Image className='w-[20px]' src={star} alt=''/>
    <Image className='w-[20px]' src={star} alt=''/>
    </div>
    <div className='w-[298.67px] h-[215px] flex flex-col gap-[24xp]'>
        <p className='text-[18px] leading-[27px]'>&quot;Lorem ipsum dolor sit amet,  consecteture  adipiscing elit. susoendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;</p>
        <div className='w-[254px] h-[56px] flex flex-row gap-[20px]'>
            <Image className='w-[64px] h-[56px]' src={img3} alt=''/>
            <div className='w-[178px] h-[48px] my-[4px]'>
             <p className='text-[16px] h-[24px] leading-[24px] font-semibold'>Stephen kerubo</p>
                <p className='text-[16px] h-[24px] leading-[24px]'>UI/UX Designer</p>
            </div>
        </div>
      </div>
    </div> 
        </div>
        <div className='h-[48px] xl:w-[1152px] w-[760px] flex justify-between'>
          <div className='w-[72px] h-[8px] flex gap-[8px] my-[5px]'>
            <div className='rounded-full h-2 w-2 bg-black'></div>
            <div  className='rounded-full h-2 w-2 bg-[#8D8D8D]'></div>
            <div className='rounded-full h-2 w-2 bg-[#8D8D8D]'></div>
            <div className='rounded-full h-2 w-2 bg-[#8D8D8D]'></div>
            <div className='rounded-full h-2 w-2 bg-[#8D8D8D]'></div>
          </div>
          <div className='w-[111px] h-[48px] flex gap-[15px]'>
            <button className='w-[12px] h-[12px]'><Image src={lArrow} alt=''/></button>
            <button className='w-[12px] h-[12px]'><Image src={rArrow} alt=''/></button>
          </div>
        </div>
      </div>
      </section>
    )
};
