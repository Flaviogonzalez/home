// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css'; // Importa Tailwind CSS
import AppRoutes from './routes';
import { ThemeProvider } from './components/theme-provider';
import { IntersectionProvider } from './contexts/intersection-context';
import { CoreProvider } from './contexts/core-context';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <CoreProvider>
          <IntersectionProvider>
            <AppRoutes />
          </IntersectionProvider>
        </CoreProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
