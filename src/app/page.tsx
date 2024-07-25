import ExperienceSection from '@/components/ExperienceSection';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BioSection from '@/components/BioSection';
import ProjectSection from '@/components/ProjectSection';
import SkillSection from '@/components/SkillSection';

export default function Home() {
  return (
    <main className='relative w-screen'>
      <Header/>
      <HeroSection/>
      <BioSection/>
      <ExperienceSection/>
      <ProjectSection/>
      <SkillSection/>
      <footer className="font-sora font-2xl text-white text-center w-full bg-[#ffffff17] p-4 rounded-t-2xl font-normal">All rights reserved © 2024<br/>Nabeel Muhammad</footer>
    </main>
  );
}
