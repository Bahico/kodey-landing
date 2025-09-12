export const API_URL = 'https://api.kodey.ru/';
export let LOCALE: 'ru' | 'uz' | 'en' = 'ru';

export function setLocale(locale: 'ru' | 'uz' | 'en') {
    LOCALE = locale;
}