import type { Metadata } from "next";
import { Inter, Poppins, Sora } from "next/font/google";
import "../globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
config.autoAddCss = false

const inter = Inter({ subsets: ["latin"] , variable:'--font-inter'});
const poppins = Poppins({subsets:["latin"], variable:'--font-poppins', weight:['100', '200', '300', '400', '500', '600', '700', '800', '900']});
const sora = Sora({subsets:['latin'], variable:'--font-sora'})

export const metadata: Metadata = {
  title: "Demo Lab DDP0",
  description: "Silakan pilih jadwal untuk demo lab DDP0",
};

export default function DemoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
    </div>
  );
}
