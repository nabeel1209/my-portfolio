import { forwardRef, ReactElement } from "react";
import Image from "next/image";

type projectData={
    type:string,
    title:string,
    desc:string,
    url:string,
    techStack:ReactElement,
    href:string
}
function Project(data:projectData){
    return(
        <div className='w-full flex flex-col gap-1 hover:scale-95 transition-all duration-500 ease-in-out'>
            <a href={data.href} target="_blank">
                <div className={`${data.url} relative w-full h-44 rounded-2xl bg-[#ffffff17] overflow-hidden flex justify-start bg-cover bg-center p-3`}>
                    {data.techStack}
                </div>
            </a>
            <div className='p-1 flex flex-col'>
              <p className='font-inter font-semibold text-[#DEDEDE] tracking-wide text-sm'>{data.type}</p>
              <h1 className='font-sora font-bold text-white text-xl'>{data.title}</h1>
              <p className='font-inter font-normal text-[#D4D4D4] text-sm'>{data.desc}</p>
            </div>
        </div>
    )
}

 const ProjectSection = forwardRef(function ProjectSection(props, ref){
    return(
        <section className='relative w-full p-8 mt-16 flex flex-col items-center gap-4 scroll-mt-16' ref={ref as any}>
            <h1 className='font-sora font-bold text-white text-3xl text-center'>Featured Projects</h1>
            <div className='w-full h-[36.25rem] p-1 flex flex-col items-center gap-6 overflow-y-scroll overflow-x-hidden'>
                <Project type='Web Development' title='Ca-Chat' desc='Welcome to Ca-Chat, a uniquely designed communication platform created exclusively for meaningful conversations between me and my loved one. Ca-Chat offers a private and secure space for me and my partner to share our thoughts, feelings, and moments without any distractions.' url="bg-[url('./../../public/images/projects/ca-chat.png')]" href="https://ca-chat.vercel.app/" techStack={(
                    <div className="w-fit h-9 flex justify-start items-center absolute bottom-3 gap-2 bg-[#4d4d4d42] p-2 rounded-xl">
                        <div className="w-5 h-5"><Image className="rounded-md" src="/images/skills/typescript.png" alt="" width={200} height={200}/></div>
                        <div className="w-5 h-5"><Image className="rounded-md" src="/images/skills/nextjs.png" alt="" width={200} height={200}/></div>
                        <div className="w-5 h-5"><Image className="rounded-md" src="/images/skills/next-auth.png" alt="" width={200} height={200}/></div>
                        <div className="w-5 h-5"><Image className="rounded-md" src="/images/skills/firebase.png" alt="" width={200} height={200}/></div>
                    </div>)}/>
                <Project type='Coming Soon' title='Coming Soon' desc='Coming Soon' url="" href="" techStack={(<></>)}/>
                <Project type='Coming Soon' title='Coming Soon' desc='Coming Soon' url="" href="" techStack={(<></>)}/>
            </div>
        </section>
    )
})
export default ProjectSection;