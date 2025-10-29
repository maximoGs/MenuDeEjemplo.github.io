
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import type { MerchantConfig, Category, CartItem, Product } from './types';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import ProductList from './components/ProductList';
import OrderSidebar from './components/OrderSidebar';
import Footer from './components/Footer';
import SideQuestModal from './components/SideQuestModal';

// Mock data source, simulating a fetch from merchant_config.json
const merchantConfigData: MerchantConfig = {
  merchantInfo: {
    name: "The Drunken Dragon Inn",
    logo_url: "https://picsum.photos/seed/dragoninn/100/100",
    primary_color: "#8B4513",
    socials: {
      instagram: "https://instagram.com/drunken_dragon_inn",
      whatsapp: "15551234567"
    }
  },
  categories: [
    { id: "cat_ales", name: "Hearty Ales" },
    { id: "cat_stews", name: "Stews & Soups" },
    { id: "cat_roasts", name: "Roasts" }
  ],
  products: [
    {
      id: "prod_001",
      name: "Dragon's Breath Chili",
      description: "A fiery stew guaranteed to warm your soul.",
      price: 8.50,
      image_url: "https://picsum.photos/seed/chili/400/300",
      category_id: "cat_stews",
    },
    {
      id: "prod_002",
      name: "Dwarven Stout",
      description: "Dark, rich, and as unyielding as the mountains.",
      price: 6.00,
      image_url: "https://picsum.photos/seed/stout/400/300",
      category_id: "cat_ales"
    },
    {
      id: "prod_003",
      name: "Roasted Boar Shank",
      description: "A massive portion, slow-cooked to perfection.",
      price: 15.00,
      image_url: "https://picsum.photos/seed/boar/400/300",
      category_id: "cat_roasts",
    },
    {
      id: "prod_004",
      name: "Elven Lembas Bread",
      description: "One small bite is enough to fill the stomach of a grown man.",
      price: 10.00,
      image_url: "https://picsum.photos/seed/lembas/400/300",
      category_id: "cat_stews"
    },
    {
      id: "prod_005",
      name: "Goblin Grog",
      description: "Surprisingly tangy with a suspicious green glow.",
      price: 4.50,
      image_url: "https://picsum.photos/seed/grog/400/300",
      category_id: "cat_ales",
    },
    {
      id: "prod_006",
      name: "Giant's Rib Roast",
      description: "A feast for a whole party of adventurers.",
      price: 25.00,
      image_url: "https://picsum.photos/seed/ribroast/400/300",
      category_id: "cat_roasts"
    }
  ],
  sidequests: [
    {
      id: "quest_01",
      name: "The Firebelly Challenge",
      description: "Prove your mettle by consuming the inn's spiciest offerings without shedding a tear.",
      product_ids: ["prod_001", "prod_005"]
    },
    {
      id: "quest_02",
      name: "Feast of Heroes",
      description: "Gather your party and partake in a meal worthy of legends.",
      product_ids: ["prod_003", "prod_006"]
    }
  ],
  promotions: [
    {
      title: "Hero's Discount!",
      details: "Show your Guild Medallion for 10% off all roasts."
    },
    {
      title: "Bottomless Mugs Thursdays",
      details: "Pay once for Goblin Grog and drink all night!"
    }
  ],
  calendar: [
    { date: "2025-10-31", event: "Spooky Skeleton Bard Night" },
    { date: "2025-12-25", event: "Winter's Veil Feast" }
  ]
};

const getContrastColor = (hex: string): string => {
  if (!hex) return '#ffffff';
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return (yiq >= 128) ? '#000000' : '#ffffff';
};


export default function App() {
  const [config, setConfig] = useState<MerchantConfig | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isQuestModalOpen, setIsQuestModalOpen] = useState(false);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setConfig(merchantConfigData);
      setIsLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    if (config) {
      const primaryColor = config.merchantInfo.primary_color;
      document.documentElement.style.setProperty('--primary-color', primaryColor);
      document.documentElement.style.setProperty('--primary-text-color', getContrastColor(primaryColor));
    }
  }, [config]);
  
  const addToCart = useCallback((product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
  }, []);

  const updateQuantity = useCallback((productId: string, newQuantity: number) => {
    setCart(prevCart => {
      if (newQuantity <= 0) {
        return prevCart.filter(item => item.product.id !== productId);
      }
      return prevCart.map(item =>
        item.product.id === productId ? { ...item, quantity: newQuantity } : item
      );
    });
  }, []);
  
  const handleSelectCategory = (categoryId: string) => {
    if (categoryId === 'sidequests') {
      setIsQuestModalOpen(true);
    } else {
      setSelectedCategory(categoryId);
    }
  };

  const categories: Category[] = useMemo(() => {
    if (!config) return [];
    const hasQuests = config.sidequests && config.sidequests.length > 0;
    return [
      { id: 'all', name: 'All Items' },
      ...config.categories,
      ...(hasQuests ? [{ id: 'sidequests', name: 'SideQuests' }] : []),
    ];
  }, [config]);
  
  const questProductIds = useMemo(() => {
    if (!config) return new Set<string>();
    return new Set(config.sidequests.flatMap(q => q.product_ids));
  }, [config]);

  if (isLoading || !config) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="flex flex-col items-center">
          <svg className="animate-spin h-10 w-10 text-white mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-lg">Loading the Merchant's Scroll...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans antialiased text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-900 min-h-screen pb-24">
      <Header 
        merchantInfo={config.merchantInfo}
        cartItemCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setIsSidebarOpen(true)}
      />
      
      <main className="pt-16">
        <CategoryNav 
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />
        <ProductList 
          products={config.products}
          selectedCategory={selectedCategory}
          onAddToCart={addToCart}
          questProductIds={questProductIds}
        />
      </main>

      <OrderSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        cartItems={cart}
        onUpdateQuantity={updateQuantity}
        merchantInfo={config.merchantInfo}
      />

      <SideQuestModal
        isOpen={isQuestModalOpen}
        onClose={() => setIsQuestModalOpen(false)}
        sidequests={config.sidequests}
        allProducts={config.products}
        onAddToCart={addToCart}
      />
      
      <Footer 
        promotions={config.promotions}
        calendar={config.calendar}
        socials={config.merchantInfo.socials}
      />
    </div>
  );
}