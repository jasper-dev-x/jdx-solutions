import Link from "next/link";

export const Home = () => {
  return (
    <main className='flex flex-col pt-[10vh] px-5'>
      <div className='flex flex-col'>
        <h1 className='text-2xl mb-5'>
          Welcome to JDX Solutions, where cutting-edge technology meets
          innovation in every line of code.
        </h1>
        <p className='mb-3'>
          Unveil the story behind our journey from New York&apos;s inception to
          Florida&apos;s success. Explore our mobile and web app innovations, custom
          software solutions, and unparalleled contract work.
        </p>

        <Link
          href='/about'
          className='flex self-start rounded-md bg-gray-100/20 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-200/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:text-black'>
          Learn More
        </Link>
      </div>
    </main>
  );
};

export default Home;
