'use client';
import Image from "next/image";
import PostsList from "../components/postsList";
import BackgroundAnimation from "@/app/components/BackgroundAnimation";
import {nowSize} from "@/app/functions/now-size";

export default function Posts() {
    const {lg} = nowSize();


    return (
        <div className="relative w-full pt-[87px] overflow-hidden -mb-40">
            <div className="absolute top-[-30%] left-[-90%] w-[1600px] h-[1000px] z-0 flex md:hidden">
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
                            src="/images/home/60b300101d6e7d385987432f11adc9d89f983db0.png"
                            alt="background"
                            className="md:rotate-y-190 order-2 md:order-none"
                            width={lg ? 400 : 200}
                            height={lg ? 400 : 200}
                        />

                        <div className="flex flex-col mb-20 order-first md:order-none">
                            <h1 className="md:text-6xl text-2xl text-black font-bold md:mb-6">
                                Внутренний
                                <br className="flex md:hidden"/>
                                <span className="text-gray-400 md:ml-4">эфир</span>
                            </h1>
                            <p className="text-sm md:text-2xl text-gray-600 max-w-3xl leading-relaxed">
                                Полезные статьи, кейсы и новости из мира мобильной разработки
                            </p>
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
