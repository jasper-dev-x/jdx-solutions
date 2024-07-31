import Link from "next/link";
import Footer from "./components/Footer";
import ServiceCard from "./components/ServiceCard";

const services = [
  {
    title: "Empower my Business",
    shortDesc: "Utilize one of the JDX solutions for my business",
    img: "",
  },
  {
    title: "Collaborate on a Custom Solution",
    shortDesc:
      "Tailor a JDX Solution for my business OR Transform my vision into reality",
    img: "",
  },
  {
    title: "Explore our Advanced Services",
    shortDesc:
      "Need assistance on a current project or require other IT services? Let's connect!",
    img: "",
  },
];

export default function Home() {
  return (
    <main className='flex flex-col w-full'>
      {/* HEADER */}
      <div className='flex flex-col max-w-3xl h-[94dvh] px-5'>
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
      <div className='flex justify-center text-center w-full px-5 mb-[20dvh]'>
        <div className='flex flex-col max-w-3xl min-h-[94dvh]'>
          <h1 className='text-4xl mb-5'>Welcome to JDX Solutions</h1>

          <div className='flex flex-col gap-6'>
            {services.map(({title, shortDesc, img}, index) => (
              <ServiceCard
                key={index}
                title={title}
                img={img}
                desc={shortDesc}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT BLOCK */}
      <div className='flex justify-end text-end w-full px-5'>
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
            className='flex self-end rounded-full bg-gray-100/20 mt-10 px-6 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-200/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:text-black'>
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
