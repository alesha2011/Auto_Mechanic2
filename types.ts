export enum CarType {
  SEDAN = 'SEDAN',
  CROSSOVER = 'CROSSOVER',
  SUV = 'SUV'
}

export enum ServiceType {
  DIAGNOSTICS = 'DIAGNOSTICS',
  OIL_CHANGE = 'OIL_CHANGE',
  SUSPENSION = 'SUSPENSION',
  ENGINE = 'ENGINE',
  TRANSMISSION = 'TRANSMISSION'
}

export interface Review {
  id: string;
  name: string;
  service: string;
  rating: number;
  text: string;
  date: string;
  avatarUrl: string;
}

export interface PricingConfig {
  basePrice: number;
  label: string;
}