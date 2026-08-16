import React from 'react';
import { FleetCard } from '../components/ui/FleetCard';
import truckBg from '../assets/Trucks amit.webp';
import tractorBg from '../assets/Tractors.webp';

export function Fleet() {
  return (
    <section id="fleet" className="w-full py-xl bg-primary text-on-primary">
      <div className="max-w-[1200px] mx-auto px-margin-mobile lg:px-gutter">
        <div className="flex flex-col md:flex-row justify-between items-end gap-md mb-lg">
          <div>
            <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase mb-xs block">Logistics Power</span>
            <h2 className="font-headline-md text-headline-xl text-surface-container-lowest">Our Delivery Fleet</h2>
          </div>
          <p className="font-body-md text-primary-fixed-dim max-w-md md:text-right">
            We maintain our own vehicles to ensure reliable delivery directly to your construction site.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          <FleetCard 
            title="2 Tippers / Tippri"
            description="For sand, bajri and bulk construction-material delivery."
            image={truckBg}
            alt="Tipper Truck"
            iconType="truck"
          />
          <FleetCard 
            title="2 Tractor-Trolley Units"
            description="Flexible local delivery for construction materials and site requirements."
            image={tractorBg}
            alt="Tractor Trolley Units"
            iconType="tractor"
            indicators={["01 — Sonalika", "02 — Mahindra"]}
          />
        </div>
      </div>
    </section>
  );
}
