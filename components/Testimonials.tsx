import React, { useState } from 'react';
import { GlassCard } from './ui/GlassCard';
import { Button } from './ui/Button';
import { INITIAL_REVIEWS, SERVICE_LABELS } from '../constants';
import { Review, ServiceType } from '../types';
import { Star, MessageSquare } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [newReview, setNewReview] = useState({
    name: '',
    service: Object.keys(SERVICE_LABELS)[0],
    rating: 5,
    text: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.text) return;

    const review: Review = {
      id: Date.now().toString(),
      name: newReview.name,
      service: SERVICE_LABELS[newReview.service as ServiceType],
      rating: newReview.rating,
      text: newReview.text,
      date: new Date().toISOString().split('T')[0],
      avatarUrl: `https://picsum.photos/100/100?random=${Date.now()}`
    };

    setReviews([review, ...reviews]);
    setNewReview({ name: '', service: Object.keys(SERVICE_LABELS)[0], rating: 5, text: '' });
    alert('Спасибо за ваш отзыв!');
  };

  return (
    <section className="py-24 bg-void relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-off-white mb-4">Отзывы Клиентов</h2>
          <div className="w-16 h-1 bg-cyber-orange mx-auto"></div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {reviews.slice(0, 3).map((review) => (
            <GlassCard key={review.id} className="p-8 hover:transform hover:-translate-y-2 transition-transform duration-500">
              <div className="flex items-center gap-4 mb-6">
                <img src={review.avatarUrl} alt={review.name} className="w-12 h-12 rounded-full border border-white/20 grayscale" />
                <div>
                  <h3 className="font-sans font-bold text-off-white">{review.name}</h3>
                  <p className="text-xs text-cyber-orange uppercase tracking-wider">{review.service}</p>
                </div>
              </div>
              <p className="text-cool-gray font-serif italic leading-relaxed mb-6">"{review.text}"</p>
              <div className="flex text-cyber-orange gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'opacity-30'}`} />
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          <GlassCard className="p-8 md:p-12">
            <h3 className="font-serif text-2xl text-off-white mb-8 flex items-center gap-3">
              <MessageSquare className="text-cyber-orange" />
              Оставить отзыв
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase text-cool-gray tracking-widest">Ваше Имя</label>
                  <input
                    type="text"
                    required
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    className="w-full bg-void/50 border border-white/10 p-3 text-off-white focus:border-cyber-orange focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase text-cool-gray tracking-widest">Услуга</label>
                  <select
                    value={newReview.service}
                    onChange={(e) => setNewReview({ ...newReview, service: e.target.value })}
                    className="w-full bg-void/50 border border-white/10 p-3 text-off-white focus:border-cyber-orange focus:outline-none appearance-none"
                  >
                     {Object.entries(SERVICE_LABELS).map(([key, label]) => (
                        <option key={key} value={key} className="bg-charcoal">{label}</option>
                      ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase text-cool-gray tracking-widest">Оценка</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewReview({ ...newReview, rating: star })}
                      className={`transition-colors ${newReview.rating >= star ? 'text-cyber-orange' : 'text-gray-600'}`}
                    >
                      <Star className="w-6 h-6 fill-current" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase text-cool-gray tracking-widest">Текст отзыва</label>
                <textarea
                  required
                  rows={4}
                  value={newReview.text}
                  onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                  className="w-full bg-void/50 border border-white/10 p-3 text-off-white focus:border-cyber-orange focus:outline-none resize-none"
                ></textarea>
              </div>

              <Button type="submit" className="w-full">Отправить</Button>
            </form>
          </GlassCard>
        </div>

      </div>
    </section>
  );
};