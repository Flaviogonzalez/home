// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css'; // Importa Tailwind CSS
import AppRoutes from './routes';
import { ThemeProvider } from './components/theme-provider';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">      
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
