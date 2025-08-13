import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

const FAQ = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 section-gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2
            className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-black via-[#009300] to-[#015d2f] 
              bg-clip-text text-transparent animate-gradient
              drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)] mb-4 ${
                isRTL ? "font-arabic" : "font-english"
              }`}
          >
            {t.faq.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {t.faq.items.map((item, index) => (
            <div
              key={index}
              className={`bg-card rounded-2xl shadow-soft overflow-hidden fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left rtl:text-right flex items-center justify-between hover:bg-accent/50 transition-colors"
              >
                <h3
                  className={`text-lg font-semibold text-card-foreground pr-4 rtl:pr-0 rtl:pl-4 ${
                    isRTL ? "font-arabic" : "font-english"
                  }`}
                >
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 border-t border-border/50">
                  <p
                    className={`text-muted-foreground leading-relaxed ${
                      isRTL ? "font-arabic" : "font-english"
                    }`}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 fade-in-up">
          <div className="bg-card rounded-2xl p-8 shadow-soft">
            <h3
              className={`text-2xl font-bold text-card-foreground mb-4 ${
                isRTL ? "font-arabic" : "font-english"
              }`}
            >
              {isRTL
                ? "لم تجد ما تبحث عنه؟"
                : "Didn't Find What You're Looking For?"}
            </h3>
            <p
              className={`text-muted-foreground mb-6 ${
                isRTL ? "font-arabic" : "font-english"
              }`}
            >
              {isRTL
                ? "فريق خدمة العملاء لدينا جاهز للإجابة على جميع أسئلتك"
                : "Our customer service team is ready to answer all your questions"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+971 54 301 7347" className="btn-primary">
                <span className={isRTL ? "font-arabic" : "font-english"}>
                  {isRTL ? "اتصل بنا" : "Call Us"}
                </span>
              </a>
              <a
                href="https://wa.me/966123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <span className={isRTL ? "font-arabic" : "font-english"}>
                  {isRTL ? "تواصل واتساب" : "WhatsApp Us"}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
