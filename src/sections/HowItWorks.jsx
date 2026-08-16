import React from 'react';

export function HowItWorks() {
  return (
    <section className="w-full py-xl bg-surface relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{ backgroundImage: "radial-gradient(circle at 2px 2px, black 1px, transparent 0)", backgroundSize: "32px 32px" }}
      ></div>
      
      <div className="max-w-[1200px] mx-auto px-margin-mobile lg:px-gutter relative z-10">
        <h2 className="font-headline-md text-headline-xl text-primary text-center mb-xl">Simple Procurement Process</h2>
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-lg relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-outline-variant/30 z-0"></div>
          
          {/* Step 1 */}
          <div className="flex-1 flex flex-col items-center text-center relative z-10">
            <div className="w-24 h-24 rounded-full bg-surface-container-lowest border-4 border-surface shadow-sm flex items-center justify-center mb-md">
              <span className="font-headline-xl text-secondary opacity-50 text-[40px]">01</span>
            </div>
            <h3 className="font-headline-md text-body-lg text-primary mb-xs">Tell Us What You Need</h3>
            <p className="font-body-md text-on-surface-variant">Specify materials, quantities, and site location via form or phone.</p>
          </div>
          
          {/* Step 2 */}
          <div className="flex-1 flex flex-col items-center text-center relative z-10">
            <div className="w-24 h-24 rounded-full bg-surface-container-lowest border-4 border-surface shadow-sm flex items-center justify-center mb-md">
              <span className="font-headline-xl text-secondary opacity-50 text-[40px]">02</span>
            </div>
            <h3 className="font-headline-md text-body-lg text-primary mb-xs">Get a Unified Quote</h3>
            <p className="font-body-md text-on-surface-variant">Receive a clear price including both materials and delivery.</p>
          </div>
          
          {/* Step 3 */}
          <div className="flex-1 flex flex-col items-center text-center relative z-10">
            <div className="w-24 h-24 rounded-full bg-secondary border-4 border-surface shadow-md flex items-center justify-center mb-md">
              <span className="font-headline-xl text-on-secondary text-[40px]">03</span>
            </div>
            <h3 className="font-headline-md text-body-lg text-primary mb-xs">We Deliver to Site</h3>
            <p className="font-body-md text-on-surface-variant">Our fleet brings the materials directly to your designated drop zone.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
