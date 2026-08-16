import React from 'react';
import { Button } from '../components/ui/Button';
import { MessageSquare } from 'lucide-react';
import { businessConfig } from '../config/business';
import ownerPhoto from '../assets/Amit Thakur Photo.png';

export function About() {
  return (
    <section id="about" className="w-full py-xl bg-surface-container-lowest animate-on-scroll">
      <div className="max-w-[1200px] mx-auto px-margin-mobile lg:px-gutter">
        <div className="flex flex-col lg:flex-row gap-xl items-center">
          
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[250px] md:h-[500px] rounded-xl overflow-hidden shadow-md">
              <div 
                className="absolute inset-0 bg-cover bg-center" 
                aria-label="Amit Thakur - Owner of ATC"
                style={{ backgroundImage: `url('${ownerPhoto}')` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-3 -right-3 md:-bottom-6 md:-right-6 w-3/4 h-3/4 bg-secondary/10 rounded-xl -z-10 hidden md:block"></div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-md">
            <div>
              <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase mb-xs block">ABOUT ATC</span>
              <h2 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-primary mb-md">
                Built on Reliable Supply & Local Service.
              </h2>
            </div>
            
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Amit Traders & Construction is a local construction-material supply business managed by Amit Thakur, providing essential materials along with direct transportation to construction sites.
            </p>
            
            <p className="font-body-md text-body-md text-on-surface-variant">
              From sand and bajri to bricks and cement, ATC focuses on making material sourcing simple and delivery dependable for local projects.
            </p>
            
            <div className="bg-surface-container-low p-md rounded-lg border border-outline-variant/30 flex items-center gap-md mt-sm">
              <div className="w-14 h-14 bg-primary text-on-primary rounded-full flex items-center justify-center font-headline-md text-xl shadow-sm">
                AT
              </div>
              <div>
                <h4 className="font-headline-md text-lg text-primary">Amit Thakur</h4>
                <span className="font-body-sm text-sm text-secondary font-medium">Owner — Amit Traders & Construction</span>
              </div>
            </div>

            <div className="mt-md">
              <Button href={`https://wa.me/${businessConfig.whatsapp}`} icon={MessageSquare}>
                Talk to Us
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
