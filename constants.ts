import { CarType, ServiceType } from './types';

export const WORKSHOP_INFO = {
  name: 'АвтоМеханик',
  address: 'г. Екатеринбург, ул. Академика Вонсовского, 1А лит Ш',
  phone: '+7 (965) 830-12-15',
  hours: 'Ежедневно, 09:00 - 20:30',
  coordinates: [56.78, 60.59] // Approximate
};

export const CAR_TYPE_LABELS: Record<CarType, string> = {
  [CarType.SEDAN]: 'Седан',
  [CarType.CROSSOVER]: 'Кроссовер',
  [CarType.SUV]: 'Внедорожник / Коммерческий',
};

export const SERVICE_PRICES: Record<ServiceType, number> = {
  [ServiceType.DIAGNOSTICS]: 1200,
  [ServiceType.OIL_CHANGE]: 1260,
  [ServiceType.SUSPENSION]: 800,
  [ServiceType.ENGINE]: 14000,
  [ServiceType.TRANSMISSION]: 5000, // Estimated
};

export const SERVICE_LABELS: Record<ServiceType, string> = {
  [ServiceType.DIAGNOSTICS]: 'Компьютерная диагностика',
  [ServiceType.OIL_CHANGE]: 'Замена масла',
  [ServiceType.SUSPENSION]: 'Ремонт подвески',
  [ServiceType.ENGINE]: 'Ремонт двигателя',
  [ServiceType.TRANSMISSION]: 'Обслуживание КПП',
};

export const CAR_MULTIPLIERS: Record<CarType, number> = {
  [CarType.SEDAN]: 1.0,
  [CarType.CROSSOVER]: 1.2,
  [CarType.SUV]: 1.5,
};

export const INITIAL_REVIEWS = [
  {
    id: '1',
    name: 'Алексей Волков',
    service: 'Ремонт двигателя',
    rating: 5,
    text: 'Исключительный сервис. Двигатель работает как швейцарские часы. Атмосфера в сервисе соответствует уровню работ.',
    date: '2023-10-15',
    avatarUrl: 'https://picsum.photos/100/100?random=1'
  },
  {
    id: '2',
    name: 'Дмитрий Соколов',
    service: 'Компьютерная диагностика',
    rating: 5,
    text: 'Быстро, точно, без лишних слов. Профессиональное оборудование и подход к делу.',
    date: '2023-11-02',
    avatarUrl: 'https://picsum.photos/100/100?random=2'
  },
  {
    id: '3',
    name: 'Елена Морозова',
    service: 'Замена масла',
    rating: 4,
    text: 'Премиальный подход даже к мелочам. Очень довольна обслуживанием моего кроссовера.',
    date: '2023-11-20',
    avatarUrl: 'https://picsum.photos/100/100?random=3'
  }
];