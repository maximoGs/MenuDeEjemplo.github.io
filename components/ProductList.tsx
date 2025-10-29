
import React, { useMemo } from 'react';
import type { Product } from '../types';

interface ProductListProps {
  products: Product[];
  selectedCategory: string;
  onAddToCart: (product: Product) => void;
  questProductIds: Set<string>;
}

const ScrollIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M5.525 3.332A2.25 2.25 0 0 0 3 5.25v13.5A2.25 2.25 0 0 0 5.25 21h11.25a.75.75 0 0 0 0-1.5H5.25a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 .75.75v8.25a.75.75 0 0 0 1.5 0V5.25a2.25 2.25 0 0 0-2.25-2.25h-13.5a.75.75 0 0 0-.475.168z" />
        <path d="M18.75 11.25a.75.75 0 0 0-1.5 0v3.313c0 .42.176.802.47 1.086l2.112 2.023a.75.75 0 1 0 1.036-1.086l-2.111-2.023A.25.25 0 0 1 18.75 14.563v-3.313z" />
        <path d="M19.5 21a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-1.5 0v3c0 .414.336.75.75.75z" />
    </svg>
);


const ProductCard: React.FC<{ product: Product; onAddToCart: (product: Product) => void; isQuestItem: boolean; }> = ({ product, onAddToCart, isQuestItem }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 flex flex-col">
      <div className="relative">
        <img src={product.image_url} alt={product.name} className="w-full h-48 object-cover" />
        {isQuestItem && (
           <div className="group absolute top-2 right-2">
            <div className="bg-[var(--primary-color)] text-[var(--primary-text-color)] p-2 rounded-full">
              <ScrollIcon className="h-5 w-5"/>
            </div>
            <div className="absolute top-full right-0 mt-2 w-48 p-2 bg-gray-900 text-white text-xs rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <p className="font-bold">Part of the Path!</p>
              <p>This item is part of an available SideQuest. Check the 'SideQuests' tab to learn more!</p>
            </div>
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{product.name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 flex-grow">{product.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xl font-black text-[var(--primary-color)]">${product.price.toFixed(2)}</span>
          <button
            onClick={() => onAddToCart(product)}
            className="px-4 py-2 bg-[var(--primary-color)] text-[var(--primary-text-color)] rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductList: React.FC<ProductListProps> = ({ products, selectedCategory, onAddToCart, questProductIds }) => {
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return products;
    return products.filter(p => p.category_id === selectedCategory);
  }, [products, selectedCategory]);

  return (
    <div className="container mx-auto p-4">
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart}
              isQuestItem={questProductIds.has(product.id)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-500">No items found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;