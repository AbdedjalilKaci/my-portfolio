'use client'
import Image from 'next/image';
import logo from '../../../public/logo.jpeg'
import Link from 'next/link';
export default function Navbar() {
    return (
        <div className="flex justify-between ">
            <div className="flex ml-8">
                <Image src={logo} className="w-10 h-10 rounded-full  my-7 " />
                <p className='text-white font-bold  text-[25px] mx-4 my-7'>Abdeldjalil</p>
            </div>
            <div className="flex gap-15 my-8 justify-center ">
                <Link href="#" className='text-[#8f8f8f] text-[20px] font-bold hover:text-[white]'>About</Link>
                <Link href="#" className='text-[#8f8f8f] text-[20px] font-bold hover:text-[white]'>Works</Link>
                <Link href="#" className='text-[#8f8f8f] text-[20px] font-bold hover:text-[white]'>Contact</Link>
            </div>
            <Link href="/Resume.pdf" className='pt-2 text-center justify-center w-50 h-12 bg-[#03034b] text-white font-semibold  text-[20px] mx-8 my-6 rounded-[10px] border border-white cursor-pointer'>Download Resume</Link>             
        </div>
    );
}