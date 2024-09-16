import Footer from "../components/Footer";

const services = [
  {title: "Mobile App", shortDesc: [""]},
  {title: "Website", shortDesc: [""]},
  {title: "Photoshoot", shortDesc: [""]},
  {title: "Contract IT service", shortDesc: [""]},
];

export default function Services() {
  return (
    <main className='flex flex-col max-w-3xl mx-5'>
      <div className='h-[80vh]'>
        <h1 className='text-3xl font-bold text-center mb-5'>Services</h1>
        <p className=''>
          <span className='text-2xl'>E</span>mbrace innovation and creativity
          with JDX Solutions. Whether it&apos;s a:
        </p>
        <ul className='flex flex-col items-center my-5 gap-1'>
          {services.map((x, index) => (
            <li key={index}>♠︎ {x.title} ♠︎</li>
          ))}
        </ul>
        <h3 className='text-center font-bold text-xl mb-5'>
          JDX Solutions has you covered
        </h3>
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
