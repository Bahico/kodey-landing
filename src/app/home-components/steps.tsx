import { useGSAP } from "@gsap/react";
import { GlassElement } from "../components/GlassElement/GlassElement";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { nowSize } from "@/app/functions/now-size";
import { useTranslations } from 'next-intl';
import "./steps.css";

export default function Steps() {
  const [activeStep, setActiveStep] = useState(0);
  const t = useTranslations('steps');

  const steps = [
    {
      title: t('step1.title'),
      description: t('step1.description'),
      image: "images/home/5ef3e749c7570d2f0dbd733d4b1f59e6037e1402.png",
    },
    {
      title: t('step2.title'),
      description: t('step2.description'),
      image: "images/home/Frame 1337.png",
    },
    {
      title: t('step3.title'),
      description: t('step3.description'),
      image: "images/home/Frame 1345.png",
    },
    {
      title: t('step4.title'),
      description: t('step4.description'),
      image: "images/home/Frame 1314.png",
    },
    {
      title: t('step5.title'),
      description: t('step5.description'),
      image: "images/home/Frame 1346.png",
    },
    {
      title: t('step6.title'),
      description: t('step6.description'),
      image: "images/home/Frame 1347.png",
    },
    {
      title: t('step7.title'),
      description: t('step7.description'),
      image: "images/home/Frame 1348.png",
    },
  ];

  useGSAP(() => {
    setTimeout(() => {
      for (let i = 0; i < steps.length; i++) {
        gsap.to(".scroller", {
          scrollTrigger: {
            trigger: `#step-${i}`,
            endTrigger: `#step-${i + 1}`,
            start: "center 300",
            end: "center bottom",
            scroller: "#trigger-1",
            scrub: 0.5,
          },
          duration: 0.5,
          scrollTo: `#step-image-${i}`,
          ease: "power2.out",
          stagger: 0.3,
          immediateRender: false,
          // onToggle: (isActive) => {
          //     // if (isActive) {
          //         setActiveStep(i);
          //     // }
          // }
        });
      }

      ScrollTrigger.addEventListener("scrollStart", () => {
        const currentStep = document.querySelector(".scroller");
        setActiveStep(Math.floor(currentStep?.scrollTop / 540) || 0);
      });

      ScrollTrigger.addEventListener("scrollEnd", () => {
        const currentStep = document.querySelector(".scroller");
        setActiveStep(Math.floor(currentStep?.scrollTop / 474) || 0);
      });
    }, 100);
  });

  return (
    <section
      id="steps"
      className="bg-black text-white flex justify-center pt-20 sm:pt-30 md:pt-40"
    >
      <div className="flex w-full items-center flex-col px-4 sm:px-6 lg:px-8">
        <div className="container mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8">
            {t('title')} <span className="text-gray-400">{t('subtitle')}</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-400">
            {t('description')}
          </p>
        </div>

        <div className="flex flex-col gap-10 w-full lg:h-150 h-auto justify-center relative">
          {/* Timeline Steps */}
          <div
            id="trigger-1"
            className="snap-mandatory snap-y h-60 sm:h-70 lg:h-100 flex flex-col items-center overflow-y-scroll scrollbar-hide w-full relative z-10"
          >
            <div className="snap-center relative w-full flex mb-24 sm:mb-28 lg:mb-36"></div>
            {steps.map((step, index) => (
              <div
                key={index}
                id={`step-${index}`}
                className="snap-center relative w-3/4 container lg:pr-[30%] mb-12 sm:mb-16 lg:mb-20"
              >
                <div
                  className={`text-xl sm:text-2xl md:text-3xl select-none lg:text-4xl font-semibold mb-2 sm:mb-3 lg:mb-4 ${activeStep === index ? "text-blue-400" : "text-gray-500"}`}
                >
                  {step.title}
                </div>
                <div
                  className={`text-xs sm:text-sm select-none leading-relaxed w-[300px] md:w-[550px] ${activeStep === index ? "text-white" : "text-gray-400"}`}
                >
                  {step.description}
                </div>
                {index < 6 && (
                  <div className="absolute left-0 top-12 sm:top-14 lg:top-16 w-px h-8 sm:h-10 lg:h-12 bg-gradient-to-b from-gray-600 to-transparent"></div>
                )}
              </div>
            ))}

            <div
              id="step-6"
              className="snap-center relative w-full flex mb-16 sm:mb-22 lg:mb-32"
            ></div>
            {/* <div className="snap-center snap-always relative w-full flex snap-start mb-14 sm:mb-18 lg:mb-24"></div> */}
          </div>

          {/* Interactive Carousel */}
          <StepImage steps={steps} />
        </div>
      </div>
    </section>
  );
}

function StepImage({
  steps,
}: {
  steps: { title: string; description: string; image: string }[];
}) {
  const { lg } = nowSize();

  if (lg)
    return (
      <div className="flex absolute top-0 bottom-0 justify-center items-center h-full z-0 w-full">
        <div className="container flex justify-end relative mr-20">
          <GlassElement
            className="relative flex-col steps-icons scroller w-[280px] snap-mandatory snap-y h-[290px] sm:w-[400px] sm:h-[415px] md:w-[500px] md:h-[520px] lg:w-[549px] lg:h-[568px] z-10 rounded-full overflow-y-auto scrollbar-hide border border-gray-600 backdrop-blur-sm mx-auto lg:mx-0"
            width={549}
            height={568}
            radius={300}
            depth={20}
            blur={1}
            chromaticAberration={0}
          >
            {steps.map((step, index) => (
              <div
                key={index}
                className="w-full snap-start snap-always h-[568px] flex justify-center items-center"
                id={`step-image-${index}`}
              >
                <img
                  src={step.image}
                  alt=""
                  className="w-[85%]"
                />
              </div>

            ))}
          </GlassElement>
          <img
            src="images/background/background.svg"
            alt=""
            className="absolute flex top-[-275px] right-[-275px] w-[1100px] h-[1100px] z-0"
          />
        </div>
      </div>
    );
  return (
    <div className="flex items-center relative">
      <GlassElement
        className="relative steps-icons scroller w-[280px] snap-mandatory snap-y h-[290px] sm:w-[400px] sm:h-[415px] md:w-[500px] md:h-[520px] lg:w-[549px] lg:h-[568px] z-10 rounded-full overflow-y-auto scrollbar-hide border border-gray-600 backdrop-blur-sm mx-auto lg:mx-0"
        width={249}
        height={268}
        radius={300}
        depth={10}
        blur={0}
        chromaticAberration={0}
      >
        {steps.map((step, index) => (
          <img
            key={index}
            src={step.image}
            id={`step-image-${index}`}
            alt=""
            className="w-full snap-start snap-always h-[268px]"
          />
        ))}
      </GlassElement>
      <img
        src="images/background/background.svg"
        alt=""
        className="absolute flex top-0 left-0 w-[300px] h-[300px] z-0"
      />
    </div>
  );
}
