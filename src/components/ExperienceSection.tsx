import Image from "next/image";
import { MutableRefObject, useRef } from "react";
type experienceData = {
    src:string, 
    width:number, 
    height:number, 
    position:string,
    org:string, 
    date:string
 }
function scrollLeft(elem:MutableRefObject<HTMLDivElement>){
  elem.current.scrollLeft-=250
}
function scrollRight(elem:MutableRefObject<HTMLDivElement>){
  elem.current.scrollLeft+=250
}
function Experience(data:experienceData){
    return (
        <div className='flex flex-col items-center relative hover:scale-105 transition-all duration-500 ease-in-out group'>
          <div className='w-20 h-20 p-[0.1875rem] bg-[linear-gradient(to_right,#7b57c1,#f4eafd)] rounded-full z-10 absolute lg:w-[4.5rem] lg:h-[4.5rem]'>
            <Image className='rounded-full w-[74px] h-[74px] bg-[#0f0615] lg:w-[66px] lg:h-[66px]' src={data.src} alt='' width={data.width} height={data.height}></Image>
          </div>
          <div className='relative w-[calc(95%+4px)] h-[11.5rem] bg-[linear-gradient(to_right,#7b57c1,#f4eafd)] mt-10 flex rounded-[18px] group-hover:shadow-md group-hover:shadow-slate-700 lg:w-64 lg:mt-[2.25rem] group-hover:lg:shadow-lg group-hover:lg:shadow-slate-700'>
            <div className='w-[calc(100%-4px)] h-[11.25rem] bg-[#0f0615] relative rounded-2xl px-8 pt-12 flex flex-col items-center gap-3 m-auto lg:pt-11 lg:gap-2 lg:px-7'>
              <h1 className='text-center font-sora font-semibold text-lg'>{data.position}</h1>
              <p className='text-center font-inter font-medium text-sm text-[#efede8a6]'>{data.org}</p>
              <p className='text-center font-inter font-normal text-sm text-[#efede8a6]'>{data.date}</p>
            </div>
          </div>
        </div>
    )
}
export default function ExperienceSection(){
  const experienceGallery = useRef() as MutableRefObject<HTMLDivElement>;  
  return(
      <section className='relative w-full p-8 mt-16 text-white flex flex-col gap-7 sm:w-[40rem] lg:w-[90%] lg:flex-row lg:mt-10'>
        <div className='flex flex-col items-center gap-1 px-4 lg:px-0 lg:items-start lg:w-[40%]'>
          <h1 className='font-sora font-bold text-3xl'>Experiences</h1>
          <p className='font-inter font-normal text-center lg:text-start'>Showcasing my organizational background and significant contributions, emphasizing my ability to foster teamwork, lead initiatives, and achieve collective goals in different settings.</p>
        </div>
        <div className='relative lg:w-[65%] lg:flex-row items-center' >
          <span className="invisible lg:visible absolute text-nowrap font-inter text-xl font-black left-3 cursor-pointer p-1 z-10 bg-[#ffffff17] rounded-full top-3 select-none" onClick={()=>scrollLeft(experienceGallery)}>&lt;--</span>
          <div className="relative w-full p-4 flex flex-col bg-[#ffffff17] rounded-2xl gap-5 h-[32.8125rem] overflow-y-scroll overflow-x-hidden lg:w-[100%] lg:flex-row lg:overflow-y-hidden lg:overflow-x-scroll lg:h-[17rem] lg:px-10 lg:py-1 lg:rounded-3xl lg:items-center lg:gap-6 lg:no-scrollbar transition-all scroll-smooth" ref={experienceGallery}>
            <Experience src='/images/experiences/fuki.png' width={480} height={480} position='ITF Staff' org='Forum Ukhuwah dan Kajian Islam Fasilkom UI' date='Jun 2024 - Present'/>
            <Experience src='/images/experiences/ddp0.jpg' width={800} height={800} position='Student Mentor' org='Dasar-Dasar Pemrograman 0' date='Jun 2024 - Present'/>
            <Experience src='/images/experiences/compfest.png' width={1860} height={1860} position='Event Staff' org='Compfest' date='May 2024 - Present'/>
            <Experience src='/images/experiences/betis.jpg' width={200} height={200} position='Student Mentor' org='BETIS Fasilkom UI' date='Nov 2023'/>
            <Experience src='/images/experiences/gaung.jpg' width={1080} height={1080} position='PIC of Operational Division' org='Gathering CSUI 23' date='Jun 2024 - Present'/>
          </div>
          <span className="invisible lg:visible absolute text-nowrap font-inter text-xl font-black right-3 cursor-pointer p-1 z-10 bg-[#ffffff17] rounded-full  top-3 select-none" onClick={()=>scrollRight(experienceGallery)}>--&gt;</span>
        </div>
      </section>)
}