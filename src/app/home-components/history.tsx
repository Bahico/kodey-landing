import Link from "next/link"
import PostsList from "../components/postsList"

export default function History() {

    
    return (
        <section id="product-list" className="bg-black flex justify-center w-full pt-20 sm:pt-30 md:pt-40">
            <div className="container px-4 sm:px-6 lg:px-8">
                <div className="mb-12 sm:mb-16 lg:mb-20 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-0">
                    <div className="">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 text-white">
                            Архив <span className="text-gray-400">Воплощений</span>
                        </h2>
                        <p className="text-lg sm:text-xl lg:text-2xl font-light text-gray-400">
                            От идеи до продакшна — всё, что мы запустили в реальность
                        </p>
                    </div>

                    <Link href="/posts" className="flex items-center gap-2 text-gray-400 cursor-pointer self-center sm:self-end">
                        <span className="text-lg sm:text-xl lg:text-2xl font-light">Все блоги</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[43px] lg:h-[42px]">
                            <path d="M17.9123 29.8469L26.5491 21.2101" stroke="currentColor" strokeWidth="3.45472" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M26.5491 21.2101L17.9123 12.5733" stroke="currentColor" strokeWidth="3.45472" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>

                <PostsList />
            </div>
        </section>
    )
}