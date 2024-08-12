import Image from "next/image"
import { MutableRefObject, useEffect, useRef, useState } from "react"

function handleMenu(status:boolean, listRef:MutableRefObject<HTMLSpanElement>[]){
    if(!status){
        listRef[0].current.classList.add('animate-navSlideRight');
        listRef[1].current.classList.add('animate-topSlideRight');
        listRef[2].current.classList.add('animate-midSlideRight');
        listRef[3].current.classList.add('animate-botSlideRight');
        setTimeout(()=>{
            listRef[0].current.classList.remove('animate-navSlideRight');
            listRef[0].current.style.transform = "translate(0%)";
            listRef[1].current.classList.remove('animate-topSlideRight');
            listRef[1].current.style.transform="rotate(45deg)";
            listRef[2].current.classList.remove('animate-midSlideRight');
            listRef[2].current.style.scale="0";
            listRef[3].current.classList.remove('animate-botSlideRight');
            listRef[3].current.style.transform="rotate(-45deg)"
        }, 1000);
    }else{
        listRef[0].current.classList.add('animate-navSlideLeft');
        listRef[1].current.classList.add('animate-topSlideLeft');
        listRef[2].current.classList.add('animate-midSlideLeft');
        listRef[3].current.classList.add('animate-botSlideLeft');
        setTimeout(()=>{
            listRef[0].current.classList.remove('animate-navSlideLeft');
            listRef[0].current.style.transform = "translate(-100%)";
            listRef[1].current.classList.remove('animate-topSlideLeft');
            listRef[1].current.style.transform="rotate(0deg)";
            listRef[2].current.classList.remove('animate-midSlideLeft');
            listRef[2].current.style.scale="1";
            listRef[3].current.classList.remove('animate-botSlideLeft');
            listRef[3].current.style.transform="rotate(0deg)"
        }, 1000);
    }
}

function scrollTo(ref:MutableRefObject<HTMLDivElement>){
    ref.current.scrollIntoView();
}

function animate(ref:MutableRefObject<HTMLDivElement>, refList:MutableRefObject<HTMLDivElement>[]){
    if(ref == refList[0]){
        
    }
}

export default function Header(props:{refList:MutableRefObject<HTMLDivElement>[]}){
    const [openMenu, setOpenMenu] = useState(false);
    const header = useRef() as MutableRefObject<HTMLDivElement>;
    const menu1 = useRef() as MutableRefObject<HTMLSpanElement>;
    const menu2 = useRef() as MutableRefObject<HTMLSpanElement>;
    const menu3 = useRef() as MutableRefObject<HTMLSpanElement>;
    return(
        <header className='fixed p-8 pt-20 w-[12.5rem] h-screen bg-[#ffffff17] rounded-r-3xl backdrop-blur-[0.5rem] top-0 flex flex-col justify-start z-50 -translate-x-full self-start lg:translate-x-0 lg:self-center lg:w-[90%] lg:p-0 lg:h-[4.4rem] lg:flex-row lg:top-3 lg:rounded-full lg:items-center lg:px-4  lg:justify-between' ref={header}>
            <div className='flex flex-col mt-5 mb-2 gap-3 lg:flex-row lg:h-20 lg:m-0 lg:items-center lg:gap-4'>
                <a href="https://nabeelmuhammad.vercel.app/"><Image className='w-16 lg:w-auto lg:h-12' src='/images/LOGO.png' alt='' width={1500} height={1500}></Image></a>
                <h1 className='font-poppins text-white font-semibold text-2xl lg:text-xl xl:text-2xl'>Nabeel Muhammad</h1>
            </div>
            <nav className='flex flex-col gap-8 my-16 font-inter text-white font-normal text-lg p-1 lg:flex-row lg:gap-20 lg:text-[1rem] lg:items-center lg:my-0 lg:mr-12 lg:select-none'>
                <a className='cursor-pointer hover:font-medium hover:scale-105 lg:text-center lg:w-16 transition-all duration-500' onClick={(e)=>{scrollTo(props.refList[0]);if(window.innerWidth<1024){setOpenMenu(!openMenu);handleMenu(openMenu, [header, menu1, menu2, menu3]);setOpenMenu(!openMenu)}}}>Home</a>
                <a className='cursor-pointer hover:font-medium hover:scale-105 lg:text-center lg:w-16 transition-all duration-500' onClick={(e)=>{scrollTo(props.refList[1]);if(window.innerWidth<1024){setOpenMenu(!openMenu);handleMenu(openMenu, [header, menu1, menu2, menu3]);setOpenMenu(!openMenu)}}}>About</a>
                <a className='cursor-pointer hover:font-medium hover:scale-105 lg:text-center lg:w-24 transition-all duration-500' onClick={(e)=>{scrollTo(props.refList[3]);if(window.innerWidth<1024){setOpenMenu(!openMenu);handleMenu(openMenu, [header, menu1, menu2, menu3]);setOpenMenu(!openMenu)}}}>Tech Stack</a>
                <a className='cursor-pointer hover:font-medium hover:scale-105 lg:text-center lg:w-16 transition-all duration-500' onClick={(e)=>{scrollTo(props.refList[2]);if(window.innerWidth<1024){setOpenMenu(!openMenu);handleMenu(openMenu, [header, menu1, menu2, menu3]);setOpenMenu(!openMenu)}}}>Projects</a>
            </nav>
            <div className='fixed -right-7 top-6 w-10 h-[2.083125rem] translate-x-full justify-between flex flex-col cursor-pointer lg:hidden' onClick={(e)=>{handleMenu(openMenu, [header, menu1, menu2, menu3]);setOpenMenu(!openMenu)}}>
                <span className='w-full h-[0.3125rem] bg-[#ffffffb0] backdrop-blur-[8px] rounded-full origin-[left_center]' ref={menu1}></span>
                <span className='w-full h-[0.3125rem] bg-[#ffffffb0] backdrop-blur-[8px] rounded-full origin-center' ref={menu2}></span>
                <span className='w-full h-[0.3125rem] bg-[#ffffffb0] backdrop-blur-[8px] rounded-full origin-[left_center]' ref={menu3}></span>
            </div>
        </header>)
}