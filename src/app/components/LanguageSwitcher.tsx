'use client';

import {usePathname} from 'next/navigation';
import {GlassElement} from './GlassElement/GlassElement';
import {useEffect, useState} from 'react';
import {setLocale} from '@/api/api.constans';
import {nowSize} from "@/app/functions/now-size";

type Props = {
    currentLocale: string;
};

export default function LanguageSwitcher({currentLocale}: Props) {
    const {sm} = nowSize()
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const switchLanguage = (locale: string) => {
        setOpen(false);
        const newPathname = pathname.replace(`/${currentLocale}`, `/${locale}`);
        setLocale(locale as 'ru' | 'uz' | 'en');
        location.href = newPathname;
    };

    useEffect(() => {
        document.addEventListener('scroll', () => {
            setOpen(false);
        });
    }, []);

    return (
        <div className='relative'>
            <GlassElement
                className="flex justify-center items-center gap-2 rounded-full shadow-md hover:bg-gray-50 transition-colors cursor-pointer"
                width={sm ? 50 : 90}
                height={50}
                radius={43}
                depth={10}
                blur={0}
                chromaticAberration={0}
                onClick={() => setOpen(!open)}
            >
                <span className="text-xl font-bold primary-gradient uppercase">
                  {currentLocale}
                </span>
            </GlassElement>

            <div
                className={`absolute top-16 left-0 w-full h-40 overflow-hidden ${open ? 'max-h-40' : 'max-h-0'} transition-height duration-300`}>
                <div className="flex flex-col gap-2">

                    <GlassElement
                        className="items-center justify-center gap-2 rounded-full shadow-md hover:bg-gray-50 transition-colors cursor-pointer"
                        style={{display: currentLocale !== 'ru' ? 'flex' : 'none'}}
                        width={sm ? 50 : 90}
                        height={50}
                        radius={43}
                        depth={10}
                        blur={1}
                        chromaticAberration={10}
                        onClick={() => switchLanguage('ru')}
                    >
                        <span className="text-xl font-bold primary-gradient uppercase">
                          Ru
                        </span>
                    </GlassElement>
                    <GlassElement
                        className="flex justify-center items-center gap-2 rounded-full shadow-md hover:bg-gray-50 transition-colors cursor-pointer"
                        style={{display: currentLocale !== 'en' ? 'flex' : 'none'}}
                        width={sm ? 50 : 90}
                        height={50}
                        radius={43}
                        depth={10}
                        blur={1}
                        chromaticAberration={10}
                        onClick={() => switchLanguage('en')}
                    >
                        <span className="text-xl font-bold primary-gradient uppercase">En</span>
                    </GlassElement>
                    <GlassElement
                        className="flex justify-center items-center gap-2 rounded-full shadow-md hover:bg-gray-50 transition-colors cursor-pointer"
                        style={{display: currentLocale !== 'uz' ? 'flex' : 'none'}}
                        width={sm ? 50 : 90}
                        height={50}
                        radius={43}
                        depth={10}
                        blur={0}
                        chromaticAberration={0}
                        onClick={() => switchLanguage('uz')}
                    >
                        <span className="text-xl font-bold primary-gradient uppercase">Uz</span>
                    </GlassElement>
                </div>
            </div>
        </div>

    );
}
