export default function InfoCard({
  title,
  link,
  label,
}: {
  title: string;
  link: string;
  label: string;
}) {
  return (
    <div className='flex flex-col max-w-xl w-full bg-gray-100/20 rounded-lg text-center py-[6vh] px-[6dvw] gap-5'>
      <h3 className='text-2xl'>{title}</h3>
      <a
        href={link}
        className='underline'
        style={{textUnderlineOffset: "4px"}}>
        {label}
      </a>
    </div>
  );
}
