import React from 'react'; 
 import Image from "next/image";
  import Logo from '../Assets/Logo.png'
 import menu from '../Assets/menu.png'
 
  export default function MobileHeader (){
    return(
      <header className='w-[428px] h-[72px] border-b-[1px] border-solid border-black px-[24px] py-[12px]'> 
      <div className='w-[380px] h-[48px] flex gap-[32px]'>
       <div className='w-[300px] h-[41px]  my-[3.5px]'>
        <div className='w-[130.6px] h-[41px] flex items-center'>
          <Image className=' w-[130.6px] h-[30.38px]' src={  Logo } alt=''/>
        </div>
        </div>
         <div className='w-[48px] h-[48px] p-[3]'>
          <div className='w-[24px] h-[24px]'>
            <Image src={menu} alt=''/> 
          </div>
         </div>
      </div>
      </header>
    )
  }
