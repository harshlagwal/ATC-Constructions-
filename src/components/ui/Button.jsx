import React from 'react';

export function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon: Icon, 
  onClick, 
  href, 
  type = 'button' 
}) {
  const baseClasses = "inline-flex items-center gap-xs px-lg py-sm font-label-md text-label-md rounded transition-all active:scale-95";
  
  const variants = {
    primary: "bg-secondary text-on-secondary shadow-lg shadow-secondary/20 hover:bg-secondary-container hover:text-on-secondary-container hover:scale-105",
    secondary: "bg-surface-container/10 backdrop-blur-md border border-on-primary/20 text-on-primary hover:bg-surface-container/20",
    outline: "border border-outline-variant text-primary hover:border-secondary hover:text-secondary",
    ghost: "text-secondary hover:text-on-secondary-container hover:-translate-y-1"
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {Icon && <Icon size={20} />}
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {Icon && <Icon size={20} />}
      {children}
    </button>
  );
}
