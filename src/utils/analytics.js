// Web Vitals Analytics Utility
export const sendToAnalytics = (metric) => {
  // Mock analytics endpoint - replace with actual analytics service
  const endpoint = '/analytics';
  
  const body = JSON.stringify({
    name: metric.name,
    value: metric.value,
    id: metric.id,
    delta: metric.delta,
    navigationType: metric.navigationType,
  });

  // Use sendBeacon if available, otherwise fetch
  if (navigator.sendBeacon) {
    navigator.sendBeacon(endpoint, body);
  } else {
    fetch(endpoint, { body, method: 'POST', keepalive: true });
  }
};

// Initialize Web Vitals tracking
export const initWebVitals = async () => {
  try {
    const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
    
    getCLS(sendToAnalytics);
    getFID(sendToAnalytics);
    getFCP(sendToAnalytics);
    getLCP(sendToAnalytics);
    getTTFB(sendToAnalytics);
  } catch (error) {
    console.warn('Web Vitals not available:', error);
  }
};
