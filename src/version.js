// Version tracking for MyBitcoinFuture website
// This file is updated on each deployment to track version consistency

export const VERSION = {
  version: '1.0.0',
  buildDate: '2025-08-20',
  commitHash: import.meta.env.VITE_COMMIT_HASH || '8977cbe',
  environment: import.meta.env.MODE || 'development',
  lastUpdated: new Date().toISOString(),
  deployedAt: new Date().toISOString()
};

export const getVersionInfo = () => {
  return {
    ...VERSION,
    userAgent: navigator.userAgent,
    timestamp: Date.now()
  };
};

export default VERSION;
