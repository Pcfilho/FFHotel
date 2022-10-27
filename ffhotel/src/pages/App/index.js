import React from 'react';
import './styles.css';
import AppRoutes from '../../routes/routes';
import { BrowserRouter } from 'react-router-dom';

export function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

