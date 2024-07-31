import type {Metadata} from "next";
import {Cinzel} from "next/font/google";
import "./globals.css";
import {NavBar} from "./components/NavBar";

const inter = Cinzel({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "JDX Solutions",
  description: "Business website for JDX Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className='bg-black'>
      <body
        className={
          inter.className +
          " gradient-background text-gray-100 min-h-dvh w-[100dwh]"
        }>
        <NavBar />
        <div className='flex justify-center pt-[7.5vh]'>{children}</div>
      </body>
    </html>
  );
}
