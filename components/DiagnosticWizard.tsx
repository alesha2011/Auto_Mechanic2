import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from './ui/GlassCard';
import { Button } from './ui/Button';
import { Activity, AlertTriangle, Disc, Gauge, HelpCircle, ArrowRight, CheckCircle, Volume2 } from 'lucide-react';

type Step = 'intro' | 'symptom' | 'context' | 'contact' | 'success';

interface DiagnosisData {
  symptom: string;
  context: string;
  contactName: string;
  contactPhone: string;
}

export const DiagnosticWizard: React.FC = () => {
  const [step, setStep] = useState<Step>('intro');
  const [data, setData] = useState<DiagnosisData>({
    symptom: '',
    context: '',
    contactName: '',
    contactPhone: ''
  });

  const handleNext = (key: keyof DiagnosisData, value: string, nextStep: Step) => {
    setData(prev => ({ ...prev, [key]: value }));
    setStep(nextStep);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setStep('success');
    }, 1000);
  };

  const steps = {
    intro: (
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        exit={{ opacity: 0, y: -20 }}
        className="text-center"
      >
        <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 mx-auto flex items-center justify-center mb-6 animate-pulse">
          <Activity className="w-10 h-10 text-cyber-orange" />
        </div>
        <h2 className="font-serif text-3xl md:text-4xl text-off-white mb-4">Интеллектуальная Диагностика</h2>
        <p className="text-cool-gray max-w-lg mx-auto mb-8 font-sans leading-relaxed">
          Ответьте на 3 простых вопроса, чтобы определить возможную неисправность и получить предварительную консультацию инженера.
        </p>
        <Button onClick={() => setStep('symptom')}>Начать Анализ</Button>
      </motion.div>
    ),
    symptom: (
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        exit={{ opacity: 0, x: -50 }}
      >
        <h3 className="font-display text-xl text-off-white mb-8 text-center tracking-widest uppercase">Что вас беспокоит?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { id: 'sound', label: 'Посторонний звук', icon: Volume2 },
            { id: 'vibration', label: 'Вибрация / Биение', icon: Activity },
            { id: 'lights', label: 'Ошибки на панели', icon: AlertTriangle },
            { id: 'brakes', label: 'Проблемы с тормозами', icon: Disc },
            { id: 'power', label: 'Потеря мощности', icon: Gauge },
            { id: 'other', label: 'Другое', icon: HelpCircle },
          ].map((option) => (
            <button
              key={option.id}
              onClick={() => handleNext('symptom', option.label, 'context')}
              className="group flex items-center gap-4 p-6 border border-white/10 hover:border-cyber-orange hover:bg-white/[0.02] transition-all duration-300 text-left"
            >
              <option.icon className="w-6 h-6 text-cool-gray group-hover:text-cyber-orange transition-colors" />
              <span className="text-off-white font-sans text-lg">{option.label}</span>
              <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-cyber-orange" />
            </button>
          ))}
        </div>
      </motion.div>
    ),
    context: (
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        exit={{ opacity: 0, x: -50 }}
      >
        <h3 className="font-display text-xl text-off-white mb-8 text-center tracking-widest uppercase">Когда это проявляется?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: 'Во время движения' },
            { label: 'При торможении' },
            { label: 'На холостых оборотах' },
            { label: 'При запуске двигателя' },
            { label: 'На высокой скорости' },
            { label: 'Постоянно' },
          ].map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleNext('context', option.label, 'contact')}
              className="group p-6 border border-white/10 hover:border-cyber-orange hover:bg-white/[0.02] transition-all duration-300 text-center"
            >
              <span className="text-off-white font-sans text-lg">{option.label}</span>
            </button>
          ))}
        </div>
        <div className="mt-8 text-center">
             <button onClick={() => setStep('symptom')} className="text-cool-gray text-xs uppercase tracking-widest hover:text-white transition-colors">Назад</button>
        </div>
      </motion.div>
    ),
    contact: (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1 }} 
        exit={{ opacity: 0, scale: 0.9 }}
      >
        <h3 className="font-serif text-2xl text-off-white mb-2 text-center">Предварительный результат</h3>
        <p className="text-cool-gray text-center mb-8 text-sm">
          На основе симптома <span className="text-cyber-orange">"{data.symptom}"</span> ({data.context.toLowerCase()}).
          <br/>Оставьте контакты для детальной консультации с мастером.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Ваше Имя"
              required
              value={data.contactName}
              onChange={(e) => setData({...data, contactName: e.target.value})}
              className="w-full bg-void/50 border border-white/10 p-4 text-off-white focus:border-cyber-orange focus:outline-none placeholder:text-gray-600"
            />
          </div>
          <div className="space-y-2">
            <input
              type="tel"
              placeholder="+7 (___) ___-__-__"
              required
              value={data.contactPhone}
              onChange={(e) => setData({...data, contactPhone: e.target.value})}
              className="w-full bg-void/50 border border-white/10 p-4 text-off-white focus:border-cyber-orange focus:outline-none placeholder:text-gray-600"
            />
          </div>
          <Button type="submit" className="w-full">Записаться на осмотр</Button>
        </form>
         <div className="mt-6 text-center">
             <button onClick={() => setStep('context')} className="text-cool-gray text-xs uppercase tracking-widest hover:text-white transition-colors">Назад</button>
        </div>
      </motion.div>
    ),
    success: (
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="text-center py-12"
      >
        <div className="w-20 h-20 rounded-full bg-cyber-orange/10 border border-cyber-orange mx-auto flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10 text-cyber-orange" />
        </div>
        <h3 className="font-serif text-3xl text-off-white mb-4">Заявка Принята</h3>
        <p className="text-cool-gray max-w-md mx-auto mb-8">
          Наш специалист изучит ваши ответы и свяжется с вами в течение 15 минут для уточнения деталей.
        </p>
        <Button onClick={() => { setStep('intro'); setData({ symptom: '', context: '', contactName: '', contactPhone: '' }) }} variant="secondary">
          Вернуться
        </Button>
      </motion.div>
    )
  };

  return (
    <section className="py-24 bg-void relative overflow-hidden border-y border-white/5">
       {/* Background Elements */}
       <div className="absolute -left-20 top-20 w-96 h-96 bg-cyber-orange/5 rounded-full blur-[100px] pointer-events-none"></div>
       <div className="absolute -right-20 bottom-20 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <GlassCard className="p-8 md:p-16 min-h-[500px] flex flex-col justify-center relative">
          
          {/* Progress Bar (Visible only during steps) */}
          {step !== 'intro' && step !== 'success' && (
            <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
              <motion.div 
                className="h-full bg-cyber-orange"
                initial={{ width: '0%' }}
                animate={{ 
                  width: step === 'symptom' ? '33%' : step === 'context' ? '66%' : '100%' 
                }}
              />
            </div>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              className="w-full"
            >
              {steps[step]}
            </motion.div>
          </AnimatePresence>
        </GlassCard>
      </div>
    </section>
  );
};