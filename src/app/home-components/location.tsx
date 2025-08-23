export default function Location() {
    return (
        <section className="bg-black flex justify-center w-full pt-40">
            <div className="container">
                <div className="mb-20">
                    <h2 className="text-6xl font-bold mb-8 text-white">
                        База <span className="text-gray-400">операций</span>
                    </h2>
                    <p className="text-3xl font-light text-gray-400">
                        Наша координата в реальном мире
                    </p>
                </div>

                <div className="flex flex-col items-center w-full">
                    <div className="w-[728px] flex justify-center items-center mb-4 border-b-2 border-[#004DFF]">
                        <h3 className="text-2xl font-bold mb-4 text-white">
                            Узбекистан - Самарканд
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    )
}