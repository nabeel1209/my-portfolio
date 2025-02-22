import type { Metadata } from "next";
import { Inter, Poppins, Sora } from "next/font/google";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SEOHead from "@/components/SEOHead";
config.autoAddCss = false

const inter = Inter({ subsets: ["latin"] , variable:'--font-inter'});
const poppins = Poppins({subsets:["latin"], variable:'--font-poppins', weight:['100', '200', '300', '400', '500', '600', '700', '800', '900']});
const sora = Sora({subsets:['latin'], variable:'--font-sora'})

export const metadata: Metadata = {
  title: "Nabeel's Portfolio",
  description: "I'm Nabeel, an Information Systems student at University of Indonesia passionate about business, data science, and programming. Explore my projects, skills, and experiences in web development, analytics, and problem-solving.",
  keywords: [
    "Nabeel Muhammad",
    "Information Systems",
    "Data Science",
    "Programming",
    "Web Development",
    "Business Analytics",
    "Data Analytics",
    "Software Engineering",
    "Problem-Solving",
  ],
  authors: [{ name: "Nabeel Muhammad", url: "https://nabeelmuhammad.me" }],
  openGraph: {
    title: "Nabeel's Portfolio",
    description:
      "Explore my projects, skills, and experiences in web development, data science, and business analytics.",
    url: "https://nabeelmuhammad.me",
    siteName: "Nabeel Muhammad Portfolio",
    images: [
      {
        url: "https://nabeelmuhammad.me/_next/image?url=%2Fimages%2FLOGO.png&w=3840&q=75",
        width: 620,
        height: 620,
        alt: "Nabeel Muhammad's Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nabeel's Portfolio",
    description:
      "Explore my journey in web development, data science, and programming.",
    images: ["https://nabeelmuhammad.me/_next/image?url=%2Fimages%2FLOGO.png&w=3840&q=75"],
  },
  metadataBase: new URL("https://nabeelmuhammad.me"),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${sora.variable} ${poppins.variable} bg-[#0f0615] w-screen flex flex-col justify-center items-center overflow-x-hidden`}>
        {children}
        <Analytics/>
        <SpeedInsights/>
      </body>
    </html>
  );
}
