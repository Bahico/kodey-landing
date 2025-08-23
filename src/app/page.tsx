'use client'
import "./home.css";
import Steps from "./home-components/steps";
import Services from "./home-components/services";
import History from "./home-components/history";
import Location from "./home-components/location";

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

      {/* Contact Section */}
      <section className="bg-black text-white py-32 px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold mb-8">
              Отправить <span className="text-gray-400">сигнал</span>
            </h2>
            <p className="text-3xl font-light text-gray-400">
              Опишите задачу — мы на связи и готовы принимать данные
            </p>
          </div>

          <div className="grid grid-cols-2 gap-20">
            <div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-8">Какая задача нас ждет ?</h3>
              
              <div className="grid grid-cols-3 gap-4 mb-12">
                {[
                  "Telegram - bot", "Telegram - app", "Сайт (лендинг)",
                  "Сайт (многостраничный)", "Мобильное приложение", "CRM",
                  "Аутстафф", "Другое"
                ].map((service, index) => (
                  <button key={index} className="px-8 py-4 rounded-full shadow-md bg-white bg-opacity-10 hover:bg-opacity-20 transition-colors text-gray-800 font-medium">
                    {service}
                  </button>
                ))}
              </div>

              <div className="space-y-8">
                <div>
                  <label className="block text-gray-600 text-base mb-2">Имя*</label>
                  <input type="text" className="w-full bg-transparent border-b-2 border-gray-300 text-2xl text-gray-800 py-2 focus:border-blue-500 outline-none" placeholder="Виктор |" />
                </div>
                <div>
                  <label className="block text-gray-800 text-2xl mb-2">Телефон*</label>
                  <input type="tel" className="w-full bg-transparent border-b-2 border-gray-300 text-2xl text-gray-800 py-2 focus:border-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-gray-800 text-2xl mb-2">Email*</label>
                  <input type="email" className="w-full bg-transparent border-b-2 border-gray-300 text-2xl text-gray-800 py-2 focus:border-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-gray-800 text-2xl mb-2">Краткое техническое задание</label>
                  <textarea className="w-full bg-transparent border-b-2 border-gray-300 text-2xl text-gray-800 py-2 focus:border-blue-500 outline-none resize-none" rows={4}></textarea>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-8 mb-8">
                <input type="checkbox" className="w-8 h-8 rounded border-2 border-gray-300" />
                <span className="text-gray-500 text-xl">Я соглашаюсь на обработку персональных данных</span>
              </div>

              <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-10 py-5 rounded-2xl text-2xl font-semibold hover:shadow-lg transition-shadow">
                Оставить заявку
              </button>
            </div>

            <div className="relative">
              <div className="w-full h-[640px] bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 transform rotate-12 scale-110"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 transform -rotate-12 scale-110"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-32 px-16 rounded-t-[100px]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-4 gap-16">
            <div>
              <h3 className="text-6xl font-bold mb-8">
                Всегда<br />
                <span className="text-gray-500">на связи</span>
              </h3>
              <p className="text-3xl font-light text-white mb-8">
                С 12:00 до 20:00<br />
                по МСК
              </p>
            </div>

            <div className="space-y-6">
              <a href="#" className="block text-xl font-medium hover:text-blue-400 transition-colors">Главная</a>
              <a href="#" className="block text-xl font-medium hover:text-blue-400 transition-colors">Кейсы</a>
              <a href="#" className="block text-xl font-medium hover:text-blue-400 transition-colors">Услуги</a>
              <a href="#" className="block text-xl font-medium hover:text-blue-400 transition-colors">Блог</a>
              <a href="#" className="block text-xl font-medium hover:text-blue-400 transition-colors">Связаться</a>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-xl font-medium">+998 00 000 00 00</span>
              </div>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-xl font-medium">mail@kodey.com</span>
              </div>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <span className="text-xl font-medium">@kodey.manager</span>
              </div>
              <div className="pt-4">
                <p className="text-gray-400 text-base leading-relaxed">
                  140158, с. Узбекистан,<br />
                  г. Самарканд, ул. улица Авесто, д.78В
                </p>
              </div>
            </div>

            <div className="text-right">
              <div className="flex justify-end mb-8">
                <div className="flex gap-4">
                  <button className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                  </button>
                  <button className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                  </button>
                  <button className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-16 pt-8 flex justify-between items-center">
            <div>
              <p className="text-white text-xl">OOO "CHAT-BOT-START"</p>
              <p className="text-white text-xl">@2025</p>
            </div>
            <div>
              <p className="text-white text-xl">Политика конфиденциальности</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
