'use client'
import {CaseModel} from "@/models/case.model";
import BackgroundAnimation from "@/app/components/BackgroundAnimation";
import {photoUrl} from "@/api/api.functions";
import Head from "next/head";

export default function DetailComponent({post, first}: { post: CaseModel, first: boolean }) {
    return (
        <>
            <Head>
                <title>{post?.title} | Kodey</title>
                <meta name="description" content={post?.excerpt}/>
                <meta property="og:title" content={post?.title}/>
                <meta property="og:description" content={post?.excerpt}/>
                <meta property="og:image" content={`/images/bot/bot${first ? '1' : '7'}.png`}/>
            </Head>

            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    headline: post?.title,
                    description: post?.excerpt,
                    image: `/images/bot/bot${first ? '1' : '7'}.png`,
                    author: { "@type": "Person", name: "Author Name" },
                    datePublished: post?.createdAt
                })}
            </script>

            <main className="relative w-full pt-[87px] mb-[-100px] overflow-hidden">
                <div className="absolute top-[-30%] left-[-80%] w-[1600px] h-[1000px] z-0 flex md:hidden">
                    <BackgroundAnimation/>
                </div>

                {/* Hero Section */}
                <section className="relative flex justify-center w-full z-0">
                    <div className="container px-4">
                        <div className={`flex items-end ${first ? 'md:justify-between' : ''}`}>
                            <div className="absolute top-0 left-[-50%] w-full hidden md:block z-0">
                                <BackgroundAnimation/>
                            </div>
                            <img
                                src={`/images/bot/bot${first ? '1' : '7'}.png`}
                                className={`md:rotate-y-190 ${first ? 'md:!rotate-y-0' : ''} object-contain order-2 md:order-none -mb-20 md:-mb-40 w-[200px] h-[300px] md:h-[400px] md:w-[400px]`}
                                alt="background"
                            />

                            <div
                                className={`flex flex-col order-first min-w-[200px] md:min-w-0 ${!first ? 'md:order-none' : ''}`}>
                                <h1 className="md:text-6xl text-2xl text-black font-bold mb-2 md:mb-6">{post?.title}</h1>
                                <p className="text-sm md:text-xl text-gray-600 max-w-4xl mb-8">
                                    {post?.excerpt}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full flex justify-center py-5 md:py-16 bg-black relative z-10 !pb-40">
                    <div className="container flex flex-col gap-10 px-4">
                        {post?.blocks.map((block, index) => (
                            <div key={index} className="flex flex-col md:flex-row gap-20 justify-between items-center">
                                <div className="flex flex-col gap-6 w-full md:w-[50%]">
                                    <h3 className="text-xl md:text-4xl text-white font-bold">
                                        {block.title}
                                    </h3>
                                    <p className="text-sm md:text-xl text-white" style={{whiteSpace: "pre-line"}}>
                                        {block.description}
                                    </p>
                                </div>

                                <div className="w-full md:w-[450px] max-h-[460px] h-full">
                                    <img
                                        src={photoUrl(block.photo)}
                                        alt="background"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}