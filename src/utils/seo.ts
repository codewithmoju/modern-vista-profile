
// Simple utility to update document title dynamically
export const updatePageTitle = (title: string): void => {
  document.title = `${title} | Muhammad Moaiz - React Native Developer`;
};

// Track custom events for Google Analytics
export const trackEvent = (category: string, action: string, label?: string, value?: number): void => {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    const gtag = (window as any).gtag;
    gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};

// Log page views for single page application
export const logPageView = (path: string): void => {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    const gtag = (window as any).gtag;
    gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: path
    });
  }
};
