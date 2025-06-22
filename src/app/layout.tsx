import type {Metadata} from "next";
import {Cinzel} from "next/font/google";
import "./globals.css";
import {NavBar} from "./components/NavBar";
import Head from "next/head";

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
      <Head>
        <link
          rel='icon'
          type='image/png'
          href='/icon.png'
        />
      </Head>
      <body
        className={
          inter.className + " gradient-background text-gray-100 w-[100dwh]"
        }>
        <NavBar />
        <div className='flex flex-col h- w-full pt-5'>{children}</div>
      </body>
    </html>
  );
}
