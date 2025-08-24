'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MobileNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 shadow-md hover:bg-gray-100 transition-colors mr-2 sm:mr-0"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu Modal */}

      <div className={`fixed w-full inset-0 z-50 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>

        {/* Modal Content */}
        <div className="absolute top-0 right-0 w-full h-full bg-white/30 backdrop-blur-sm shadow-2xl transform transition-transform duration-300 ease-in-out">
          <div className="flex flex-col h-full w-full">
            {/* Header */}
            <div className="flex items-center justify-end p-6">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="url(#primary-gradient)" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Items */}
            <nav className="flex flex-col p-6 space-y-4 w-full justify-center items-center">
              <Link
                href="/"
                className="flex items-center gap-3 px-12 py-3 rounded-3xl hover:bg-gray-50 transition-colors w-60 bg-white/30 shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg className="w-5 h-5" stroke="url(#primary-gradient)" fill="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} fill="none" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="text-lg font-medium primary-gradient">Главная</span>
              </Link>

              <Link
                href="/#product-list"
                className="flex items-center gap-3 px-12 py-3 rounded-3xl hover:bg-gray-50 transition-colors w-60 bg-white/30 shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg className="w-5 h-5" fill="currentColor" stroke="url(#primary-gradient)" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} fill="none" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-lg font-medium primary-gradient">Кейсы</span>
              </Link>

              <Link
                href="/#services"
                className="flex items-center gap-3 px-12 py-3 rounded-3xl hover:bg-gray-50 transition-colors w-60 bg-white/30 shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg className="w-5 h-5" fill="currentColor" stroke="url(#primary-gradient)" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} fill="none" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <span className="text-lg font-medium primary-gradient">Услуги</span>
              </Link>

              <Link
                href="/#internal"
                className="flex items-center gap-3 px-12 py-3 rounded-3xl hover:bg-gray-50 transition-colors w-60 bg-white/30 shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg className="w-5 h-5" fill="currentColor" stroke="url(#primary-gradient)" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} fill="none" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <span className="text-lg font-medium primary-gradient">Блог</span>
              </Link>

              <Link
                href="/#contact"
                className="flex items-center gap-3 px-12 py-3 rounded-3xl hover:bg-gray-50 transition-colors w-60 bg-white/30 shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg className="w-5 h-5" fill="currentColor" stroke="url(#primary-gradient)" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} fill="none" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <span className="text-lg font-medium primary-gradient">Связаться</span>
              </Link>
            </nav>
          </div>
        </div>
      </div>

    </>
  );
}
