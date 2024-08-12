'use client';
import ExperienceSection from '@/components/ExperienceSection';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BioSection from '@/components/BioSection';
import ProjectSection from '@/components/ProjectSection';
import TechStackSection from '@/components/TechStackSection';
import { MutableRefObject, useEffect, useRef } from 'react';

export default function Home() {
  const hero = useRef() as MutableRefObject<HTMLDivElement>;
  const bio = useRef() as MutableRefObject<HTMLDivElement>;
  const project = useRef() as MutableRefObject<HTMLDivElement>
  const skill = useRef() as MutableRefObject<HTMLDivElement>;
  const cursor = useRef() as MutableRefObject<HTMLDivElement>;
  const refList = [hero, bio, project, skill];
  useEffect(()=>{
    document.addEventListener('mousemove', (e)=>{
    cursor.current.style.borderWidth = '2px'
    cursor.current.style.borderColor = 'white';
    cursor.current.style.left = e.clientX+'px';
    cursor.current.style.top = e.clientY+'px';
    if(window.innerWidth>=1024){
      cursor.current.style.display='block'
    }
  });document.addEventListener('mouseout', ()=>{cursor.current.style.display='none'})
  });
  return (
    <main className='relative w-full flex flex-col justify-center items-center'>
      <Header refList={refList}/>
      <HeroSection ref={hero}/>
      <BioSection ref={bio}/>
      <ExperienceSection/>
      <TechStackSection ref={skill}/>
      <ProjectSection ref={project}/>
      <div className="hidden lg:block fixed w-12 h-12 rounded-full z-50 bottom-0 left-0 border-solid pointer-events-none -translate-y-1/2 -translate-x-1/2 mix-blend-difference" ref={cursor}></div> 
      <footer className="font-sora font-2xl text-white text-center w-full bg-[#ffffff17] p-4 rounded-t-2xl font-normal mt-20 lg:mt-28">All rights reserved © 2024<br/>Nabeel Muhammad</footer>
    </main>
  );
}
