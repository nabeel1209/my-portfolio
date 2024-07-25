import Image from "next/image"
export default function Header(){
    return(
        <header className='fixed p-8 pt-20 w-[12.5rem] h-screen bg-[#ffffff17] rounded-r-3xl backdrop-blur-[8px] top-0 left-0 flex flex-col justify-start z-50 -translate-x-full'>
            <div className='flex flex-col mt-5 mb-2 gap-3'>
            <Image className='w-16' src='/images/LOGO.png' alt='' width={1500} height={1500}></Image>
            <h1 className='font-poppins text-white font-semibold text-2xl'>Nabeel Muhammad</h1>
            </div>
            <nav className='flex flex-col gap-8 my-16'>
            <a className='font-inter text-white font-normal text-lg p-1'>Home</a>
            <a className='font-inter text-white font-normal text-lg p-1'>About</a>
            <a className='font-inter text-white font-normal text-lg p-1'>Project</a>
            <a className='font-inter text-white font-normal text-lg p-1'>Skills</a>
            </nav>
            <div className='fixed -right-7 top-6 w-10 h-12 translate-x-full justify-evenly flex flex-col'>
            <div className='w-full h-[5px] bg-[#ffffffb0] backdrop-blur-[8px] rounded-full '></div>
            <div className='w-full h-[5px] bg-[#ffffffb0] backdrop-blur-[8px] rounded-full '></div>
            <div className='w-full h-[5px] bg-[#ffffffb0] backdrop-blur-[8px] rounded-full '></div>
            </div>
        </header>)
}