import Image from "next/image";
type experienceData = {
    src:string, 
    width:number, 
    height:number, 
    position:string,
    org:string, 
    date:string
 }
function Experience(data:experienceData){
    return (
        <div className='flex flex-col items-center relative hover:scale-105 transition-all duration-500 ease-in-out group'>
          <div className='w-20 h-20 p-[3px] bg-[linear-gradient(to_right,#7b57c1,#f4eafd)] rounded-full z-10 absolute'>
            <Image className='rounded-full w-[74px] h-[74px] bg-[#0f0615]' src={data.src} alt='' width={data.width} height={data.height}></Image>
          </div>
          <div className='relative w-[calc(95%+4px)] h-[11.5rem] bg-[linear-gradient(to_right,#7b57c1,#f4eafd)] mt-10 flex rounded-[18px] group-hover:shadow-md group-hover:shadow-slate-700'>
            <div className='w-[calc(100%-4px)] h-[11.25rem] bg-[#0f0615] relative rounded-2xl px-8 pt-12 flex flex-col items-center gap-3 m-auto'>
              <h1 className='text-center font-sora font-semibold text-lg'>{data.position}</h1>
              <p className='text-center font-inter font-medium text-sm text-[#efede8a6]'>{data.org}</p>
              <p className='text-center font-inter font-normal text-sm text-[#efede8a6]'>{data.date}</p>
            </div>
          </div>
        </div>
    )
}
export default function ExperienceSection(){
    return(
      <section className='relative w-full p-8 mt-16 text-white flex flex-col gap-7'>
        <div className='flex flex-col items-center gap-1 px-4'>
          <h1 className='font-sora font-bold text-3xl'>Experiences</h1>
          <p className='font-inter font-normal text-center'>Showcasing my organizational background and significant contributions, emphasizing my ability to foster teamwork, lead initiatives, and achieve collective goals in different settings.</p>
        </div>
        <div className='w-full p-4 flex flex-col bg-[#ffffff17] rounded-2xl gap-5 h-[525px] overflow-y-scroll'>
          <Experience src='/images/fuki.png' width={480} height={480} position='ITF Staff' org='Forum Ukhuwah dan Kajian Islam Fasilkom UI' date='Jun 2024 - Present'/>
          <Experience src='/images/ddp0.jpg' width={800} height={800} position='Student Mentor' org='Dasar-Dasar Pemrograman 0' date='Jun 2024 - Present'/>
          <Experience src='/images/compfest.png' width={1860} height={1860} position='Event Staff' org='Compfest' date='May 2024 - Present'/>
          <Experience src='/images/betis.jpg' width={200} height={200} position='Student Mentor' org='BETIS Fasilkom UI' date='Nov 2023'/>
          <Experience src='/images/gaung.jpg' width={1080} height={1080} position='PIC of Operational Division' org='Gathering CSUI 23' date='Jun 2024 - Present'/>
        </div>
      </section>)
}