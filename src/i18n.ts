import {getRequestConfig} from 'next-intl/server';

export const locales = ['en', 'ru', 'uz'] as const;
export type Locale = typeof locales[number];

export default getRequestConfig(async ({locale}) => {
  return {
    messages: (await import(`./messages/${locale}.json`)).default,
    locale,
  };
});