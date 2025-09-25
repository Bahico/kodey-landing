'use client';
import {useEffect, useRef, useState} from "react";
import "./internal.css";
import {ArticleModel} from "@/models/article.model";
import {getAxios, photoUrl} from "@/api/api.functions";
import {useTranslations} from "next-intl";
import {useGSAP} from "@gsap/react";
import {textAnimation, textAnimationTl} from "@/app/functions/text.animation";
import {Link} from "@/i18n/navigation";
import {format, parseISO} from 'date-fns';
import {ru} from 'date-fns/locale';
import gsap from "gsap";


export default function Internal() {
    const t = useTranslations('internal');
    const [activeIndex, setActiveIndex] = useState(0);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
    const [posts, setPosts] = useState<ArticleModel[]>([]);

    // refs
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const elementRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = textAnimation(titleRef.current, elementRef.current);
        textAnimationTl(descriptionRef.current, tl);
        const timeout = setTimeout(() => {
            const tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: 'bottom center',
                    end: 'bottom center',
                    scrub: 1.5,
                    // toggleActions: 'play none reverse none'
                },
            });

            tl2.fromTo(
                elementRef.current,
                {
                    // clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                    // backgroundColor: '#000',
                    y: "0",
                    scale: 1
                },
                {
                    // clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
                    // backgroundColor: '#fff',
                    y: "-100vh",
                    scale: 0,
                    // rotation: -15,
                    duration: 1.5,
                    ease: 'power3.inOut',
                }
            );
        }, 100);

        return () => clearTimeout(timeout);
    })

    useEffect(() => {
        (async () => {
            getAxios('articles').then(res => {
                setPosts(res.data);
                setIntervalId(setInterval(() => {
                    setActiveIndex(activeIndex + 1 <= res.data.length - 1 ? activeIndex + 1 : 0);
                }, 10000));
            });
        })()

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, []);

    const handleClick = (index: number) => {
        setActiveIndex(index);
    };

    const GetDate = ({dateString}: { dateString: string }) => {
        const date = parseISO(dateString);
        const formattedDate = format(date, 'd MMMM yyyy', {locale: ru});

        return <time dateTime={dateString}>{formattedDate}</time>;
    }


    return (
        <>
            <section
                id="internal"
                ref={elementRef}
                className="relative w-full bg-black py-20 z-30 rounded-b-[60px]"
            >
                <div
                    className="absolute top-20 sm:top-40 md:top-120 left-4 sm:left-6 md:left-10 w-[300px] h-[400px] sm:w-[500px] sm:h-[600px] md:w-[700px] md:h-[800px] lg:w-[900px] lg:h-[1000px] z-0">
                    <img
                        src="images/background/background.png"
                        className="w-3/4 absolute background-1"
                        alt=""
                    />
                </div>

                <div
                    className="absolute top-0 md:top-40 right-4 sm:right-6 md:right-10 w-[300px] h-[400px] sm:w-[500px] sm:h-[600px] md:w-[700px] md:h-[800px] lg:w-[900px] lg:h-[1000px] z-0">
                    <img
                        src="images/background/background.png"
                        className="w-3/4 absolute background-2"
                        alt=""
                    />
                </div>

                <div className="container mx-auto px-4">
                    {/* Header Section */}
                    <div className="mb-16">
                        <h2 ref={titleRef}
                            className="text-5xl md:text-6xl font-bold text-white mb-4 flex flex-col md:flex-row">
                            <span>{t('title')}</span>
                            <span className="text-[#929292] ml-2">{t('subtitle')}</span>
                        </h2>
                        <div ref={descriptionRef} className="text-xl md:text-2xl w-full flex text-[#929292] font-light">
                            {t('description')}
                        </div>
                    </div>

                    {/* Blog Posts Grid */}
                    <div className="flex items-center gap-10 overflow-x-auto">
                        {posts.map((post, index) => (
                            <Link
                                className="min-w-[300px] md:min-w-1/3 md:w-1/3"
                                href={'/articles/' + post._id}
                                id={"internal-post-" + index}
                                key={post._id}
                                onClick={() => handleClick(index)}
                            >
                                <div
                                    className={`flex w-full flex-col gap-6 transition-all duration-300 ${activeIndex === index ? "" : "pt-10 pb-20 unactive"}`}
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
                                            <span className="text-gray-500">
                                            <GetDate dateString={post.createdAt}/>
                                        </span>
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
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            <div ref={triggerRef} style={{height: "1px"}}></div>
        </>
    );
}
