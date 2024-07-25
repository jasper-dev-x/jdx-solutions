"use client";

import Link from "next/link";
import {useRouter} from "next/navigation";
import Footer from "./components/Footer";

export default function Home() {
  const router = useRouter();
  return (
    <main className='flex flex-col w-full'>
      {/* HEADER */}
      <div className='flex flex-col max-w-3xl h-[94dvh]'>
        <h1 className='text-4xl mb-5'>
          Welcome to JDX Solutions, where cutting-edge technology meets
          innovation in every line of code.
        </h1>

        <Link
          href='/about'
          className='flex self-start rounded-full bg-gray-100/20 mt-10 px-6 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-200/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:text-black'>
          Learn More
        </Link>
      </div>

      {/* SERVICES BLOCK */}
      <div></div>

      {/* ABOUT BLOCK */}
      <div className='flex justify-end w-full'>
        <div className='flex flex-col max-w-3xl h-[94dvh]'>
          <h1 className='text-4xl mb-5'>Discover the power of JDX Solutions</h1>
          <p className=''>
            Unveil the story behind our journey from New York&apos;s inception
            to Florida&apos;s success. Explore our mobile and web app
            innovations, custom software solutions, and unparalleled contract
            work.
          </p>
          <Link
            href='/about'
            className='flex self-start rounded-full bg-gray-100/20 mt-10 px-6 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-200/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:text-black'>
            Learn More
          </Link>
        </div>
      </div>

      {/* CONTACT BLOCK */}
      <div></div>

      {/* FOOTER */}
      <Footer
        title='Want to get in touch?'
        btnLabel="Let's Connect!"
        route='/contact'
      />
    </main>
  );
}
