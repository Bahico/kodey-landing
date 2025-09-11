import {useEffect, useState} from "react";
import "./internal.css";
import {ArticleModel} from "@/models/article.model";
import {getAxios, photoUrl} from "@/api/api.functions";
import { useTranslations } from "next-intl";


export default function Internal() {
  const t = useTranslations('internal');
  const [activeIndex, setActiveIndex] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [posts, setPosts] = useState<ArticleModel[]>([]);

  useEffect(() => {
    setIntervalId(setInterval(() => {
      setActiveIndex(activeIndex + 1 <= posts.length - 1 ? activeIndex + 1 : 0);
    }, 10000));
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [activeIndex]);

  useEffect(() => {
    getAxios('articles').then(res => {
      setPosts(res.data);
      console.log(res.data);
    });
  }, []);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };


  return (
    <section
      id="internal"
      className="relative w-full bg-black py-20 rounded-b-[60px]"
    >
      <div
        className="absolute top-20 sm:top-40 md:top-120 left-4 sm:left-6 md:left-10 w-[300px] h-[400px] sm:w-[500px] sm:h-[600px] md:w-[700px] md:h-[800px] lg:w-[900px] lg:h-[1000px] z-0">
        <img
          src="images/background/background.svg"
          className="w-3/4 absolute background-1"
          alt=""
        />
      </div>

      <div
        className="absolute top-0 md:top-40 right-4 sm:right-6 md:right-10 w-[300px] h-[400px] sm:w-[500px] sm:h-[600px] md:w-[700px] md:h-[800px] lg:w-[900px] lg:h-[1000px] z-0">
        <img
          src="images/background/background.svg"
          className="w-3/4 absolute background-2"
          alt=""
        />
      </div>

      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            <span>{t('title')}</span>
            <span className="text-gray-400">{t('subtitle')}</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light">
            {t('description')}
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="flex items-center gap-10 overflow-x-auto">
          {posts.map((post, index) => (
            <div
              key={post._id}
              className="min-w-1/3 w-1/3 lg:min-w-[300px]"
              onClick={() => handleClick(index)}
            >
              <div
                className={`flex flex-col gap-6 transition-all duration-300 ${activeIndex === index ? "" : "pt-10 pb-20 unactive"}`}
              >
                <div
                  className={`relative w-full overflow-hidden rounded-lg transition-all duration-300 ${activeIndex === index ? "h-[180px] lg:h-[444px]" : "h-[120px] lg:h-[296px]"}`}
                >
                  <img
                    src={photoUrl(post.photo)}
                    alt={post.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between text-sm md:text-base">
                    <span className="text-cyan-400 text-xl">#{post.tags.join(', #')}</span>
                    <span className="text-gray-500">{post.publishedAt}</span>
                  </div>
                  <div className="flex flex-col gap-6">
                    <h3 className="text-2xl md:text-3xl font-medium text-gray-300 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
