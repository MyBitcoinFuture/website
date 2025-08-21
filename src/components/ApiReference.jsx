import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';
import CodeBlock from './CodeBlock';

const ApiReference = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Header />
      <main>
        <section className="section-padding" style={{ paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-16)' }}>
          <div className="container-max">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="mb-8">
                <span className="text-white">API Reference</span>
              </h1>
              <p className="text-gray mb-8" style={{ fontSize: '1.25rem', maxWidth: '64rem', margin: '0 auto 2rem', lineHeight: '1.6' }}>
                Complete REST API documentation for the MyBitcoinFuture Treasury Management System.
              </p>
            </div>

            {/* API Overview */}
            <div className="card mb-20">
              <h2 className="text-3xl font-bold text-white mb-8">API Overview</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center">
                  <h3 className="text-lg font-semibold text-white mb-2">Base URL</h3>
                  <p className="text-orange-400 font-mono">http://localhost:3100</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center">
                  <h3 className="text-lg font-semibold text-white mb-2">Version</h3>
                  <p className="text-orange-400 font-mono">1.0.0</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center">
                  <h3 className="text-lg font-semibold text-white mb-2">Authentication</h3>
                  <p className="text-orange-400 font-mono">Bearer Token (JWT)</p>
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">Quick Start</h3>
                <p className="text-gray-300 mb-4">
                  The MyBitcoinFuture Treasury API provides comprehensive Bitcoin treasury management capabilities 
                  including wallet management, transaction tracking, advanced analytics, and real-time notifications.
                </p>
                <div className="bg-gray-800 p-4 rounded border border-gray-600">
                  <p className="text-sm text-gray-400 mb-2">Example: Get system health</p>
                  <CodeBlock 
                    language="bash"
                    code={`curl -X GET http://localhost:3100/health`}
                  />
                </div>
              </div>
            </div>

            {/* Authentication */}
            <div className="card mb-20" id="authentication">
              <h2 className="text-3xl font-bold text-white mb-8">Authentication</h2>
              
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Login</h3>
                <CodeBlock 
                  language="http"
                  code={`POST /auth/login
Content-Type: application/json

{
  "username": "admin",
  "password": "YOUR_PASSWORD"
}`}
                />
                
                <h4 className="text-lg font-semibold text-white mt-6 mb-3">Response:</h4>
                <CodeBlock 
                  language="json"
                  code={`{
  "token": "YOUR_JWT_TOKEN",
  "user": {
    "id": "YOUR_USER_ID",
    "username": "admin",
    "roles": ["admin"]
  }
}`}
                />
                
                <div className="mt-6 p-4 bg-blue-900/20 border border-blue-700 rounded">
                  <p className="text-blue-300 text-sm">
                    <strong>Usage:</strong> Include the token in the Authorization header for all protected endpoints:
                  </p>
                  <p className="text-orange-400 font-mono text-sm mt-2">
                    Authorization: Bearer YOUR_JWT_TOKEN
                  </p>
                </div>
              </div>
            </div>

            {/* Core Endpoints */}
            <div className="card mb-20">
              <h2 className="text-3xl font-bold text-white mb-8">Core Endpoints</h2>
              
              {/* System Health */}
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8">
                <h3 className="text-xl font-bold text-white mb-4">System Health</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Get System Status</h4>
                  <CodeBlock 
                    language="http"
                    code={`GET /status`}
                  />
                  <h5 className="text-md font-semibold text-white mt-4 mb-2">Response:</h5>
                  <CodeBlock 
                    language="json"
                    code={`{
  "setupNeeded": false
}`}
                  />
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Get System Health</h4>
                  <CodeBlock 
                    language="http"
                    code={`GET /health`}
                  />
                  <h5 className="text-md font-semibold text-white mt-4 mb-2">Response:</h5>
                  <CodeBlock 
                    language="json"
                    code={`{
  "status": "ok",
  "version": "1.0.0",
  "timestamp": "2025-08-20T03:01:15.575Z"
}`}
                  />
                </div>
              </div>

              {/* Wallets */}
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Wallet Management</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">List Wallets</h4>
                    <CodeBlock 
                      language="http"
                      code={`GET /wallets
Authorization: Bearer <token>`}
                    />
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Create Wallet</h4>
                    <CodeBlock 
                      language="http"
                      code={`POST /wallets
Authorization: Bearer <token>
Content-Type: application/json

{
  "xpub": "xpub...",
  "label": "My Wallet",
  "description": "Optional description"
}`}
                    />
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Get Wallet Details</h4>
                    <CodeBlock 
                      language="http"
                      code={`GET /wallets/:id
Authorization: Bearer <token>`}
                    />
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Get Wallet Balance</h4>
                    <CodeBlock 
                      language="http"
                      code={`GET /wallets/:id/balance
Authorization: Bearer <token>`}
                    />
                  </div>
                </div>
              </div>

              {/* Portfolio */}
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Portfolio & Analytics</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Portfolio Overview</h4>
                    <CodeBlock 
                      language="http"
                      code={`GET /portfolio/overview
Authorization: Bearer <token>`}
                    />
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Performance Metrics</h4>
                    <CodeBlock 
                      language="http"
                      code={`GET /portfolio/performance
Authorization: Bearer <token>`}
                    />
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Risk Assessment</h4>
                    <CodeBlock 
                      language="http"
                      code={`GET /portfolio/risk
Authorization: Bearer <token>`}
                    />
                  </div>
                </div>
              </div>

              {/* Advanced Analytics */}
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Advanced Analytics</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Portfolio Metrics</h4>
                    <CodeBlock 
                      language="http"
                      code={`GET /advanced-analytics/portfolio-metrics
Authorization: Bearer <token>
Query Parameters:
- wallets: Comma-separated wallet IDs (optional)`}
                    />
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Risk Analysis</h4>
                    <CodeBlock 
                      language="http"
                      code={`GET /advanced-analytics/risk-analysis
Authorization: Bearer <token>
Query Parameters:
- wallets: Comma-separated wallet IDs (optional)`}
                    />
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Market Trends</h4>
                    <CodeBlock 
                      language="http"
                      code={`GET /advanced-analytics/market-trends
Authorization: Bearer <token>
Query Parameters:
- wallets: Comma-separated wallet IDs (optional)`}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* SDK Examples */}
            <div className="card mb-20" id="sdk-examples">
              <h2 className="text-3xl font-bold text-white mb-8">SDK Examples</h2>
              
              {/* JavaScript/Node.js */}
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8">
                <h3 className="text-xl font-bold text-white mb-4">JavaScript/Node.js</h3>
                <CodeBlock 
                  language="javascript"
                  code={`const axios = require('axios');

class MyBitcoinFutureClient {
  constructor(baseURL, token) {
    this.client = axios.create({
      baseURL,
      headers: {
        'Authorization': \`Bearer \${token}\`,
        'Content-Type': 'application/json'
      }
    });
  }

  async getPortfolioMetrics(wallets = []) {
    const params = wallets.length > 0 ? { wallets: wallets.join(',') } : {};
    const response = await this.client.get('/advanced-analytics/portfolio-metrics', { params });
    return response.data;
  }

  async getRiskAnalysis(wallets = []) {
    const params = wallets.length > 0 ? { wallets: wallets.join(',') } : {};
    const response = await this.client.get('/advanced-analytics/risk-analysis', { params });
    return response.data;
  }

  async getMarketTrends(wallets = []) {
    const params = wallets.length > 0 ? { wallets: wallets.join(',') } : {};
    const response = await this.client.get('/advanced-analytics/market-trends', { params });
    return response.data;
  }
}

// Usage
const client = new MyBitcoinFutureClient('http://localhost:3100', 'your-token');
const metrics = await client.getPortfolioMetrics(['wallet1', 'wallet2']);
console.log(metrics);`}
                />
              </div>

              {/* Python */}
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Python</h3>
                <CodeBlock 
                  language="python"
                  code={`import requests

class MyBitcoinFutureClient:
    def __init__(self, base_url, token):
        self.base_url = base_url
        self.headers = {
            'Authorization': f'Bearer {token}',
            'Content-Type': 'application/json'
        }
    
    def get_portfolio_metrics(self, wallets=None):
        params = {'wallets': ','.join(wallets)} if wallets else {}
        response = requests.get(
            f'{self.base_url}/advanced-analytics/portfolio-metrics',
            headers=self.headers,
            params=params
        )
        return response.json()
    
    def get_risk_analysis(self, wallets=None):
        params = {'wallets': ','.join(wallets)} if wallets else {}
        response = requests.get(
            f'{self.base_url}/advanced-analytics/risk-analysis',
            headers=self.headers,
            params=params
        )
        return response.json()

# Usage
client = MyBitcoinFutureClient('http://localhost:3100', 'your-token')
metrics = client.get_portfolio_metrics(['wallet1', 'wallet2'])
print(metrics)`}
                />
              </div>
            </div>

            {/* WebSocket API */}
            <div className="card mb-20" id="websocket">
              <h2 className="text-3xl font-bold text-white mb-8">WebSocket API</h2>
              
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">Real-time Notifications</h3>
                <p className="text-gray-300 mb-4">
                  The WebSocket API provides real-time notifications for portfolio updates, 
                  transaction alerts, and system events.
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Connection</h4>
                  <CodeBlock 
                    language="javascript"
                    code={`const ws = new WebSocket('ws://localhost:3100/ws');

ws.onopen = function() {
  console.log('Connected to WebSocket');
  // Authenticate
  ws.send(JSON.stringify({
    type: 'auth',
    token: 'your-jwt-token'
  }));
};

ws.onmessage = function(event) {
  const data = JSON.parse(event.data);
  console.log('Received:', data);
};`}
                  />
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Event Types</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="text-md font-semibold text-white mb-2">Portfolio Update</h5>
                      <CodeBlock 
                        language="json"
                        code={`{
  "type": "portfolio_update",
  "data": {
    "total_balance": 2.5,
    "total_value_usd": 107400,
    "change_24h": 3.2
  },
  "timestamp": "2025-08-20T03:01:15.575Z"
}`}
                      />
                    </div>
                    
                    <div>
                      <h5 className="text-md font-semibold text-white mb-2">Transaction Alert</h5>
                      <CodeBlock 
                        language="json"
                        code={`{
  "type": "transaction_alert",
  "alert": {
    "type": "incoming_transaction",
    "severity": "INFO",
    "wallet_id": "wallet_123",
    "amount": 0.5,
    "txid": "abc123..."
  },
  "timestamp": "2025-08-20T03:01:15.575Z"
}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Changelog */}
            <div className="card mb-20">
              <h2 className="text-3xl font-bold text-white mb-8">Changelog</h2>
              
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">Version 1.0.0 (2025-08-20)</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Initial release</li>
                  <li>• Advanced analytics endpoints</li>
                  <li>• Real-time WebSocket notifications</li>
                  <li>• Comprehensive portfolio management</li>
                  <li>• Bitcoin Core integration</li>
                  <li>• BRK integration</li>
                  <li>• Enhanced security features</li>
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="card max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-6">Ready to Integrate?</h3>
                <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                  Start building with the MyBitcoinFuture Treasury API.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link 
                    to="/getting-started" 
                    style={{
                      background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                      color: '#ffffff',
                      border: '1px solid #f97316',
                      padding: '12px 24px',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: '600',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-1px)';
                      e.target.style.boxShadow = '0 4px 12px rgba(249, 115, 22, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    Get Started
                  </Link>
                  <a 
                    href="https://github.com/MyBitcoinFuture/dashboard/tree/main/docs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    View Technical Docs
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default ApiReference;
