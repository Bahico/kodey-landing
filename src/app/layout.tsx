import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";

import "./globals.css";

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
            <div className="flex items-center gap-4">
              <img src="/images/logos/favicon.svg" alt="Logo" className="w-14 h-16 rotate-y-190" />
              <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                kodey
              </span>
            </div>

            <nav className="flex items-center gap-5">
              <a href="#" className="navbar-item flex items-center gap-2 px-8 py-4 rounded-full shadow-md hover:bg-gray-50 transition-colors">
                <svg className="w-6 h-6" stroke="url(#primary-gradient)" fill="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} fill="none" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="text-xl font-medium primary-gradient">Главная</span>
              </a>

              <a href="#" className="navbar-item flex items-center gap-2 px-8 py-4 rounded-full shadow-md hover:bg-gray-50 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" stroke="url(#primary-gradient)" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} fill="none" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-xl font-medium primary-gradient">Кейсы</span>
              </a>
              <a href="#" className="navbar-item flex items-center gap-2 px-8 py-4 rounded-full shadow-md hover:bg-gray-50 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" stroke="url(#primary-gradient)" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} fill="none" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <span className="text-xl font-medium primary-gradient">Услуги</span>
              </a>
              <a href="#" className="navbar-item flex items-center gap-2 px-8 py-4 rounded-full shadow-md hover:bg-gray-50 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" stroke="url(#primary-gradient)" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} fill="none" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <span className="text-xl font-medium primary-gradient">Блог</span>
              </a>
              <a href="#" className="navbar-item flex items-center gap-2 px-8 py-4 rounded-full shadow-md hover:bg-gray-50 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" stroke="url(#primary-gradient)" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} fill="none" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <span className="text-xl font-medium primary-gradient">Связаться</span>
              </a>
              <div className="px-8 py-4 rounded-full shadow-md bg-gray-50">
                <span className="text-xl font-bold primary-gradient">RU</span>
              </div>
            </nav>
          </div>
        </header>

        {children}

        <footer className="bg-black text-white flex justify-center py-16 w-full rounded-t-[100px]">
          <div className="container">
            <div className="grid grid-cols-4 gap-16">
              <div>
                <h3 className="text-6xl font-bold mb-8">
                  Всегда<br />
                  <span className="text-gray-500">на связи</span>
                </h3>
                <p className="text-3xl font-light text-white mb-8">
                  С 12:00 до 20:00<br />
                  по МСК
                </p>
              </div>

              <div className="space-y-6">
                <a href="#" className="block text-xl font-medium hover:text-blue-400 transition-colors">Главная</a>
                <a href="#" className="block text-xl font-medium hover:text-blue-400 transition-colors">Кейсы</a>
                <a href="#" className="block text-xl font-medium hover:text-blue-400 transition-colors">Услуги</a>
                <a href="#" className="block text-xl font-medium hover:text-blue-400 transition-colors">Блог</a>
                <a href="#" className="block text-xl font-medium hover:text-blue-400 transition-colors">Связаться</a>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-xl font-medium">+998 00 000 00 00</span>
                </div>
                <div className="flex items-center gap-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xl font-medium">mail@kodey.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span className="text-xl font-medium">@kodey.manager</span>
                </div>
                <div className="pt-4">
                  <p className="text-gray-400 text-base leading-relaxed">
                    140158, с. Узбекистан,<br />
                    г. Самарканд, ул. улица Авесто, д.78В
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-19 flex justify-between items-center">
              <div>
                <p className="text-gray-500 text-sm">OOO "CHAT-BOT-START"</p>
                <p className="text-gray-500 text-sm">@2025</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Политика конфиденциальности</p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
