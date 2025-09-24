'use client';
import "./location.css";
import {useTranslations} from "next-intl";
import Script from 'next/script';
// import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";
import {useEffect, useRef, useState} from "react";
import {useGSAP} from "@gsap/react";
import {textAnimation, textAnimationTl} from "@/app/functions/text.animation";

export default function Location() {
    const t = useTranslations('location');
    const [loaded, setLoaded] = useState(false);

    // refs
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const placeRef = useRef<HTMLParagraphElement>(null);
    const elementRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = textAnimation(titleRef.current, elementRef.current);
        textAnimationTl(descriptionRef.current, tl);
        textAnimationTl(placeRef.current, tl);
    });

    const loadMap = () => {
        ymaps.ready(function(){

            const myMap = new ymaps.Map('map', {
                center: [39.661507, 66.924519],
                zoom: 12,
                duration: 1000,
                timingFunction: "ease-in",
                controls: [],
                suppressMapOpenBlock: true,
                restrictMapArea: false,
                avoidFractionalZoom: false
            });
            const placemark = new ymaps.Placemark([39.661507, 66.924519], {}, {
                // Задаем стиль метки (метка в виде круга).
                preset: "islands#darkBlueDotIcon",
                // Задаем цвет метки (в формате RGB).
                // iconColor: '#ff0000'
            });
            myMap.geoObjects.add(placemark);
            setMapLayer(myMap, 'dark');

            myMap.controls.remove('directionControl');
            // myMap.controls.remove('trafficControl');
            // myMap.controls.remove('searchControl');
        });
    }

    const setMapLayer = (map, map_type) =>{
        const MAP = 'custom#' + map_type;
        ymaps.layer.storage.add(MAP, function mapLayer() {
            return new ymaps.Layer('https://core-renderer-tiles.maps.yandex.net/tiles?l=map' + ((map_type == 'dark') ? ('&theme=dark') : ('')) + '&%c&%l');
        });
        ymaps.mapType.storage.add(MAP, new ymaps.MapType(map_type, [MAP]));
        map.setType(MAP);
    }

    return (
        <section ref={elementRef} className="bg-black flex flex-col items-center w-full pt-20 sm:pt-30 md:pt-40 relative z-20">
            <Script type="text/javascript" src="https://api-maps.yandex.ru/2.1/?apikey=2d99c38b-e576-4360-bdf7-b3a1717e4cad&lang=en_US" onLoad={() => loadMap()}/>
            <div className="container px-4 sm:px-6 lg:px-8">
                <div className="mb-12 sm:mb-16 lg:mb-20">
                    <h2 ref={titleRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold sm:mb-8 text-white">
                        {t('title')} <span className="text-[#929292]">{t('subtitle')}</span>
                    </h2>
                    <span ref={descriptionRef} className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-[#929292]">
                        {t('description')}
                    </span>
                </div>
            </div>

            <div className="flex flex-col items-center w-full">
                <div className="lg:w-[728px] flex justify-center items-center mb-4 border-b-[6px] border-[#004DFF]">
                    <h3 ref={placeRef} className="text-2xl font-bold mb-4 text-white">
                        {t('place')}
                    </h3>
                </div>

                <div className="w-full h-[500px] relative">
                    <span
                        className="absolute pointer-events-none top-0 left-0 w-full h-30 bg-opacity-50 z-10 location-background"
                    ></span>

                    <div id="map" className="w-full h-full"></div>
                    {/*<YMaps query={{ lang: 'en_RU', apikey: '003258f7-2b47-4ebe-927b-04a900a881fb' }}>*/}
                    {/*    <Map*/}
                    {/*        width="100%"*/}
                    {/*        height="100%"*/}
                    {/*        defaultState={{ */}
                    {/*            center: [39.661507, 66.924519], */}
                    {/*            zoom: 14,*/}
                    {/*            type: 'yandex#map'*/}
                    {/*        }}*/}
                    {/*        options={{*/}
                    {/*            suppressMapOpenBlock: true,*/}
                    {/*            yandexMapDisablePoiInteractivity: true,*/}
                    {/*            restrictMapArea: false*/}
                    {/*        }}*/}
                    {/*        modules={['control.ZoomControl', 'control.FullscreenControl']}*/}
                    {/*    >*/}
                    {/*        <Placemark geometry={[39.661507, 66.924519]} options={{*/}
                    {/*            preset: 'islands#darkBlueDotIcon'*/}
                    {/*        }} />*/}
                    {/*    </Map>*/}
                    {/*</YMaps>*/}

                    <span
                        className="absolute pointer-events-none bottom-0 left-0 w-full h-30 bg-opacity-50 z-10 rotate-180 location-background"
                    ></span>
                </div>
            </div>
        </section>
    );
}

