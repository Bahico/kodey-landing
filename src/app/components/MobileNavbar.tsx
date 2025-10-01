"use client";
import {useEffect, useState} from "react";
import Link from "next/link";
import {GlassElement} from "@/app/components/GlassElement/GlassElement";
import './mobile-navbar.css';
import LanguageSwitcher from "@/app/components/LanguageSwitcher";

export default function MobileNavbar({locale, showNavbar}: {locale: string, showNavbar: boolean}) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        setIsMobileMenuOpen(showNavbar && isMobileMenuOpen);
    }, [showNavbar]);

    return (
        <>
            {/* Mobile Menu Button */}

            <div className="flex gap-2 md:hidden ">
                <LanguageSwitcher currentLocale={locale}/>

                <GlassElement
                    width={50}
                    height={50}
                    radius={50}
                    depth={10}
                    blur={0}
                    chromaticAberration={0}
                    debug={false}
                    onClick={() => setIsMobileMenuOpen(true)}
                    className="flex items-center justify-center w-12 h-12 rounded-full shadow-md transition-colors mr-2 sm:mr-0 "
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="currentColor"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </GlassElement>
            </div>

            <div
                className={`fixed w-[250px] right-0 top-5 z-50 md:hidden ${isMobileMenuOpen && showNavbar ? "mobile-navbar-open" : "mobile-navbar-close"} transition-transform duration-300 ease-in-out`}
            >
                {/* Modal Content */}
                <GlassElement
                    width={250}
                    height={430}
                    radius={43}
                    depth={10}
                    blur={6}
                    chromaticAberration={1}
                    className="w-full"
                >
                    <div className="flex flex-col h-full w-full items-center">
                        {/* Header */}
                        <div className="flex items-center justify-end p-6 w-full">
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100/20 hover:bg-gray-200 transition-colors"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="url(#primary-gradient)"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Navigation Items */}
                        <nav className="flex flex-col space-y-4 w-[230px]">
                            <Link
                                href="/"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <div
                                    className="flex items-center gap-3 px-12 py-3 rounded-3xl shadow-md"
                                    // width={230}
                                    // height={45}
                                    // radius={43}
                                    // depth={10}
                                    // blur={6}
                                    // chromaticAberration={1}
                                >
                                    <svg
                                        className="w-5 h-5"
                                        stroke="url(#primary-gradient)"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            fill="none"
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        />
                                    </svg>
                                    <span className="text-lg font-medium primary-gradient">
                                      Главная
                                    </span>
                                </div>
                            </Link>

                            <Link
                                href="/#product-list"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <div
                                    className="flex items-center gap-3 px-12 py-3 rounded-3xl shadow-md"
                                    // width={230}
                                    // height={45}
                                    // radius={43}
                                    // depth={10}
                                    // blur={6}
                                    // chromaticAberration={1}
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        stroke="url(#primary-gradient)"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            fill="none"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                    <span className="text-lg font-medium primary-gradient">
                                      Кейсы
                                    </span>
                                </div>
                            </Link>

                            <Link
                                href="/#services"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <div
                                    className="flex items-center gap-3 px-12 py-3 rounded-3xl shadow-md"
                                    // width={230}
                                    // height={45}
                                    // radius={43}
                                    // depth={10}
                                    // blur={6}
                                    // chromaticAberration={1}
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        stroke="url(#primary-gradient)"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            fill="none"
                                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                        />
                                    </svg>
                                    <span className="text-lg font-medium primary-gradient">
                                      Услуги
                                    </span>
                                </div>
                            </Link>

                            <Link
                                href="/#internal"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <div
                                    className="flex items-center gap-3 px-12 py-3 rounded-3xl shadow-md"
                                    // width={230}
                                    // height={45}
                                    // radius={43}
                                    // depth={10}
                                    // blur={6}
                                    // chromaticAberration={1}
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        stroke="url(#primary-gradient)"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            fill="none"
                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                        />
                                    </svg>
                                    <span className="text-lg font-medium primary-gradient">
                                      Блог
                                    </span>
                                </div>
                            </Link>

                            <Link
                                href="/#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <div
                                    className="flex items-center gap-3 px-12 py-3 rounded-3xl shadow-md"
                                    // width={230}
                                    // height={45}
                                    // radius={43}
                                    // depth={10}
                                    // blur={6}
                                    // chromaticAberration={1}
                                >
                                    <svg
                                        className="w-5 h-5"
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
                                    <span className="text-lg font-medium primary-gradient">
                                      Связаться
                                    </span>
                                </div>
                            </Link>
                        </nav>
                    </div>
                </GlassElement>
            </div>
        </>
    )
        ;
}
