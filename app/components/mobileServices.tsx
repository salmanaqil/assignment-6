
import React from 'react'
import Image from "next/image"
import pentool from '../Assets/pen-tool-2.png'
import volumehigh from '../Assets/volume-high.png'
import group from '../Assets/group.png'

export default function MobileServices(){
  return(
    <section className='w-[428px] h-[862px] flex flex-col gap-[48px] justify-center items-center'>
      <div className='w-[385px] h-[162px] flex flex-col gap-[24px] mr-[19px] '>
        <h4 className='w-[385px] h-[84px]  text-[32px] leading-[41.6px] text-center font-bold '>Explore Courses by Category</h4>
        <p className='w-[385px] h-[54px]  text-[18px] leading-[27px] text-center '>Discover a wide range of courses covering a variety of subjects, taught by expert instructors. </p>
      </div>
      <div className=' w-[380px] h-[556px] flex flex-col gap-[64px]'>
       <div className='w-[380px] h-[444px] flex flex-col gap-[24px]'>
      <div className='w-[380px] h-[132px] flex bg-[#F7F7F7] p-[16px] rounded-[5px] gap-[32px]'>
       <div className='w-[100px] h-[100px] flex bg-white rounded-[5xp] justify-center items-center gap-[px]' >
        <Image className='w-[32px] h-[32px] 'src={pentool} alt=''/>
       </div>
      <div className='w-[246.67px] h-[57px]  my-[21.5px]'>
       <p className='font-semibold  text-[20px] leading-[30px]'>Design and Development</p>
        <p className='tetx-[18px] leading-[27px]'>50+ courses Available</p>
      </div>
      </div>
      <div className='w-[380px] h-[132px] flex bg-[#F7F7F7] p-[16px] rounded-[5px] gap-[32px]'>
       <div className='w-[100px] h-[100px] flex bg-white rounded-[5xp] justify-center items-center gap-[px]' >
        <Image className='w-[32px] h-[32px] 'src={volumehigh} alt=''/>
       </div>
      <div className='w-[246.67px] h-[57px]  my-[21.5px]'>
       <p className='font-semibold  text-[20px] leading-[30px]'>Design and Development</p>
        <p className='tetx-[18px] leading-[27px]'>50+ courses Available</p>
      </div>
      </div>
      <div className='w-[380px] h-[132px] flex bg-[#F7F7F7] p-[16px] rounded-[5px] gap-[32px]'>
       <div className='w-[100px] h-[100px] flex bg-white rounded-[5xp] justify-center items-center gap-[px]' >
        <Image className='w-[32px] h-[32px] 'src={ group} alt=''/>
       </div>
      <div className='w-[246.67px] h-[57px]  my-[21.5px]'>
       <p className='font-semibold  text-[20px] leading-[30px]'>Design and Development</p>
        <p className='tetx-[18px] leading-[27px]'>50+ courses Available</p>
      </div>
      </div>
    </div>
      <div className='w-[155px] h-[48px] border-solid mx-[112.5px]'>
        <button className='w-[155px] h-[48px] border-solid border-black border-[1px] rounded-[5px]' >View All Courses</button>
      </div>
       </div>
      
  </section>
  )
};
