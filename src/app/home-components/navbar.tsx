"use client";
import {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {GlassElement} from "@/app/components/GlassElement/GlassElement";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import MobileNavbar from "@/app/components/MobileNavbar";
import {useTranslations} from "next-intl";
import {usePathname} from 'next/navigation';
import "./navbar.css";
import {setLocale} from "@/api/api.constans";
import {scrollToId} from "@/app/functions/scroll-to";

export default function Navbar({locale}: { locale: string}) {
    const [blur, setBlur] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [currentScrollY, setCurrentScrollY] = useState(0);

    const pathname = usePathname();
    const t = useTranslations('navigation');
    const routes = {
        '': 800,
        'privacy-policy': 0,
        'posts': 200,
        'articles': 200,
    }

    useEffect(() => {
        setLocale(locale as 'ru' | 'uz' | 'en');
    }, [locale]);

    useEffect(() => {
        const handleScroll = () => {
            const route = pathname.split('/')[2];

            if (route === undefined) {
                const contact = document.getElementById('contact')?.offsetTop;

                return setBlur(window.scrollY > routes[''] && window.scrollY < contact);
            }
            setBlur(window.scrollY > routes[route])
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 0) {
                setCurrentScrollY(currentScrollY);
                // Scrolling down
                setShowNavbar(false);
            } else {
                // Scrolling up
                setShowNavbar(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header className={`fixed top-2 md:top-6 left-0 w-full px-2 md:px-0 h-[87px] z-50 flex items-center justify-center transition-transform duration-700 ${showNavbar ? "open-navbar" : "close-navbar"}`}>
            <div
                className={`flex items-center justify-between container py-2 px-1 md:px-4 rounded-[80px] transition-colors duration-500 ${blur ? "text-white bg-[#151515A6]" : ""}`}>
                <Link href="/" className="flex items-center gap-4 ml-2 sm:ml-0">
                    <img
                        src="/images/logos/logo.png"
                        alt="Logo"
                        className="w-14 h-16"
                    />
                    <Image src="/images/logos/logo.svg" alt="logo" width={100} height={100}/>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-5">
                    <Link href="/">
                        <GlassElement
                            className="flex items-center gap-2 px-8 py-4 rounded-full shadow-md text-white hover:bg-gray-50 transition-colors"
                            width={locale === 'uz' ? 210 : 180}
                            height={50}
                            radius={43}
                            depth={10}
                            blur={0}
                            chromaticAberration={0}
                            debug={false}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path
                                    d="M20 17.0002V11.4522C20 10.9179 19.9995 10.6506 19.9346 10.4019C19.877 10.1816 19.7825 9.97307 19.6546 9.78464C19.5102 9.57201 19.3096 9.39569 18.9074 9.04383L14.1074 4.84383C13.3608 4.19054 12.9875 3.86406 12.5674 3.73982C12.1972 3.63035 11.8026 3.63035 11.4324 3.73982C11.0126 3.86397 10.6398 4.19014 9.89436 4.84244L5.09277 9.04383C4.69064 9.39569 4.49004 9.57201 4.3457 9.78464C4.21779 9.97307 4.12255 10.1816 4.06497 10.4019C4 10.6506 4 10.9179 4 11.4522V17.0002C4 17.932 4 18.3978 4.15224 18.7654C4.35523 19.2554 4.74432 19.6452 5.23438 19.8482C5.60192 20.0005 6.06786 20.0005 6.99974 20.0005C7.93163 20.0005 8.39808 20.0005 8.76562 19.8482C9.25568 19.6452 9.64467 19.2555 9.84766 18.7654C9.9999 18.3979 10 17.932 10 17.0001V16.0001C10 14.8955 10.8954 14.0001 12 14.0001C13.1046 14.0001 14 14.8955 14 16.0001V17.0001C14 17.932 14 18.3979 14.1522 18.7654C14.3552 19.2555 14.7443 19.6452 15.2344 19.8482C15.6019 20.0005 16.0679 20.0005 16.9997 20.0005C17.9316 20.0005 18.3981 20.0005 18.7656 19.8482C19.2557 19.6452 19.6447 19.2554 19.8477 18.7654C19.9999 18.3978 20 17.932 20 17.0002Z"
                                    stroke="#090909" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M20 17.0002V11.4522C20 10.9179 19.9995 10.6506 19.9346 10.4019C19.877 10.1816 19.7825 9.97307 19.6546 9.78464C19.5102 9.57201 19.3096 9.39569 18.9074 9.04383L14.1074 4.84383C13.3608 4.19054 12.9875 3.86406 12.5674 3.73982C12.1972 3.63035 11.8026 3.63035 11.4324 3.73982C11.0126 3.86397 10.6398 4.19014 9.89436 4.84244L5.09277 9.04383C4.69064 9.39569 4.49004 9.57201 4.3457 9.78464C4.21779 9.97307 4.12255 10.1816 4.06497 10.4019C4 10.6506 4 10.9179 4 11.4522V17.0002C4 17.932 4 18.3978 4.15224 18.7654C4.35523 19.2554 4.74432 19.6452 5.23438 19.8482C5.60192 20.0005 6.06786 20.0005 6.99974 20.0005C7.93163 20.0005 8.39808 20.0005 8.76562 19.8482C9.25568 19.6452 9.64467 19.2555 9.84766 18.7654C9.9999 18.3979 10 17.932 10 17.0001V16.0001C10 14.8955 10.8954 14.0001 12 14.0001C13.1046 14.0001 14 14.8955 14 16.0001V17.0001C14 17.932 14 18.3979 14.1522 18.7654C14.3552 19.2555 14.7443 19.6452 15.2344 19.8482C15.6019 20.0005 16.0679 20.0005 16.9997 20.0005C17.9316 20.0005 18.3981 20.0005 18.7656 19.8482C19.2557 19.6452 19.6447 19.2554 19.8477 18.7654C19.9999 18.3978 20 17.932 20 17.0002Z"
                                    stroke="url(#paint0_radial_72_87)" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round"/>
                                <defs>
                                    <radialGradient id="paint0_radial_72_87" cx="0" cy="0" r="1"
                                                    gradientTransform="matrix(31.1591 12.8606 -14.9727 24.9867 -10.7048 5.58707)"
                                                    gradientUnits="userSpaceOnUse">
                                        <stop offset="0.44" stopColor="#00C8FF"/>
                                        <stop offset="1" stopColor="#004DFF"/>
                                    </radialGradient>
                                </defs>
                            </svg>
                            <span className="text-xl font-medium primary-gradient">
                                {t('home')}
                            </span>
                        </GlassElement>
                    </Link>

                    <Link href={`/${locale}/#product-list`} scroll={false} onClick={() => scrollToId("product-list")}>
                        <GlassElement
                            className="flex items-center gap-2 px-8 py-4 rounded-full shadow-md hover:bg-gray-50 transition-colors"
                            width={locale === 'uz' ? 160 : 150}
                            height={50}
                            radius={43}
                            depth={10}
                            blur={0}
                            chromaticAberration={0}
                            debug={false}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path
                                    d="M9 15V18C9 19.6569 7.65685 21 6 21C4.34315 21 3 19.6569 3 18C3 16.3431 4.34315 15 6 15H9ZM9 15H15M9 15V9M15 15V18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15H15ZM15 15V9M15 9H9M15 9V6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6C21 7.65685 19.6569 9 18 9H15ZM9 9V6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9H9Z"
                                    stroke="#090909" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M9 15V18C9 19.6569 7.65685 21 6 21C4.34315 21 3 19.6569 3 18C3 16.3431 4.34315 15 6 15H9ZM9 15H15M9 15V9M15 15V18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15H15ZM15 15V9M15 9H9M15 9V6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6C21 7.65685 19.6569 9 18 9H15ZM9 9V6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9H9Z"
                                    stroke="url(#paint0_radial_72_90)" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round"/>
                                <defs>
                                    <radialGradient id="paint0_radial_72_90" cx="0" cy="0" r="1"
                                                    gradientTransform="matrix(35.0539 14.1648 -16.8442 27.5204 -13.5429 5.125)"
                                                    gradientUnits="userSpaceOnUse">
                                        <stop offset="0.44" stopColor="#00C8FF"/>
                                        <stop offset="1" stopColor="#004DFF"/>
                                    </radialGradient>
                                </defs>
                            </svg>
                            <span className="text-xl font-medium primary-gradient">
                                {t('cases')}
                            </span>
                        </GlassElement>
                    </Link>
                    <Link href={`/${locale}/#services`} scroll={false} onClick={() => scrollToId("services")}>
                        <GlassElement
                            className="flex items-center gap-2 px-8 py-4 rounded-full shadow-md hover:bg-gray-50 transition-colors"
                            width={180}
                            height={50}
                            radius={43}
                            depth={10}
                            blur={0}
                            chromaticAberration={0}
                            debug={false}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path
                                    d="M13 3.00087C12.9045 3 12.7973 3 12.6747 3H8.2002C7.08009 3 6.51962 3 6.0918 3.21799C5.71547 3.40973 5.40973 3.71547 5.21799 4.0918C5 4.51962 5 5.08009 5 6.2002V17.8002C5 18.9203 5 19.4801 5.21799 19.9079C5.40973 20.2842 5.71547 20.5905 6.0918 20.7822C6.51921 21 7.079 21 8.19694 21L15.8031 21C16.921 21 17.48 21 17.9074 20.7822C18.2837 20.5905 18.5905 20.2842 18.7822 19.9079C19 19.4805 19 18.9215 19 17.8036V9.32568C19 9.20296 19 9.09561 18.9991 9M13 3.00087C13.2856 3.00347 13.4663 3.01385 13.6388 3.05526C13.8429 3.10425 14.0379 3.18526 14.2168 3.29492C14.4186 3.41857 14.5918 3.59182 14.9375 3.9375L18.063 7.06298C18.4089 7.40889 18.5809 7.58136 18.7046 7.78319C18.8142 7.96214 18.8953 8.15726 18.9443 8.36133C18.9857 8.53376 18.9963 8.71451 18.9991 9M13 3.00087V5.8C13 6.9201 13 7.47977 13.218 7.90759C13.4097 8.28392 13.7155 8.59048 14.0918 8.78223C14.5192 9 15.079 9 16.1969 9H18.9991M18.9991 9H19.0002M14 13L16 15L14 17M10 17L8 15L10 13"
                                    stroke="#090909" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M13 3.00087C12.9045 3 12.7973 3 12.6747 3H8.2002C7.08009 3 6.51962 3 6.0918 3.21799C5.71547 3.40973 5.40973 3.71547 5.21799 4.0918C5 4.51962 5 5.08009 5 6.2002V17.8002C5 18.9203 5 19.4801 5.21799 19.9079C5.40973 20.2842 5.71547 20.5905 6.0918 20.7822C6.51921 21 7.079 21 8.19694 21L15.8031 21C16.921 21 17.48 21 17.9074 20.7822C18.2837 20.5905 18.5905 20.2842 18.7822 19.9079C19 19.4805 19 18.9215 19 17.8036V9.32568C19 9.20296 19 9.09561 18.9991 9M13 3.00087C13.2856 3.00347 13.4663 3.01385 13.6388 3.05526C13.8429 3.10425 14.0379 3.18526 14.2168 3.29492C14.4186 3.41857 14.5918 3.59182 14.9375 3.9375L18.063 7.06298C18.4089 7.40889 18.5809 7.58136 18.7046 7.78319C18.8142 7.96214 18.8953 8.15726 18.9443 8.36133C18.9857 8.53376 18.9963 8.71451 18.9991 9M13 3.00087V5.8C13 6.9201 13 7.47977 13.218 7.90759C13.4097 8.28392 13.7155 8.59048 14.0918 8.78223C14.5192 9 15.079 9 16.1969 9H18.9991M18.9991 9H19.0002M14 13L16 15L14 17M10 17L8 15L10 13"
                                    stroke="url(#paint0_radial_72_94)" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round"/>
                                <defs>
                                    <radialGradient id="paint0_radial_72_94" cx="0" cy="0" r="1"
                                                    gradientTransform="matrix(27.2646 14.1648 -13.1013 27.5205 -7.86685 5.125)"
                                                    gradientUnits="userSpaceOnUse">
                                        <stop offset="0.44" stopColor="#00C8FF"/>
                                        <stop offset="1" stopColor="#004DFF"/>
                                    </radialGradient>
                                </defs>
                            </svg>

                            <span className="text-xl font-medium primary-gradient">
                                {t('services')}
                            </span>
                        </GlassElement>
                    </Link>
                    <Link href={`/${locale}/#internal`} scroll={false} onClick={() => scrollToId('internal')}>
                        <GlassElement
                            className="flex items-center gap-2 px-8 py-4 rounded-full shadow-md hover:bg-gray-50 transition-colors"
                            width={150}
                            height={50}
                            radius={43}
                            depth={10}
                            blur={0}
                            chromaticAberration={0}
                            debug={false}
                        >
                            <svg
                                className="w-[24px] mt-2 h-[24px]"
                                fill="currentColor"
                                stroke="url(#primary-gradient)"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M11 13L6 1L1 13M9 9H3M19 13V10M19 10V7M19 10C19 11.6569 17.6569 13 16 13C14.3431 13 13 11.6569 13 10C13 8.34315 14.3431 7 16 7C17.6569 7 19 8.34315 19 10Z"
                                    stroke="white" fill="none" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round"/>
                                <path
                                    d="M11 13L6 1L1 13M9 9H3M19 13V10M19 10V7M19 10C19 11.6569 17.6569 13 16 13C14.3431 13 13 11.6569 13 10C13 8.34315 14.3431 7 16 7C17.6569 7 19 8.34315 19 10Z"
                                    stroke="url(#primary-gradient)" fill="none" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round"/>
                            </svg>
                            <span className="text-xl font-medium primary-gradient">
                                {t('blog')}
                            </span>
                        </GlassElement>
                    </Link>
                    <Link href={`/${locale}/#contact`} scroll={false} onClick={() => scrollToId('contact')}>
                        <GlassElement
                            className="flex items-center gap-2 px-8 py-4 rounded-full shadow-md hover:bg-gray-50 transition-colors"
                            width={190}
                            height={50}
                            radius={43}
                            depth={10}
                            blur={0}
                            chromaticAberration={0}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                stroke="url(#primary-gradient)"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    fill="none"
                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                />
                            </svg>
                            <span className="text-xl font-medium primary-gradient">
                                {t('contact')}
                            </span>
                        </GlassElement>
                    </Link>

                    <LanguageSwitcher currentLocale={locale}/>
                </nav>

                {/* Mobile Navigation */}
                <MobileNavbar locale={locale} showNavbar={showNavbar} />
            </div>
        </header>
    );
}