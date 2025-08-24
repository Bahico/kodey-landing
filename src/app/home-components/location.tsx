export default function Location() {
    return (
        <section className="bg-black flex flex-col items-center w-full pt-20 sm:pt-30 md:pt-40">
            <div className="container px-4 sm:px-6 lg:px-8">
                <div className="mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold sm:mb-8 text-white">
                        База <span className="text-gray-400">операций</span>
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-400">
                        Наша координата в реальном мире
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center w-full">
                <div className="lg:w-[728px] flex justify-center items-center mb-4 border-b-2 border-[#004DFF]">
                    <h3 className="text-2xl font-bold mb-4 text-white">
                        Узбекистан - Самарканд
                    </h3>
                </div>

                <div className="w-full h-[500px] relative">
                    <span
                        className="absolute top-0 left-0 w-full h-30 bg-opacity-50 z-10"
                        style={{ background: "linear-gradient(0deg, rgba(5, 5, 5, 0.00) 0%, #050505 100%);" }}
                    ></span>
                    <img src="images/home/6616a4c43d7922165bb1bc1a3310dd556cd24589.png" alt="" className="w-full h-full object-cover" />
                    <span
                        className="absolute bottom-0 left-0 w-full h-30 bg-opacity-50 z-10 rotate-180"
                        style={{ background: "linear-gradient(0deg, rgba(5, 5, 5, 0.00) 0%, #050505 100%);" }}
                    ></span>
                </div>
            </div>
        </section>
    )
}