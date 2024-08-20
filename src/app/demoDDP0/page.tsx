"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Home(){
    const router = useRouter();
    return (
        <main className="relative w-screen h-screen bg-[#fbfcfd]">
            <div className="z-10 bg-white p-2 absolute top-4 left-4 font-inter text-xl rounded-full font-semibold md:bg-[#0f0615] md:text-white cursor-pointer" onClick={()=>{router.push("../")}}>
                &lt;--
            </div>
            <div className="calendly-inline-widget calendly-mobile relative min-w-[320px] h-full m-auto" data-url="https://calendly.com/nabeel-muhammad-office/30min?background_color=0f0615&amp;text_color=ffffff&amp;primary_color=ffffff" data-processed="true">
                <div className="calendly-spinner">
                    <div className="calendly-bounce1"></div>
                    <div className="calendly-bounce2"></div>
                    <div className="calendly-bounce3"></div>
                </div>
                <iframe id="iframe" className="visible bg-white" src="https://calendly.com/nabeel-muhammad-office/30min?embed_domain=&amp;embed_type=Inline&amp;background_color=0f0615&amp;text_color=ffffff&amp;primary_color=ffffff" width="100%" height="100%" frameBorder="0" title="Select a Date &amp; Time - Calendly">
                </iframe>
            </div>
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
        </main>
    )
}