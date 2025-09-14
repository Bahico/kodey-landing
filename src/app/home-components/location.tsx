'use client';
import "./location.css";
import {useTranslations} from "next-intl";
import Script from 'next/script';
import {Placemark, YMaps, Map} from "@pbe/react-yandex-maps";
import {useEffect, useRef} from "react";

export default function Location() {
    const t = useTranslations('location');


    return (
        <section className="bg-black flex flex-col items-center w-full pt-20 sm:pt-30 md:pt-40 relative z-20">
            <Script src="https://api-maps.yandex.ru/v3?apikey=003258f7-2b47-4ebe-927b-04a900a881fb&lang=en_US"/>
            <div className="container px-4 sm:px-6 lg:px-8">
                <div className="mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold sm:mb-8 text-white">
                        {t('title')} <span className="text-[#929292]">{t('subtitle')}</span>
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-[#929292]">
                        {t('description')}
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center w-full">
                <div className="lg:w-[728px] flex justify-center items-center mb-4 border-b-[6px] border-[#004DFF]">
                    <h3 className="text-2xl font-bold mb-4 text-white">
                        {t('place')}
                    </h3>
                </div>

                <div className="w-full h-[500px] relative">
                    <span
                        className="absolute pointer-events-none top-0 left-0 w-full h-30 bg-opacity-50 z-10 location-background"
                    ></span>


                    <YMaps query={{ lang: 'en_RU', apikey: '003258f7-2b47-4ebe-927b-04a900a881fb' }}>
                        <Map
                            width="100%"
                            height="100%"
                            defaultState={{ 
                                center: [39.661507, 66.924519], 
                                zoom: 14,
                                type: 'yandex#map'
                            }}
                            options={{
                                suppressMapOpenBlock: true,
                                yandexMapDisablePoiInteractivity: true,
                                restrictMapArea: false
                            }}
                            modules={['control.ZoomControl', 'control.FullscreenControl']}
                        >
                            <Placemark geometry={[39.661507, 66.924519]} options={{
                                preset: 'islands#darkBlueDotIcon'
                            }} />
                        </Map>
                    </YMaps>

                    <span
                        className="absolute pointer-events-none bottom-0 left-0 w-full h-30 bg-opacity-50 z-10 rotate-180 location-background"
                    ></span>
                </div>
            </div>
        </section>
    );
}

