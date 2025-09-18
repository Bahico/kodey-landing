"use client";

import {useEffect, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current || !innerRef.current) return;

        // container divni gorizontal scroll uchun pin qilamiz
        gsap.to(containerRef.current, {
            x: "-100vw", // 200vw → 100vw ni scroll qilib ko‘rsatamiz
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=1000", // scroll masofasini sozlashingiz mumkin
                scrub: true,
                pin: true,
            },
        });

        // ichki divni vertical scroll qilamiz
        gsap.to(innerRef.current, {
            y: "-100%", // yuqoriga ko‘tariladi
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=1000", // yuqoridagiga mos bo‘lishi kerak
                scrub: true,
            },
        });
    }, []);

    return (
        <html>
        <body>
        <div
            style={{
                height: "200vh",
                overflow: "hidden",
            }}
        >
            <div
                ref={containerRef}
                style={{
                    display: "flex",
                    width: "200vw", // katta container
                    height: "100vh",
                    background: "#ddd",
                }}
            >
                <div
                    style={{
                        width: "100vw",
                        height: "100%",
                        background: "lightcoral",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <h1>1-Page (scroll qiling ➡️)</h1>
                </div>
                <div
                    style={{
                        width: "100vw",
                        height: "100%",
                        background: "lightblue",
                        position: "relative",
                    }}
                >
                    <div
                        ref={innerRef}
                        style={{
                            width: "200px",
                            height: "200px",
                            background: "purple",
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    />
                </div>
            </div>
        </div>
        </body>
        </html>
    );
}