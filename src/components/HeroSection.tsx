import Image from "next/image"
import { forwardRef, MutableRefObject, useEffect, useRef } from "react"
function handleMove(e:MouseEvent, heroImage:MutableRefObject<HTMLImageElement>){
  const height = heroImage.current.clientHeight;
  const width = heroImage.current.clientWidth;
  const xVal = e.layerX;
  const yVal = e.layerY;
  const yRotation = 30 * ((xVal - width / 2) / width);
  const xRotation = -30 * ((yVal - height / 2) / height);
  const stringStyle = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
  heroImage.current.style.transform = stringStyle;
}

const HeroSection = forwardRef(function HeroSection(props, ref){
  const heroImage = useRef() as MutableRefObject<HTMLImageElement>;  
  useEffect(()=>{
    if(window.innerWidth>=1024){
      heroImage.current.addEventListener('mousemove', (e)=>{handleMove(e, heroImage)});
      heroImage.current.addEventListener('mouseout', ()=>{
        heroImage.current.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
      });
      heroImage.current.addEventListener('mousedown', ()=>{
        heroImage.current.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)';
      });
      heroImage.current.addEventListener('mouseup',()=>{
        heroImage.current.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
      });
    }
  })
  
  return(
      <section className='relative w-full p-8 mt-16 flex flex-col gap-10 scroll-mt-16 justify-center sm:w-[40rem] lg:flex-row-reverse lg:w-[85%] lg:mt-20 lg:scroll-mt-20 lg:h-[30rem] lg:p-0 lg:justify-evenly xl:mt-32 lg:pt-10 xl:scroll-mt-32' ref={ref as any}>
        <Image className='w-72 self-center hover:drop-shadow-[0_0_0.4rem_rgba(255,255,255,0.623)] transition-all lg:transition-none lg:w-[35%]' src='/images/3dshape.png' alt='' width={1552} height={1560} ref={heroImage}/>
        <h1 className='font-sora font-semibold text-4xl bg-[linear-gradient(to_right,#7b57c1_10%,#f4eafd)] bg-clip-text text-transparent text-center lg:text-[2.75rem] lg:text-start lg:flex lg:items-center lg:w-[60%] lg:leading-tight xl:text-[3.1rem]'>Hello, I&apos;m Nabeel.<br/>I am a college student interested in business and programming, from web development to data science.</h1>
      </section>
    )
})
export default HeroSection;