# Translation Setup Guide

This project now uses `next-intl` for internationalization support with Russian and English languages.

## How it works

### 1. URL Structure
- Russian (default): `/ru` or `/ru/[page]`
- English: `/en` or `/en/[page]`
- Root `/` redirects to `/ru`

### 2. Translation Files
Translation files are located in `/messages/`:
- `ru.json` - Russian translations
- `en.json` - English translations

### 3. Using Translations in Components

```tsx
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('steps'); // Use the 'steps' namespace
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
```

### 4. Language Switcher
The language switcher is available in the header and automatically updates the URL to switch between locales.

### 5. Example Implementation
Check the `Steps` component (`src/app/home-components/steps.tsx`) to see how translations are implemented:
- Uses `useTranslations('steps')` hook
- Dynamically loads translated text for titles and descriptions
- Maintains the same functionality while supporting multiple languages

### 6. Adding New Translations
1. Add new keys to both `messages/ru.json` and `messages/en.json`
2. Use the `useTranslations` hook in your component
3. Reference the keys using dot notation (e.g., `t('section.key')`)

### 7. Testing
- Visit `/ru` for Russian version
- Visit `/en` for English version
- Use the language switcher in the header to toggle between languages
