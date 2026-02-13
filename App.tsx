import React from 'react';
import { Hero } from './components/Hero';
import { Testimonials } from './components/Testimonials';
import { CostCalculator } from './components/CostCalculator';
import { DiagnosticWizard } from './components/DiagnosticWizard';
import { Footer } from './components/Footer';

function App() {
  return (
    <main className="min-h-screen bg-void text-off-white font-sans selection:bg-cyber-orange selection:text-white">
      <Hero />
      
      {/* Services/Intro Bridge */}
      <div className="py-20 text-center bg-charcoal">
        <p className="max-w-3xl mx-auto px-6 text-xl md:text-2xl font-serif italic text-cool-gray leading-loose">
          "Мы не просто ремонтируем автомобили. Мы восстанавливаем первозданную гармонию механизма."
        </p>
      </div>

      <DiagnosticWizard />
      <CostCalculator />
      <Testimonials />
      <Footer />
    </main>
  );
}

export default App;