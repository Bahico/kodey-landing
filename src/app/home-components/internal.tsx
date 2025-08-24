import Image from 'next/image';
import { useState } from 'react';
import "./internal.css";


const imgRectangle46 = "/images/home/680e6e9976e784fe0730f01b0d9538e74cb29c50.png";
const imgRectangle47 = "/images/home/d84e617365ad68aea1ff6c9052c8f51ea1ab23ba.png";
const imgRectangle48 = "/images/home/ab4d16e4f5151d14b33d79beaa53b383da84d72c.png";

export default function Internal() {

    const [activeIndex, setActiveIndex] = useState(1);

    const handleClick = (index: number) => {
        setActiveIndex(index);
    }

    const posts = [
        {
            id: 1,
            img: imgRectangle46,
            title: "Backend - разработка",
        },
        {
            id: 2,
            img: imgRectangle47,
            title: "Backend - разработка",
        },
        {
            id: 3,
            img: imgRectangle48,
            title: "Backend - разработка",
        }
    ]

    return (
        <section id="internal" className="relative w-full bg-black py-20 rounded-b-[60px]">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                        <span>Внутренний </span>
                        <span className="text-gray-400">эфир</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 font-light">
                        Контент из-за кулис нашего процесса — не для галочки
                    </p>
                </div>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-center">
                    {posts.map((post) => (
                        <div key={post.id} className="lg:col-span-1" onClick={() => handleClick(post.id)}>
                            <div className={`flex flex-col gap-6 ${activeIndex === post.id ? '' : 'pt-10 pb-20 unactive'}`}>
                                <div className={`relative w-full overflow-hidden rounded-lg ${activeIndex === post.id ? 'h-[444px]' : 'h-[296px]'}`}>
                                    <Image
                                        src={post.img}
                                        alt={post.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center justify-between text-sm md:text-base">
                                        <span className="text-cyan-400">#разработка #дизайн</span>
                                        <span className="text-gray-500">23 июля 2025</span>
                                    </div>
                                    <div className="flex flex-col gap-6">
                                        <h3 className="text-2xl md:text-3xl font-medium text-gray-300 leading-tight">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                                            Личные кабинеты, магазины, удаленные рабочие места, приложения для управления умными устройствами и другие мобильные сервисы любой сложности ...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}