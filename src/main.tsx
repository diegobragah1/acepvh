import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProvider } from './context/AppContext';
import { App } from './App';
import './index.css';

declare global {
  interface Window {
    __ACE_APP_MOUNTED__?: boolean;
    APP_DATA?: unknown;
    LOCAL_APP_DATA?: unknown;
  }
}

const rootElement = document.getElementById('root');
if (rootElement && !window.__ACE_APP_MOUNTED__) {
  window.__ACE_APP_MOUNTED__ = true;
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <AppProvider>
        <App />
      </AppProvider>
    </React.StrictMode>
  );
}

