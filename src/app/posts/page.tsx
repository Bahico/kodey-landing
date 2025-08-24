import Image from "next/image";
import PostsList from "../components/postsList";

export default function Posts() {
  return (
    <div className="relative w-full pt-[87px]">
      {/* Hero Section */}
      <section className="relative flex justify-center w-full pb-16 z-0">
        <div className="container">
          <div className="flex justify-center items-center">
            <Image src="/images/home/60b300101d6e7d385987432f11adc9d89f983db0.png" alt="background" className="rotate-y-190" width={400} height={400} />


            <div className="flex flex-col mb-20">
              <h1 className="text-6xl text-black font-bold mb-6">
                Внутренний
                <span className="text-gray-400 ml-4">эфир</span>
              </h1>
              <p className="text-2xl text-gray-600 max-w-3xl leading-relaxed">
                Полезные статьи, кейсы и новости из мира мобильной разработки
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Posts Grid Section */}
      <section className="w-full flex justify-center py-16 bg-black mt-[-240px] mb-[-100px] relative z-10 pb-40">
        <div className="container">
          <PostsList />
        </div>
      </section>
    </div>
  );
}
