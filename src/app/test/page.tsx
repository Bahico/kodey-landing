"use client";

import {useEffect, useRef, useState} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import "./test.css";

gsap.registerPlugin(ScrollTrigger);
const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7"];

export default function ScrollSection() {
    const containerRef = useRef(null);
    const [active, setActive] = useState(0);

    useEffect(() => {
        const container = containerRef.current;
        const handleScroll = () => {
            const items = container.querySelectorAll(".item");
            const center = container.offsetHeight / 2;

            items.forEach((item, i) => {
                const rect = item.getBoundingClientRect();
                const itemCenter = rect.top + rect.height / 2;
                const distance = itemCenter - center;

                // Masofaga qarab X ni o'zgartiramiz
                const offsetX = Math.min(40, Math.max(-40, distance / 5));
                item.style.transform = `translateX(${offsetX}px)`;
            });
        };

        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <html>
        <body>
        <div
            ref={containerRef}
            className="scroll-container"
            style={{ height: "400px", overflowY: "scroll" }}
        >
            {Array.from({ length: 10 }).map((_, i) => (
                <div
                    key={i}
                    className="item"
                    style={{
                        height: "100px",
                        background: i % 2 ? "#ddd" : "#bbb",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    Item {i + 1}
                </div>
            ))}
        </div>
        </body>
        </html>
    );
}