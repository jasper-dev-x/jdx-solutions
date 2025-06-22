'use client'

import Image from "next/image";
import LOGO from "../../jasper-visions-logo.png";

export default function View() {
  
  // ON DOWNLOAD ALL
  const onDownloadAll = () => {
    console.log("DOWNLOAD ALL");
  };

  return (
    <div className='flex flex-col min-h-screen'>
      {/* MASS DOWNLOAD BTN */}
      <div className='flex centered'>
        <button
          className='btn w-1/2'
          onClick={() => onDownloadAll()}>
          Download All Photos
        </button>
      </div>

      {/* JASPER VISIONS LOGO */}
      <div className='flex centered'>
        <Image
          className='object-contain max-h-[300px]'
          src={LOGO}
          alt='...'
        />
      </div>
    </div>
  );
}
