import React from 'react';
import { Button } from '../components/ui/Button';
import { ArrowRight, Phone, Truck, Tractor, MapPin, HardHat, ShieldCheck } from 'lucide-react';
import { businessConfig } from '../config/business';
import truckBg from '../assets/Trucks amit.webp';

export function Hero({ onGetQuote }) {
  return (
    <section id="home" className="relative w-full min-h-[650px] md:min-h-[780px] flex items-center justify-start overflow-hidden -mt-20 pt-20">
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center" 
          aria-label="ATC Delivery Trucks"
          style={{ backgroundImage: `url('${truckBg}')` }}
        ></div>
        {/* Dark cinematic overlay, gradient from left to right */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent"></div>
        {/* Slight bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-margin-mobile lg:px-gutter flex flex-col items-start gap-lg">
        <div className="w-full md:w-2/3 lg:w-3/5 text-on-primary">
          <div className="flex flex-wrap items-center gap-3 mb-lg">
            <div className="inline-flex items-center gap-sm px-sm py-xs border border-on-primary/20 rounded-full backdrop-blur-sm bg-primary/30">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-primary-container">Reliable Local Supply & Delivery</span>
            </div>
            <div className="inline-flex items-center gap-2 px-sm py-xs border border-secondary/40 rounded-full backdrop-blur-sm bg-secondary/10">
              <ShieldCheck size={16} className="text-secondary" />
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-container">Govt. Approved Contractor</span>
            </div>
          </div>
          
          <h1 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl leading-tight mb-md text-surface-container-lowest">
            Construction <span className="text-secondary">Materials</span>,<br/>
            Delivered to Your Site.
          </h1>
          
          <p className="font-body-lg text-body-lg text-primary-fixed-dim max-w-xl mb-xl">
            Sand, Bajri, Bricks, Cement & More — supplied with reliable local delivery for residential and construction projects.
          </p>
          
          <div className="flex flex-wrap items-center gap-md mb-xl">
            <Button onClick={onGetQuote} icon={ArrowRight}>
              Get a Quote
            </Button>
            <Button variant="secondary" href={`tel:${businessConfig.phone}`} icon={Phone}>
              Call Now
            </Button>
            <Button variant="secondary" href={`https://wa.me/${businessConfig.whatsapp}`} className="hidden sm:flex border-none text-green-400 hover:text-green-300">
              WhatsApp Us
            </Button>
          </div>
          
          <div className="flex items-center gap-3 flex-wrap pt-6 border-t border-white/10">
            <div className="flex items-center gap-2 bg-black/40 hover:bg-black/60 transition-colors backdrop-blur-md px-4 py-2.5 rounded-full border border-white/10 text-white shadow-lg">
              <Truck size={18} className="text-secondary" />
              <span className="font-medium text-sm tracking-wide">2 Tippers</span>
            </div>
            <div className="flex items-center gap-2 bg-black/40 hover:bg-black/60 transition-colors backdrop-blur-md px-4 py-2.5 rounded-full border border-white/10 text-white shadow-lg">
              <Tractor size={18} className="text-secondary" />
              <span className="font-medium text-sm tracking-wide">2 Tractor-Trolley Units</span>
            </div>
            <div className="flex items-center gap-2 bg-black/40 hover:bg-black/60 transition-colors backdrop-blur-md px-4 py-2.5 rounded-full border border-white/10 text-white shadow-lg">
              <MapPin size={18} className="text-secondary" />
              <span className="font-medium text-sm tracking-wide">Local Delivery</span>
            </div>
            <div className="flex items-center gap-2 bg-black/40 hover:bg-black/60 transition-colors backdrop-blur-md px-4 py-2.5 rounded-full border border-white/10 text-white shadow-lg">
              <HardHat size={18} className="text-secondary" />
              <span className="font-medium text-sm tracking-wide">Direct Site Supply</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
