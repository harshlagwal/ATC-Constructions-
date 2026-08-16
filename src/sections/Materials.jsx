import React from 'react';
import { MaterialCard } from '../components/ui/MaterialCard';
import { ArrowRight } from 'lucide-react';
import sandImg from '../assets/sand image.webp';
import bricksImg from '../assets/bricks image.webp';
import cementImg from '../assets/cement.webp';

export function Materials({ onRequestQuote }) {
  const materialsData = [
    {
      id: "sand",
      title: "Sand / Ret",
      description: "Reliable sand supply for masonry, plastering and concrete work.",
      image: sandImg,
      alt: "Large pile of construction sand"
    },
    {
      id: "bajri",
      title: "Bajri / Aggregate",
      description: "Aggregate for concrete, foundations and general construction requirements.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800",
      alt: "Large pile of grey crushed stone aggregate"
    },
    {
      id: "bricks",
      title: "Bricks / Eent",
      description: "Construction bricks for residential and building projects.",
      image: bricksImg,
      alt: "Cleanly stacked red construction bricks"
    },
    {
      id: "cement",
      title: "Cement",
      description: "Cement supply for everyday construction and structural work.",
      image: cementImg,
      alt: "Stacked cement bags at construction site"
    }
  ];

  return (
    <section id="materials" className="w-full py-xl bg-surface animate-on-scroll">
      <div className="max-w-[1200px] mx-auto px-margin-mobile lg:px-gutter">
        <div className="flex flex-col md:flex-row justify-between items-end gap-md mb-lg">
          <div>
            <h2 className="font-headline-md text-headline-md text-primary mb-xs">Construction Materials</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              We focus on reliable local supply and direct delivery to your construction site.
            </p>
          </div>
          <button 
            onClick={() => onRequestQuote()}
            className="text-secondary font-label-md text-label-md flex items-center gap-xs hover:text-on-secondary-container transition-colors group"
          >
            View All Materials
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
          {materialsData.map((material) => (
            <MaterialCard 
              key={material.id}
              title={material.title}
              description={material.description}
              image={material.image}
              alt={material.alt}
              onRequestQuote={() => onRequestQuote(material.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
