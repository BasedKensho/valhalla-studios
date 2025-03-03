import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Performance monitoring
const reportWebVitals = (metric: any) => {
  // You can send the metric to your analytics service here
  console.log(metric);
};

// Create root with concurrent features
const root = createRoot(document.getElementById('root')!);

// Render app with strict mode for development checks
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Report web vitals
reportWebVitals(window.performance);