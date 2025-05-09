import type React from "react";

export const StatsSection: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto py-6 flex flex-col gap-5">
      <div className="grid sm:grid-cols-3 gap-4 text-center">
        <div className="sm:col-span-1">
          <div className="text-lg text-primary font-bold">+ 0</div>
          <div className="text-zinc-400">عميل المتجر</div>
        </div>
        <div className="sm:col-span-1">
          <div className="text-lg text-primary font-bold">+ 0</div>
          <div className="text-zinc-400">عدد الطلبات التي تم تنفيذها</div>
        </div>
        <div className="sm:col-span-1">
          <div className="text-primary font-bold">متجر ساين للأرقام</div>
          <div className="text-zinc-400 text-sm">نحن مختصون بالأرقام والخدمات التي نقدمها</div>
        </div>
      </div>
      <div className="flex justify-center gap-8 mt-5 flex-wrap">
        <div className="text-zinc-300 text-md">الاسئلة الشائعة<br /><span className="text-primary">أكيد في بالك بعض الأسئلة!</span></div>
        <div className="text-zinc-300 text-md">طرق الدفع آمنة<br /><span className="text-primary">هل طرق الدفع آمنة ؟</span></div>
        <div className="text-zinc-300 text-md">كيف أطلب من الموقع ؟</div>
      </div>
    </section>
  );
};
