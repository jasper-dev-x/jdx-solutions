import Footer from "../components/Footer";

export default function Services() {
  return (
    <main className='flex flex-col max-w-3xl mx-5'>
      <div className='h-[90dvh]'>
        <h1 className='text-3xl font-bold text-center mb-5'>Services</h1>
        <p className='mb-5'>
          <span className='text-2xl'>E</span>mbrace innovation with JDX
          Solutions. Explore our cutting-edge software offerings which are
          meticulously crafted to meet your every need. Whether it&apos;s mobile
          or web applications, custom software solutions, or contract work, JDX
          Solutions has you covered.
        </p>
        <p className=''>
          <span className='text-2xl'>J</span>oin the ranks of successful
          businesses that have entrusted us with their digital transformation
          journey. Elevate your online presence with JDX Solutions - where
          expertise meets excellence.
        </p>
      </div>

      {/* FOOTER */}
      <Footer
        title='Uncover the power of cutting-edge technology'
        btnLabel='Contact Us'
        route='/contact'
      />
    </main>
  );
}
