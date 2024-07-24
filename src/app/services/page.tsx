import Link from "next/link";

export default function Services() {
  return (
    <main className='flex flex-col'>
      <h1 className='text-3xl font-bold text-center mb-5'>Services</h1>

      <p className='mb-5'>
        <span className='text-2xl'>E</span>mbrace innovation with JDX Solutions.
        Explore our cutting-edge software offerings which are meticulously
        crafted to meet your every need. Whether it&apos;s mobile or web
        applications, custom software solutions, or contract work, JDX Solutions
        has you covered.
      </p>
      <p className='mb-3'>
        <span className='text-2xl'>J</span>oin the ranks of successful
        businesses that have entrusted us with their digital transformation
        journey. Elevate your online presence with JDX Solutions - where
        expertise meets excellence.
      </p>

      <Link
        href='/contact'
        className='flex self-start rounded-md bg-gray-100/20 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-200/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:text-black'>
        Contact Us
      </Link>
    </main>
  );
}
