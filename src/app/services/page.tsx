import Footer from "../components/Footer";

const services = [
  {title: "", shortDesc: [""]},
  {title: "", shortDesc: [""]},
  {title: "", shortDesc: [""]},
];

export default function Services() {
  return (
    <main className='flex flex-col max-w-3xl mx-5'>
      <div className='h-[80vh]'>
        <h1 className='text-3xl font-bold text-center mb-5'>Services</h1>
        <p className='mb-5'>
          <span className='text-2xl'>E</span>mbrace innovation and creativity
          with JDX Solutions. Explore our meticulously crafted software
          offerings to meet your every need. Whether it&apos;s mobile or web
          applications, custom software solutions, or even contract IT work, JDX
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
        btnLabel='View Portfolio'
        route='/portfolio'
      />
    </main>
  );
}
