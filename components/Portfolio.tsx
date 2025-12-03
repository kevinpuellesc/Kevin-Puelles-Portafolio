import React, { useState } from 'react';
import { Category } from '../types';
import { PORTFOLIO_ITEMS } from '../constants';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<Category | 'All'>('All');

  const filteredItems = filter === 'All' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === filter);

  return (
    <div className="bg-white min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-gray-200 pb-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Portafolio</h2>
            <p className="text-gray-500 font-light max-w-xl">
              Una colección de momentos robados al tiempo. Desde la intimidad de lo cotidiano hasta la celebración de lo extraordinario.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex space-x-6 mt-6 md:mt-0">
            <button
              onClick={() => setFilter('All')}
              className={`text-sm tracking-widest uppercase transition-colors ${
                filter === 'All' ? 'text-gray-900 font-medium' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Todo
            </button>
            <button
              onClick={() => setFilter(Category.DOCUMENTARY)}
              className={`text-sm tracking-widest uppercase transition-colors ${
                filter === Category.DOCUMENTARY ? 'text-gray-900 font-medium' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Documental
            </button>
            <button
              onClick={() => setFilter(Category.EVENTS)}
              className={`text-sm tracking-widest uppercase transition-colors ${
                filter === Category.EVENTS ? 'text-gray-900 font-medium' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Eventos
            </button>
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="break-inside-avoid mb-8 group cursor-pointer">
              <div className="relative overflow-hidden bg-gray-100 mb-4 rounded-sm">
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-auto object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-105 opacity-95 group-hover:opacity-100"
                  loading="lazy"
                />
                {/* Sophisticated Overlay */}
                <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/20 mix-blend-multiply transition-all duration-500 ease-in-out" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-serif text-gray-900 group-hover:text-gray-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">
                    {item.category}
                  </p>
                </div>
                <span className="text-gray-300 group-hover:text-gray-900 transition-colors transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 duration-300 text-xs">
                  Ver Proyecto
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;