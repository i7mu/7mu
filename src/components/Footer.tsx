import type React from "react";

export const Footer: React.FC = () => (
  <footer className="w-full bg-dark text-zinc-300 pt-12 pb-6 mt-16 border-t border-zinc-800 text-sm">
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
      <div className="flex flex-col items-center md:items-start">
        <div className="font-bold text-lg text-primary mb-2">ساين | Sign</div>
        <p className="leading-relaxed">
          متجر ساين متخصص بتقديم خدمات وتعزيزات للألعاب لتسهيل وصولك للمستوى المطلوب والاستمتاع في الألعاب بأفضل طريقة.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <span className="font-bold text-primary mb-2">Important Links</span>
        <ul className="space-y-1">
          <li>الشروط والأحكام</li>
          <li>من نحن ؟</li>
          <li>سياسة الخصوصية</li>
          <li>سياسة الاستبدال والاسترجاع</li>
        </ul>
      </div>
      <div className="flex flex-col items-center">
        <span className="font-bold text-primary mb-2">Customer Service</span>
        <ul className="space-y-1">
          <li>واتساب</li>
        </ul>
      </div>
    </div>
    <div className="mt-12 text-center text-zinc-400 text-xs">© {new Date().getFullYear()} ساين | Sign. جميع الحقوق محفوظة.</div>
  </footer>
);
