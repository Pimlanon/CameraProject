import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import GlobalStyles from './styles/GlobalStyle.jsx';
import { BarcodeProvider } from './context/BarcodeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <BarcodeProvider>
        <App />
      </BarcodeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
