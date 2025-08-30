import Image from "next/image";
import {useState} from "react";

export default function Contact() {
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccess(true);
    };

    if (success) {
        return (
            <section id="contact" className="flex justify-center pt-20 sm:pt-32 md:pt-40 mb-20 sm:mb-32 md:mb-40 px-4 sm:px-6 lg:px-8">
                <div className="container relative w-full">
                    <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
                        <div className="relative w-full max-w-[600px] bg-white rounded-2xl shadow-lg p-8 sm:p-12">
                            <div className="relative">
                                {/* Background decorative element */}
                                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-50"></div>
                                </div>
                                
                                <div className="relative z-10">
                                    {/* Success icon */}
                                    <div className="flex justify-center mb-6">
                                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center">
                                            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    </div>
                                    
                                    {/* Success title */}
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-mono">
                                        Заявка принята !
                                    </h2>
                                    
                                    {/* Success message */}
                                    <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed font-mono">
                                        Скоро с вами свяжется специалист и проконсультирует вас !
                                    </p>
                                    
                                    {/* Decorative elements */}
                                    <div className="flex justify-center mt-8">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                    
                                    {/* Back button */}
                                    <div className="mt-8">
                                        <button 
                                            onClick={() => setSuccess(false)}
                                            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                                        >
                                            Отправить еще одну заявку
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="flex justify-center pt-20 sm:pt-32 md:pt-40 mb-20 sm:mb-32 md:mb-40 px-4 sm:px-6 lg:px-8">
            <div className="container relative w-full">
                <div className="mb-10 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Отправить <span className="text-gray-400">сигнал</span>
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-400">
                        Опишите задачу — мы на связи и готовы принимать данные
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col w-full lg:w-2/3">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-6 sm:mb-8">Какая задача нас ждет ?</h3>

                    <div className="flex flex-wrap gap-2 sm:gap-4 mb-8 sm:mb-12 w-full lg:w-2/3">
                        {[
                            "Telegram - bot", "Telegram - app", "Сайт (лендинг)",
                            "Сайт (многостраничный)", "Мобильное приложение", "CRM",
                            "Аутстафф", "Другое"
                        ].map((service, index) => (
                            <button key={index} type="button" className="px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow-sm shadow-gray-200 transition-colors text-gray-800 font-medium text-sm sm:text-base">
                                {service}
                            </button>
                        ))}
                    </div>

                    <div className="space-y-6 sm:space-y-8">
                        <div>
                            <label className="block text-gray-600 text-sm sm:text-base mb-2">Имя*</label>
                            <input type="text" required className="w-full bg-transparent border-b-2 border-gray-300 text-lg sm:text-xl md:text-2xl text-gray-800 py-2 focus:border-blue-500 outline-none" placeholder="Виктор |" />
                        </div>
                        <div>
                            <label className="block text-gray-800 text-lg sm:text-xl md:text-2xl mb-2">Телефон*</label>
                            <input type="tel" required className="w-full bg-transparent border-b-2 border-gray-300 text-lg sm:text-xl md:text-2xl text-gray-800 py-2 focus:border-blue-500 outline-none" />
                        </div>
                        <div>
                            <label className="block text-gray-800 text-lg sm:text-xl md:text-2xl mb-2">Email*</label>
                            <input type="email" required className="w-full bg-transparent border-b-2 border-gray-300 text-lg sm:text-xl md:text-2xl text-gray-800 py-2 focus:border-blue-500 outline-none" />
                        </div>
                        <div>
                            <label className="block text-gray-800 text-lg sm:text-xl md:text-2xl mb-2">Краткое техническое задание</label>
                            <textarea className="w-full bg-transparent border-b-2 border-gray-300 text-lg sm:text-xl md:text-2xl text-gray-800 py-2 focus:border-blue-500 outline-none resize-none" rows={4}></textarea>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center">
                        <div className="flex items-start sm:items-center gap-3 sm:gap-4 mt-6 sm:mt-8 mb-6 sm:mb-8">
                            <input type="checkbox" required className="w-6 h-6 sm:w-8 sm:h-8 rounded border-2 border-gray-300 mt-1 sm:mt-0" />
                            <span className="text-gray-500 text-sm sm:text-lg md:text-xl">Я соглашаюсь на обработку персональных данных</span>
                        </div>

                        <button
                            className="text-white rounded-2xl text-lg sm:text-xl md:text-2xl font-semibold hover:shadow-lg transition-shadow w-full sm:w-[280px] md:w-[320px] h-[60px] sm:h-[70px] md:h-[80px]"
                            style={{
                                background: "radial-gradient(179.26% 210.04% at -91.9% 11.81%, #00C8FF 44%, #004DFF 100%), linear-gradient(0deg, #004DFF 0%, #004DFF 100%), radial-gradient(50% 50% at 50% 50%, #00C8FF 0%, #004DFF 100%);",
                            }}
                        >
                            Оставить заявку
                        </button>
                    </div>
                </form>

                <div className="lg:absolute top-0 right-0 w-full lg:w-[50%] lg:h-full bg-gradient-to-br rounded-3xl">
                    <div className="h-[203px] w-[565px] flex absolute top-1/4 left-[-40%] z-10">

                        <div className="absolute w-full h-full left-0 top-0 z-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="565" height="203" viewBox="0 0 565 203" fill="none">
                                <mask id="path-1-inside-1_2047_328" fill="white">
                                    <path d="M417 0.5C444.614 0.5 467 22.8858 467 50.5V135.153L565 203H50C22.3858 203 0 180.614 0 153V50.5C0 22.8858 22.3858 0.5 50 0.5H417Z"/>
                                </mask>
                                <path d="M417 0.5C444.614 0.5 467 22.8858 467 50.5V135.153L565 203H50C22.3858 203 0 180.614 0 153V50.5C0 22.8858 22.3858 0.5 50 0.5H417Z" fill="white"/>
                                <path d="M467 135.153H465V136.201L465.862 136.798L467 135.153ZM565 203V205H571.402L566.138 201.356L565 203ZM50 203V205V203ZM417 0.5V2.5C443.51 2.5 465 23.9903 465 50.5H467H469C469 21.7812 445.719 -1.5 417 -1.5V0.5ZM467 50.5H465V135.153H467H469V50.5H467ZM467 135.153L465.862 136.798L563.862 204.644L565 203L566.138 201.356L468.138 133.509L467 135.153ZM565 203V201H50V203V205H565V203ZM50 203V201C23.4903 201 2 179.51 2 153H0H-2C-2 181.719 21.2812 205 50 205V203ZM0 153H2V50.5H0H-2V153H0ZM0 50.5H2C2 23.9903 23.4903 2.5 50 2.5V0.5V-1.5C21.2812 -1.5 -2 21.7812 -2 50.5H0ZM50 0.5V2.5H417V0.5V-1.5H50V0.5Z" fill="url(#paint0_radial_2047_328)" mask="url(#path-1-inside-1_2047_328)"/>
                                <defs>
                                    <radialGradient id="paint0_radial_2047_328" cx="0" cy="0" r="1" gradientTransform="matrix(1100.3 159.353 -528.722 309.605 -519.262 24.4062)" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.44" stop-color="#00C8FF"/>
                                        <stop offset="1" stop-color="#004DFF"/>
                                    </radialGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="relative z-10 flex flex-col p-10 gap-5">
                            <span className="text-2xl font-semibold flex gap-2">Заявка принята ! <Image src="/images/icons/congrats.png" width="30" height="24" alt=""/> </span>
                            <span className="text-xl flex gap-2 relative">Скоро с вами свяжется специалист и проконсультирует вас ! <img className="absolute bottom-0 right-[48%]" src="images/icons/smile.png" width="30" height="24" alt=""/></span>
                        </div>
                    </div>
                    <Image src="/images/home/48c20b59329df46824f434a9a8326311165d3bc6.png" alt="contact" width={1000} height={1000} className="object-contain" />
                </div>
            </div>
        </section>
    )
}