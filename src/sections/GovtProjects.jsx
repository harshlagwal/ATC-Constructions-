import React from 'react';
import { Landmark, CheckCircle2, MapPin, CalendarClock } from 'lucide-react';

export function GovtProjects() {
  const villages = [
    { name: 'Lagdevi', status: 'Active' },
    { name: 'Pohanj', status: 'Active' },
    { name: 'Jandru', status: 'Active' },
  ];

  return (
    <section className="w-full py-lg bg-surface-container-low border-y border-outline-variant/20">
      <div className="max-w-[1200px] mx-auto px-margin-mobile lg:px-gutter">
        <div className="flex flex-col lg:flex-row gap-lg lg:gap-xl items-center bg-surface p-5 sm:p-xl rounded-2xl shadow-sm border border-outline-variant/10 relative overflow-hidden">
          
          {/* Decorative background accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl"></div>

          <div className="w-full lg:w-1/3 flex flex-col gap-sm relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/10 text-green-700 border border-green-500/20 rounded-full w-fit mb-1 sm:mb-2">
              <Landmark size={16} />
              <span className="font-label-sm text-xs font-bold uppercase tracking-widest">Official Tender</span>
            </div>
            <h3 className="font-headline-md text-2xl sm:text-3xl text-on-surface">
              Trusted by <span className="text-secondary">Gram Panchayats</span>
            </h3>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant">
              Amit Traders & Constructions has been officially awarded a <strong>5-year contract</strong> to supply premium construction materials for local government infrastructure projects.
            </p>
          </div>

          <div className="w-full lg:w-2/3 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-md">
              {villages.map((village, idx) => (
                <div 
                  key={idx} 
                  className="bg-surface-container-lowest p-3.5 sm:p-lg rounded-xl border border-outline-variant/30 flex flex-col justify-between gap-2 sm:gap-sm shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:block">
                      <MapPin className="text-secondary shrink-0" size={20} />
                      <h4 className="font-headline-md text-base sm:text-xl text-primary font-bold sm:mt-2">
                        {village.name}
                      </h4>
                    </div>
                    <span className="inline-flex items-center gap-1 text-green-600 bg-green-50 px-2 py-0.5 sm:py-1 rounded text-[10px] font-bold uppercase tracking-wide shrink-0">
                      <CheckCircle2 size={12} />
                      {village.status}
                    </span>
                  </div>

                  <div className="flex items-center justify-between sm:flex-col sm:items-start sm:gap-1 text-xs text-on-surface-variant pt-1 sm:pt-0 border-t border-outline-variant/10 sm:border-0">
                    <span className="font-body-sm text-xs sm:text-sm text-on-surface-variant">
                      Gram Panchayat Project
                    </span>
                    <div className="flex items-center gap-1 text-primary-fixed-dim text-[11px] sm:text-xs">
                      <CalendarClock size={12} />
                      <span>5-Year Term</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
