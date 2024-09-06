import Footer from "../components/Footer";

const customMadeList = [
  {
    company: "Pebble Creek",
    type: "Leasing Office Software",
    desc:
      "Pebble Creek requested a software that could replace most of their spreadsheets. " +
      "Included with custom PDF generators. Such as the Employee Evaluation form. " +
      "Employee management with logins allow staff to have a curated bulletin board and " +
      "role-based access to files.",
    imgs: [
      "https://firebasestorage.googleapis.com/v0/b/jdx-solutions.appspot.com/o/PebCre-a.png?alt=media&token=a6182da4-d13b-4a84-9a88-0ad80b241115",
      "https://firebasestorage.googleapis.com/v0/b/jdx-solutions.appspot.com/o/PebCre-b.png?alt=media&token=65752636-c8c6-4483-acb9-e5cfc7a6de1f",
    ],
  },
  {
    company: "AFKA Enterprises Inc",
    type: "Freight Broker Software",
    desc: "",
    imgs: [
      "https://firebasestorage.googleapis.com/v0/b/jdx-solutions.appspot.com/o/FBL-a.png?alt=media&token=27986b21-cea9-4e04-8541-69f4d051209c",
      "https://firebasestorage.googleapis.com/v0/b/jdx-solutions.appspot.com/o/FBL-b.png?alt=media&token=ffebd1d5-0a22-46c2-aaa5-4b52de96f850",
    ],
  },
];

export default function Services() {
  return (
    <main className='flex flex-col max-w-3xl mx-5'>
      <div className='h-[80dvh]'>
        <h1 className='text-3xl font-bold text-center mb-5'>Services</h1>
        <p className='mb-5'>
          <span className='text-2xl'>E</span>mbrace innovation with JDX
          Solutions. Explore our cutting-edge software offerings which are
          meticulously crafted to meet your every need. Whether it&apos;s mobile
          or web applications, custom software solutions, or even contract IT
          work, JDX Solutions has you covered.
        </p>
        <p className=''>
          <span className='text-2xl'>J</span>oin the ranks of successful
          businesses that have entrusted us with their digital transformation
          journey. Elevate your online presence with JDX Solutions - where
          expertise meets excellence.
        </p>
      </div>

      <h1 className='text-3xl font-bold text-center mb-10'>
        Custom-Made Solutions
      </h1>

      {/* PEBBLE CREEK TESTIMONY */}
      {customMadeList.map((x, index) => (
        <div
          key={index}
          className='flex flex-col min-h-[80dvh] text-center pb-14'>
          <h1 className='text-2xl font-bold'>{x.company}</h1>
          <h3 className='text-xl mb-3'>{x.type}</h3>
          <h6 className='font-serif mb-10'>{x.desc}</h6>
          {x.imgs.map((img, imgIndex) => (
            <img
              key={imgIndex}
              className='md-max-w-sm rounded-md mb-5'
              src={img}
            />
          ))}
        </div>
      ))}

      {/* FOOTER */}
      <Footer
        title='Uncover the power of cutting-edge technology'
        btnLabel='Contact Us'
        route='/contact'
      />
    </main>
  );
}
