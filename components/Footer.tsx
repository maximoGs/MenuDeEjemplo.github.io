
import React from 'react';
import type { Promotion, CalendarEvent } from '../types';

interface FooterProps {
  promotions: Promotion[];
  calendar: CalendarEvent[];
  socials: {
    instagram: string;
    whatsapp: string;
  };
}

const InstagramIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/>
    </svg>
);
const WhatsAppIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.803 6.122l-1.121 4.108 4.225-1.109zM12 5.99c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.687 6-6-2.687-6-6-6zm3.623 7.828c-.188.371-1.122.962-1.31.962-.187 0-.462-.075-.724-.337-.262-.262-.975-1.042-1.85-1.919-.994-.975-1.637-2.025-1.637-2.312 0-.288.262-.45.45-.638s.337-.225.45-.15c.112.075.375.825.412.9.038.075.038.15 0 .225-.037.075-.112.188-.225.3-.112.112-.187.188-.262.262-.075.075-.15.188-.037.338.112.15.637.975 1.35 1.675.825.825 1.462 1.125 1.637 1.125.175 0 .337-.075.45-.225s.45-.525.525-.712c.075-.188.15-.15.262-.15s.75.338.862.413c.113.075.188.112.225.188.038.075.038.15 0 .3z"/>
    </svg>
);

const Footer: React.FC<FooterProps> = ({ promotions, calendar, socials }) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-10 bg-white dark:bg-gray-800 shadow-[0_-2px_5px_-1px_rgba(0,0,0,0.1)] p-4">
      <div className="container mx-auto">
        <div className="flex space-x-4 overflow-x-auto pb-4 -mb-4">
          {promotions.map((promo, index) => (
            <div key={`promo-${index}`} className="flex-shrink-0 w-64 p-3 bg-yellow-100 dark:bg-yellow-900/50 rounded-lg border border-yellow-300 dark:border-yellow-700">
              <h4 className="font-bold text-yellow-800 dark:text-yellow-200">{promo.title}</h4>
              <p className="text-sm text-yellow-700 dark:text-yellow-300">{promo.details}</p>
            </div>
          ))}
          {calendar.map((item, index) => (
            <div key={`cal-${index}`} className="flex-shrink-0 w-64 p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg border border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-800 dark:text-blue-200">{item.date}</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">{item.event}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-4 pt-2 border-t border-gray-200 dark:border-gray-700">
          <a href="#" className="text-sm font-semibold hover:text-[var(--primary-color)]">View Adventurer's Journal</a>
          <div className="flex space-x-4">
            <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <InstagramIcon />
            </a>
            <a href={`https://wa.me/${socials.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <WhatsAppIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
