'use client';
import PrivacyPolicyUz from './uz';
import PrivacyPolicyEn from './en';
import PrivacyPolicyRu from './ru';
import { useParams } from 'next/navigation';

export default function PrivacyPolicy() {
  
  const params = useParams();
  const locale = params.locale as string;
  
  return (
    <div className="bg-black pb-40 mb-[-100px] pt-40 flex justify-center w-full">
      <div className="container text-white max-w-4xl mx-auto px-4">
        <div className="prose prose-invert prose-lg max-w-none">
          {locale === 'uz' && <PrivacyPolicyUz />}
          {locale === 'en' && <PrivacyPolicyEn />}
          {locale === 'ru' && <PrivacyPolicyRu />}
        </div>
      </div>
    </div>
  );
}