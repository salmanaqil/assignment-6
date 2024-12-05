import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import dribble from '../Assets/dribble.png'
import img1 from '../Assets/about-img-1.png'
import img2 from '../Assets/about-img-2.png'
import img3 from '../Assets/about-img-3.png'
import img4 from '../Assets/about-img-4.png'
import img5 from '../Assets/about-img-5.png'
import img6 from '../Assets/about-img-6.png'
export default function AboutUs(){
  return (
     <section id="AboutUs" className="w-[1280px] h-[895px] bg-[#F7F7F7]  py-[112px] flex flex-col gap-[80px] items-center">
<div className="w-[768px]  h-[109px] mx-[256px] flex flex-col gap-[16px]">
  <h2 className="font-bold text-[48px] leading-[57.6px] text-center"> our team</h2>
  </div> 
<p className="text-center text-[18px] leading-[27px]">Lorem ipsum dolor sit amet, concectetur adipiscing elit.</p>
<div className="h-[482px flex flex-col gap-[64px]">
                       {/* profile 1 */}
      <div className="h-[209px] xl:w-[1060px] md:w-[760px] sm:w-[604px] w-[428px] flex flex-row xl:gap-[48px] justify-between"> 
    <div className="w-[394.67px] h-[209px] flex flex-col gap-[24px] items-center">
        <div  className="w-[80px] h-[80px] mx-[157.33px]">
      < Image src={img1} alt=""/>
        </div>
        <div>
              <p className="text-center font-semibold text-[20px] leading-[30px]">Joseph Munyambu</p>
            <p className="text-center text-[18px] laeding-[27px]">Nursing Assistant</p>
            </div>
            <div className="w-[100px] h-[24px] flex gap-[14px] mx-[147.33px]">
             <div className="w-[24px] h-[24px] flex items-center justify-center"><FaLinkedin/></div>
             <div className="w-[24px] h-[24px] flex items-center justify-center"><FaTwitter/></div>
             <div className="w-[24px] h-[24px] flex items-center justify-center"><Image  className="w-[18px] h-[18px]" src={dribble} alt=""/></div>
            </div>
            </div>
           
             {/* profile 2 */}
             <div className="w-[394.67px] h-[209px] flex flex-col gap-[24px] items-center">
        <div  className="w-[80px] h-[80px] mx-[157.33px]">
      < Image src={img2} alt=""/>
        </div>
        <div>
              <p className="text-center font-semibold text-[20px] leading-[30px]">Joseph Munyambu</p>
            <p className="text-center text-[18px] laeding-[27px]">Nursing Assistant</p>
            </div>
            <div className="w-[100px] h-[24px] flex gap-[14px] mx-[147.33px]">
             <div className="w-[24px] h-[24px] flex items-center justify-center"><FaLinkedin/></div>
             <div className="w-[24px] h-[24px] flex items-center justify-center"><FaTwitter/></div>
             <div className="w-[24px] h-[24px] flex items-center justify-center"><Image  className="w-[18px] h-[18px]" src={dribble} alt=""/></div>
            </div>
            </div>
            {/* profile 3*/}
            <div className="w-[394.67px] h-[209px] hidden flex-col gap-[24px] items-center sm:flex">
           <div className="w-[80px] h-[80px] mx-[157.33px]">
             <Image src={img3} alt=""/>
             </div>
             <div className="w-[394.67px] h-[57px]">
             <p className="text-center font-semibold text-[20px] leading-[30px]">Joseph Ngumbau</p>
             <p className="text-center text-[18px] laeding-[27px]">Medical Assistant</p>
             </div>
             <div className="w-[100px] h-[24px] flex gap-[14px] mx-[147.33px]">
             <div className="w-[24px] h-[24px] flex items-center justify-center"><FaLinkedin/></div>
             <div className="w-[24px] h-[24px] flex items-center justify-center"><FaTwitter/></div>
             <div className="w-[24px] h-[24px] flex items-center justify-center"><Image  className="w-[18px] h-[18px]" src={dribble} alt=""/></div>
             </div>
            </div>
            </div>
            </div>
            
            <div className="h-[482px flex flex-col gap-[64px]"> 
            {/* profile 4 */}
            <div className="h-[209px] xl:w-[1060px] md:w-[760px] sm:w-[640px] w-[428px] flex flex-row xl:gap-[48px] justify-between">
             <div className="w-[394.67px] h-[209px] flex flex-col gap-[24px] items-center">
              <div className="w-[80px] h-[80px] mx-[157.33px]">
                <Image src={img4} alt=""/>
              </div>
              <div>
              <p className="text-center font-semibold text-[20px] leading-[30px]">Erick Kibkemboi</p>
            <p className="text-center text-[18px] laeding-[27px]">Designer</p>
            </div>
            <div className="w-[100px] h-[24px] flex gap-[14px] mx-[147.33px]">
             <div className="w-[24px] h-[24px] flex items-center justify-center"><FaLinkedin/></div>
             <div className="w-[24px] h-[24px] flex items-center justify-center"><FaTwitter/></div>
             <div className="w-[24px] h-[24px] flex items-center justify-center"><Image  className="w-[18px] h-[18px]" src={dribble} alt=""/></div>
           </div>
           </div>
             {/* profile 5 */}
             <div className="w-[394.67px] h-[209px] flex flex-col gap-[24px] items-center">
        <div  className="w-[80px] h-[80px] mx-[157.33px]">
      < Image src={img5} alt=""/>
        </div>
        <div>
              <p className="text-center font-semibold text-[20px] leading-[30px]">Stephen Kerabu</p>
            <p className="text-center text-[18px] laeding-[27px]">President of sales</p>
            </div>
            <div className="w-[100px] h-[24px] flex gap-[14px] mx-[147.33px]">
             <div className="w-[24px] h-[24px] flex items-center justify-center"><FaLinkedin/></div>
             <div className="w-[24px] h-[24px] flex items-center justify-center"><FaTwitter/></div>
             <div className="w-[24px] h-[24px] flex items-center justify-center"><Image  className="w-[18px] h-[18px]" src={dribble} alt=""/></div>
            </div>
            </div>
            {/* profile 6 */}
            <div className="w-[394.67px] h-[209px] hidden flex-col gap-[24px] items-center sm:flex">
           <div className="w-[80px] h-[80px] mx-[157.33px]">
             <Image src={img6} alt=""/>
             </div>
             <div className="w-[394.67px] h-[57px]">
             <p className="text-center font-semibold text-[20px] leading-[30px]">John Leboo</p>
            <p className="text-center text-[18px] laeding-[27px]">Dog Trainer</p>
             </div>
             <div className="w-[100px] h-[24px] flex gap-[14px] mx-[147.33px]">
             <div className="w-[24px] h-[24px] flex items-center justify-center"><FaLinkedin/></div>
             <div className="w-[24px] h-[24px] flex items-center justify-center"><FaTwitter/></div>
             <div className="w-[24px] h-[24px] flex items-center justify-center"><Image  className="w-[18px] h-[18px]" src={dribble} alt=""/></div>
             </div>
            </div>
            </div>
            </div> 
            
       </section> 
    )
}

