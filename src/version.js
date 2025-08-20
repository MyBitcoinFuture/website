// Version tracking for MyBitcoinFuture website
// This file is updated on each deployment to track version consistency

export const VERSION = {
  version: '1.0.0',
  buildDate: '2025-08-20',
  commitHash: process.env.REACT_APP_COMMIT_HASH || '8977cbe',
  environment: process.env.NODE_ENV || 'development',
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
