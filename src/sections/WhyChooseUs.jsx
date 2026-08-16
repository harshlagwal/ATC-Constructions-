import React from 'react';
import { Handshake, Gauge, Truck, Banknote, HeadphonesIcon, ClipboardList } from 'lucide-react';

export function WhyChooseUs() {
  const features = [
    {
      icon: Handshake,
      title: "Reliable Supply",
      description: "Consistent material quality from vetted regional quarries and manufacturers."
    },
    {
      icon: Gauge,
      title: "Fast Local Delivery",
      description: "Optimized local routing ensures your materials arrive when the crew is ready."
    },
    {
      icon: Truck,
      title: "Own Transport Fleet",
      description: "Direct control over logistics means no middleman delays or excuses."
    },
    {
      icon: Banknote,
      title: "Competitive Pricing",
      description: "Combined supply and transport quotes provide better value for your project budget."
    },
    {
      icon: HeadphonesIcon,
      title: "Direct Communication",
      description: "One point of contact for ordering, scheduling, and delivery updates."
    },
    {
      icon: ClipboardList,
      title: "Flexible Orders",
      description: "From single tractor loads to continuous commercial supply schedules."
    }
  ];

  return (
    <section className="w-full py-xl bg-surface-container-lowest animate-on-scroll">
      <div className="max-w-[1200px] mx-auto px-margin-mobile lg:px-gutter">
        <div className="text-center mb-xl">
          <h2 className="font-headline-md text-headline-xl text-primary mb-sm">The Constructive Advantage</h2>
          <p className="font-body-md text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Integrated supply and logistics designed for contractors who demand reliability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="p-5 md:p-lg bg-surface rounded-xl border border-outline-variant/30 hover:border-secondary/50 transition-colors group">
                <div className="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center mb-md group-hover:bg-secondary/10 transition-colors">
                  <Icon className="text-secondary" size={28} />
                </div>
                <h3 className="font-headline-md text-body-lg text-primary mb-xs">{feature.title}</h3>
                <p className="font-body-md text-on-surface-variant text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
