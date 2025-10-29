
import React, { useState, useEffect } from 'react';
import type { CartItem, MerchantInfo } from '../types';

interface OrderSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, newQuantity: number) => void;
  merchantInfo: MerchantInfo;
}

const OrderSidebar: React.FC<OrderSidebarProps> = ({ isOpen, onClose, cartItems, onUpdateQuantity, merchantInfo }) => {
  const [tableNumber, setTableNumber] = useState('');
  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  useEffect(() => {
    if (!isOpen) {
      setTableNumber('');
    }
  }, [isOpen]);

  const generateWhatsAppMessage = () => {
    if (!tableNumber.trim()) {
      alert('Please enter your table number.');
      return;
    }
    let message = `Hello ${merchantInfo.name}! I'd like to place an order for table #${tableNumber}:\n\n`;
    cartItems.forEach(item => {
      message += `- ${item.quantity}x ${item.product.name}\n`;
    });
    message += `\nTotal: $${subtotal.toFixed(2)}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${merchantInfo.socials.whatsapp}?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden="true"
      ></div>
      <aside 
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white dark:bg-gray-800 shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-sidebar-title"
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 id="order-sidebar-title" className="text-xl font-bold">My Order</h2>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700" aria-label="Close order summary">
              <span className="text-2xl" aria-hidden="true">&times;</span>
            </button>
          </div>

          {cartItems.length === 0 ? (
            <div className="flex-grow flex flex-col items-center justify-center text-center p-4">
              <p className="text-gray-500 dark:text-gray-400">Your loot bag is empty.</p>
              <p className="text-sm text-gray-400 dark:text-gray-500">Add items from the menu to get started.</p>
            </div>
          ) : (
            <div className="flex-grow overflow-y-auto p-4 space-y-4">
              {cartItems.map(item => (
                <div key={item.product.id} className="flex items-center space-x-4">
                  <img src={item.product.image_url} alt={item.product.name} className="w-16 h-16 rounded-md object-cover"/>
                  <div className="flex-grow">
                    <p className="font-semibold">{item.product.name}</p>
                    <p className="text-sm text-[var(--primary-color)]">${item.product.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)} className="w-7 h-7 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center font-bold" aria-label={`Decrease quantity of ${item.product.name}`}>-</button>
                    <span className="w-8 text-center" aria-live="polite">{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)} className="w-7 h-7 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center font-bold" aria-label={`Increase quantity of ${item.product.name}`}>+</button>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {cartItems.length > 0 && (
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
              <div className="mb-4">
                <label htmlFor="table-number" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Table Number</label>
                <input 
                  type="text" 
                  id="table-number"
                  value={tableNumber}
                  onChange={(e) => setTableNumber(e.target.value)}
                  placeholder="e.g. 12"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div className="flex justify-between items-center font-bold text-lg mb-4">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <button
                onClick={generateWhatsAppMessage}
                disabled={!tableNumber.trim()}
                className="w-full py-3 bg-[var(--primary-color)] text-[var(--primary-text-color)] rounded-lg font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirm Order
              </button>
               <p className="text-xs text-center text-gray-500 mt-2">Order will be sent via WhatsApp.</p>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default OrderSidebar;