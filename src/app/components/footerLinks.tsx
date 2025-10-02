'use client';
import {Link} from "@/i18n/navigation";
import {scrollToId} from "@/app/functions/scroll-to";
import {useTranslations} from "next-intl";

export function FooterLinks({locale}: { locale: string}) {
    const t = useTranslations('navigation');

    return (
        <div className="col-span-4 lg:col-span-1 space-y-4 sm:space-y-6 text-center lg:text-left">
            <Link
                href="/"
                className="block text-base sm:text-lg md:text-xl font-medium hover:text-blue-400 transition-colors"
            >
                {t('home')}
            </Link>
            <Link
                href="/#product-list" scroll={false} onClick={() => scrollToId("product-list")}
                className="block text-base sm:text-lg md:text-xl font-medium hover:text-blue-400 transition-colors"
            >
                {t('cases')}
            </Link>
            <Link
                href="/#services" scroll={false} onClick={() => scrollToId("services")}
                className="block text-base sm:text-lg md:text-xl font-medium hover:text-blue-400 transition-colors"
            >
                {t('services')}
            </Link>
            <Link
                href="/#internal" scroll={false} onClick={() => scrollToId('internal')}
                className="block text-base sm:text-lg md:text-xl font-medium hover:text-blue-400 transition-colors"
            >
                {t('blog')}
            </Link>
            <Link href="/#contact" scroll={false} onClick={() => scrollToId('contact')}
                  className="block text-base sm:text-lg md:text-xl font-medium hover:text-blue-400 transition-colors"
            >
                {t('contact')}
            </Link>
        </div>
    )
}