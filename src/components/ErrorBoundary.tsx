import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // In production, you might want to log this to an error reporting service
    if (process.env.NODE_ENV === 'production') {
      // Log to error reporting service here
      console.error('Production error:', {
        error: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack
      });
    }
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4">
          <div className="max-w-lg mx-auto text-center">
            <div className="mb-8">
              <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-brand-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-brand-gray-900 mb-4">
                Something went wrong
              </h1>
              <p className="text-lg text-brand-gray-600 mb-8">
                We're sorry, but something unexpected happened. Please try refreshing the page or return to our homepage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.location.reload()}
                  className="btn-primary"
                >
                  Refresh Page
                </button>
                <Link to="/" className="btn-outline">
                  Go Home
                </Link>
              </div>
            </div>
            
            <div className="bg-brand-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-brand-gray-900 mb-4">
                Need immediate help?
              </h3>
              <div className="space-y-2">
                <a href="tel:(512)240-2246" className="text-brand-azureDark hover:text-brand-azureDark block">
                  Call (512) 240-2246
                </a>
                <a href="mailto:info@hillcopaint.com" className="text-brand-azureDark hover:text-brand-azureDark block">
                  Email info@hillcopaint.com
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;