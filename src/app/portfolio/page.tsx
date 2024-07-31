import {logoSlyLynx} from "@/state/dev_utils";
import Footer from "../components/Footer";

export default function Portfolio() {
  return (
    <main className='flex flex-col text-center mx-5'>
      <div className='mb-5'>
        <h1>Developed by</h1>
        <h1 className='text-3xl font-bold'>JDX Solutions</h1>
      </div>
      <div className='h-[90dvh]'>
        {/* SLY LYNX  */}
        <div className='flex flex-col items-center py-10'>
          <img
            src={logoSlyLynx}
            className='rounded-xl mb-5'
            width={100}
          />
          <h2 className='text-xl font-bold'>Sly Lynx</h2>
          <h2>A Modern Link In Bio</h2>
        </div>
      </div>

      {/* COMPRA */}
      {/* <div className='flex flex-col items-center py-10'>
        <img
          src={logoCompra}
          width={100}
          className='rounded-xl mb-5'
        />
        <h2 className='text-xl font-bold'>Compra</h2>
        <h2>Shopping List for Roommates</h2>
      </div> */}

      <Footer
        title='Interested?'
        btnLabel='Get onboarded'
        route='/contact'
      />
    </main>
  );
}
