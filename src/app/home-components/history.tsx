import { Link } from "@/i18n/navigation";
import PostsList from "../components/postsList";
import { useTranslations } from "next-intl";

export default function History() {
  const t = useTranslations('history');

  return (
    <section
      id="product-list"
      className="bg-black flex justify-center w-full pt-20 sm:pt-30 md:pt-40 relative z-20"
    >
      <div
        className="absolute top-0 md:top-40 right-4 sm:right-6 md:right-10 w-[300px] h-[400px] sm:w-[500px] sm:h-[600px] md:w-[700px] md:h-[800px] lg:w-[900px] lg:h-[1000px] z-0">
        <img
          src="images/background/background.svg"
          className="w-3/4 absolute background-2"
          alt=""
        />
      </div>

      <div
        className="absolute bottom-0 left-4 sm:left-6 md:left-10 w-[300px] h-[400px] sm:w-[500px] sm:h-[600px] md:w-[700px] md:h-[800px] lg:w-[900px] lg:h-[1000px] z-0">
        <img
          src="images/background/background.svg"
          className="w-3/4 absolute -left-100 -bottom-80"
          alt=""
        />
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 sm:mb-16 lg:mb-20 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-0">
          <div className="">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-2 lg:mb-4 text-white">
              {t('title')} <span className="text-gray-400">{t('subtitle')}</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl font-light text-gray-400">
              {t('description')}
            </p>
          </div>

          <Link
            href="/posts"
            className="flex items-center gap-2 text-gray-400 cursor-pointer self-center sm:self-end"
          >
            <span className="text-lg sm:text-xl lg:text-2xl font-light">
              {t('button')}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="42"
              viewBox="0 0 43 42"
              fill="none"
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[43px] lg:h-[42px]"
            >
              <path
                d="M17.9123 29.8469L26.5491 21.2101"
                stroke="currentColor"
                strokeWidth="3.45472"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M26.5491 21.2101L17.9123 12.5733"
                stroke="currentColor"
                strokeWidth="3.45472"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <PostsList />
      </div>
    </section>
  );
}
