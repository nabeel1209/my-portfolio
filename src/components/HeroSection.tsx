import Image from "next/image"
import { forwardRef, MutableRefObject } from "react"

const HeroSection = forwardRef( function HeroSection(props, ref){
    return(
      <section className='relative w-full p-8 mt-16 flex flex-col gap-10 scroll-mt-16' ref={ref as any}>
        <Image className='w-72 self-center' src='/images/3dshape.png' alt='' width={1552} height={1560}></Image>
        <h1 className='font-sora font-semibold text-4xl bg-[linear-gradient(to_right,#7b57c1_10%,#f4eafd)] bg-clip-text text-transparent text-center bg-clip'>Hello, I&apos;m Nabeel. <br/> I am a college student with an interest in business, data science, and programming.</h1>
      </section>
    )
})
export default HeroSection;