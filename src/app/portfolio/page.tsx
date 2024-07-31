import {logoCompra, logoSlyLynx} from "@/state/dev_utils";

export default function Portfolio() {
  return (
    <main className='flex flex-col text-center mx-5'>
      <h1>Developed by</h1>
      <h1 className='text-3xl font-bold'>JDX Solutions</h1>

      {/* SLY LYNX  */}
      <div className='flex flex-col items-center py-10'>
        <img
          src={logoSlyLynx}
          width={100}
          className='rounded-xl mb-5'
        />
        <h2 className='text-xl font-bold'>Sly Lynx</h2>
        <h2>A Modern Link In Bio</h2>
      </div>

      {/* COMPRA */}
      <div className='flex flex-col items-center py-10'>
        <img
          src={logoCompra}
          width={100}
          className='rounded-xl mb-5'
        />
        <h2 className='text-xl font-bold'>Compra</h2>
        <h2>Shopping List for Roommates</h2>
      </div>
    </main>
  );
}
