import Image from "next/image";
import {useState} from "react";

export default function Contact() {
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccess(true);
    };

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

                <div className="lg:absolute relative top-0 right-0 w-full lg:w-[50%] lg:h-full bg-gradient-to-br rounded-3xl">
                    <div className="h-[192px] w-[333px] md:h-[203px] md:w-[565px] flex absolute top-1/2 md:top-1/4 md:left-[-40%] z-10">
                        <div className="absolute w-full h-full left-0 top-0 z-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="sm:flex md:hidden" width="333" height="192" viewBox="0 0 333 192" fill="none">
                                <mask id="path-1-inside-1_326_1060" fill="white">
                                    <path d="M268.5 -0.00488281C304.357 9.17407 319.024 17.8504 331.47 41H333V154.716C333 175.307 317.038 192 297.347 192H35.6528C15.9623 192 0.000490081 175.307 0.000488281 154.716V78.2842C0.000486481 57.6929 15.9623 41.0002 35.6528 41H259.941C271.86 28.2073 273.012 18.7464 268.5 -0.00488281Z"/>
                                </mask>
                                <path d="M268.5 -0.00488281C304.357 9.17407 319.024 17.8504 331.47 41H333V154.716C333 175.307 317.038 192 297.347 192H35.6528C15.9623 192 0.000490081 175.307 0.000488281 154.716V78.2842C0.000486481 57.6929 15.9623 41.0002 35.6528 41H259.941C271.86 28.2073 273.012 18.7464 268.5 -0.00488281Z" fill="white"/>
                                <path d="M268.5 -0.00488281L268.995 -1.94241L265.778 -2.76608L266.555 0.463102L268.5 -0.00488281ZM331.47 41L329.709 41.9471L330.275 43H331.47V41ZM333 41H335V39H333V41ZM333 154.716H331H333ZM297.347 192V194V192ZM35.6528 192L35.6528 194H35.6528V192ZM0.000488281 154.716H-1.99951H0.000488281ZM0.000488281 78.2842H2.00049H0.000488281ZM35.6528 41V39H35.6528L35.6528 41ZM259.941 41V43H260.811L261.404 42.3634L259.941 41ZM268.5 -0.00488281L268.004 1.93264C285.887 6.51062 298.261 10.9121 307.686 16.9432C317.041 22.9296 323.608 30.5991 329.709 41.9471L331.47 41L333.232 40.0529C326.887 28.2513 319.897 20.0079 309.842 13.574C299.857 7.18471 286.969 2.65856 268.995 -1.94241L268.5 -0.00488281ZM331.47 41V43H333V41V39H331.47V41ZM333 41H331V154.716H333H335V41H333ZM333 154.716H331C331 174.288 315.85 190 297.347 190V192V194C318.226 194 335 176.326 335 154.716H333ZM297.347 192V190H35.6528V192V194H297.347V192ZM35.6528 192L35.6528 190C17.1503 190 2.00049 174.288 2.00049 154.716H0.000488281H-1.99951C-1.99951 176.326 14.7743 194 35.6528 194L35.6528 192ZM0.000488281 154.716H2.00049V78.2842H0.000488281H-1.99951V154.716H0.000488281ZM0.000488281 78.2842H2.00049C2.00049 58.7122 17.1503 43.0001 35.6528 43L35.6528 41L35.6528 39C14.7743 39.0002 -1.99951 56.6736 -1.99951 78.2842H0.000488281ZM35.6528 41V43H259.941V41V39H35.6528V41ZM259.941 41L261.404 42.3634C267.513 35.807 271.037 29.9159 272.346 23.1099C273.644 16.3679 272.717 8.97115 270.444 -0.472868L268.5 -0.00488281L266.555 0.463102C268.795 9.77035 269.549 16.4797 268.418 22.3541C267.3 28.1646 264.288 33.4003 258.478 39.6366L259.941 41Z" fill="url(#paint0_radial_326_1060)" mask="url(#path-1-inside-1_326_1060)"/>
                                <defs>
                                    <radialGradient id="paint0_radial_326_1060" cx="0" cy="0" r="1" gradientTransform="matrix(1100.3 159.353 -528.721 309.605 -519.259 64.9062)" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.44" stop-color="#00C8FF"/>
                                        <stop offset="1" stop-color="#004DFF"/>
                                    </radialGradient>
                                </defs>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="hidden md:flex" width="565" height="203" viewBox="0 0 565 203" fill="none">
                                <mask id="path-1-inside-1_2047_328" fill="white">
                                    <path d="M417 0.5C444.614 0.5 467 22.8858 467 50.5V135.153L565 203H50C22.3858 203 0 180.614 0 153V50.5C0 22.8858 22.3858 0.5 50 0.5H417Z"/>
                                </mask>
                                <path d="M417 0.5C444.614 0.5 467 22.8858 467 50.5V135.153L565 203H50C22.3858 203 0 180.614 0 153V50.5C0 22.8858 22.3858 0.5 50 0.5H417Z" fill="white"/>
                                <path d="M467 135.153H465V136.201L465.862 136.798L467 135.153ZM565 203V205H571.402L566.138 201.356L565 203ZM50 203V205V203ZM417 0.5V2.5C443.51 2.5 465 23.9903 465 50.5H467H469C469 21.7812 445.719 -1.5 417 -1.5V0.5ZM467 50.5H465V135.153H467H469V50.5H467ZM467 135.153L465.862 136.798L563.862 204.644L565 203L566.138 201.356L468.138 133.509L467 135.153ZM565 203V201H50V203V205H565V203ZM50 203V201C23.4903 201 2 179.51 2 153H0H-2C-2 181.719 21.2812 205 50 205V203ZM0 153H2V50.5H0H-2V153H0ZM0 50.5H2C2 23.9903 23.4903 2.5 50 2.5V0.5V-1.5C21.2812 -1.5 -2 21.7812 -2 50.5H0ZM50 0.5V2.5H417V0.5V-1.5H50V0.5Z" fill="url(#paint0_radial_2047_328)" mask="url(#path-1-inside-1_2047_328)"/>
                                <defs>
                                    <radialGradient id="paint0_radial_2047_328" cx="0" cy="0" r="1" gradientTransform="matrix(1100.3 159.353 -528.722 309.605 -519.262 24.4062)" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.44" stopColor="#00C8FF"/>
                                        <stop offset="1" stopColor="#004DFF"/>
                                    </radialGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="relative z-10 flex flex-col pt-16 md:pt-10 p-10 gap-2 md:gap-5">
                            <span className="text-xl md:text-2xl font-semibold flex gap-2">Заявка принята ! <Image src="/images/icons/congrats.png" width="30" height="24" alt=""/> </span>
                            <span className="md:text-xl flex gap-2 relative">Скоро с вами свяжется специалист и проконсультирует вас ! <img className="absolute bottom-0 right-[48%]" src="images/icons/smile.png" width="30" height="24" alt=""/></span>
                        </div>
                    </div>
                    <Image src="/images/home/48c20b59329df46824f434a9a8326311165d3bc6.png" alt="contact" width={1000} height={1000} className="object-contain" />
                </div>
            </div>
        </section>
    )
}