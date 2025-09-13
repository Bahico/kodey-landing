'use client';

import "./test.css";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function () {

    useGSAP(() => {
        const divOne = document.querySelector(".div-one") as HTMLElement;
        const divTwo = document.querySelector(".div-two") as HTMLElement;

        if (!divOne || !divTwo) return;

        // Method 1: Synchronize scroll positions
        let isScrolling = false;

        const syncScroll = ( source: HTMLElement, target: HTMLElement) => {
            if (isScrolling) return;
            isScrolling = true;
            
            const progress = source.scrollTop / (source.scrollHeight - source.clientHeight);
            target.scrollTop = progress * (target.scrollHeight - target.clientHeight);
            
            requestAnimationFrame(() => {
                isScrolling = false;
            });
        };

        divOne.addEventListener('scroll', () => syncScroll(divOne, divTwo));
        divTwo.addEventListener('scroll', () => syncScroll(divTwo, divOne));

        // Cleanup
        return () => {
            divOne.removeEventListener('scroll', () => syncScroll(divOne, divTwo));
            divTwo.removeEventListener('scroll', () => syncScroll(divTwo, divOne));
        };
    })

    return (
        <html>
        <body>
        <div className="flex gap-2 h-screen">
            <div className="div-one w-1/2 h-full overflow-y-auto border-2 border-blue-500">
                <div className="bg-red-500 h-screen mb-4">Section 1</div>
                <div className="bg-green-500 h-screen mb-4">Section 2</div>
                <div className="bg-blue-500 h-screen mb-4">Section 3</div>
                <div className="bg-yellow-500 h-screen">Section 4</div>
            </div>
            <div className="div-two w-1/2 h-full overflow-y-auto border-2 border-green-500">
                <div className="bg-purple-500 h-screen mb-4">Content A</div>
                <div className="bg-pink-500 h-screen mb-4">Content B</div>
                <div className="bg-indigo-500 h-screen mb-4">Content C</div>
                <div className="bg-orange-500 h-screen">Content D</div>
            </div>
        </div>
        </body>

        </html>
    )
}