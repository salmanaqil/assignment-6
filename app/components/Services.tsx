
import React from 'react'
import Image from "next/image"
import  pentool from '../Assets/pen-tool-2.png'
import volumehigh from '../Assets/volume-high.png'
import  microphone from '../Assets/microphone.png'
import  arrow from '../Assets/arrow-2.png'
import  briefcase from '../Assets/briefcase.png'
import  book from '../Assets/book(1).png'
import round from '../Assets/round.png'
import  book1 from '../Assets/book.png'
import group from '../Assets/group.png'

export default function Services(){
    return(
        <section  id='Services' className='w-[1280px] h-[1049px]  font-roboto flex flex-col py-[112px] justify-center items-center'>
        <div className='md:w-[768px] w-[410px] h-[109px] hidden md:flex flex-col gap-[24px] mx-[256px] '>  
          <h2 className=' text-[48px] leading-[57.6px]  font-bold '>Explore Courses by Category</h2> 
          <p className='text-[18px] leading-[27px] '>Discover a wide range of courses covering a variety of subjects, taught by expert instructors. </p>
        </div>
       <div className='md:hidden w-[385px] h-[162px] flex flex-col gap-[24px] mr-[19px]'>
    <h4 className=' h-[84px]  w-[385] text-[32px] leading-[41.6px]   text-center font-bold'>Explore Courses by Category</h4>
     <p className='text-[18px] w-[385] h-[54px] text-center leading-[27px] '>Discover a wide range of courses covering a variety of subjects, taught by expert instructors. </p>
       </div>
    
        <div className=' w-full h-[636px] flex flex-col gap-[64px] mt-[80px] items-center'>  
         <div className='h-[132px] flex  gap-[24px]'>
            {/* 1 */}
        <div className='w-[410.67px] h-[132px] flex bg-[#F7F7F7] p-[16px] rounded-[5px] gap-[32px]'>
         <div className='w-[100px] h-[100px] flex bg-white rounded-[5xp] justify-center items-center ' >
          <Image className='w-[32px] h-[32px] 'src={pentool} alt=''/>
         </div>
        <div className='w-[246.67px] h-[57px]  my-[21.5px]'>
         <p className='font-semibold  text-[20px] leading-[30px]'>Design and Development</p>
          <p className='tetx-[18px] leading-[27px]'>50+ courses Available</p>
        </div>
        </div>
        {/* 2 */}
        <div className='w-[410.67px] h-[132px]   bg-[#F7F7F7] custom850:flex hidden p-[16px] rounded-[5px] gap-[32px]'>
         <div className='w-[100px] h-[100px] flex bg-white rounded-[5xp] justify-center items-center ' >
          <Image className='w-[32px] h-[32px] 'src={ volumehigh} alt=''/>
         </div>
        <div className='w-[246.67px] h-[57px]  my-[21.5px]'>
         <p className='font-semibold  text-[20px] leading-[30px]'>Marketing</p>
          <p className='tetx-[18px] leading-[27px]'>50+ courses Available</p>
        </div>
        </div>
         {/* 3 */}
         <div className='w-[410.67px] h-[132px] flex bg-[#F7F7F7] p-[16px] rounded-[5px] gap-[32px]'>
         <div className='w-[100px] h-[100px] flex bg-white rounded-[5xp] justify-center items-center ' >
          <Image className='w-[32px] h-[32px] 'src={group} alt=''/>
         </div>
        <div className='w-[246.67px] h-[57px]  my-[21.5px]'>
         <p className='font-semibold  text-[20px] leading-[30px]'>Development</p>
          <p className='tetx-[18px] leading-[27px]'>50+ courses Available</p>
        </div>
        </div>
         </div>
         <div className='h-[132px] flex gap-[24px]'> 
         {/*4  */}
         <div className='w-[410.67px] h-[132px] flex bg-[#F7F7F7] p-[16px] rounded-[5px] gap-[32px]'>
         <div className='w-[100px] h-[100px] flex bg-white rounded-[5xp] justify-center items-center ' >
          <Image className='w-[32px] h-[32px] 'src={ microphone} alt=''/>
         </div>
        <div className='w-[246.67px] h-[57px]  my-[21.5px]'>
         <p className='font-semibold  text-[20px] leading-[30px]'>Communication</p>
          <p className='tetx-[18px] leading-[27px]'>50+ courses Available</p>
        </div>
        </div>
        {/* 5 */}
        <div className='w-[410.67px] h-[132px] flex bg-[#F7F7F7] p-[16px] rounded-[5px] gap-[32px]'>
         <div className='w-[100px] h-[100px] flex bg-white rounded-[5xp] justify-center items-center ' >
          <Image className='w-[32px] h-[32px] 'src={ round} alt=''/>  </div>
        <div className='w-[246.67px] h-[57px]  my-[21.5px]'>
         <p className='font-semibold  text-[20px] leading-[30px]'>Digital Marketing</p>
          <p className='tetx-[18px] leading-[27px]'>50+ courses Available</p>
        </div>
         </div>
        {/* 6 */}
        <div className='w-[410.67px] h-[132px] flex bg-[#F7F7F7] p-[16px] rounded-[5px] gap-[32px]'>
         <div className='w-[100px] h-[100px] flex bg-white rounded-[5xp] justify-center items-center ' >
          <Image className='w-[32px] h-[32px] 'src={ arrow} alt=''/>
         </div>
        <div className='w-[246.67px] h-[57px]  my-[21.5px]'>
         <p className='font-semibold  text-[20px] leading-[30px]'>Self Development</p>
          <p className='tetx-[18px] leading-[27px]'>50+ courses Available</p>
        </div>
        </div>
        </div>
           <div className='h-[132px] gap-[24px] flex'>
            {/* 7 */}
            <div className='w-[410.67px] h-[132px] flex bg-[#F7F7F7] p-[16px] rounded-[5px] gap-[32px]'>
         <div className='w-[100px] h-[100px] flex bg-white rounded-[5xp] justify-center items-center ' >
          <Image className='w-[32px] h-[32px] 'src={ briefcase} alt=''/>
         </div>
        <div className='w-[246.67px] h-[57px]  my-[21.5px]'>
         <p className='font-semibold  text-[20px] leading-[30px]'>Bussiness</p>
          <p className='tetx-[18px] leading-[27px]'>50+ courses Available</p>
        </div>
        </div>
              {/* 8 */}
              <div className='w-[410.67px] h-[132px] flex bg-[#F7F7F7] p-[16px] rounded-[5px] gap-[32px]'>
         <div className='w-[100px] h-[100px] flex bg-white rounded-[5xp] justify-center items-center ' >
          <Image className='w-[32px] h-[32px] 'src={ book} alt=''/>
         </div>
        <div className='w-[246.67px] h-[57px]  my-[21.5px]'>
         <p className='font-semibold  text-[20px] leading-[30px]'>Finance</p>
          <p className='tetx-[18px] leading-[27px]'>50+ courses Available</p>
        </div>
        </div>
          {/* 9 */}
          <div className='w-[410.67px] h-[132px] flex bg-[#F7F7F7] p-[16px] rounded-[5px] gap-[32px]'>
         <div className='w-[100px] h-[100px] flex bg-white rounded-[5xp] justify-center items-center ' >
          <Image className='w-[32px] h-[32px] 'src={ book1} alt=''/>
         </div>
        <div className='w-[246.67px] h-[57px]  my-[21.5px]'>
         <p className='font-semibold  text-[20px] leading-[30px]'>Consulting</p>
          <p className='tetx-[18px] leading-[27px]'>50+ courses Available</p>
        </div>
        </div>
           </div>
              <div className='w-[155px] h-[48xp] border-solid mx-[562.5px] '>
                <button className='w-[155xp] h-[48px] border-solid border-black border-[5px ] rounded-[5px]' >View All Courses</button>
              </div>
              </div>
              </section>
    )
};
