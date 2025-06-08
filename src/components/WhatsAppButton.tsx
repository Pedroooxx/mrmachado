"use client";

import { ReactNode } from "react";

interface WhatsAppButtonProps {
  message: string;
  source: string;
  className?: string;
  children: ReactNode;
}

export default function WhatsAppButton({ 
  message, 
  source, 
  className = "", 
  children 
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5543998088888?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}