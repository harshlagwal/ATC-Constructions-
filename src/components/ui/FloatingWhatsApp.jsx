import React from 'react';
import { businessConfig } from '../../config/business';

const WhatsAppIcon = ({ size = 64, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 32 32" 
    width={size} 
    height={size} 
    className={className}
  >
    <path d="M16.002 0a16 16 0 0 0-16 16c0 2.82.732 5.565 2.122 8l-2.096 7.643 7.822-2.052A15.932 15.932 0 0 0 16.002 32c8.837 0 16-7.163 16-16s-7.163-16-16-16z" fill="#25D366"/>
    <path d="M22.997 19.382c-.35-.175-2.072-1.023-2.392-1.14-.32-.117-.554-.175-.788.175-.233.35-.904 1.14-1.108 1.373-.204.234-.408.263-.758.088-1.57-.796-2.826-1.464-3.95-3.376-.296-.503-.008-.737.155-.92.355-.398.54-.51.787-.834.116-.153.058-.292 0-.467-.058-.175-.788-1.9-1.08-2.6-.283-.68-.57-.587-.787-.598-.204-.01-.438-.01-.67-.01-.234 0-.613.088-.934.438-1.282 1.4-1.24 3.498.058 5.674 1.47 2.463 3.612 4.17 6.002 5.15 2.128.87 2.723.95 3.524.846.852-.11 2.072-.847 2.364-1.664.29-.817.29-1.517.204-1.664-.087-.146-.32-.234-.67-.409z" fill="#FFF"/>
  </svg>
);

export function FloatingWhatsApp() {
  const handleClick = () => {
    const msg = encodeURIComponent(
      `Hello ${businessConfig.businessName},\n\nI am visiting your website and would like to know more about your materials and delivery services.`
    );
    window.open(`https://wa.me/${businessConfig.whatsapp}?text=${msg}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="hidden md:flex fixed right-6 bottom-6 z-[100] hover:scale-110 items-center justify-center transition-all duration-300 animate-in slide-in-from-bottom-10 fade-in fill-mode-both drop-shadow-xl"
      style={{ animationDuration: '1s' }}
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon size={44} />
    </button>
  );
}
