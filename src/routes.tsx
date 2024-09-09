// src/routes.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from './views/Index';


const AppRoutes: React.FC = () => {
  return (
    <Routes>
        {/**
         * Add your routes here.
         * For example:
         * <Route path="/" element={<Home />} />
         */}

         <Route path='/' element={<Index/>} />
    </Routes>
  );
};

export default AppRoutes;
