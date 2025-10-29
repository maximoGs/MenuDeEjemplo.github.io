
export interface MerchantInfo {
  name: string;
  logo_url: string;
  primary_color: string;
  socials: {
    instagram: string;
    whatsapp: string;
  };
}

export interface Category {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category_id: string;
}

export interface Promotion {
  title: string;
  details: string;
}

export interface CalendarEvent {
  date: string;
  event: string;
}

export interface SideQuest {
  id: string;
  name: string;
  description: string;
  product_ids: string[];
}

export interface MerchantConfig {
  merchantInfo: MerchantInfo;
  categories: Category[];
  products: Product[];
  promotions: Promotion[];
  calendar: CalendarEvent[];
  sidequests: SideQuest[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}