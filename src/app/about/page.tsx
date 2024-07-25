import Link from "next/link";
import Footer from "../components/Footer";

export default function About() {
  return (
    <main className='flex flex-col max-w-3xl'>
      <div className='h-[90dvh]'>
        <h1 className='text-3xl font-bold text-center mb-5'>About</h1>

        <p className='mb-5'>
          <span className='text-2xl'>O</span>ur team, originating from the
          streets of New York and flourishing in the warmth of Florida, is
          dedicated to crafting stellar mobile and web app applications. In
          addition, our adept hands specialize in creating bespoke software
          solutions and undertaking contract work with finesse.
        </p>
        <p className=''>
          <span className='text-2xl'>L</span>et your online narrative resonate
          with professionalism and authenticity. Your story is not just part of
          the web, it&apos;s what sets you apart from the vast digital
          landscape. Take pride in your voice, for it is the melody that will
          make this journey unforgettable.
        </p>
      </div>

      {/* FOOTER */}
      <Footer
        title='Empower Your Business'
        btnLabel='Our Services'
        route='/services'
      />
    </main>
  );
}
