'use client';
import ExperienceSection from '@/components/ExperienceSection';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BioSection from '@/components/BioSection';
import ProjectSection from '@/components/ProjectSection';
import SkillSection from '@/components/SkillSection';
import { MutableRefObject, useRef } from 'react';

export default function Home() {
  const hero = useRef() as MutableRefObject<HTMLDivElement>;
  const bio = useRef() as MutableRefObject<HTMLDivElement>;
  const project = useRef() as MutableRefObject<HTMLDivElement>
  const skill = useRef() as MutableRefObject<HTMLDivElement>
  const refList = [hero, bio, project, skill];
  return (
    <main className='relative w-screen'>
      <Header refList={refList}/>
      <HeroSection ref={hero}/>
      <BioSection ref={bio}/>
      <ExperienceSection/>
      <ProjectSection ref={project}/>
      <SkillSection ref={skill}/>
      <footer className="font-sora font-2xl text-white text-center w-full bg-[#ffffff17] p-4 rounded-t-2xl font-normal mt-20">All rights reserved © 2024<br/>Nabeel Muhammad</footer>
    </main>
  );
}
