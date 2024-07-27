import type { Metadata } from "next";
import { Inter, Poppins, Sora } from "next/font/google";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Analytics } from "@vercel/analytics/react";
config.autoAddCss = false

const inter = Inter({ subsets: ["latin"] , variable:'--font-inter'});
const poppins = Poppins({subsets:["latin"], variable:'--font-poppins', weight:['100', '200', '300', '400', '500', '600', '700', '800', '900']});
const sora = Sora({subsets:['latin'], variable:'--font-sora'})

export const metadata: Metadata = {
  title: "Nabeel's Portfolio",
  description: "Hello! I'm Nabeel, a dedicated Information System student at Universitas Indonesia with an interest in business, data science, and programming. I have a high curiosity to learn more about my interests. I am capable in problem-solving, prioritizing tasks, and providing creative ideas. This portfolio showcases my projects, skills, and experiences that reflect my journey in the field of Information Systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // className='scroll-smooth'
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${sora.variable} ${poppins.variable} bg-[#0f0615] w-screen flex flex-col justify-center items-center overflow-x-hidden`}>{children}<Analytics/></body>
    </html>
  );
}
