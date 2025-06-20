// types/calendly.d.ts

// Yeh Calendly object ke methods ko describe karta hai
interface Calendly {
    initPopupWidget: (options: { url: string }) => void;
    // Agar Calendly ke aur methods use karoge toh yahan add kar sakte ho
    // initInlineWidget: (options: { url: string; parent: HTMLElement }) => void;
    // closePopupWidget: () => void;
  }
  
  // Global Window object mein Calendly property add karna
  interface Window {
    Calendly: Calendly;
  }
  