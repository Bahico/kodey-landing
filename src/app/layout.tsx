import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";

import "./globals.css";
import Link from "next/link";
import MobileNavbar from "./components/MobileNavbar";
import { GlassElement } from "./components/GlassElement/GlassElement";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metaData: Metadata = {
  title: "Kodey",
  description: "Kodey is a mobile app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <link rel="icon" href="/images/logos/favicon.svg" />

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col items-center w-full`}>
        {/* SVG Gradient Definitions */}
        <svg width="0" height="0" style={{ position: 'absolute' }}>
          <defs>
            <linearGradient id="primary-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00C8FF" />
              <stop offset="100%" stopColor="#004DFF" />
            </linearGradient>
          </defs>
        </svg>

        <header className="fixed top-0 left-0 w-full h-[87px] z-50 flex items-center justify-center">
          <div className="flex items-center justify-between container">
            <Link href="/" className="flex items-center gap-4 ml-2 sm:ml-0">
              <img src="/images/logos/favicon.svg" alt="Logo" className="w-14 h-16 rotate-y-190" />
              <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                kodey
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-5">
              <Link href="/">
                <GlassElement
                  className="flex items-center gap-2 px-8 py-4 rounded-full shadow-md hover:bg-gray-50 transition-colors"
                  width={150}
                  height={50}
                  radius={10}
                  depth={5}
                  blur={1}
                  chromaticAberration={1}
                  debug={false}
                >
                  <svg className="w-6 h-6" stroke="url(#primary-gradient)" fill="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} fill="none" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="text-xl font-medium primary-gradient">Главная</span>
                </GlassElement>
              </Link>

              <Link href="/#product-list">
                <GlassElement
                  className="flex items-center gap-2 px-8 py-4 rounded-full shadow-md hover:bg-gray-50 transition-colors"
                  width={150}
                  height={50}
                  radius={10}
                  depth={5}
                  blur={1}
                  chromaticAberration={1}
                  debug={false}
                >
                  <svg className="w-6 h-6" fill="currentColor" stroke="url(#primary-gradient)" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} fill="none" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-xl font-medium primary-gradient">Кейсы</span>
                </GlassElement>
              </Link>
              <Link href="/#services">
                <GlassElement
                  className="flex items-center gap-2 px-8 py-4 rounded-full shadow-md hover:bg-gray-50 transition-colors"
                  width={150}
                  height={50}
                  radius={10}
                  depth={5}
                  blur={1}
                  chromaticAberration={1}
                  debug={false}
                >
                  <svg className="w-6 h-6" fill="currentColor" stroke="url(#primary-gradient)" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} fill="none" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <span className="text-xl font-medium primary-gradient">Услуги</span>
                </GlassElement>
              </Link>
              <Link href="/#internal">
                <GlassElement
                  className="flex items-center gap-2 px-8 py-4 rounded-full shadow-md hover:bg-gray-50 transition-colors"
                  width={150}
                  height={50}
                  radius={10}
                  depth={5}
                  blur={1}
                  chromaticAberration={1}
                  debug={false}
                >
                  <svg className="w-6 h-6" fill="currentColor" stroke="url(#primary-gradient)" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} fill="none" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <span className="text-xl font-medium primary-gradient">Блог</span>
                </GlassElement>
              </Link>
              <Link href="/#contact">
                <GlassElement
                  className="flex items-center gap-2 px-8 py-4 rounded-full shadow-md hover:bg-gray-50 transition-colors"
                  width={150}
                  height={50}
                  radius={10}
                  depth={5}
                  blur={1}
                  chromaticAberration={1}
                >
                  <svg className="w-6 h-6" fill="currentColor" stroke="url(#primary-gradient)" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} fill="none" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span className="text-xl font-medium primary-gradient">Связаться</span>
                </GlassElement>
              </Link>

              <GlassElement
                className="flex items-center gap-2 px-8 py-4 rounded-full shadow-md hover:bg-gray-50 transition-colors"
                width={90}
                height={50}
                radius={10}
                depth={5}
                blur={1}
                chromaticAberration={1}
              >
                <span className="text-xl font-bold primary-gradient">RU</span>
              </GlassElement>
            </nav>

            {/* Mobile Navigation */}
            <MobileNavbar />
          </div>
        </header>

        {children}

        <footer className="bg-[#0D0D0D] text-white flex justify-center py-8 sm:py-12 md:py-16 w-full rounded-t-[50px] sm:rounded-t-[75px] md:rounded-t-[100px] relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-12 md:gap-16">
              <div className="col-span-4 lg:col-span-1 text-center lg:text-left">
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8">
                  Всегда<br className="hidden sm:block" />
                  <span className="text-gray-500 ml-2">на связи</span>
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white lg:mb-6 sm:mb-8">
                  С 12:00 до 20:00<br className="hidden sm:block" />
                  по МСК
                </p>
              </div>

              <div className="col-span-4 lg:col-span-1 space-y-4 sm:space-y-6 text-center lg:text-left">
                <a href="#" className="block text-base sm:text-lg md:text-xl font-medium hover:text-blue-400 transition-colors">Главная</a>
                <a href="#" className="block text-base sm:text-lg md:text-xl font-medium hover:text-blue-400 transition-colors">Кейсы</a>
                <a href="#" className="block text-base sm:text-lg md:text-xl font-medium hover:text-blue-400 transition-colors">Услуги</a>
                <a href="#" className="block text-base sm:text-lg md:text-xl font-medium hover:text-blue-400 transition-colors">Блог</a>
                <a href="#" className="block text-base sm:text-lg md:text-xl font-medium hover:text-blue-400 transition-colors">Связаться</a>
              </div>

              <div className="space-y-4 sm:space-y-6 col-span-4 lg:col-span-1 mt-10 lg:mt-0">
                <div className="flex items-center gap-3 sm:gap-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-base sm:text-lg md:text-xl font-medium">+998 00 000 00 00</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" className="ml-auto" viewBox="0 0 25 24" fill="none">
                    <path d="M7.35654 7H17.3565M17.3565 7V17M17.3565 7L7.35654 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-base sm:text-lg md:text-xl font-medium">mail@kodey.com</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" className="ml-auto" viewBox="0 0 25 24" fill="none">
                    <path d="M7.35654 7H17.3565M17.3565 7V17M17.3565 7L7.35654 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 border-b border-gray-200 pb-10">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span className="text-base sm:text-lg md:text-xl font-medium">@kodey.manager</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" className="ml-auto" viewBox="0 0 25 24" fill="none">
                    <path d="M7.35654 7H17.3565M17.3565 7V17M17.3565 7L7.35654 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="pt-2 sm:pt-4">
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    140158, с. Узбекистан,<br />
                    г. Самарканд, ул. улица Авесто, д.78В
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 sm:mt-16 md:mt-19 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
              <div>
                <p className="text-gray-500 text-xs sm:text-sm">OOO "CHAT-BOT-START"</p>
                <p className="text-gray-500 text-xs sm:text-sm">@2025</p>
              </div>
              <div>
                <Link href="/privacy-policy" className="text-gray-500 text-xs sm:text-sm">Политика конфиденциальности</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
