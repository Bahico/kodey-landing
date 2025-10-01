'use client';
import Image from "next/image";
import PostsList from "../../components/postsList";
import BackgroundAnimation from "@/app/components/BackgroundAnimation";
import {nowSize} from "@/app/functions/now-size";
import { useTranslations } from "next-intl";
import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import {textAnimation, textAnimationTl} from "@/app/functions/text.animation";

export default function Posts() {
    const {lg} = nowSize();
    const t = useTranslations('posts');

    // refs
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const elementRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = textAnimation(titleRef.current, elementRef.current);
        textAnimationTl(descriptionRef.current, tl);
    })

    return (
        <div ref={elementRef} className="relative w-full pt-[87px] overflow-hidden -mb-40">
            <div className="absolute top-[-10%]  left-1/2 transform -translate-x-1/2 w-[1600px] h-[1000px] z-0 flex md:hidden">
                <BackgroundAnimation/>
            </div>
            {/* Hero Section */}
            <section className="relative flex justify-center w-full pb-16 z-0">
                <div className="container px-4">
                    <div className="flex justify-center items-center h-100 md:h-auto">
                        <div className="absolute top-0 left-[-50%] w-full hidden md:block z-0">
                            <BackgroundAnimation/>
                        </div>
                        <Image
                            src="/images/bot/bot1.png"
                            alt="background"
                            className="md:rotate-y-190 order-2 md:order-none"
                            width={lg ? 400 : 200}
                            height={lg ? 400 : 200}
                        />

                        <div className="flex flex-col mb-20 order-first md:order-none">
                            <h1 ref={titleRef} className="md:text-6xl text-2xl text-black font-bold md:mb-6">
                                {t('title')}
                                <br className="flex md:hidden"/>
                                <span className="text-gray-400 md:ml-4">{t('subtitle')}</span>
                            </h1>
                            <span ref={descriptionRef} className="text-sm md:text-2xl text-gray-600 max-w-3xl leading-relaxed">
                                {t('description')}
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Posts Grid Section */}
            <section className="w-full flex justify-center py-16 bg-black mt-[-200px] md:mt-[-240px] relative z-10 pb-60 px-4">
                <div className="container">
                    <PostsList/>
                </div>
            </section>
        </div>
    );
}
