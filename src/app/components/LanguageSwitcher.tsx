'use client';

import {useRouter, usePathname} from 'next/navigation';
import {GlassElement} from './GlassElement/GlassElement';

type Props = {
  currentLocale: string;
};

export default function LanguageSwitcher({currentLocale}: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = () => {
    const newLocale = currentLocale === 'ru' ? 'en' : 'ru';
    
    // Replace the current locale in the pathname with the new locale
    const newPathname = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    
    router.push(newPathname);
  };

  return (
    <GlassElement
      className="flex items-center gap-2 px-8 py-4 rounded-full shadow-md hover:bg-gray-50 transition-colors cursor-pointer"
      width={90}
      height={50}
      radius={43}
      depth={10}
      blur={0}
      chromaticAberration={0}
      onClick={switchLanguage}
    >
      <span className="text-xl font-bold primary-gradient uppercase">
        {currentLocale}
      </span>
    </GlassElement>
  );
}
