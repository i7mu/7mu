import { AnimatedNetworkBg } from './components/AnimatedNetworkBg';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { CategoryGridSection } from './components/CategoryGridSection';
import { ProductOffersSection } from './components/ProductOffersSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen font-sky">
      <AnimatedNetworkBg />
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <StatsSection />
        <CategoryGridSection />
        <ProductOffersSection />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
