import type React from "react";
import { useState } from "react";

const faqs = [
  {
    q: "كيف أطلب من الموقع؟",
    a: "اختر المنتج، أضفه للعربة، وأكمل الدفع بطريقة آمنة وسريعة.",
  },
  {
    q: "هل طرق الدفع آمنة؟",
    a: "نعم، تتم حماية جميع بيانات الدفع وفق معايير أمان عالمية.",
  },
  {
    q: "هل متجر ساين موثوق؟",
    a: "نعم، لدينا آلاف العملاء والطلبات، وآراء إيجابية كثيرة.",
  },
  {
    q: "ماهي اوقات العمل في متجر ساين؟",
    a: "متجرنا متاح 24/7 يومياً لخدمة العملاء.",
  },
];

export const FAQSection: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="max-w-3xl mx-auto py-10">
      <h2 className="text-2xl text-primary font-bold mb-4">الأسئلة الشائعة</h2>
      <div className="divide-y divide-primary/20">
        {faqs.map((faq, idx) => (
          <div key={idx} className="py-4">
            <button
              className="w-full text-right focus:outline-none flex justify-between text-lg font-bold text-primary"
              onClick={() => setOpen(open === idx ? null : idx)}
              aria-expanded={open === idx}
            >
              <span>{faq.q}</span>
              <span className="ml-2 text-primary">{open === idx ? "-" : "+"}</span>
            </button>
            {open === idx && (
              <div className="text-zinc-200 mt-2 text-base animate-fade-in rtl">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
