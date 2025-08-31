import Link from "next/link";

export default function PostsList() {
  const history = [
    {
      id: 1,
      title: "ДримтиМ",
      description:
        "Выполняй задания, копи баллы и получай подарки! \nЗарабатывай монеты за простые квесты, подписки и активности 📲💰.\nОбменивай накопленные баллы на реальные призы, бонусы и товары 🎁🛍.\nВесело, просто и с пользой — твой путь к мечтам начинается здесь! 🌟🚀",
      image: "images/home/Frame 1386.png",
    },
    {
      id: 2,
      title: "ДримтиМ",
      description:
        "Выполняй задания, копи баллы и получай подарки! \nЗарабатывай монеты за простые квесты, подписки и активности 📲💰.\nОбменивай накопленные баллы на реальные призы, бонусы и товары 🎁🛍.\nВесело, просто и с пользой — твой путь к мечтам начинается здесь! 🌟🚀",
      image: "images/home/Frame 1389.png",
    },
    {
      id: 3,
      title: "ДримтиМ",
      description:
        "Выполняй задания, копи баллы и получай подарки! \nЗарабатывай монеты за простые квесты, подписки и активности 📲💰.\nОбменивай накопленные баллы на реальные призы, бонусы и товары 🎁🛍.\nВесело, просто и с пользой — твой путь к мечтам начинается здесь! 🌟🚀",
      image: "images/home/Frame 1389.png",
    },
  ];

  return (
    <div className="flex flex-wrap gap-[30px] w-full">
      {history.map((item, index) => (
        <div key={index} className="sm:w-[calc(50%-15px)] w-full">
          <Link href={`/posts/${item.id}`}>
            <img
              src={item.image}
              alt={item.title}
              className="w-full object-cover rounded-t-2xl"
            />
          </Link>

          <div className="flex flex-col p-8 gap-4 rounded-b-2xl flex flex-col justify-between bg-[#0C0C0C99] group-hover:bg-[#0C0C0CE5] transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
            <p className="text-gray-400">{item.description}</p>
            <span className="text-blue-500">#webapp</span>
          </div>
        </div>
      ))}
    </div>
  );
}
