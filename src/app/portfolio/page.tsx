"use client";

import {logoSlyLynx} from "@/state/dev_utils";
import Footer from "../components/Footer";
import Image from "next/image";
import {useEffect, useState} from "react";

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
    desc:
      "AFKA was on the market for an updated version of their current platform. After walking through " +
      "their platform and understanding how it correlated to daily needs, we established " +
      "a list of key features and how they could be improved. AFKA and JDX collaberated " +
      "on an improvement that now saves them countless minutes everyday.",
    imgs: [
      "https://firebasestorage.googleapis.com/v0/b/jdx-solutions.appspot.com/o/FBL-a.png?alt=media&token=27986b21-cea9-4e04-8541-69f4d051209c",
      "https://firebasestorage.googleapis.com/v0/b/jdx-solutions.appspot.com/o/FBL-b.png?alt=media&token=ffebd1d5-0a22-46c2-aaa5-4b52de96f850",
    ],
  },
];

export default function Portfolio() {
  const [innerWidth, setInnerWidth] = useState(0);
  const [hidePhotos, setHidePhotos] = useState(true);

  // INNER WIDTH GETTER
  useEffect(() => {
    const handleResize = () => setInnerWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);

    setTimeout(() => setHidePhotos(false), 3500);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className='flex flex-col text-center mx-5'>
      <div className='mb-10'>
        <h1>Developed by</h1>
        <h1 className='text-3xl font-bold'>JDX Solutions</h1>
      </div>
      {/* SLY LYNX  */}
      <div className='flex flex-col items-center'>
        {hidePhotos ? (
          <div
            className='rounded-xl mb-5 animate-pulse'
            style={{
              borderColor: "#2E8B57",
              backgroundColor: "#C0C0C0",
              borderWidth: 3,
              height: 100,
              width: 100,
            }}
          />
        ) : (
          <Image
            src={logoSlyLynx}
            alt='...'
            className='rounded-xl mb-5'
            style={{
              borderColor: "#2E8B57",
              backgroundColor: "#C0C0C0",
              borderWidth: 2,
            }}
            height={100}
            width={100}
          />
        )}

        <h2 className='text-xl font-bold'>Sly Lynx</h2>
        <h3 className='mb-3'>A Sly Business Card</h3>
        <h6>Coming soon to the App Store</h6>
      </div>
      <hr className='my-10' />

      {/* TESTIMONIES */}
      {customMadeList.map((x, index) => (
        <div
          key={index}
          className='flex flex-col min-h-[80vh] max-w-[66vh] items-center text-center'>
          <h1 className='text-2xl font-bold'>{x.type}</h1>
          <h3 className='text-xl mb-3'>{x.company}</h3>
          <h6 className='font-serif mb-10'>{x.desc}</h6>
          {x.imgs.map((img, imgIndex) =>
            hidePhotos ? (
              <div
                key={imgIndex}
                className='md-max-w-sm rounded-md mb-5  animate-pulse'
                style={{
                  borderColor: "#C20000",
                  borderWidth: 2,
                  height: innerWidth * 0.9 * 0.5617,
                  width: innerWidth * 0.9,
                }}></div>
            ) : (
              <Image
                key={imgIndex}
                src={img}
                alt='...'
                className='md-max-w-sm rounded-md mb-5 object-contain'
                style={{
                  borderColor: "#C20000",
                  borderWidth: 2,
                }}
                height={800}
                width={innerWidth * 0.9}
              />
            )
          )}
          <hr className='my-10 w-full' />
        </div>
      ))}

      <Footer
        title='Interested?'
        btnLabel="Let's Talk"
        route='/contact'
      />
    </main>
  );
}
