import React from 'react';
import { MapPin, Truck, Map, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

const mapNodes = [
  { id: 'lagdevi', name: 'Lagdevi (Office)', top: 50, left: 50, isHub: true },
  { id: 'hamirpur', name: 'Hamirpur', top: 38, left: 48 },
  { id: 'sujanpur', name: 'Tira Sujanpur', top: 15, left: 45 },
  { id: 'utpur', name: 'Utpur', top: 20, left: 60 },
  { id: 'nadaun', name: 'Nadaun', top: 25, left: 20 },
  { id: 'bhatta', name: 'Bhatta', top: 40, left: 28 },
  { id: 'awadevi', name: 'Awa Devi', top: 38, left: 65 },
  { id: 'bhukhar', name: 'Bhukhar', top: 45, left: 80 },
  { id: 'bhota', name: 'Bhota', top: 60, left: 65 },
  { id: 'ladror', name: 'Ladror Kalan', top: 65, left: 80 },
  { id: 'balaknath', name: 'Baba Balak Nath', top: 85, left: 60 },
  { id: 'salooni', name: 'Salooni', top: 65, left: 45 },
  { id: 'barsar', name: 'Barsar', top: 80, left: 40 },
  { id: 'panjgraon', name: 'Panjgraon', top: 85, left: 30 },
  { id: 'uhal', name: 'Uhal', top: 30, left: 80 },
  { id: 'bhoranj', name: 'Bhoranj', top: 55, left: 85 },
  { id: 'dhaneta', name: 'Dhaneta', top: 70, left: 25 },
];

const mapConnections = [
  ['lagdevi', 'hamirpur'],
  ['lagdevi', 'awadevi'],
  ['lagdevi', 'salooni'],
  ['lagdevi', 'bhatta'],
  ['lagdevi', 'bhota'],
  ['hamirpur', 'nadaun'],
  ['hamirpur', 'sujanpur'],
  ['awadevi', 'bhukhar'],
  ['awadevi', 'uhal'],
  ['bhota', 'ladror'],
  ['bhota', 'balaknath'],
  ['salooni', 'barsar'],
  ['barsar', 'panjgraon'],
  ['sujanpur', 'utpur'],
  ['nadaun', 'bhatta'],
  ['bhatta', 'dhaneta'],
  ['ladror', 'bhoranj'],
];

export function ServiceArea({ onGetQuote }) {
  // Helper to get node coordinates
  const getNode = (id) => mapNodes.find(n => n.id === id);

  return (
    <section className="w-full py-xl bg-surface-container-lowest">
      <div className="max-w-[1200px] mx-auto px-margin-mobile lg:px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
          
          {/* Left: Map Visual (Neural Network Design) */}
          <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden shadow-2xl h-[450px] md:h-[550px] bg-[#111] flex items-center justify-center border border-outline-variant/10 group">
            
            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-20 transition-transform duration-1000 group-hover:scale-105" style={{
              backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              backgroundPosition: 'center center'
            }}></div>
            
            {/* Glowing Orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px]"></div>
            
            {/* Connecting Lines (SVG Neural Network) */}
            <svg className="absolute inset-0 w-full h-full opacity-40 text-secondary pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              {mapConnections.map(([id1, id2], i) => {
                const n1 = getNode(id1);
                const n2 = getNode(id2);
                if (!n1 || !n2) return null;
                return (
                  <line 
                    key={`${id1}-${id2}`}
                    x1={`${n1.left}%`} 
                    y1={`${n1.top}%`} 
                    x2={`${n2.left}%`} 
                    y2={`${n2.top}%`} 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeDasharray="4 4" 
                    className="animate-pulse" 
                    style={{ animationDelay: `${i * 150}ms` }} 
                  />
                );
              })}
            </svg>

            {/* Render Nodes */}
            {mapNodes.map((node) => (
              <div 
                key={node.id}
                className={`absolute flex flex-col items-center z-20 transition-transform hover:scale-110 cursor-default ${node.isHub ? 'z-30' : ''}`}
                style={{ top: `${node.top}%`, left: `${node.left}%`, transform: 'translate(-50%, -50%)' }}
              >
                {node.isHub ? (
                  <>
                    <div className="relative flex items-center justify-center mb-1">
                      <div className="absolute w-12 h-12 bg-secondary/40 rounded-full animate-ping"></div>
                      <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,165,0,0.6)] z-10 border-2 border-[#111]">
                        <MapPin size={20} className="text-[#111]" />
                      </div>
                    </div>
                    <span className="font-headline-md text-white text-[10px] tracking-widest uppercase bg-secondary/80 backdrop-blur-md px-2 py-0.5 rounded border border-white/20 shadow-lg whitespace-nowrap">
                      {node.name}
                    </span>
                  </>
                ) : (
                  <>
                    <div className="w-2.5 h-2.5 bg-surface rounded-full flex items-center justify-center border border-secondary shadow-lg mb-1">
                      <div className="w-1 h-1 bg-secondary rounded-full"></div>
                    </div>
                    {/* Name always visible, but styled subtly */}
                    <span className="text-white/80 text-[9px] font-medium bg-black/60 px-1.5 py-0.5 rounded backdrop-blur-sm border border-white/10 whitespace-nowrap shadow-sm">
                      {node.name}
                    </span>
                  </>
                )}
              </div>
            ))}

            {/* Edge Fade Overlay */}
            <div className="absolute inset-0 shadow-[inset_0_0_100px_50px_rgba(17,17,17,1)] pointer-events-none"></div>
          </div>
          
          {/* Right: Info */}
          <div className="order-1 lg:order-2">
            <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase mb-xs block">DELIVERY NETWORK</span>
            <h2 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-primary mb-lg">
              Serving Lagdevi &<br/>Nearby Areas
            </h2>
            
            <p className="font-body-md text-body-lg text-on-surface-variant mb-md">
              Our office is located in Lagdevi, serving construction-material requirements across Hamirpur district and all interconnected local areas.
            </p>

            {/* Premium Area Badges */}
            <div className="flex flex-wrap gap-2 mb-xl">
              {mapNodes.map(node => (
                <span key={node.id} className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all cursor-default ${node.isHub ? 'bg-secondary text-on-secondary border-secondary shadow-md' : 'bg-surface text-primary border-outline-variant/30 hover:border-secondary hover:text-secondary hover:shadow-sm'}`}>
                  {node.name.replace(' (Office)', '')}
                </span>
              ))}
            </div>
            
            <div className="flex flex-col gap-sm mb-xl">
              <div className="p-md bg-surface rounded-xl flex items-center gap-md border border-outline-variant/30 hover:border-secondary/30 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <MapPin className="text-secondary flex-shrink-0" size={24} />
                </div>
                <div>
                  <span className="block font-label-md text-label-md text-primary mb-1">Head Office</span>
                  <span className="font-body-md text-sm text-on-surface-variant">Lagdevi, Hamirpur District</span>
                </div>
              </div>
              <div className="p-md bg-surface rounded-xl flex items-center gap-md border border-outline-variant/30 hover:border-secondary/30 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <Map className="text-secondary flex-shrink-0" size={24} />
                </div>
                <div>
                  <span className="block font-label-md text-label-md text-primary mb-1">Local Coverage</span>
                  <span className="font-body-md text-sm text-on-surface-variant">Extensive network across Hamirpur</span>
                </div>
              </div>
              <div className="p-md bg-surface rounded-xl flex items-center gap-md border border-outline-variant/30 hover:border-secondary/30 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <Truck className="text-secondary flex-shrink-0" size={24} />
                </div>
                <div>
                  <span className="block font-label-md text-label-md text-primary mb-1">Delivery Support</span>
                  <span className="font-body-md text-sm text-on-surface-variant">Direct delivery to construction sites</span>
                </div>
              </div>
            </div>

            <Button onClick={onGetQuote} icon={ArrowRight}>
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
