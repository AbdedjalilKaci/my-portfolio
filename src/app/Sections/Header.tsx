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
import mypicture from '../../../public/WhatsApp Image 2025-06-08 at 16.47.49_071c7702.png'
import { useEffect, useState } from 'react'
export default function Header() {

    const texts = [
        'React/Next.js developer',
        'I build web applications',
        'I love clean code',
        'I design websites',
    ]

    const [textIndex, setTextIndex] = useState(0)
    const [displayText, setDisplayText] = useState('')
    const [charIndex, setCharIndex] = useState(0)

    useEffect(() => {
        if (charIndex < texts[textIndex].length) {
            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev + texts[textIndex][charIndex])
                setCharIndex((prev) => prev + 1)
            }, 100)
            return () => clearTimeout(timeout)
        } else {
            const timeout = setTimeout(() => {
                setCharIndex(0)
                setDisplayText('')
                setTextIndex((prev) => (prev + 1) % texts.length)
            }, 1500) // wait before showing next sentence
            return () => clearTimeout(timeout)
        }
    }, [charIndex, textIndex])

    return (
        <div className="flex h-[500px]">
            <div className="flex ml-15 mt-10">
                <div className="ml-10 mt-10">
                    <p className="text-white font-bold text-[60px] font-[Kulim Park]">Hi, I’m Abdeldjalil</p>
                    <p className="ml-20">
                        <span className="font-bold text-[60px] font-[Kulim Park] text-[#FFC300]">S</span>
                        <span className="font-bold text-[60px] font-[Kulim Park] text-[#FFD60A]">o</span>
                        <span className="font-bold text-[60px] font-[Kulim Park] text-[#FFDE3B]">f</span>
                        <span className="font-bold text-[60px] font-[Kulim Park] text-[#FFE562]">t</span>
                        <span className="font-bold text-[60px] font-[Kulim Park] text-[#FFEA81]">w</span>
                        <span className="font-bold text-[60px] font-[Kulim Park] text-[#FFEE9A]">a</span>
                        <span className="font-bold text-[60px] font-[Kulim Park] text-[#FFF1AE]">r</span>
                        <span className="font-bold text-[60px] font-[Kulim Park] text-[#FAF2CA]">e</span>
                    </p>
                    <p className="ml-40">
                        <span className="font-bold text-[60px] font-[Kulim Park] text-[#FFC300]">E</span>
                        <span className="font-bold text-[60px] font-[Kulim Park] text-[#FFD60A]">n</span>
                        <span className="font-bold text-[60px] font-[Kulim Park] text-[#FFDE3B]">g</span>
                        <span className="font-bold text-[60px] font-[Kulim Park] text-[#FFE562]">i</span>
                        <span className="font-bold text-[60px] font-[Kulim Park] text-[#FFEA81]">n</span>
                        <span className="font-bold text-[60px] font-[Kulim Park] text-[#FFEE9A]">e</span>
                        <span className="font-bold text-[60px] font-[Kulim Park] text-[#FFF1AE]">e</span>
                        <span className="font-bold text-[60px] font-[Kulim Park] text-[#FAF2CA]">r</span>
                    </p>
                    <div className="text-5xl font-bold text-white h-12">
                        {displayText}
                        <span className="animate-pulse">|</span>
                    </div>
                </div>
                <Image className="   w-90 h-90  ml-180 top-30 absolute " src={mypicture}></Image>
            </div>
        </div>
    );
}