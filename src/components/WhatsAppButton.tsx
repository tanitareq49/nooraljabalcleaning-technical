import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const WhatsAppButton = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  const whatsappMessage = isRTL 
    ? 'مرحباً، أود الاستفسار عن خدمات التنظيف'
    : 'Hello, I would like to inquire about cleaning services';

  const whatsappUrl = `https://wa.me/966123456789?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-strong hover:shadow-xl transition-all duration-300 hover:scale-110 group ${
        isRTL ? 'left-6' : 'right-6'
      }`}
      aria-label={t.contact.whatsapp}
    >
      <MessageCircle className="w-6 h-6" />
      
      {/* Tooltip */}
      <div className={`absolute bottom-full mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap ${
        isRTL ? 'right-0' : 'left-0'
      }`}>
        <span className={isRTL ? 'font-arabic' : 'font-english'}>
          {t.contact.whatsapp}
        </span>
        <div className={`absolute top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 ${
          isRTL ? 'right-4' : 'left-4'
        }`}></div>
      </div>

      {/* Pulse Animation */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
    </a>
  );
};

export default WhatsAppButton;