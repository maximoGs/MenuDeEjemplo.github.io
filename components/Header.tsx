
import React from 'react';
import type { MerchantInfo } from '../types';

interface HeaderProps {
  merchantInfo: MerchantInfo;
  cartItemCount: number;
  onCartClick: () => void;
}

const CartIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

const Header: React.FC<HeaderProps> = ({ merchantInfo, cartItemCount, onCartClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src={merchantInfo.logo_url} alt={`${merchantInfo.name} logo`} className="h-10 w-10 rounded-full object-cover border-2 border-[var(--primary-color)]" />
          <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">{merchantInfo.name}</h1>
        </div>
        <button
          onClick={onCartClick}
          className="relative p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Open order summary"
        >
          <CartIcon />
          {cartItemCount > 0 && (
            <span className="absolute top-0 right-0 block h-5 w-5 rounded-full bg-[var(--primary-color)] text-[var(--primary-text-color)] text-xs flex items-center justify-center transform translate-x-1/2 -translate-y-1/2">
              {cartItemCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
