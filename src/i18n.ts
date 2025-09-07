import {getRequestConfig} from 'next-intl/server';

export const locales = ['en', 'ru'] as const;
export type Locale = typeof locales[number];

export default getRequestConfig(async (params) => {
  const { locale } = await params;
  const messages = (await import(`./messages/${locale}.json`)).default;
  return {
    messages,
    locale
  };
});