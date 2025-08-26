'use client'
import "./home.css";
import Steps from "./home-components/steps";
import Services from "./home-components/services";
import History from "./home-components/history";
import Location from "./home-components/location";
import Internal from "./home-components/internal";
import Contact from "./home-components/contact";
import Image from "next/image";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { GlassElement } from "./components/GlassElement/GlassElement";


export default function Home() {


  return (
    <div className="relative w-full">

      {/* Hero Section */}
      <section className="relative flex justify-center w-full pt-6 sm:pt-8 md:pt-10">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 opacity-65">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br ">
              <img src="images/background/background1.svg" className="w-3/4 absolute background-1" alt="" />
            </div>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full gap-8 lg:gap-0">
            <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl primary-gradient font-bold">Разработка</h1>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-gray-600 mb-4 sm:mb-6 lg:mb-8">
                мобильных приложений<br />
                и цифровых сервисов
              </h1>
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl text-lg sm:text-xl lg:text-2xl font-semibold hover:shadow-lg transition-shadow w-full sm:w-auto">
                Оставить заявку
              </button>
              <p className="text-base sm:text-lg lg:text-xl text-gray-500 mt-4 sm:mt-6">
                Мы свяжемся с вами в течении 24 часов<br />
                с момента оформления заявки.
              </p>
            </div>

            <div className="relative order-first lg:order-last">
              <img src="/images/home/7546c655c3c9169934869b5c59b6d45d1ec248d1.png" alt="Hero" className="w-[300px] h-[450px] sm:w-[400px] sm:h-[600px] md:w-[500px] md:h-[750px] lg:w-[583px] lg:h-[875px] transform rotate-y-190 lg:mr-[-40px]" />
            </div>
          </div>
        </div>

      </section>



      {/* Human Factor Section */}
      <section className="bg-black text-white w-full flex justify-center rounded-t-[30px] sm:rounded-t-[40px] md:rounded-t-[50px] lg:rounded-t-[60px] relative right-background">
        <div className="absolute top-20 sm:top-40 md:top-60 left-4 sm:left-6 md:left-10 w-[300px] h-[400px] sm:w-[500px] sm:h-[600px] md:w-[700px] md:h-[800px] lg:w-[900px] lg:h-[1000px] z-0">
          <img src="images/background/background1.svg" className="w-3/4 absolute background-1" alt="" />
        </div>

        <div className="container mt-20 sm:mt-30 md:mt-40 flex flex-col items-center z-10 px-4 sm:px-6 lg:px-8">
          <div className="w-full flex flex-col lg:flex-row justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8">
                Человеческий <span className="text-gray-400">фактор</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-[#929292] mb-6 sm:mb-8 lg:mb-12">
                Мы не роботы. Хотя любим автоматизацию
              </p>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 mb-8 sm:mb-12 lg:mb-16 pl-0 sm:pl-8 lg:pl-16">
                Мы — небольшая, но сплочённая IT-команда, объединяющая разработчиков с разным опытом и специализациями.
                Создаём сайты, мобильные приложения, Telegram-ботов и внутренние сервисы.
                <br /><br />
                Нам важна простота в коммуникации, прозрачность в работе и результат, за который не стыдно.
                <br /><br />
                Работаем как единый механизм: каждый знает своё дело и усиливает команду.
              </p>
              <button className="bg-gradient-to-r from-blue-500 sm:ml-8 lg:ml-16 to-blue-600 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl text-base sm:text-lg lg:text-xl font-medium flex items-center gap-2 sm:gap-3 hover:shadow-lg transition-shadow w-full sm:w-auto justify-center lg:justify-start">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                Подсмотреть за нами
              </button>
            </div>

            <div className="flex-1 flex justify-center lg:justify-end pr-0 lg:pr-20 lg:order-last">
              <div className="rounded-2xl sm:rounded-3xl w-[280px] h-[373px] sm:w-[360px] sm:h-[480px] md:w-[420px] md:h-[560px] lg:w-[480px] lg:h-[640px] relative">
                <img src="/images/home/f4bdbf1790d07ba513b62e141ee9ed8f8ff6e090.png" className="w-full object-cover h-full transform rotate-y-190 rounded-2xl sm:rounded-3xl lg:mr-[-40px] absolute top-0 left-0 grayscale hover:grayscale-0 transition-all duration-300" alt="" />

                <GlassElement
                  className="flex flex-col justify-center items-center border border-gray-200 person bg-opacity-30 backdrop-blur-md rounded-xl sm:rounded-2xl h-[70px] sm:h-[80px] lg:h-[100px] w-[calc(100%-32px)] sm:w-[calc(100%-48px)] lg:w-[calc(100%-64px)] text-center absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8"
                  width={420}
                  height={80}
                  radius={10}
                  depth={5}
                  blur={1}
                  chromaticAberration={1}
                >

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-1 sm:mb-2">Евгений</h3>
                  <div className="text-purple-200 flex gap-2 sm:gap-3 text-sm sm:text-base lg:text-lg">
                    {'<'}
                    <span className="text-[#00C8FF]">Back-end developer</span>
                    {'>'}
                  </div>
                </GlassElement>
              </div>
            </div>
          </div>
        </div>

      </section >

    {/* Route to Production Section */ }
    < Steps />

    {/* Services Section */ }
    < Services />

    {/* History Section */ }
    < History />

    {/* Location Section */ }
    < Location />

    {/* Internal Section */ }
    < Internal />

    {/* Contact Section */ }
    < Contact />
    </div >
  );
}
