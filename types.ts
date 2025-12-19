
export interface Price {
  label: string;
  inr: number;
  usd: number;
  savingsInr?: number;
  savingsUsd?: number;
}

export interface HostingPlan {
  id: number;
  name: string;
  theme?: 'copper' | 'iron' | 'gold' | 'diamond' | 'netherite' | 'samp-classic' | 'samp-pro' | 'samp-elite';
  prices: {
    monthly: Price;
    quarterly: Price;
    yearly: Price;
  };
  specs: {
    cpu: string;
    ram: string;
    storage: string;
    ports: number;
    backups: number;
    slots?: number;
  };
  highlight?: boolean;
}

export interface Addon {
  name: string;
  price: string;
  icon: string;
  description?: string;
  category?: Category[];
}

export type BillingCycle = 'monthly' | 'quarterly' | 'yearly';

export type Category = 
  | 'minecraft' 
  | 'samp'
  | 'ark' 
  | 'terraria' 
  | 'rust' 
  | 'valheim' 
  | 'palworld' 
  | 'vps' 
  | 'web' 
  | 'bot' 
  | 'reseller';

export type PageState = 'home' | 'about' | 'products' | 'contact' | 'web-dev';
