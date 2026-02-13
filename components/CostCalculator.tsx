import React, { useState, useEffect } from 'react';
import { GlassCard } from './ui/GlassCard';
import { Button } from './ui/Button';
import { CarType, ServiceType } from '../types';
import { CAR_TYPE_LABELS, SERVICE_LABELS, SERVICE_PRICES, CAR_MULTIPLIERS } from '../constants';
import { Settings, Wrench, CheckCircle2 } from 'lucide-react';

export const CostCalculator: React.FC = () => {
  const [carType, setCarType] = useState<CarType>(CarType.SEDAN);
  const [serviceType, setServiceType] = useState<ServiceType>(ServiceType.OIL_CHANGE);
  const [includeParts, setIncludeParts] = useState<boolean>(false);
  const [priceRange, setPriceRange] = useState<string>('');

  useEffect(() => {
    calculatePrice();
  }, [carType, serviceType, includeParts]);

  const calculatePrice = () => {
    const base = SERVICE_PRICES[serviceType];
    const multiplier = CAR_MULTIPLIERS[carType];
    const laborCost = base * multiplier;
    
    // Simulating parts cost calculation
    let partsCost = 0;
    if (includeParts) {
      // Rough estimation for parts based on service type
      if (serviceType === ServiceType.OIL_CHANGE) partsCost = 4000;
      if (serviceType === ServiceType.SUSPENSION) partsCost = 5000;
      if (serviceType === ServiceType.ENGINE) partsCost = 15000;
      if (serviceType === ServiceType.TRANSMISSION) partsCost = 8000;
    }

    const totalMin = Math.floor(laborCost + partsCost);
    const totalMax = Math.floor(totalMin * 1.2); // 20% variance

    setPriceRange(`${totalMin.toLocaleString('ru-RU')} ₽ — ${totalMax.toLocaleString('ru-RU')} ₽`);
  };

  return (
    <section className="py-24 bg-charcoal relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          {/* Header */}
          <div className="w-full md:w-1/3">
            <h2 className="font-serif text-4xl md:text-5xl text-off-white mb-6">
              Расчет<br />Стоимости
            </h2>
            <p className="text-cool-gray font-sans leading-relaxed mb-8">
              Прозрачное ценообразование. Выберите параметры вашего автомобиля и необходимую услугу для получения предварительного расчета.
            </p>
            <div className="flex items-center gap-4 text-cyber-orange">
              <Settings className="w-6 h-6" />
              <span className="text-sm tracking-widest uppercase">Точность и Честность</span>
            </div>
          </div>

          {/* Calculator Card */}
          <GlassCard className="w-full md:w-2/3 p-8 md:p-12 rounded-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              
              {/* Car Type Selection */}
              <div className="space-y-4">
                <label className="text-xs uppercase tracking-widest text-cool-gray">Класс Автомобиля</label>
                <div className="flex flex-col gap-2">
                  {Object.entries(CAR_TYPE_LABELS).map(([key, label]) => (
                    <button
                      key={key}
                      onClick={() => setCarType(key as CarType)}
                      className={`px-4 py-3 text-left border transition-all duration-300 ${
                        carType === key 
                        ? 'border-cyber-orange text-white bg-cyber-orange/10' 
                        : 'border-white/10 text-cool-gray hover:border-white/30'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-4">
                <label className="text-xs uppercase tracking-widest text-cool-gray">Вид Услуги</label>
                <select 
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value as ServiceType)}
                  className="w-full bg-void border border-white/10 px-4 py-3 text-off-white focus:border-cyber-orange focus:outline-none appearance-none rounded-none"
                >
                  {Object.entries(SERVICE_LABELS).map(([key, label]) => (
                    <option key={key} value={key} className="bg-charcoal">{label}</option>
                  ))}
                </select>

                <div className="pt-6">
                   <label className="flex items-center gap-3 cursor-pointer group">
                      <div className={`w-6 h-6 border flex items-center justify-center transition-colors ${includeParts ? 'border-cyber-orange bg-cyber-orange' : 'border-white/20'}`}>
                        {includeParts && <CheckCircle2 className="w-4 h-4 text-white" />}
                      </div>
                      <input 
                        type="checkbox" 
                        className="hidden" 
                        checked={includeParts}
                        onChange={(e) => setIncludeParts(e.target.checked)}
                      />
                      <span className="text-sm text-cool-gray group-hover:text-off-white transition-colors">Включить оригинальные запчасти</span>
                   </label>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 mt-4 flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <span className="block text-xs uppercase tracking-widest text-cool-gray mb-1">Предварительная стоимость</span>
                <span className="font-display text-3xl md:text-4xl text-off-white">{priceRange}</span>
              </div>
              <Button>Записаться</Button>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};