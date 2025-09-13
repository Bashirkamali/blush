import { onCLS, onFID, onLCP } from 'web-vitals';

export function initWebVitals(cb = console.log) {
  try { 
    onCLS(cb); 
    onFID(cb); 
    onLCP(cb); 
  } catch {}
}