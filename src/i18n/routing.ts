import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'ru'],
  
  // Used when no locale matches
  defaultLocale: 'ru'
});

// Export individual values for backwards compatibility
export const locales = routing.locales;
export type Locale = typeof locales[number];
