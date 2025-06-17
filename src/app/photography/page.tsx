"use client";

import Footer from "../components/Footer";
import {Hero} from "../components/Hero";
import Link from "next/link";
import LOGO from "../jasper-visions-logo.png";
import Image from "next/image";

export default function Photography() {
  const tempGallery = [0, 0, 0, 0, 0, 0];

  // ON NAV CAROUSEL
  const onNavCarousel = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const btn = e.currentTarget;

    //Equivalent
    const carousel = document.querySelector("#gallery-carousel");

    const href = btn.getAttribute("href")!;
    const target = carousel?.querySelector<HTMLDivElement>(href)!;
    const left = target.offsetLeft;
    carousel?.scrollTo({left});
  };

  return (
    <main className='flex flex-col w-full'>
      {/* JASPER VISIONS LOGO */}
      <div className='flex centered'>
        <Image
          className='object-contain max-h-[300px]'
          src={LOGO}
          alt='...'
        />
      </div>

      {/* GALLERY CAROUSEL */}
      <Hero className='items-start'>
        <div
          id='gallery-carousel'
          className='carousel w-full aspect-square'>
          {/* CAROUSEL SLIDES */}
          {tempGallery.map((x, index) => (
            <div
              key={index}
              id={`slide${index}`}
              className='carousel-item relative w-full'>
              {/* GALLERY COVER IMG */}
              <img
                src='https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp'
                className='object-contain bg-gray-50/10 p-3 w-full'
              />

              {/* PREV/NEXT BTNS */}
              <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
                <Link
                  href={`#slide${
                    index === 0 ? tempGallery.length - 1 : index - 1
                  }`}
                  className='btn btn-circle bg-primary'
                  onClick={onNavCarousel}>
                  ❮
                </Link>
                <Link
                  href={`#slide${
                    index === tempGallery.length - 1 ? 0 : index + 1
                  }`}
                  className='btn btn-circle bg-primary'
                  onClick={onNavCarousel}>
                  ❯
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Hero>

      {/* ABOUT ME W/ SOCIAL */}
      <Hero>
        <h1 className='text-3xl font-bold text-center mb-5'>Jasper Visions</h1>
        <p className='mb-5'>
          <span className='text-2xl'>M</span>y passion for capturing moments
          began with my grandfather, whose love for photography was truly
          inspiring. His dedication and keen eye for detail ignited my own
          journey into the world of photography!
        </p>
        <p className=''>
          <span className='text-2xl'>E</span>ach shot I take is a tribute to his
          legacy, blending the timeless techniques he taught me with my own
          unique perspective. Whether it&apos;s a fleeting moment or a grand
          event, my goal is to preserve the essence of every scene.
        </p>
      </Hero>

      {/* FOOTER */}
      <Footer
        title='Need a photographer?'
        btnLabel="Let's Collaborate"
        route='/contact'
      />
    </main>
  );
}
