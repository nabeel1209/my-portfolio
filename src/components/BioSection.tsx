import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { forwardRef } from "react";

const BioSection = forwardRef(function BioSection(props, ref){
    return(
        <section className='relative w-full p-8 flex flex-col items-center gap-5 mt-16 scroll-mt-16 sm:w-[40rem] lg:w-[90%] lg:flex-row lg:justify-between lg:mt-8 lg:scroll-mt-16 lg:pt-12 xl:mt-16 xl:scroll-mt-20' ref={ref as any}>
          <div className='w-48 h-48 p-1 bg-gradient-to-r from-[#7b57c1] to-[#f4eafd] rounded-full flex justify-center items-center lg:w-[9.5rem] lg:h-[9.5rem] lg:p-[0.2rem] overflow-hidden'>
            <Image className="w-[11.5rem] h-[11.5rem] bg-[#0f0615] rounded-full lg:w-[9.1rem] lg:h-[9.1rem]" src="/images/fotodiri.png" alt="" width={500} height={500}></Image>
          </div>
          <div className='w-full flex flex-col text-white px-4 items-center gap-1 lg:w-[28rem] xl:w-[33.8125rem] lg:h-full lg:items-start'>
            <h1 className='font-sora font-bold text-3xl lg:text-2xl xl:text-3xl'>About Me</h1>
            <p className='font-inter font-normal text-base text-center lg:text-start'>With expertise in <span className="font-black bg-[linear-gradient(to_right,#406d99_20%,#fad55b_80%)] bg-clip-text text-transparent"><a href="https://www.python.org/" target="_blank">Python</a></span> and <span className="font-black bg-[linear-gradient(to_right,#ec2025_20%,#a01618_80%)] bg-clip-text text-transparent"><a href="https://www.java.com/">Java</a></span>, I solve complex problems and enhance user experiences through versatile programming. Passionate about continuous learning and leading collaborative teams, I contribute effectively to diverse projects from web development to automation.</p>
          </div>
          <div className='w-full px-8 text-white items-center flex mt-3 flex-col gap-3 lg:w-auto lg:h-full lg:mt-0 lg:items-start'>
            <h1 className='font-sora font-bold text-3xl lg:text-2xl xl:text-3xl'>Let&apos;s Connect</h1>
            <div className='flex w-3/5 justify-evenly text-3xl lg:w-4/5 lg:justify-between'>
                <a href="https://www.linkedin.com/in/nabeelmuhammad12/" target="_blank" ><FontAwesomeIcon className='hover:scale-125 transition-all duration-500 ease-in-out' icon={faLinkedin}/></a>
                <a href="https://github.com/nabeel1209" target="_blank"><FontAwesomeIcon className='hover:scale-125 transition-all duration-500 ease-in-out' icon={faGithub} /></a>
                <a href="https://www.instagram.com/nblmhd__/" target="_blank"><FontAwesomeIcon className='hover:scale-125 transition-all duration-500 ease-in-out' icon={faInstagram}/></a>
                <a href="https://x.com/addictedtomath" target="_blank"><FontAwesomeIcon className='hover:scale-125 transition-all duration-500 ease-in-out' icon={faXTwitter}/></a>
            </div>
            <a className='w-3/5 lg:w-4/5' href="/pdfs/NabeelMuhammad_CV.pdf" download=""><button className='w-full h-10 bg-white text-[#0f0615] rounded-xl font-sora font-bold flex justify-evenly p-2 hover:scale-105 transition-all duration-500 ease-in-out items-center lg:text-sm'>View CV<Image className='w-auto h-6' src="/images/downloaddark.png" alt='' width={512} height={512}></Image></button></a>
          </div>
      </section>
    )
})
export default BioSection;