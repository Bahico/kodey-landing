export default function History() {

    const history = [
        {
            title: "ДримтиМ",
            description: "Выполняй задания, копи баллы и получай подарки! \nЗарабатывай монеты за простые квесты, подписки и активности 📲💰.\nОбменивай накопленные баллы на реальные призы, бонусы и товары 🎁🛍.\nВесело, просто и с пользой — твой путь к мечтам начинается здесь! 🌟🚀",
            image: "images/home/Frame 1386.png"
        },
        {
            title: "ДримтиМ",
            description: "Выполняй задания, копи баллы и получай подарки! \nЗарабатывай монеты за простые квесты, подписки и активности 📲💰.\nОбменивай накопленные баллы на реальные призы, бонусы и товары 🎁🛍.\nВесело, просто и с пользой — твой путь к мечтам начинается здесь! 🌟🚀",
            image: "images/home/Frame 1389.png"
        },
        {
            title: "ДримтиМ",
            description: "Выполняй задания, копи баллы и получай подарки! \nЗарабатывай монеты за простые квесты, подписки и активности 📲💰.\nОбменивай накопленные баллы на реальные призы, бонусы и товары 🎁🛍.\nВесело, просто и с пользой — твой путь к мечтам начинается здесь! 🌟🚀",
            image: "images/home/Frame 1389.png"
        },
    ]
    return (
        <section className="bg-black flex justify-center w-full pt-40">
            <div className="container">
                <div className="mb-20">
                    <h2 className="text-6xl font-bold mb-8 text-white">
                        Архив <span className="text-gray-400">Воплощений</span>
                    </h2>
                    <p className="text-3xl font-light text-gray-400">
                        От идеи до продакшна — всё, что мы запустили в реальность
                    </p>
                </div>

                <div className="flex flex-wrap gap-[30px] w-full">
                    {history.map((item, index) => (
                        <div key={index} className="w-[calc(50%-15px)]">
                            <img src={item.image} alt={item.title} className="w-full object-cover rounded-t-2xl" />

                            <div className="flex flex-col p-8 gap-4 rounded-b-2xl flex flex-col justify-between bg-[#0C0C0C99] group-hover:bg-[#0C0C0CE5] transition-all duration-300">
                                <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                                <p className="text-gray-400">{item.description}</p>
                                <span className="text-blue-500">#webapp</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}