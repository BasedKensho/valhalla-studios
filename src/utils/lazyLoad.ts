import { lazy } from 'react';

// Utility for consistent lazy loading with loading states
export function lazyImport(factory: () => Promise<{ default: any }>, name: string) {
  return lazy(async () => {
    const module = await factory();
    return { default: module.default };
  });
}

// Preload critical components
export function preloadComponent(component: string) {
  const componentMap: { [key: string]: () => Promise<any> } = {
    Hero: () => import('../components/Hero'),
    Navbar: () => import('../components/Navbar'),
    Footer: () => import('../components/Footer')
  };

  if (componentMap[component]) {
    componentMap[component]();
  }
}