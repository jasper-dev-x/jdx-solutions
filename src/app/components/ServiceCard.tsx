export default function ServiceCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className='flex flex-col max-w-xl w-full bg-gray-100/20 rounded-lg text-center py-[6vh] px-[6dvw] gap-5'>
      <h3 className='text-xl'>{title}</h3>
      <h6 className='text-sm'>{desc}</h6>
    </div>
  );
}
