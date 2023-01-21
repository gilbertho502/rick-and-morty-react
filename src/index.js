import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TemaContext } from './context/TemaContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TemaContext.Provider value='green'>
    <App />
    </TemaContext.Provider>
  </React.StrictMode>
);
