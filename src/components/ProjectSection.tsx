import { forwardRef, ReactElement } from "react";
import Image from "next/image";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type projectData={
    type:string,
    title:string,
    desc:string,
    url:string,
    techStack:ReactElement,
    href:string,
    hrefRepo:string,
    repoVis:string
}
function Project(data:projectData){
    return(
        <div className='w-full flex flex-col gap-1 hover:scale-95 transition-all duration-500 ease-in-out lg:gap-3 lg:items-center lg:w-[47%]'>
            <div className="lg:w-full relative">
                <a href={data.href} target="_blank" className={`${data.url} relative w-full h-44 rounded-2xl bg-[#ffffff17] overflow-hidden flex justify-start bg-cover bg-center p-3 lg:h-64 xl:h-[18rem] lg:rounded-3xl`}>
                    {data.techStack}
                </a>
                <a href={data.hrefRepo} target="_blank" className={`${data.repoVis} absolute text-white bottom-3 right-3 bg-[#4d4d4d42] pb-1 px-2 pt-[0.375rem] rounded-2xl hover:scale-125 transition-all duration-500`}><FontAwesomeIcon className='text-xl' icon={faGithub}/></a>
            </div>
            <div className='p-1 flex flex-col lg:w-full lg:gap-2'>
              <p className='font-inter font-semibold text-[#DEDEDE] tracking-wide text-sm lg:text-[1rem]'>{data.type}</p>
              <h1 className='font-sora font-bold text-white text-xl lg:text-4xl'><a target="_blank" href={data.href}>{data.title}</a></h1>
              <p className='font-inter font-normal text-[#D4D4D4] text-sm lg:text-[1rem] lg:leading-tight'>{data.desc}</p>
            </div>
        </div>
    )
}

 const ProjectSection = forwardRef(function ProjectSection(props, ref){
    return(
        <section className='relative w-full p-8 mt-16 flex flex-col items-center gap-4 scroll-mt-16 sm:w-[40rem] lg:w-[90%] lg:items-start' ref={ref as any}>
            <h1 className='font-sora font-bold text-white text-3xl text-center xl:text-4xl'>Projects</h1>
            <div className='w-full h-[36.25rem] p-1 flex flex-col items-center gap-[4%] overflow-y-scroll overflow-x-hidden lg:flex-row lg:flex-wrap lg:h-fit lg:justify-around lg:gap-0 lg:gap-y-6 lg:items-start'>
                <Project type='Web Development' title='Portfolio Website' desc='This portfolio presents an overview of my projects, skills, and experiences, providing a detailed insight into my journey and development in the field of Information Systems. It reflects the knowledge I have gained and the skills I have honed along the way.' url="bg-[url('./../../public/images/projects/portfolio-website.png')]" hrefRepo="https://github.com/nabeel1209/my-portfolio" repoVis="visible" href="" techStack={(
                        <div className="w-fit h-9 flex justify-start items-center absolute bottom-3 gap-2 bg-[#4d4d4d42] p-2 rounded-xl">
                            <div className="w-5 h-5"><Image className="rounded-md" src="/images/techStack/typescript.png" alt="" width={200} height={200}/></div>
                            <div className="w-5 h-5"><Image className="rounded-md" src="/images/techStack/react.png" alt="" width={200} height={200}/></div>
                            <div className="w-5 h-5"><Image className="rounded-md" src="/images/techStack/nextjs.png" alt="" width={200} height={200}/></div>
                            <div className="w-5 h-5"><Image className="rounded-md" src="/images/techStack/tailwind.png" alt="" width={200} height={200}/></div>
                        </div>)}/>
                <Project type='Web Development' title='Ca-Chat' desc='Welcome to Ca-Chat, a uniquely designed communication platform created exclusively for meaningful conversations between me and my loved one. Ca-Chat offers a private and secure space for me and my partner to share our thoughts, feelings, and moments without any distractions.' url="bg-[url('./../../public/images/projects/ca-chat.png')]" hrefRepo="" repoVis="invisible" href="https://ca-chat.nabeelmuhammad.me/" techStack={(
                    <div className="w-fit h-9 flex justify-start items-center absolute bottom-3 gap-2 bg-[#4d4d4d42] p-2 rounded-xl ">
                        <div className="w-5 h-5"><Image className="rounded-md" src="/images/techStack/typescript.png" alt="" width={200} height={200}/></div>
                        <div className="w-5 h-5"><Image className="rounded-md" src="/images/techStack/react.png" alt="" width={200} height={200}/></div>
                        <div className="w-5 h-5"><Image className="rounded-md" src="/images/techStack/nextjs.png" alt="" width={200} height={200}/></div>
                        <div className="w-5 h-5"><Image className="rounded-md" src="/images/techStack/tailwind.png" alt="" width={200} height={200}/></div>
                        <div className="w-5 h-5"><Image className="rounded-md" src="/images/techStack/firebase.png" alt="" width={200} height={200}/></div>
                    </div>)}/>
                <Project type='Web/Mobile Development' title='Jajan Jogja' desc='Jajan Jogja is a web and mobile application designed to help tourists plan their culinary journeys in Yogyakarta. Featuring restaurant search and a culinary trip planner, users can discover local delicacies based on location, price, and reviews, and seamlessly organize their culinary adventures on the go.' url="bg-[url('./../../public/images/projects/jajan-jogja.png')]" hrefRepo="https://github.com/orgs/PBP-A02-2024/repositories" repoVis="visible" href="https://farrel-reksa-jajanjogja.pbp.cs.ui.ac.id/" techStack={(
                    <div className="w-fit h-9 flex justify-start items-center absolute bottom-3 gap-2 bg-[#4d4d4d42] p-2 rounded-xl ">
                        <div className="w-5 h-5"><Image className="rounded-md" src="/images/techStack/python.png" alt="" width={200} height={200}/></div>
                        <div className="w-5 h-5"><Image className="rounded-md" src="/images/techStack/dart.png" alt="" width={200} height={200}/></div>
                        <div className="w-5 h-5"><Image className="rounded-md" src="/images/techStack/django.png" alt="" width={200} height={200}/></div>
                        <div className="w-4 h-4"><Image className="rounded-md" src="/images/techStack/flutter.png" alt="" width={200} height={200}/></div>
                        <div className="w-5 h-5"><Image className="rounded-md" src="/images/techStack/tailwind.png" alt="" width={200} height={200}/></div>
                    </div>)}/>
                <Project type='Coming Soon' title='Coming Soon' desc='Coming Soon' url="" hrefRepo="" repoVis="invisible" href="" techStack={(<></>)}/>
            </div>
        </section>
    )
})
export default ProjectSection;