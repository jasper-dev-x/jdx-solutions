import Link from "next/link";

export const About = () => {
  return (
    <main className='flex flex-col'>
      <h1 className='text-3xl font-bold text-center mb-5'>About</h1>

      <p className='mb-5'>
        <span className='text-2xl'>O</span>ur team, originating from the streets
        of New York and flourishing in the warmth of Florida, is dedicated to
        crafting stellar mobile and web app applications. In addition, our adept
        hands specialize in creating bespoke software solutions and undertaking
        contract work with finesse.
      </p>
      <p className="mb-3">
        <span className='text-2xl'>L</span>et your online narrative resonate
        with professionalism and authenticity. Your story is not just part of
        the web, it's what sets you apart from the vast digital landscape. Take
        pride in your voice, for it is the melody that will make this journey
        unforgettable.
      </p>

      <Link
        href='/services'
        className='flex self-start rounded-md bg-gray-100/20 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-200/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:text-black'>
        Our Services
      </Link>
    </main>
  );
};

export default About;
