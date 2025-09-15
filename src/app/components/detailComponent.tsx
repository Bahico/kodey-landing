import {CaseModel} from "@/models/case.model";
import BackgroundAnimation from "@/app/components/BackgroundAnimation";
import Image from "next/image";
import {photoUrl} from "@/api/api.functions";

export default function DetailComponent({post}: {post: CaseModel}) {
    return (
        <div className="relative w-full pt-[87px] mb-[-100px] overflow-hidden">
            <div className="absolute top-[-30%] left-[-80%] w-[1600px] h-[1000px] z-0 flex md:hidden">
                <BackgroundAnimation/>
            </div>

            {/* Hero Section */}
            <section className="relative flex justify-center w-full z-0">
                <div className="container px-4">
                    <div className="flex items-end">
                        <div className="absolute top-0 left-[-50%] w-full hidden md:block z-0">
                            <BackgroundAnimation/>
                        </div>
                        <Image
                            src="/images/posts/ChatGPT Image 8 авг. 2025 г., 16_01_53 1.png"
                            className="rotate-y-190 md:!rotate-y-0 order-2 md:order-none"
                            alt="background"
                            width={400}
                            height={400}
                        />

                        <div className="flex flex-col order-first md:order-none">
                            <h1 className="md:text-6xl text-2xl text-black font-bold mb-2 md:mb-6">{post?.title}</h1>
                            <p className="text-sm md:text-xl text-gray-600 max-w-4xl mb-8">
                                {post?.excerpt}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full flex justify-center py-5 md:py-16 bg-black relative z-10 pb-40">
                <div className="container flex flex-col gap-10 px-4">
                    {post?.blocks.map(block => (
                        <div className="flex flex-col md:flex-row gap-20 justify-between items-center">
                            <div className="flex flex-col gap-6 w-full md:w-[50%]">
                                <h3 className="text-xl md:text-4xl text-white font-bold">
                                    {block.title}
                                </h3>
                                <p className="text-sm md:text-xl text-white">
                                    {block.description}
                                </p>
                            </div>

                            <div className="w-full md:w-[450px] h-[460px]">
                                <Image
                                    src={photoUrl(block.photo)}
                                    alt="background"
                                    className="w-full h-full object-contain"
                                    width={400}
                                    height={400}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}