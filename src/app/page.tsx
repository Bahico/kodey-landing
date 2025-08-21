'use client'
import "./home.css";
import LiquidGlass from 'liquid-glass-react'





export default function Home() {


  return (
    <div className="relative w-full">
      <LiquidGlass
        displacementScale={64}
        blurAmount={0.1}
        saturation={130}
        aberrationIntensity={2}
        elasticity={0.35}
        cornerRadius={100}
        padding="8px 16px"
        onClick={() => console.log('Button clicked!')}
      >
        <span className="text-white font-medium">Click Me</span>
      </LiquidGlass>
      

      {/* Hero Section */}
      <section className="relative min-h-screen flex justify-center w-full pt-10">
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
      <section className="bg-black text-white w-full flex justify-center rounded-t-[60px]">
        <div className="container mt-20">
          <div className="w-full flex items-center gap-40">
            <div className="flex-1">
              <h2 className="text-6xl font-bold mb-8">
                Человеческий <span className="text-gray-400">фактор</span>
              </h2>
              <p className="text-3xl font-light text-gray-400 mb-12">
                Мы не роботы. Хотя любим автоматизацию
              </p>
              <p className="text-xl leading-relaxed text-gray-300 mb-16">
                Мы — небольшая, но сплочённая IT-команда, объединяющая разработчиков с разным опытом и специализациями.
                Создаём сайты, мобильные приложения, Telegram-ботов и внутренние сервисы.
                <br /><br />
                Нам важна простота в коммуникации, прозрачность в работе и результат, за который не стыдно.
                <br /><br />
                Работаем как единый механизм: каждый знает своё дело и усиливает команду.
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-10 py-5 rounded-2xl text-xl font-medium flex items-center gap-3 hover:shadow-lg transition-shadow">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Подсмотреть за нами
              </button>
            </div>

            <div className="flex-1">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 relative">
                <div className="bg-white bg-opacity-20 rounded-2xl p-6 text-center">
                  <h3 className="text-3xl font-semibold text-white mb-2">Евгений</h3>
                  <p className="text-purple-200">
                    &lt; <span className="text-blue-300">Back-end developer</span> &gt;
                  </p>
                </div>
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                  <button className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                </div>
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                  <button className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </section>

      {/* Route to Production Section */}
      <section className="bg-black text-white py-32 px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold mb-8">
              Маршрут <span className="text-gray-400">в продакшн</span>
            </h2>
            <p className="text-3xl font-light text-gray-400">
              Чёткая система, где каждый шаг двигает к результату
            </p>
          </div>

          <div className="flex items-center gap-40">
            {/* Timeline Steps */}
            <div className="flex-1 space-y-12">
              {[
                {
                  title: "Принятие запроса",
                  description: "Мы внимательно изучаем ваш запрос, чтобы понять цель проекта, ваши ожидания и особенности задачи. Это отправная точка для качественной работы.",
                  active: true
                },
                {
                  title: "Сбор требований",
                  description: "Проводим уточняющие вопросы, интервью или брифинг, чтобы зафиксировать все пожелания, ограничения и специфику будущего продукта.",
                  active: false
                },
                {
                  title: "Согласование ТЗ",
                  description: "Формируем техническое задание, в котором чётко прописаны этапы, функции и результаты. Согласовываем его с вами перед стартом проекта.",
                  active: false
                },
                {
                  title: "Дизайн интерфейса",
                  description: "Разрабатываем UX/UI-дизайн, который будет удобен, интуитивен и визуально привлекателен. Создаём прототипы и визуальные решения.",
                  active: false
                },
                {
                  title: "Разработка",
                  description: "На этом этапе проект оживает — программисты реализуют весь функционал согласно ТЗ и дизайн-макетам.",
                  active: false
                },
                {
                  title: "Тестирование",
                  description: "Проверяем работу системы на наличие багов, ошибок и недочётов. Убедимся, что всё работает стабильно на разных устройствах и браузерах.",
                  active: false
                },
                {
                  title: "Запуск и поддержка",
                  description: "Публикуем проект и следим за его корректной работой. Оказываем техническую поддержку, обновления и вносим улучшения по мере необходимости.",
                  active: false
                }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className={`text-4xl font-semibold mb-4 ${step.active ? 'text-blue-400' : 'text-gray-500'}`}>
                    {step.title}
                  </div>
                  <div className={`text-sm leading-relaxed ${step.active ? 'text-white' : 'text-gray-400'}`}>
                    {step.description}
                  </div>
                  {index < 6 && (
                    <div className="absolute left-0 top-16 w-px h-12 bg-gradient-to-b from-gray-600 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Interactive Carousel */}
            <div className="flex-1 relative">
              <div className="relative w-[549px] h-[568px] rounded-full overflow-hidden">
                {/* Carousel Container */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full transform rotate-12 scale-110"></div>
                
                {/* Carousel Items */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-[400px] h-[400px]">
                    {/* Placeholder for carousel content */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl transform rotate-6"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-400 rounded-2xl transform -rotate-6"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl transform rotate-3"></div>
                  </div>
                </div>

                {/* Navigation Arrow */}
                <button className="absolute top-1/2 right-4 transform -translate-y-1/2 w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Progress Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {[1, 2, 3, 4, 5, 6, 7].map((dot, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === 0 ? 'bg-blue-400' : 'bg-gray-600'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-black text-white py-32 px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold mb-8">
              Digital <span className="text-gray-400">— инструментарий</span>
            </h2>
            <p className="text-3xl font-light text-gray-400">
              Всё, что мы умеем — и умеем хорошо
            </p>
          </div>

          <div className="grid grid-cols-3 gap-12">
            {[
              {
                title: "Telegram-бот",
                description: "Автоматизируем ваши процессы с помощью кастомного Telegram-бота: от простых чат-ответов до интеграции с CRM и API.",
                price: "от XXX XXX сум",
                active: true
              },
              {
                title: "Landing Page",
                description: "Создаём привлекательные лендинги, которые конвертируют посетителей в клиентов. Дизайн, адаптивная верстка, настройка аналитики.",
                price: "от XXX XXX сум",
                active: false
              },
              {
                title: "Web-сайт",
                description: "Полноценные сайты для бизнеса, портфолио или интернет-магазинов. Под ключ, с современным дизайном и SEO-настройками.",
                price: "от XXX XXX сум",
                active: false
              },
              {
                title: "Мобильное приложение",
                description: "Разрабатываем мобильные приложения для iOS и Android с нуля. UX/UI, программирование, тестирование и публикация в сторах.",
                price: "от XXX XXX сум",
                active: false
              },
              {
                title: "Деплой Telegram-бота",
                description: "Развёртывание вашего Telegram-бота на сервере или облаке. Настройка, тестирование и запуск без сбоев.",
                price: "от XXX XXX сум",
                active: false
              },
              {
                title: "UI / UX Дизайн",
                description: "Проектируем удобные и красивые интерфейсы для веба и мобильных приложений. Анализ, прототипирование и дизайн в Figma.",
                price: "от XXX XXX сум",
                active: false
              }
            ].map((service, index) => (
              <div key={index} className={`relative h-[730px] rounded-2xl overflow-hidden ${service.active ? 'bg-black bg-opacity-90' : 'bg-black bg-opacity-60'}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-20"></div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="w-full h-64 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl mb-6"></div>
                  </div>
                  <div>
                    <h3 className={`text-2xl font-semibold mb-4 ${service.active ? 'text-gray-200' : 'text-gray-500'}`}>
                      {service.title}
                    </h3>
                    <p className={`text-sm mb-4 ${service.active ? 'text-gray-300' : 'text-gray-600'}`}>
                      {service.description}
                    </p>
                    <p className={`text-right ${service.active ? 'text-gray-300' : 'text-gray-600'}`}>
                      {service.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
