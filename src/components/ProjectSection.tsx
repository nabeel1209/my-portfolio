type projectData={
    type:string,
    title:string,
    desc:string,
}
function Project(data:projectData){
    return(
        <div className='w-full flex flex-col gap-3 hover:scale-95 transition-all duration-500 ease-in-out'>
            <div className='w-full h-40 rounded-2xl bg-[#ffffff17]'></div>
            <div className='p-1 flex flex-col gap-[2px]'>
              <p className='font-inter font-semibold text-[#DEDEDE] tracking-wide text-lg'>{data.type}</p>
              <h1 className='font-sora font-bold text-white text-2xl'>{data.title}</h1>
              <p className='font-inter font-normal text-[#D4D4D4] text-lg'>{data.desc}</p>
            </div>
        </div>
    )
}

export default function ProjectSection(){
    return(
        <section className='relative w-full p-8 mt-16 flex flex-col items-center gap-4'>
            <h1 className='font-sora font-bold text-white text-3xl text-center'>Featured Project</h1>
            <div className='w-full h-[580px] p-1 flex flex-col items-center gap-6 overflow-y-scroll'>
                <Project type='Coming Soon' title='Coming Soon' desc='Coming Soon'/>
                <Project type='Coming Soon' title='Coming Soon' desc='Coming Soon'/>
                <Project type='Coming Soon' title='Coming Soon' desc='Coming Soon'/>
            </div>
        </section>
    )
}