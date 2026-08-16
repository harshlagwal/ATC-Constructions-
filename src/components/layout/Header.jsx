import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { businessConfig } from '../../config/business';
import { Button } from '../ui/Button';
import { ATCLogo } from '../ui/ATCLogo';

export function Header({ onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Materials', id: 'materials' },
    { label: 'Services', id: 'services' },
    { label: 'Fleet', id: 'fleet' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition duration-500 pt-safe ${isScrolled ? 'bg-surface/95 backdrop-blur-xl shadow-md border-b border-outline-variant/20' : 'bg-surface/70 backdrop-blur-md border-b border-transparent'}`}
      >
        <div className="h-20 w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between">
          
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <ATCLogo variant="dark" />
          </div>

          <nav className="hidden lg:flex items-center gap-md">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="font-label-md text-label-md transition-colors py-2 text-on-surface-variant hover:text-primary"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-md">
            <Button 
              className="hidden md:flex" 
              onClick={() => handleNavClick('contact')}
            >
              GET A QUOTE
            </Button>
            
            <a href={`tel:${businessConfig.phone}`} className="w-10 h-10 rounded-full flex lg:hidden items-center justify-center transition-colors bg-surface-container text-secondary">
              <Phone size={20} />
            </a>

            <button 
              className="lg:hidden w-10 h-10 flex items-center justify-center transition-colors text-on-surface"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-primary/50 backdrop-blur-sm transition-opacity" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-surface shadow-xl flex flex-col transform transition-transform duration-300">
            <div className="h-20 px-margin-mobile flex items-center justify-between border-b border-outline-variant/30">
              <span className="font-headline-md text-primary">Menu</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 -mr-2 text-on-surface-variant">
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col p-margin-mobile gap-sm overflow-y-auto flex-grow">
              {navLinks.map((link) => (
                <button 
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="w-full text-left font-headline-md text-body-lg py-sm border-b border-outline-variant/10 text-on-surface hover:text-secondary transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="p-margin-mobile border-t border-outline-variant/30 flex flex-col gap-sm">
              <Button onClick={() => handleNavClick('contact')} className="w-full justify-center">
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
