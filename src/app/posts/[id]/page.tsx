import Image from "next/image";

export default function Post() {
  return (
    <div className="relative w-full pt-[87px]">
      {/* Hero Section */}
      <section className="relative flex justify-center w-full z-0">
        <div className="container">
          <div className="flex items-end">
            <Image
              src="/images/posts/ChatGPT Image 8 авг. 2025 г., 16_01_53 1.png"
              alt="background"
              className=""
              width={400}
              height={400}
            />

            <div className="flex flex-col">
              <h1 className="text-6xl text-black font-bold mb-6">ДримтиМ</h1>
              <p className="text-xl text-gray-600 max-w-4xl mb-8">
                Выполняй задания, копи баллы и получай подарки!
                <br />
                Зарабатывай монеты за простые квесты, подписки и активности
                📲💰.
                <br />
                Обменивай накопленные баллы на реальные призы, бонусы и товары
                🎁🛍.
                <br />
                Весело, просто и с пользой — твой путь к мечтам начинается
                здесь! 🌟🚀
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex justify-center py-16 bg-black mb-[-100px] relative z-10 pb-40">
        <div className="container flex flex-col gap-10">
          <div className="flex gap-20 justify-between items-center">
            <div className="flex flex-col gap-6 w-[50%]">
              <h3 className="text-4xl text-white font-bold">
                Как разработать дизайн операционной мобильной системы с нуля:
                кейс РОСА и 65apps
              </h3>
              <p className="text-xl text-white">
                У нас был парк из 50 смартфонов разных производителей, 2 года на
                разработку, 4 дизайнера, 1 арт-директор, исследовательские и
                стратегические сессии, целое море идей, разноцветных прототипов
                и эскизов, пачка шрифтов, а также литры кофе, чая и немного пива
                по пятницам. Не то, чтобы все это было категорически необходимо
                для создания дизайна операционной системы, но если уж мы
                взялись, то к делу надо подходить серьезно.
              </p>
            </div>

            <div className="w-[450px] h-[460px]">
              <Image
                src="/images/posts/Group 814.png"
                alt="background"
                className="w-full h-full object-contain"
                width={400}
                height={400}
              />
            </div>
          </div>

          <div className="flex gap-20 justify-between items-center">
            <div className="flex flex-col gap-6 w-[50%]">
              <h3 className="text-4xl text-white font-bold">
                Как разработать дизайн операционной мобильной системы с нуля:
                кейс РОСА и 65apps
              </h3>
              <p className="text-xl text-white">
                У нас был парк из 50 смартфонов разных производителей, 2 года на
                разработку, 4 дизайнера, 1 арт-директор, исследовательские и
                стратегические сессии, целое море идей, разноцветных прототипов
                и эскизов, пачка шрифтов, а также литры кофе, чая и немного пива
                по пятницам. Не то, чтобы все это было категорически необходимо
                для создания дизайна операционной системы, но если уж мы
                взялись, то к делу надо подходить серьезно.
              </p>
            </div>

            <div className="w-[450px] h-[460px]">
              <Image
                src="/images/posts/Group 814.png"
                alt="background"
                className="w-full h-full object-contain"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
