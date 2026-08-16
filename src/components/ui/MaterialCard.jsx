import React from 'react';

export function MaterialCard({ title, description, image, alt, onRequestQuote }) {
  return (
    <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-outline-variant/30 group flex flex-col h-full">
      <div className="relative overflow-hidden bg-surface-container aspect-video md:aspect-[16/10]">
        <img 
          src={image} 
          alt={alt}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" 
        />
      </div>
      <div className="p-4 md:p-md flex flex-col flex-grow">
        <h3 className="font-headline-md text-body-lg text-primary mb-xs">{title}</h3>
        <p className="font-body-sm text-body-md text-on-surface-variant mb-md flex-grow">{description}</p>
        <button 
          onClick={onRequestQuote}
          className="w-full py-sm border border-outline-variant text-primary font-label-md text-label-md rounded hover:border-secondary hover:text-secondary transition-colors"
        >
          Request Price
        </button>
      </div>
    </div>
  );
}
