'use client'
import { useEffect, useState } from 'react'
export default function TypingText (){
const texts = [
    'Hello my name is Abdeljalil',
    'I love web devalopment',
]
const [text , setText] =  useState('');
const [textindex , setTextindex] =  useState(0);
useEffect(()=>{
    for ( let i = 0 ; i< texts.length ; i++){
        for (let j =0 ; j<texts[textindex].length; j++){
            setTimeout(()=>{
                setText(prev => prev + texts[j]);
            },100)
        }
        
    }
},[])

    return (
        <div className="text-2xl font-bold text-white h-12">
            {text}
            <span className="animate-pulse">|</span>
        </div>
    )
}
