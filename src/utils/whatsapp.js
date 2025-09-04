// WhatsApp Utility with UTM Tracking
export const createWhatsAppLink = (phone = '989900190067', message = '') => {
  // Get UTM parameters from current URL
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get('utm_source') || 'website';
  const utmMedium = urlParams.get('utm_medium') || 'organic';
  const utmCampaign = urlParams.get('utm_campaign') || 'blush_landing';
  
  // Build UTM string
  const utmString = `utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}`;
  
  // Create WhatsApp message with UTM
  const fullMessage = message ? `${message}%0A%0A${utmString}` : utmString;
  
  return `https://wa.me/${phone}?text=${fullMessage}`;
};

// Direct WhatsApp CTA with tracking
export const openWhatsApp = (phone = '989900190067', message = '') => {
  const link = createWhatsAppLink(phone, message);
  window.open(link, '_blank');
};
