import type React from "react";

export const HeroSection: React.FC = () => {
  return (
    <section className="w-full max-w-3xl mx-auto text-center flex flex-col gap-4 py-12">
      {/* Animated hero banners */}
      <div className="flex justify-center gap-3 mb-8">
        <img
          src="https://ext.same-assets.com/1105907383/1052033276.gif"
          alt="Animated Hero Banner 1"
          className="h-20 md:h-28 rounded-md shadow-lg"
          style={{ objectFit: 'cover' }}
        />
        <img
          src="https://ext.same-assets.com/1105907383/1878314686.gif"
          alt="Animated Hero Banner 2"
          className="h-20 md:h-28 rounded-md shadow-lg"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">خدمات الالعاب</h2>
      <h3 className="text-2xl md:text-3xl font-bold text-primary mb-0">المنتجات الأكثر مبيعاً!</h3>
      <div className="text-zinc-300 text-lg mb-4">أعلى معايير الجودة</div>
      {/* Categories List - Most popular with highlight */}
      <ul className="space-y-2 mt-6 mb-8">
        <li>
          <span className="text-primary text-xl md:text-2xl font-bold">Fecurity Chair</span>
          <span className="block text-zinc-400 text-sm">كرسي فاكَتوري</span>
        </li>
        <li>
          <span className="text-primary text-xl md:text-2xl font-bold">Progress (GLB)</span>
          <span className="block text-zinc-400 text-sm">نسخة بأرخص الأسعار و أعلى جودة</span>
        </li>
        <li>
          <span className="text-primary text-xl md:text-2xl font-bold">LDV3 Chair (GLB)</span>
          <span className="block text-zinc-400 text-sm">يعمل على جميع أجزاء كود</span>
        </li>
        <li>
          <span className="text-primary text-xl md:text-2xl font-bold">Hyper chair</span>
          <span className="block text-zinc-400 text-sm">مميزاته اسطورية!</span>
        </li>
        <li>
          <span className="text-primary text-xl md:text-2xl font-bold">Marvel Chair</span>
          <span className="block text-zinc-400 text-sm">كرسي مارفل بالملاذ المفضل</span>
        </li>
        <li>
          <span className="text-primary text-xl md:text-2xl font-bold">Valorant Chair</span>
          <span className="block text-zinc-400 text-sm">كرسي فالورنت</span>
        </li>
        <li>
          <span className="text-primary text-xl md:text-2xl font-bold">Valorant spoofer</span>
        </li>
      </ul>
    </section>
  );
};
