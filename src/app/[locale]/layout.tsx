import {Geist, Geist_Mono} from "next/font/google";
import Image from "next/image";
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import {locales} from '@/i18n/routing';

import "../globals.css";
import Link from "next/link";
import MobileNavbar from "../components/MobileNavbar";
import {GlassElement} from "../components/GlassElement/GlassElement";
import LanguageSwitcher from "../components/LanguageSwitcher";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// export const metaData: Metadata = {
//   title: "Kodey",
//   description: "Kodey is a mobile app",
// };

type Props = {
  children: React.ReactNode;
  params: {locale: string};
};

export default async function LocaleLayout({
  children,
  params
}: Props) {
    const { locale } = await params
  console.log('LocaleLayout - received locale:', locale, 'valid locales:', locales);
  // Ensure that the incoming `locale` is valid
  if (!locales.includes(locale as any)) {
    console.log('Locale not found in valid locales, calling notFound()');
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  console.log('Attempting to load messages for locale:', locale);
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
    console.log('Messages loaded successfully:', Object.keys(messages || {}));
  } catch (error) {
    console.error('Error loading messages:', error);
    notFound();
  }

    return (
        <html lang={locale} data-theme="light" data-scroll-behavior="smooth">
        <link rel="icon" href="/images/logos/favicon.svg"/>

        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col items-center w-full`}
        >
        <NextIntlClientProvider messages={messages}>
        {/* SVG Gradient Definitions */}
        <svg width="0" height="0" style={{position: "absolute"}}>
            <defs>
                <linearGradient
                    id="primary-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                >
                    <stop offset="0%" stopColor="#00C8FF"/>
                    <stop offset="100%" stopColor="#004DFF"/>
                </linearGradient>
            </defs>
        </svg>

        <header className="fixed top-0 left-0 w-full h-[87px] z-50 flex items-center justify-center">
            <div className="flex items-center justify-between container">
                <Link href="/" className="flex items-center gap-4 ml-2 sm:ml-0">
                    <img
                        src="/images/logos/favicon.svg"
                        alt="Logo"
                        className="w-14 h-16 rotate-y-190"
                    />
                    <Image src="/images/logos/logo.svg" alt="logo" width={100} height={100}/>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-5">
                    <Link href="/">
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M20 17.0002V11.4522C20 10.9179 19.9995 10.6506 19.9346 10.4019C19.877 10.1816 19.7825 9.97307 19.6546 9.78464C19.5102 9.57201 19.3096 9.39569 18.9074 9.04383L14.1074 4.84383C13.3608 4.19054 12.9875 3.86406 12.5674 3.73982C12.1972 3.63035 11.8026 3.63035 11.4324 3.73982C11.0126 3.86397 10.6398 4.19014 9.89436 4.84244L5.09277 9.04383C4.69064 9.39569 4.49004 9.57201 4.3457 9.78464C4.21779 9.97307 4.12255 10.1816 4.06497 10.4019C4 10.6506 4 10.9179 4 11.4522V17.0002C4 17.932 4 18.3978 4.15224 18.7654C4.35523 19.2554 4.74432 19.6452 5.23438 19.8482C5.60192 20.0005 6.06786 20.0005 6.99974 20.0005C7.93163 20.0005 8.39808 20.0005 8.76562 19.8482C9.25568 19.6452 9.64467 19.2555 9.84766 18.7654C9.9999 18.3979 10 17.932 10 17.0001V16.0001C10 14.8955 10.8954 14.0001 12 14.0001C13.1046 14.0001 14 14.8955 14 16.0001V17.0001C14 17.932 14 18.3979 14.1522 18.7654C14.3552 19.2555 14.7443 19.6452 15.2344 19.8482C15.6019 20.0005 16.0679 20.0005 16.9997 20.0005C17.9316 20.0005 18.3981 20.0005 18.7656 19.8482C19.2557 19.6452 19.6447 19.2554 19.8477 18.7654C19.9999 18.3978 20 17.932 20 17.0002Z" stroke="#090909" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M20 17.0002V11.4522C20 10.9179 19.9995 10.6506 19.9346 10.4019C19.877 10.1816 19.7825 9.97307 19.6546 9.78464C19.5102 9.57201 19.3096 9.39569 18.9074 9.04383L14.1074 4.84383C13.3608 4.19054 12.9875 3.86406 12.5674 3.73982C12.1972 3.63035 11.8026 3.63035 11.4324 3.73982C11.0126 3.86397 10.6398 4.19014 9.89436 4.84244L5.09277 9.04383C4.69064 9.39569 4.49004 9.57201 4.3457 9.78464C4.21779 9.97307 4.12255 10.1816 4.06497 10.4019C4 10.6506 4 10.9179 4 11.4522V17.0002C4 17.932 4 18.3978 4.15224 18.7654C4.35523 19.2554 4.74432 19.6452 5.23438 19.8482C5.60192 20.0005 6.06786 20.0005 6.99974 20.0005C7.93163 20.0005 8.39808 20.0005 8.76562 19.8482C9.25568 19.6452 9.64467 19.2555 9.84766 18.7654C9.9999 18.3979 10 17.932 10 17.0001V16.0001C10 14.8955 10.8954 14.0001 12 14.0001C13.1046 14.0001 14 14.8955 14 16.0001V17.0001C14 17.932 14 18.3979 14.1522 18.7654C14.3552 19.2555 14.7443 19.6452 15.2344 19.8482C15.6019 20.0005 16.0679 20.0005 16.9997 20.0005C17.9316 20.0005 18.3981 20.0005 18.7656 19.8482C19.2557 19.6452 19.6447 19.2554 19.8477 18.7654C19.9999 18.3978 20 17.932 20 17.0002Z" stroke="url(#paint0_radial_72_87)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <defs>
                                    <radialGradient id="paint0_radial_72_87" cx="0" cy="0" r="1" gradientTransform="matrix(31.1591 12.8606 -14.9727 24.9867 -10.7048 5.58707)" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.44" stopColor="#00C8FF"/>
                                        <stop offset="1" stopColor="#004DFF"/>
                                    </radialGradient>
                                </defs>
                            </svg>
                            <span className="text-xl font-medium primary-gradient">
                                {(messages.navigation as any)?.home || 'Главная'}
                            </span>
                        </GlassElement>
                    </Link>

                    <Link href="/#product-list">
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9 15V18C9 19.6569 7.65685 21 6 21C4.34315 21 3 19.6569 3 18C3 16.3431 4.34315 15 6 15H9ZM9 15H15M9 15V9M15 15V18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15H15ZM15 15V9M15 9H9M15 9V6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6C21 7.65685 19.6569 9 18 9H15ZM9 9V6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9H9Z" stroke="#090909" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9 15V18C9 19.6569 7.65685 21 6 21C4.34315 21 3 19.6569 3 18C3 16.3431 4.34315 15 6 15H9ZM9 15H15M9 15V9M15 15V18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15H15ZM15 15V9M15 9H9M15 9V6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6C21 7.65685 19.6569 9 18 9H15ZM9 9V6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9H9Z" stroke="url(#paint0_radial_72_90)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <defs>
                                    <radialGradient id="paint0_radial_72_90" cx="0" cy="0" r="1" gradientTransform="matrix(35.0539 14.1648 -16.8442 27.5204 -13.5429 5.125)" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.44" stopColor="#00C8FF"/>
                                        <stop offset="1" stopColor="#004DFF"/>
                                    </radialGradient>
                                </defs>
                            </svg>
                            <span className="text-xl font-medium primary-gradient">
                                {(messages.navigation as any)?.cases || 'Кейсы'}
                              </span>
                        </GlassElement>
                    </Link>
                    <Link href="/#services">
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M13 3.00087C12.9045 3 12.7973 3 12.6747 3H8.2002C7.08009 3 6.51962 3 6.0918 3.21799C5.71547 3.40973 5.40973 3.71547 5.21799 4.0918C5 4.51962 5 5.08009 5 6.2002V17.8002C5 18.9203 5 19.4801 5.21799 19.9079C5.40973 20.2842 5.71547 20.5905 6.0918 20.7822C6.51921 21 7.079 21 8.19694 21L15.8031 21C16.921 21 17.48 21 17.9074 20.7822C18.2837 20.5905 18.5905 20.2842 18.7822 19.9079C19 19.4805 19 18.9215 19 17.8036V9.32568C19 9.20296 19 9.09561 18.9991 9M13 3.00087C13.2856 3.00347 13.4663 3.01385 13.6388 3.05526C13.8429 3.10425 14.0379 3.18526 14.2168 3.29492C14.4186 3.41857 14.5918 3.59182 14.9375 3.9375L18.063 7.06298C18.4089 7.40889 18.5809 7.58136 18.7046 7.78319C18.8142 7.96214 18.8953 8.15726 18.9443 8.36133C18.9857 8.53376 18.9963 8.71451 18.9991 9M13 3.00087V5.8C13 6.9201 13 7.47977 13.218 7.90759C13.4097 8.28392 13.7155 8.59048 14.0918 8.78223C14.5192 9 15.079 9 16.1969 9H18.9991M18.9991 9H19.0002M14 13L16 15L14 17M10 17L8 15L10 13" stroke="#090909" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M13 3.00087C12.9045 3 12.7973 3 12.6747 3H8.2002C7.08009 3 6.51962 3 6.0918 3.21799C5.71547 3.40973 5.40973 3.71547 5.21799 4.0918C5 4.51962 5 5.08009 5 6.2002V17.8002C5 18.9203 5 19.4801 5.21799 19.9079C5.40973 20.2842 5.71547 20.5905 6.0918 20.7822C6.51921 21 7.079 21 8.19694 21L15.8031 21C16.921 21 17.48 21 17.9074 20.7822C18.2837 20.5905 18.5905 20.2842 18.7822 19.9079C19 19.4805 19 18.9215 19 17.8036V9.32568C19 9.20296 19 9.09561 18.9991 9M13 3.00087C13.2856 3.00347 13.4663 3.01385 13.6388 3.05526C13.8429 3.10425 14.0379 3.18526 14.2168 3.29492C14.4186 3.41857 14.5918 3.59182 14.9375 3.9375L18.063 7.06298C18.4089 7.40889 18.5809 7.58136 18.7046 7.78319C18.8142 7.96214 18.8953 8.15726 18.9443 8.36133C18.9857 8.53376 18.9963 8.71451 18.9991 9M13 3.00087V5.8C13 6.9201 13 7.47977 13.218 7.90759C13.4097 8.28392 13.7155 8.59048 14.0918 8.78223C14.5192 9 15.079 9 16.1969 9H18.9991M18.9991 9H19.0002M14 13L16 15L14 17M10 17L8 15L10 13" stroke="url(#paint0_radial_72_94)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <defs>
                                    <radialGradient id="paint0_radial_72_94" cx="0" cy="0" r="1" gradientTransform="matrix(27.2646 14.1648 -13.1013 27.5205 -7.86685 5.125)" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.44" stopColor="#00C8FF"/>
                                        <stop offset="1" stopColor="#004DFF"/>
                                    </radialGradient>
                                </defs>
                            </svg>

                            <span className="text-xl font-medium primary-gradient">
                                {(messages.navigation as any)?.services || 'Услуги'}
                              </span>
                        </GlassElement>
                    </Link>
                    <Link href="/#internal">
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
                                <path d="M11 13L6 1L1 13M9 9H3M19 13V10M19 10V7M19 10C19 11.6569 17.6569 13 16 13C14.3431 13 13 11.6569 13 10C13 8.34315 14.3431 7 16 7C17.6569 7 19 8.34315 19 10Z" stroke="white" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M11 13L6 1L1 13M9 9H3M19 13V10M19 10V7M19 10C19 11.6569 17.6569 13 16 13C14.3431 13 13 11.6569 13 10C13 8.34315 14.3431 7 16 7C17.6569 7 19 8.34315 19 10Z" stroke="url(#primary-gradient)" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="text-xl font-medium primary-gradient">
                                {(messages.navigation as any)?.blog || 'Блог'}
                              </span>
                        </GlassElement>
                    </Link>
                    <Link href="/#contact">
                        <GlassElement
                            className="flex items-center gap-2 px-8 py-4 rounded-full shadow-md hover:bg-gray-50 transition-colors"
                            width={200}
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
                                {(messages.navigation as any)?.contact || 'Связаться'}
                              </span>
                        </GlassElement>
                    </Link>

                    <LanguageSwitcher currentLocale={locale} />
                </nav>

                {/* Mobile Navigation */}
                <MobileNavbar/>
            </div>
        </header>

        {children}
        </NextIntlClientProvider>

        <footer
            className="bg-[#0D0D0D] text-white flex justify-center py-8 sm:py-12 md:py-16 w-full rounded-t-[50px] sm:rounded-t-[75px] md:rounded-t-[100px] relative z-10 px-4 sm:px-6 lg:px-8">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-12 md:gap-16">
                    <div className="col-span-4 lg:col-span-1 text-center lg:text-left">
                        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8">
                            {(messages.footer as any)?.alwaysInTouch || 'Всегда на связи'}
                        </h3>
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white lg:mb-6 sm:mb-8">
                            {(messages.footer as any)?.workingHours || 'С 12:00 до 20:00 по МСК'}
                        </p>
                    </div>

                    <div className="col-span-4 lg:col-span-1 space-y-4 sm:space-y-6 text-center lg:text-left">
                        <a
                            href="#"
                            className="block text-base sm:text-lg md:text-xl font-medium hover:text-blue-400 transition-colors"
                        >
                            {(messages.navigation as any)?.home || 'Главная'}
                        </a>
                        <a
                            href="#"
                            className="block text-base sm:text-lg md:text-xl font-medium hover:text-blue-400 transition-colors"
                        >
                            {(messages.navigation as any)?.cases || 'Кейсы'}
                        </a>
                        <a
                            href="#"
                            className="block text-base sm:text-lg md:text-xl font-medium hover:text-blue-400 transition-colors"
                        >
                            {(messages.navigation as any)?.services || 'Услуги'}
                        </a>
                        <a
                            href="#"
                            className="block text-base sm:text-lg md:text-xl font-medium hover:text-blue-400 transition-colors"
                        >
                            {(messages.navigation as any)?.blog || 'Блог'}
                        </a>
                        <a
                            href="#"
                            className="block text-base sm:text-lg md:text-xl font-medium hover:text-blue-400 transition-colors"
                        >
                            {(messages.navigation as any)?.contact || 'Связаться'}
                        </a>
                    </div>

                    <div className="space-y-4 sm:space-y-6 col-span-4 lg:col-span-1 mt-10 lg:mt-0">
                        <div className="flex items-center gap-3 sm:gap-4">
                            <svg
                                className="w-5 h-5 sm:w-6 sm:h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                            </svg>
                            <a
                                href="tel:+998979235552"
                                className="text-base sm:text-lg md:text-xl font-medium"
                            >
                                +998 (97) 923 55 52
                            </a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                className="ml-auto"
                                viewBox="0 0 25 24"
                                fill="none"
                            >
                                <path
                                    d="M7.35654 7H17.3565M17.3565 7V17M17.3565 7L7.35654 17"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        <div className="flex items-center gap-3 sm:gap-4">
                            <svg
                                className="w-5 h-5 sm:w-6 sm:h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                            <a
                                href="mailto:kodey@kodey.uz"
                                className="text-base sm:text-lg md:text-xl font-medium"
                            >
                                kodey@kodey.uz
                            </a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                className="ml-auto"
                                viewBox="0 0 25 24"
                                fill="none"
                            >
                                <path
                                    d="M7.35654 7H17.3565M17.3565 7V17M17.3565 7L7.35654 17"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <div className="flex items-center gap-3 sm:gap-4 border-b border-gray-200 pb-10">
                            <svg
                                className="w-5 h-5 sm:w-6 sm:h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                />
                            </svg>
                            <a
                                href="https://t.me/chatbotzero"
                                target="_blank"
                                className="text-base sm:text-lg md:text-xl font-medium"
                            >
                                @chatbotzero
                            </a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                className="ml-auto"
                                viewBox="0 0 25 24"
                                fill="none"
                            >
                                <path
                                    d="M7.35654 7H17.3565M17.3565 7V17M17.3565 7L7.35654 17"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <div className="pt-2 sm:pt-4">
                            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                                140158, с. Узбекистан,
                                <br/>
                                г. Самарканд, ул. улица Авесто, д.78В
                            </p>
                        </div>
                    </div>

                    <div className="col-span-4 lg:col-span-1 mt-10 lg:mt-0">
                        <div className="mb-[-30px] cursor-pointer relative">
                            <a href="https://www.instagram.com/kodeydev/" target="_blank">
                                <img src="/images/icons/instagram.svg" id="instagram"
                                     className="drop-shadow-2xl animate-instagram"
                                     alt=""/>
                            </a>
                            <div className="absolute top-0 left-5 h-20 items-center flex gap-10">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"
                                     fill="none">
                                    <path
                                        d="M35.4167 14.5835H14.5834M14.5834 14.5835V35.4168M14.5834 14.5835L35.4167 35.4168"
                                        stroke="white" strokeWidth="4.16667" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                </svg>
                                <span className="font-bold font-xl">Instagram</span>
                            </div>
                        </div>

                        <div className="mt-[-30px] relative cursor-pointer">
                            <a href="https://t.me/kodeydev" target="_blank">
                                <img src="/images/icons/telegram.svg" id="telegram"
                                     className="drop-shadow-2xl animate-telegram" style={{animationDelay: "1s"}}
                                     alt=""/>
                            </a>
                            <div className="absolute bottom-0 right-5 h-20 items-center flex gap-10">
                                <span className="font-bold font-xl">Telegram</span>
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.5834 14.5835H35.4167M35.4167 14.5835V35.4168M35.4167 14.5835L14.5834 35.4168"
                                        stroke="white" strokeWidth="4.16667" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="mt-12 sm:mt-16 md:mt-19 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
                    <div>
                        <p className="text-gray-500 text-xs sm:text-sm">
                            OOO "CHAT-BOT-START"
                        </p>
                        <p className="text-gray-500 text-xs sm:text-sm">@2025</p>
                    </div>
                    <div>
                        <Link
                            href="/privacy-policy"
                            className="text-gray-500 text-xs sm:text-sm"
                        >
                            {(messages.footer as any)?.privacyPolicy || 'Политика конфиденциальности'}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
        </body>
        </html>
    );
}
