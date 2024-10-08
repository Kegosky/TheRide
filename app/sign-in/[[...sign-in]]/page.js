import { SignIn } from '@clerk/nextjs';
import Image from 'next/image';


export default function Page() {
  return (
    <>
    <div className='p-5 pb-3 pl-10 border-b-[4px]
    border-gray-200 flex items-center justify-between'>
    <Image src= '/gps.jpg' width={900} height={1000}
      className="object-contain h-full w-full"/>
      <div className="absolute top-20 right-0">
        <SignIn/>

      </div>
    </div>
    </>
  );
}