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

export default function Header(props:{refList:MutableRefObject<HTMLDivElement>[]}){
    const [openMenu, setOpenMenu] = useState(false);
    const header = useRef() as MutableRefObject<HTMLDivElement>;
    const menu1 = useRef() as MutableRefObject<HTMLSpanElement>;
    const menu2 = useRef() as MutableRefObject<HTMLSpanElement>;
    const menu3 = useRef() as MutableRefObject<HTMLSpanElement>;
    return(
        <header className='fixed p-8 pt-20 w-[12.5rem] h-screen bg-[#ffffff17] rounded-r-3xl backdrop-blur-[0.5rem] top-0 left-0 flex flex-col justify-start z-50 -translate-x-full' ref={header}>
            <div className='flex flex-col mt-5 mb-2 gap-3'>
                <Image className='w-16' src='/images/LOGO.png' alt='' width={1500} height={1500}></Image>
                <h1 className='font-poppins text-white font-semibold text-2xl'>Nabeel Muhammad</h1>
            </div>
            <nav className='flex flex-col gap-8 my-16'>
                <a className='font-inter text-white font-normal text-lg p-1 cursor-pointer' onClick={(e)=>{scrollTo(props.refList[0]);setOpenMenu(!openMenu);handleMenu(openMenu, [header, menu1, menu2, menu3]);setOpenMenu(!openMenu)}}>Home</a>
                <a className='font-inter text-white font-normal text-lg p-1 cursor-pointer' onClick={(e)=>{scrollTo(props.refList[1]);setOpenMenu(!openMenu);handleMenu(openMenu, [header, menu1, menu2, menu3]);setOpenMenu(!openMenu)}}>About</a>
                <a className='font-inter text-white font-normal text-lg p-1 cursor-pointer' onClick={(e)=>{scrollTo(props.refList[2]);setOpenMenu(!openMenu);handleMenu(openMenu, [header, menu1, menu2, menu3]);setOpenMenu(!openMenu)}}>Projects</a>
                <a className='font-inter text-white font-normal text-lg p-1 cursor-pointer' onClick={(e)=>{scrollTo(props.refList[3]);setOpenMenu(!openMenu);handleMenu(openMenu, [header, menu1, menu2, menu3]);setOpenMenu(!openMenu)}}>Skills</a>
            </nav>
            <div className='fixed -right-7 top-6 w-10 h-[2.083125rem] translate-x-full justify-between flex flex-col cursor-pointer' onClick={(e)=>{handleMenu(openMenu, [header, menu1, menu2, menu3]);setOpenMenu(!openMenu)}}>
                <span className='w-full h-[0.3125rem] bg-[#ffffffb0] backdrop-blur-[8px] rounded-full origin-[left_center]' ref={menu1}></span>
                <span className='w-full h-[0.3125rem] bg-[#ffffffb0] backdrop-blur-[8px] rounded-full origin-center' ref={menu2}></span>
                <span className='w-full h-[0.3125rem] bg-[#ffffffb0] backdrop-blur-[8px] rounded-full origin-[left_center]' ref={menu3}></span>
            </div>
        </header>)
}