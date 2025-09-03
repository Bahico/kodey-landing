'use client';

import { useTranslations } from 'next-intl';

export default function TranslationDemo() {
  const t = useTranslations('steps');
  
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto mt-8">
      <h3 className="text-xl font-bold mb-4 text-gray-800">
        Translation Demo
      </h3>
      <div className="space-y-3">
        <div className="text-sm text-gray-600">
          <strong>Title:</strong> {t('title')}
        </div>
        <div className="text-sm text-gray-600">
          <strong>Description:</strong> {t('description')}
        </div>
        <div className="text-sm text-gray-600">
          <strong>Step 1:</strong> {t('step1.title')}
        </div>
        <div className="text-xs text-gray-500">
          {t('step1.description')}
        </div>
      </div>
    </div>
  );
}
