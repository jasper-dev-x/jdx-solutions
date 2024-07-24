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
          " gradient-background text-gray-100 min-h-dvh w-[100dwh] pb-[20dvh]"
        }>
        <NavBar />
        <div className='flex justify-center pt-[7.5vh] mx-5'>
          <div className='max-w-3xl'>{children}</div>
        </div>
      </body>
    </html>
  );
}
