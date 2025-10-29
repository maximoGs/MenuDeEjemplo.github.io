
import React, { useMemo } from 'react';
import type { SideQuest, Product } from '../types';

interface SideQuestModalProps {
  isOpen: boolean;
  onClose: () => void;
  sidequests: SideQuest[];
  allProducts: Product[];
  onAddToCart: (product: Product) => void;
}

const SideQuestModal: React.FC<SideQuestModalProps> = ({ isOpen, onClose, sidequests, allProducts, onAddToCart }) => {
  const productsMap = useMemo(() => {
    return new Map(allProducts.map(p => [p.id, p]));
  }, [allProducts]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-60 z-40 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden="true"
      ></div>
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white dark:bg-gray-800 shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="quest-modal-title"
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 id="quest-modal-title" className="text-xl font-bold">📜 Available SideQuests</h2>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700" aria-label="Close quests view">
              <span className="text-2xl" aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-4 space-y-4">
            {sidequests.map(quest => (
              <details key={quest.id} className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg open:shadow-lg transition-shadow">
                <summary className="font-bold text-lg cursor-pointer text-[var(--primary-color)] hover:opacity-80">
                  {quest.name}
                </summary>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{quest.description}</p>
                <div className="mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
                  <h4 className="font-semibold mb-2">Required Items:</h4>
                  <div className="space-y-3">
                    {quest.product_ids.map(productId => {
                      const product = productsMap.get(productId);
                      if (!product) return null;
                      return (
                        <div key={product.id} className="flex items-center space-x-3">
                          <img src={product.image_url} alt={product.name} className="w-12 h-12 rounded-md object-cover" />
                          <div className="flex-grow">
                            <p className="font-semibold text-sm">{product.name}</p>
                            <p className="text-xs text-gray-500">${product.price.toFixed(2)}</p>
                          </div>
                          <button 
                            onClick={() => onAddToCart(product)}
                            className="px-3 py-1 bg-[var(--primary-color)] text-[var(--primary-text-color)] rounded-full font-semibold text-xs hover:opacity-90 transition-opacity"
                          >
                            Add
                          </button>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideQuestModal;