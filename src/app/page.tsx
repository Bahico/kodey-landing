'use client'
import "./home.css";
import Steps from "./home-components/steps";
import Services from "./home-components/services";
import History from "./home-components/history";
import Location from "./home-components/location";
import Internal from "./home-components/internal";
import Contact from "./home-components/contact";

export default function Home() {


  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <section className="relative flex justify-center w-full pt-10">
        <div className="container">
          <div className="absolute inset-0 opacity-65">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br ">
              <img src="images/background/background1.svg" className="w-3/4 absolute background-1" alt="" />
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between w-full">
            <div className="flex flex-col gap-10">
              <h1 className="text-7xl primary-gradient font-bold">Разработка</h1>

              <h1 className="text-7xl font-light text-gray-600 mb-8">
                мобильных приложений<br />
                и цифровых сервисов
              </h1>
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-10 py-5 rounded-2xl text-2xl font-semibold hover:shadow-lg transition-shadow">
                Оставить заявку
              </button>
              <p className="text-xl text-gray-500 mt-6">
                Мы свяжемся с вами в течении 24 часов<br />
                с момента оформления заявки.
              </p>
            </div>

            <div className="relative">
              <img src="/images/home/7546c655c3c9169934869b5c59b6d45d1ec248d1.png" alt="Hero" className="w-[583px] h-[875px] transform rotate-y-190 mr-[-40px]" />
            </div>
          </div>
        </div>
        
      </section>

      {/* Human Factor Section */}
      <section className="bg-black text-white w-full flex justify-center rounded-t-[60px] relative right-background">
        <div className="absolute top-60 left-10 w-[900px] h-[1000px] z-0">
          <img src="images/background/background1.svg" className="w-3/4 absolute background-1" alt="" />
        </div>

        <div className="container mt-40 flex flex-col items-center z-10">
          <div className="w-full flex justify-center gap-20">
            <div className="flex-1">
              <h2 className="text-6xl font-bold mb-8">
                Человеческий <span className="text-gray-400">фактор</span>
              </h2>
              <p className="text-2xl text-[#929292] mb-12">
                Мы не роботы. Хотя любим автоматизацию
              </p>
              <p className="text-xl leading-relaxed text-gray-300 mb-16 pl-16">
                Мы — небольшая, но сплочённая IT-команда, объединяющая разработчиков с разным опытом и специализациями.
                Создаём сайты, мобильные приложения, Telegram-ботов и внутренние сервисы.
                <br /><br />
                Нам важна простота в коммуникации, прозрачность в работе и результат, за который не стыдно.
                <br /><br />
                Работаем как единый механизм: каждый знает своё дело и усиливает команду.
              </p>
              <button className="bg-gradient-to-r from-blue-500 ml-16 to-blue-600 text-white px-10 py-5 rounded-2xl text-xl font-medium flex items-center gap-3 hover:shadow-lg transition-shadow">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Подсмотреть за нами
              </button>
            </div>

            <div className="flex-1 flex justify-end pr-20">
              <div className="rounded-3xl w-[480px] h-[640px] relative">
                <img src="/images/home/f4bdbf1790d07ba513b62e141ee9ed8f8ff6e090.png" className="w-full object-cover h-full transform rotate-y-190 rounded-3xl mr-[-40px] absolute top-0 left-0 grayscale hover:grayscale-0 transition-all duration-300" alt="" />
                
                <div className="flex flex-col justify-center items-center border border-gray-200 bg-opacity-30 backdrop-blur-md rounded-2xl h-[100px] w-[calc(100%-64px)] text-center absolute bottom-8 left-8">
                  
                  <h3 className="text-3xl font-semibold text-white mb-2">Евгений</h3>
                  <div className="text-purple-200 flex gap-3">
                    {'<'}
                    <span className="text-[#00C8FF]">Back-end developer</span>
                    {'>'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Route to Production Section */}
      <Steps />

      {/* Services Section */}
      <Services />

      {/* History Section */}
      <History />

      {/* Location Section */}
      <Location />

      {/* Internal Section */}
      <Internal />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
