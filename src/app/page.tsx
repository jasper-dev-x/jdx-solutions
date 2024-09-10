import Link from "next/link";
import Footer from "./components/Footer";
import ServiceCard from "./components/ServiceCard";

const services = [
  {
    title: "Browse",
    shortDesc:
      "Head over to our portfolio to discover our client-driven projects",
    link: "/portfolio",
  },
  {
    title: "Collaborate",
    shortDesc: "Let's turn your vision into reality",
    link: "/contact",
  },
];

export default function Home() {
  return (
    <main className='flex flex-col w-full'>
      {/* HEADER */}
      <div className='flex flex-col max-w-3xl h-[90vh] px-5'>
        <h1 className='text-4xl'>
          Where cutting-edge technology meets innovation in every line of code.
        </h1>
      </div>

      {/* SERVICES BLOCK */}
      <div className='flex justify-center text-center w-full px-5'>
        <div className='flex flex-col items-center max-w-3xl h-[90vh]'>
          <h1 className='text-4xl mb-5'>Unveil The Story</h1>
          <p className='mb-10'>
            Our journey from New York&apos;s inception to Florida&apos;s success
          </p>
          <Link
            href='/about'
            className='flex rounded-full bg-gray-100/20 px-6 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-200/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:text-black'>
            See what we're about
          </Link>
        </div>
      </div>

      {/* ABOUT BLOCK */}
      <div className='flex justify-end text-end w-full px-5'>
        <div className='flex flex-col max-w-3xl h-[90vh]'>
          <h1 className='text-4xl mb-5'>Discover the power of JDX Solutions</h1>
          <p className=''>
            Explore our mobile app and web innovations, custom software
            solutions, and unparalleled contract work
          </p>
          <Link
            href='/portfolio'
            className='flex self-end rounded-full bg-gray-100/20 mt-10 px-6 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-200/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:text-black'>
            See What We Can Do
          </Link>
        </div>
      </div>

      {/* CONTACT BLOCK */}
      <div></div>

      {/* FOOTER */}
      <Footer
        title='Want to get in touch?'
        btnLabel="Let's Connect"
        route='/contact'
      />
    </main>
  );
}
