import Image from "next/image";
import BackgroundAnimation from "@/app/components/BackgroundAnimation";

export default function Post() {
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
                            <h1 className="md:text-6xl text-2xl text-black font-bold mb-2 md:mb-6">ДримтиМ</h1>
                            <p className="text-sm md:text-xl text-gray-600 max-w-4xl mb-8">
                                Выполняй задания, копи баллы и получай подарки!
                                <br/>
                                Зарабатывай монеты за простые квесты, подписки и активности
                                📲💰.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full flex justify-center py-5 md:py-16 bg-black relative z-10 pb-40">
                <div className="container flex flex-col gap-10 px-4">
                    <div className="flex flex-col md:flex-row gap-20 justify-between items-center">
                        <div className="flex flex-col gap-6 w-full md:w-[50%]">
                            <h3 className="text-xl md:text-4xl text-white font-bold">
                                Как разработать дизайн операционной мобильной системы с нуля:
                                кейс РОСА и 65apps
                            </h3>
                            <p className="text-sm md:text-xl text-white">
                                У нас был парк из 50 смартфонов разных производителей, 2 года на
                                разработку, 4 дизайнера, 1 арт-директор, исследовательские и
                                стратегические сессии, целое море идей, разноцветных прототипов
                                и эскизов, пачка шрифтов, а также литры кофе, чая и немного пива
                                по пятницам. Не то, чтобы все это было категорически необходимо
                                для создания дизайна операционной системы, но если уж мы
                                взялись, то к делу надо подходить серьезно.
                            </p>
                        </div>

                        <div className="w-full md:w-[450px] h-[460px]">
                            <Image
                                src="/images/posts/Group 814.png"
                                alt="background"
                                className="w-full h-full object-contain"
                                width={400}
                                height={400}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-20 justify-between items-center">
                        <div className="flex flex-col gap-6 w-full md:w-[50%]">
                            <h3 className="text-xl md:text-4xl text-white font-bold">
                                Как разработать дизайн операционной мобильной системы с нуля:
                                кейс РОСА и 65apps
                            </h3>
                            <p className="text-sm md:text-xl text-white">
                                У нас был парк из 50 смартфонов разных производителей, 2 года на
                                разработку, 4 дизайнера, 1 арт-директор, исследовательские и
                                стратегические сессии, целое море идей, разноцветных прототипов
                                и эскизов, пачка шрифтов, а также литры кофе, чая и немного пива
                                по пятницам. Не то, чтобы все это было категорически необходимо
                                для создания дизайна операционной системы, но если уж мы
                                взялись, то к делу надо подходить серьезно.
                            </p>
                        </div>

                        <div className="w-full object-contain md:w-[450px] h-[460px]">
                            <Image
                                src="/images/posts/Group 814.png"
                                alt="background"
                                className="w-full h-full object-contain"
                                width={400}
                                height={400}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
