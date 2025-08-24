import Link from "next/link"
import PostsList from "../components/postsList"

export default function History() {

    
    return (
        <section className="bg-black flex justify-center w-full pt-40">
            <div className="container">
                <div className="mb-20 flex justify-between items-end">
                    <div>
                        <h2 className="text-6xl font-bold mb-8 text-white">
                            Архив <span className="text-gray-400">Воплощений</span>
                        </h2>
                        <p className="text-2xl font-light text-gray-400">
                            От идеи до продакшна — всё, что мы запустили в реальность
                        </p>
                    </div>

                    <Link href="/posts" className="flex items-center gap-2 text-gray-400 cursor-pointer">
                        <span className="text-2xl font-light">Все блоги</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
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