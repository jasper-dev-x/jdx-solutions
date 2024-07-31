import Link from "next/link";

export default function Footer({
  title,
  btnLabel,
  route,
}: {
  title?: string;
  btnLabel?: string;
  route?: string;
}) {
  return (
    <div className='flex flex-col items-center h-[50dvh] gap-6'>
      <h1 className='text-4xl text-center'>{title}</h1>
      {route ? (
        <Link
          href={route}
          className='rounded-full text-center bg-gray-100/20 mt-10 py-3 px-6 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-200/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:text-black'>
          {btnLabel}
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
}
