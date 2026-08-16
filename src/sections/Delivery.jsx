import React from 'react';
import { CheckCircle, Truck } from 'lucide-react';
import { Button } from '../components/ui/Button';
import truckBg from '../assets/Trucks 2.png';

export function Delivery({ onRequestQuote }) {
  return (
    <section id="services" className="w-full bg-inverse-surface text-inverse-on-surface overflow-hidden animate-on-scroll">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 p-margin-mobile lg:p-xl flex flex-col justify-center relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          
          <div className="relative z-10 max-w-xl mx-auto lg:mx-0 lg:ml-auto w-full">
            <h2 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl mb-md">
              We Don't Just Supply Materials.<br/>
              <span className="text-secondary">We Deliver Them.</span>
            </h2>
            
            <p className="font-body-lg text-body-lg text-primary-fixed-dim mb-lg">
              Owning our own transport fleet means reliable local delivery. From bulk materials to tight residential site access, we provide the right vehicle for your needs.
            </p>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-md mb-xl">
              <li className="flex items-start gap-sm">
                <CheckCircle className="text-secondary mt-1" size={24} />
                <div>
                  <span className="block font-label-md text-label-md text-surface-container-lowest">Tipper / Tippri Delivery</span>
                  <span className="font-body-md text-sm text-primary-fixed-dim">For sand, bajri and bulk material transportation.</span>
                </div>
              </li>
              <li className="flex items-start gap-sm">
                <CheckCircle className="text-secondary mt-1" size={24} />
                <div>
                  <span className="block font-label-md text-label-md text-surface-container-lowest">Tractor-Trolley Delivery</span>
                  <span className="font-body-md text-sm text-primary-fixed-dim">Flexible delivery for local construction requirements.</span>
                </div>
              </li>
              <li className="flex items-start gap-sm">
                <CheckCircle className="text-secondary mt-1" size={24} />
                <div>
                  <span className="block font-label-md text-label-md text-surface-container-lowest">Direct Site Delivery</span>
                  <span className="font-body-md text-sm text-primary-fixed-dim">Material delivered directly to the required site.</span>
                </div>
              </li>
              <li className="flex items-start gap-sm">
                <CheckCircle className="text-secondary mt-1" size={24} />
                <div>
                  <span className="block font-label-md text-label-md text-surface-container-lowest">Flexible Material Supply</span>
                  <span className="font-body-md text-sm text-primary-fixed-dim">Choose the material and quantity required for your project.</span>
                </div>
              </li>
            </ul>
            
            <Button onClick={() => onRequestQuote()} icon={Truck}>
              Request Delivery Quote
            </Button>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 lg:min-h-[500px] relative">
          <div 
            className="w-full aspect-video sm:aspect-[4/3] lg:aspect-auto lg:h-[600px] bg-cover bg-center lg:bg-right" 
            aria-label="ATC Delivery Trucks"
            style={{ backgroundImage: `url('${truckBg}')` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-transparent to-transparent lg:hidden"></div>
        </div>
      </div>
    </section>
  );
}
