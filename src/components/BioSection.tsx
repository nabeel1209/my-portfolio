import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
export default function BioSection(){
    return(
        <section className='relative w-full p-8 flex flex-col items-center gap-5 mt-16'>
          <div className='w-48 h-48 p-1 bg-gradient-to-r from-[#7b57c1] to-[#f4eafd] rounded-full'>
          <Image className="w-[184px] h-[184px] bg-[#0f0615] rounded-full" src="/images/fotodiri.png" alt="" width={500} height={500}></Image>
          </div>
          <div className='w-full flex flex-col text-white px-4 items-center gap-1'>
          <h1 className='font-sora font-bold text-3xl'>About Me</h1>
          <p className='font-inter font-normal text-base text-center'>With expertise in <span className="font-black bg-[linear-gradient(to_right,#406d99_20%,#fad55b_80%)] bg-clip-text text-transparent"><a href="https://www.python.org/" target="_blank">Python</a></span> and <span className="font-black bg-[linear-gradient(to_right,#ec2025_20%,#a01618_80%)] bg-clip-text text-transparent"><a href="https://www.java.com/">Java</a></span> for data science, I specialize in leveraging data to solve complex problems and generate actionable insights. I am passionate about continuous learning, meticulous in documentation, and experienced in leading collaborative teams.</p>
          </div>
          <div className='w-full px-8 text-white items-center flex mt-3 flex-col gap-3'>
          <h1 className='font-sora font-bold text-3xl'>Let&apos;s Connect</h1>
          <div className='flex w-3/5 justify-evenly text-3xl'>
              <a href="https://www.linkedin.com/in/nabeelmuhammad12/" target="_blank" ><FontAwesomeIcon className='hover:scale-125 transition-all duration-500 ease-in-out' icon={faLinkedin}/></a>
              <a href="https://github.com/nabeel1209" target="_blank"><FontAwesomeIcon className='hover:scale-125 transition-all duration-500 ease-in-out' icon={faGithub} /></a>
              <a href="https://www.instagram.com/nblmhd__/" target="_blank"><FontAwesomeIcon className='hover:scale-125 transition-all duration-500 ease-in-out' icon={faInstagram}/></a>
              <a href="https://x.com/addictedtomath" target="_blank"><FontAwesomeIcon className='hover:scale-125 transition-all duration-500 ease-in-out' icon={faXTwitter}/></a>
          </div>
          <a className='w-3/5' href="/pdfs/NabeelMuhammad_CV.pdf" download=""><button className='w-full h-10 bg-white text-[#0f0615] rounded-xl font-sora font-bold flex justify-evenly p-2 hover:scale-105 transition-all duration-500 ease-in-out'>Download CV<Image className='w-auto h-6' src="/images/downloaddark.png" alt='' width={512} height={512}></Image></button></a>
          </div>
      </section>
    )
}