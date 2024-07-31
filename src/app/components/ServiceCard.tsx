export default function ServiceCard({
  img,
  title,
  desc,
}: {
  img: string;
  title: string;
  desc: string;
}) {
  return (
    <div className='flex flex-col max-w-md bg-gray-100/20 rounded-lg text-center py-[12dvw] px-[6dvw] gap-5'>
      <h3 className='text-xl'>{title}</h3>
      <h6 className='text-sm'>{desc}</h6>
    </div>
  );
}
