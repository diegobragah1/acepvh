import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { AppProvider } from './context/AppContext';
import './index.css';
import 'katex/dist/katex.min.css';

interface ErrorBoundaryState {
  hasError: boolean;
  errorMsg: string;
}

class RootErrorBoundary extends React.Component<{ children: React.ReactNode }, ErrorBoundaryState> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, errorMsg: '' };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      errorMsg: error?.message || 'Erro inesperado na renderização.',
    };
  }

  handleResetAndReload = () => {
    window.location.href = window.location.pathname + '?v=' + Date.now();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-2xl border border-red-200 shadow-lg p-6 text-center space-y-4">
            <div className="text-lg font-extrabold text-red-700">
              Recuperação Automática da Plataforma
            </div>
            <p className="text-xs text-slate-600">
              A plataforma encontrou um erro de renderização ({this.state.errorMsg}). Recarregue para tentar novamente. Seu progresso será preservado:
            </p>
            <button
              type="button"
              onClick={this.handleResetAndReload}
              className="px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold shadow transition"
            >
              Recarregar mantendo meu progresso
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

declare global {
  interface Window {
    __ACE_APP_MOUNTED__?: boolean;
  }
}

const rootElement = document.getElementById('root');
if (rootElement && !window.__ACE_APP_MOUNTED__) {
  window.__ACE_APP_MOUNTED__ = true;
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RootErrorBoundary>
        <AppProvider>
          <App />
        </AppProvider>
      </RootErrorBoundary>
    </React.StrictMode>,
  );
}
