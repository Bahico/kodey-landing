import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/routing';

import "../globals.css";
import Navbar from "@/app/home-components/navbar";
import { Link } from "@/i18n/navigation";
import { Metadata } from "next";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// export const metaData: Metadata = {
//     title: "Kodey",
//     description: "Kodey is a development company",
// };

type Props = {
    children: React.ReactNode;
    params: { locale: string };
};

export default async function LocaleLayout({ children, params }: Props) {

    const { locale } = await params;
    if (!locales.includes(locale as any)) {
        notFound();
    }

    let messages: any;
    try {
        messages = (await import(`@/messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }

    return (
        <html lang={locale} data-theme="light" data-scroll-behavior="smooth">
            <head>
                <link rel="icon" href="/images/logos/favicon.svg" className="rotate-y-190" />
                <title>Kodey</title>
            </head>

            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col items-center w-full`}
            >
                <NextIntlClientProvider locale={locale} messages={messages}>
                    {/* SVG Gradient Definitions */}
                    <svg width="0" height="0" style={{ position: "absolute" }}>
                        <defs>
                            <linearGradient
                                id="primary-gradient"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="0%"
                            >
                                <stop offset="0%" stopColor="#00C8FF" />
                                <stop offset="100%" stopColor="#004DFF" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <Navbar locale={locale} />

                    {children}

                    <footer
                        className="bg-[#0D0D0D] text-white flex justify-center py-8 sm:py-12 md:py-16 w-full rounded-t-[50px] sm:rounded-t-[75px] md:rounded-t-[100px] relative z-10 px-4 sm:px-6 lg:px-8">
                        <div className="container">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-12 md:gap-16">
                                <div className="col-span-4 lg:col-span-1 text-center lg:text-left">
                                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8">
                                        {(messages.footer as any)?.title || 'Всегда'}
                                        <br className="hidden sm:block" />
                                        <span
                                            className="text-[#595959]">{(messages.footer as any)?.subtitle || 'на связи'}</span>
                                    </h3>
                                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white lg:mb-6 sm:mb-8">
                                        {(messages.footer as any)?.description || 'С 12:00 до 20:00'}
                                        <br className="hidden sm:block" />
                                        {(messages.footer as any)?.description2 || 'по МСК'}
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
                                        href={`/${locale}/#product-list`}
                                        className="block text-base sm:text-lg md:text-xl font-medium hover:text-blue-400 transition-colors"
                                    >
                                        {(messages.navigation as any)?.cases || 'Кейсы'}
                                    </a>
                                    <a
                                        href={`/${locale}/#services`}
                                        className="block text-base sm:text-lg md:text-xl font-medium hover:text-blue-400 transition-colors"
                                    >
                                        {(messages.navigation as any)?.services || 'Услуги'}
                                    </a>
                                    <a
                                        href={`/${locale}/#internal`}
                                        className="block text-base sm:text-lg md:text-xl font-medium hover:text-blue-400 transition-colors"
                                    >
                                        {(messages.navigation as any)?.blog || 'Блог'}
                                    </a>
                                    <a
                                        href={`/${locale}/#contact`}
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
                                            {(messages.footer as any)?.place || '140158, с. Узбекистан,'}
                                        </p>
                                    </div>
                                </div>

                                <div className="col-span-4 lg:col-span-1 mt-10 lg:mt-0">
                                    <div className="mb-[-30px] cursor-pointer relative">
                                        <a href="https://www.instagram.com/kodeydev/" target="_blank">
                                            <img src="/images/icons/instagram.svg" id="instagram"
                                                className="drop-shadow-2xl animate-instagram w-full md:w-auto"
                                                alt="" />
                                            <div className="absolute top-0 left-5 h-20 items-center flex gap-10">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                                                    viewBox="0 0 50 50"
                                                    fill="none">
                                                    <path
                                                        d="M35.4167 14.5835H14.5834M14.5834 14.5835V35.4168M14.5834 14.5835L35.4167 35.4168"
                                                        stroke="white" strokeWidth="4.16667" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                <span className="font-bold text-2xl md:text-xl">Instagram</span>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="mt-[-30px] relative cursor-pointer">
                                        <a href="https://t.me/kodeydev" target="_blank">
                                            <img src="/images/icons/telegram.svg" id="telegram"
                                                className="drop-shadow-2xl animate-telegram w-full md:w-auto" style={{ animationDelay: "1s" }}
                                                alt="" />
                                            <div className="absolute bottom-0 right-5 h-20 items-center flex gap-10">
                                                <span className="font-bold text-2xl md:text-xl">Telegram</span>
                                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M14.5834 14.5835H35.4167M35.4167 14.5835V35.4168M35.4167 14.5835L14.5834 35.4168"
                                                        stroke="white" strokeWidth="4.16667" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </a>
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
                                        {(messages.footer as any)?.privacy || 'Политика конфиденциальности'}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </footer>

                </NextIntlClientProvider>
            </body>
        </html>
    );
}
