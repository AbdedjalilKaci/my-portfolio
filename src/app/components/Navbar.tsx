'use client'
import Image from 'next/image';
import logo from '../../../public/logo.jpeg'
import coder from '../../../public/aua4hafmf-removebg-preview.png'
import Link from 'next/link';
export default function Navbar() {
    return (
        <div className="back relative flex justify-between w-230  h-[63px] mx-40 rounded-br-[20px] rounded-bl-[20px] bg-white/10 backdrop-blur-md">
            <Image src={coder} className="w-12 h-12 rounded-full mx-4 my-2  scale-x-[-1] " />
            <div className="flex gap-15 my-8 justify-center items-center  ">
                <Link href="#" className='text-[#8f8f8f] text-[20px] font-bold hover:text-[white]'>About</Link>
                <Link href="#" className='text-[#8f8f8f] text-[20px] font-bold hover:text-[white]'>Works</Link>
                <Link href="#" className='text-[#8f8f8f] text-[20px] font-bold hover:text-[white]'>Contact</Link>
            </div>
            <Image src={coder} className="w-12 h-12 rounded-full mx-4 my-2  " />
        </div>
    );
}