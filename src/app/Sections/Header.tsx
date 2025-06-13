'use client'
import Image from "next/image";
import pc from '../../../public/pngtree-cloud-icon-on-laptop-computer-black-icon-jpg-vector-png-image_7056886.png'
export default function Header() {
    return (
        <div className="">
            <div className="flex ml-15 mt-15">
                <hr className="  w-[1px] h-[300px] border-none  bg-white"></hr>
                <div className="ml-10">
                    <p className="text-white font-bold text-[60px] font-[Kulim Park]">Hi , I’m  <span ><span className="text-[#110583]">A</span>bdeldjalil</span></p>
                    <p className="text-[#BAB7B7] font-[Kulim Park] text-[40px] font-bold"><span className="text-[#110583]">S</span>oftware</p>
                    <p className="text-[#BAB7B7] font-[Kulim Park] text-[40px] font-bold ml-20"><span className="text-[#110583]">E</span>ngineer</p>
                    <Image className="w-[139px] h-[120px] ml-20" src={pc}></Image>
                </div>
            </div>
        </div>
    );
}