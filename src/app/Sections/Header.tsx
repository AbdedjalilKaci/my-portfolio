'use client'
import Image from "next/image";
import pc from '../../../public/pngtree-cloud-icon-on-laptop-computer-black-icon-jpg-vector-png-image_7056886.png'
import network from '../../../public/a9887ca2-03ac-4683-aa2b-2407911b4d8d.png-removebg-preview.png'
import html from '../../../public/html-logo-canvas-element-javascript-png-favpng-9Zr8VThP4aQLbAyUYddQzU2rA-removebg-preview.png'
import css from '../../../public/kisspng-responsive-web-design-web-development-cascading-st-frontend-web-development-5b1e0a8aa02fd1.0489154315286954346561-removebg-preview.png'
import js from '../../../public/javascript-logo-javascript-icon-transparent-free-png-removebg-preview.png'
import ts from '../../../public/2945272.png'
import figma from '../../../public/images__1_-removebg-preview.png'
import react from '../../../public/React-removebg-preview.png'
import nextjs from '../../../public/images-removebg-preview.png'
import tailwind from '../../../public/images__2_-removebg-preview.png'
import github from '../../../public/RuHOJDaVPJ.png'
export default function Header() {
    return (
        <div className="flex ">
            <div className="flex ml-15 mt-10">
                <hr className="  w-[1px] h-[300px] border-none  bg-white"></hr>
                <div className="ml-10">
                    <p className="text-white font-bold text-[60px] font-[Kulim Park]">Hi , I’m  <span ><span className="text-[#110583]">A</span>bdeldjalil</span></p>
                    <p className="text-[#BAB7B7] font-[Kulim Park] text-[40px] font-bold"><span className="text-[#110583]">S</span>oftware</p>
                    <p className="text-[#BAB7B7] font-[Kulim Park] text-[40px] font-bold ml-20"><span className="text-[#110583]">E</span>ngineer</p>
                    <Image className="w-[139px] h-[120px] ml-20" src={pc}></Image>
                </div>
                
                <Image className="   w-120 h-120  ml-180 top-20 absolute " src={network}></Image>
            </div>
            <Image  src={html} className=" w-[70px] h-[70px] absolute top-27 right-56.5"/>
            <Image src={css} className="w-[70px] h-[70px] absolute top-37 right-83"/>
            <Image src={js} className="w-[70px] h-[70px] absolute top-64 right-95"/>
            <Image src={ts} className="w-[50px] h-[50px] absolute top-97 right-90 rounded-full"/>
            <Image src={figma} className="w-[60px] h-[60px] absolute top-110 right-56.5"/>
            <Image src={tailwind} className="w-[70px] h-[70px] absolute top-39 right-30"/>
            <Image src={react} className="w-[60px] h-[60px] absolute top-68 right-20"/>
            <Image src={nextjs} className="w-[50px] h-[50px] absolute top-99 right-30  "/>
            <Image src={github} className="w-[70px] h-[70px] absolute top-67 right-56.5 rounded-full"/>
        </div>
    );
}