import Footer from "../components/Footer";
import InfoCard from "../components/InfoCard";

const galleries = [
  {
    title: "Portrait",
    link: "https://drive.google.com/drive/folders/1NdfhTzhMLq180L1AI7wXXdM1ySsB4sXy?usp=sharing",
  },
  {
    title: "Sports",
    link: "https://drive.google.com/drive/folders/1DBNrJ3k5R6v2Y4XrB4Q9v5sRRM4ux6b8?usp=sharing",
  },

  {
    title: "Landscape/Misc",
    link: "https://drive.google.com/drive/folders/12lmMVMIa0M1S3ENuEI1tPlSkfmFRcREh?usp=sharing",
  },
];

export default function Photography() {
  return (
    <main className='flex flex-col max-w-3xl mx-5'>
      <div className='mb-[12.5vh]'>
        <h1 className='text-3xl font-bold text-center mb-5'>Photography</h1>
        <p className='mb-5'>
          <span className='text-2xl'>M</span>y passion for capturing moments
          began with my grandfather, whose love for photography was truly
          infectious. Growing up, I was inspired by his dedication and keen eye
          for detail, which ignited my own journey into the world of
          photography.
        </p>
        <p className=''>
          <span className='text-2xl'>E</span>ach shot I take is a tribute to his
          legacy, blending the timeless techniques he taught me with my own
          unique perspective. Whether it&apos;s a fleeting moment or a grand
          event, my goal is to preserve the essence of every scene, much like he
          taught me to do. Enjoy exploring the world through my lens with the
          galleries below.
        </p>
      </div>

      <ul className='flex flex-col gap-10'>
        {galleries.map((x, index) => (
          <li key={index}>
            <InfoCard
              {...x}
              label='View Gallery'
            />
          </li>
        ))}
      </ul>

      {/* FOOTER */}
      <Footer
        title='Need a photographer?'
        btnLabel="Let's Collaborate"
        route='/contact'
      />
    </main>
  );
}
