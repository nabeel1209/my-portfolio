import type { Metadata } from "next";
import "../globals.css";

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
