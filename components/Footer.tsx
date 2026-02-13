import React from 'react';
import { WORKSHOP_INFO } from '../constants';
import { MapPin, Phone, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-void border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
             <h2 className="font-display text-2xl text-off-white tracking-widest">
              АВТО<span className="text-cyber-orange">МЕХАНИК</span>
            </h2>
            <p className="text-cool-gray text-sm leading-relaxed max-w-xs">
              Премиальный сервис для тех, кто ценит свое время и безупречное техническое состояние автомобиля.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-off-white">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-cool-gray hover:text-cyber-orange transition-colors">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <span>{WORKSHOP_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3 text-cool-gray hover:text-cyber-orange transition-colors">
                <Phone className="w-5 h-5 shrink-0" />
                <a href={`tel:${WORKSHOP_INFO.phone}`}>{WORKSHOP_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-3 text-cool-gray">
                <Clock className="w-5 h-5 shrink-0" />
                <span>{WORKSHOP_INFO.hours}</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-off-white">Навигация</h3>
            <ul className="space-y-3 text-cool-gray text-sm">
              <li><a href="#" className="hover:text-cyber-orange transition-colors">Главная</a></li>
              <li><a href="#" className="hover:text-cyber-orange transition-colors">Услуги</a></li>
              <li><a href="#" className="hover:text-cyber-orange transition-colors">Калькулятор</a></li>
              <li><a href="#" className="hover:text-cyber-orange transition-colors">Отзывы</a></li>
            </ul>
          </div>

           {/* Socials / Map Placeholder */}
           <div className="space-y-6">
             <h3 className="text-sm font-bold uppercase tracking-widest text-off-white">Мы в сети</h3>
             <div className="flex gap-4">
                <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center text-cool-gray hover:border-cyber-orange hover:text-cyber-orange transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center text-cool-gray hover:border-cyber-orange hover:text-cyber-orange transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center text-cool-gray hover:border-cyber-orange hover:text-cyber-orange transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
             </div>
           </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-cool-gray/50 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} AutoMechanic. All rights reserved.</p>
          <p>Designed for Excellence</p>
        </div>
      </div>
    </footer>
  );
};