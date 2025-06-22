"use client";

export default function Upload() {
  // ON SUBMIT UPLOAD
  const onSubmitUpload = () => {
    console.log("UPLOAD SUBMITTED");
  };

  return (
    <div className='flex flex-col min-h-screen'>
      {/* DRIVE NAME */}

      {/* DRIVE FILE PATH */}

      {/* ACCESS CODE */}

      {/* FILE UPLOAD */}

      {/* SUBMIT BTN  */}
      <div className='flex centered'>
        <button
          className='btn'
          onClick={() => onSubmitUpload()}>
          Upload
        </button>
      </div>
    </div>
  );
}
