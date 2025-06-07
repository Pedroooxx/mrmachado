"use client";

import { ReactNode } from "react";

interface WhatsAppButtonProps {
  message: string;
  source: string;
  children: ReactNode;
  className?: string;
}

export default function WhatsAppButton({ message, source, children, className = "" }: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5543998088888";
    const encodedMessage = encodeURIComponent(`${message}\n\n*Origem:* ${source}`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Track the click (for future analytics)
    if (typeof window !== 'undefined') {
      console.log(`WhatsApp click from: ${source}`);
      // Here you would send analytics data to your backend
    }
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button 
      onClick={handleWhatsAppClick}
      className={className}
    >
      {children}
    </button>
  );
}