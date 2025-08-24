import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';
import CodeBlock from './CodeBlock';
import Breadcrumbs from './ui/Breadcrumbs';

const ApiReference = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Header />
      <main>
        <section className="section-padding" style={{ paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-16)' }}>
          <div className="container-max">
            {/* Breadcrumbs */}
            <Breadcrumbs items={[{ name: 'API Reference' }]} />
            
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="mb-8">
                <span className="text-white">API Reference</span>
              </h1>
              <p className="text-gray mb-8" style={{ fontSize: '1.25rem', maxWidth: '64rem', margin: '0 auto 2rem', lineHeight: '1.6' }}>
                Comprehensive Bitcoin treasury management API with enterprise-grade performance optimization, intelligent caching, and batch processing capabilities.
              </p>
            </div>

            {/* API Overview */}
            <div className="card mb-20">
              <h2 className="text-3xl font-bold text-white mb-8">API Overview</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 text-center">
                  <h3 className="text-lg font-semibold text-white mb-2">Base URL</h3>
                  <p className="text-gray-300 text-sm">http://localhost:3100</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 text-center">
                  <h3 className="text-lg font-semibold text-white mb-2">Version</h3>
                  <p className="text-gray-300 text-sm">2.0.0</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 text-center">
                  <h3 className="text-lg font-semibold text-white mb-2">Authentication</h3>
                  <p className="text-gray-300 text-sm">Bearer Token (JWT)</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 text-center">
                  <h3 className="text-lg font-semibold text-white mb-2">Format</h3>
                  <p className="text-gray-300 text-sm">JSON</p>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">🚀 Performance Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="text-gray-300 space-y-2">
                    <li>• Intelligent Caching: LRU cache with 70-80% performance improvement</li>
                    <li>• Batch Processing: Parallel validation and processing</li>
                  </ul>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Auto-Optimization: Dynamic performance tuning</li>
                    <li>• Real-time Metrics: Comprehensive performance monitoring</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Authentication */}
            <div className="card mb-20">
              <h2 className="text-3xl font-bold text-white mb-8">Authentication</h2>
              
              <div className="space-y-8">
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Login</h3>
                  <CodeBlock language="http">
{`POST /auth/login
Content-Type: application/json

{
  "username": "admin",
  "password": "YOUR_PASSWORD"
}`}
                  </CodeBlock>
                  
                  <h4 className="text-lg font-semibold text-white mt-6 mb-3">Response:</h4>
                  <CodeBlock language="json">
{`{
  "token": "YOUR_JWT_TOKEN",
  "user": {
    "id": "YOUR_USER_ID",
    "username": "admin",
    "roles": ["admin"]
  }
}`}
                  </CodeBlock>
                  
                  <h4 className="text-lg font-semibold text-white mt-6 mb-3">Usage:</h4>
                  <p className="text-gray-300 mb-3">Include the token in the Authorization header for all protected endpoints:</p>
                  <CodeBlock language="http">
{`Authorization: Bearer YOUR_JWT_TOKEN`}
                  </CodeBlock>
                </div>
              </div>
            </div>

            {/* Core Endpoints */}
            <div className="card mb-20">
              <h2 className="text-3xl font-bold text-white mb-8">Core Endpoints</h2>
              
              <div className="space-y-8">
                {/* System Health */}
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">System Health</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Get System Status</h4>
                      <CodeBlock language="http">
{`GET /status`}
                      </CodeBlock>
                      <h5 className="text-md font-semibold text-white mt-4 mb-2">Response:</h5>
                      <CodeBlock language="json">
{`{
  "setupNeeded": false
}`}
                      </CodeBlock>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Get System Health</h4>
                      <CodeBlock language="http">
{`GET /health`}
                      </CodeBlock>
                      <h5 className="text-md font-semibold text-white mt-4 mb-2">Response:</h5>
                      <CodeBlock language="json">
{`{
  "status": "ok",
  "version": "1.0.0",
  "timestamp": "2025-08-20T03:01:15.575Z"
}`}
                      </CodeBlock>
                    </div>
                  </div>
                </div>

                {/* User Management */}
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">User Management</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Get Users</h4>
                      <CodeBlock language="http">
{`GET /users?limit=20&offset=0&role=admin&status=active&search=john
Authorization: Bearer <token>`}
                      </CodeBlock>
                      
                      <h5 className="text-md font-semibold text-white mt-4 mb-2">Query Parameters:</h5>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        <li>• <code className="bg-gray-700 px-1 rounded">limit</code> (optional): Number of users to return (1-100, default: 20)</li>
                        <li>• <code className="bg-gray-700 px-1 rounded">offset</code> (optional): Number of users to skip (default: 0)</li>
                        <li>• <code className="bg-gray-700 px-1 rounded">role</code> (optional): Filter by user role</li>
                        <li>• <code className="bg-gray-700 px-1 rounded">status</code> (optional): Filter by user status</li>
                        <li>• <code className="bg-gray-700 px-1 rounded">search</code> (optional): Search in username and email</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Wallet Management */}
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Wallet Management</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Get Wallets</h4>
                      <CodeBlock language="http">
{`GET /wallets?limit=20&offset=0&status=active&search=main
Authorization: Bearer <token>`}
                      </CodeBlock>
                      
                      <h5 className="text-md font-semibold text-white mt-4 mb-2">Query Parameters:</h5>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        <li>• <code className="bg-gray-700 px-1 rounded">limit</code> (optional): Number of wallets to return (1-100, default: 20)</li>
                        <li>• <code className="bg-gray-700 px-1 rounded">offset</code> (optional): Number of wallets to skip (default: 0)</li>
                        <li>• <code className="bg-gray-700 px-1 rounded">status</code> (optional): Filter by wallet status</li>
                        <li>• <code className="bg-gray-700 px-1 rounded">search</code> (optional): Search in wallet name and label</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Create Wallet</h4>
                      <CodeBlock language="http">
{`POST /wallets
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Main Treasury Wallet",
  "xpub": "xpub...",
  "label": "Primary treasury wallet",
  "description": "Main treasury wallet for organization funds"
}`}
                      </CodeBlock>
                    </div>
                  </div>
                </div>

                {/* Transaction Management */}
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Transaction Management</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Get Transactions</h4>
                      <CodeBlock language="http">
{`GET /transactions?limit=50&offset=0&wallet_id=123&type=received&min_amount=0.001&max_amount=1.0&start_date=2025-01-01&end_date=2025-12-31
Authorization: Bearer <token>`}
                      </CodeBlock>
                      
                      <h5 className="text-md font-semibold text-white mt-4 mb-2">Query Parameters:</h5>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        <li>• <code className="bg-gray-700 px-1 rounded">limit</code> (optional): Number of transactions to return (1-1000, default: 50)</li>
                        <li>• <code className="bg-gray-700 px-1 rounded">offset</code> (optional): Number of transactions to skip (default: 0)</li>
                        <li>• <code className="bg-gray-700 px-1 rounded">wallet_id</code> (optional): Filter by wallet ID</li>
                        <li>• <code className="bg-gray-700 px-1 rounded">type</code> (optional): Filter by transaction type (sent/received)</li>
                        <li>• <code className="bg-gray-700 px-1 rounded">min_amount</code> (optional): Minimum transaction amount in BTC</li>
                        <li>• <code className="bg-gray-700 px-1 rounded">max_amount</code> (optional): Maximum transaction amount in BTC</li>
                        <li>• <code className="bg-gray-700 px-1 rounded">start_date</code> (optional): Start date filter (YYYY-MM-DD)</li>
                        <li>• <code className="bg-gray-700 px-1 rounded">end_date</code> (optional): End date filter (YYYY-MM-DD)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Portfolio Analytics */}
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Portfolio Analytics</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Get Portfolio Overview</h4>
                      <CodeBlock language="http">
{`GET /portfolio/overview
Authorization: Bearer <token>`}
                      </CodeBlock>
                      
                      <h5 className="text-md font-semibold text-white mt-4 mb-2">Response:</h5>
                      <CodeBlock language="json">
{`{
  "success": true,
  "data": {
    "total_balance": 12.5,
    "total_value_usd": 750000,
    "wallet_count": 5,
    "transaction_count": 1250,
    "performance_24h": 2.5,
    "performance_7d": 8.2,
    "performance_30d": 15.7
  }
}`}
                      </CodeBlock>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Get Performance Metrics</h4>
                      <CodeBlock language="http">
{`GET /portfolio/performance?period=30d&wallet_id=123
Authorization: Bearer <token>`}
                      </CodeBlock>
                      
                      <h5 className="text-md font-semibold text-white mt-4 mb-2">Query Parameters:</h5>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        <li>• <code className="bg-gray-700 px-1 rounded">period</code> (optional): Time period (1d, 7d, 30d, 90d, 1y, default: 30d)</li>
                        <li>• <code className="bg-gray-700 px-1 rounded">wallet_id</code> (optional): Specific wallet ID for analysis</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Error Handling */}
            <div className="card mb-20">
              <h2 className="text-3xl font-bold text-white mb-8">Error Handling</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Standard Error Response</h3>
                  <CodeBlock language="json">
{`{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input parameters",
    "details": {
      "field": "xpub",
      "issue": "Invalid extended public key format"
    }
  },
  "version": "2.0.0"
}`}
                  </CodeBlock>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Common Error Codes</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Authentication Errors</h4>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        <li>• <code className="bg-gray-700 px-1 rounded">UNAUTHORIZED</code>: Invalid or missing token</li>
                        <li>• <code className="bg-gray-700 px-1 rounded">FORBIDDEN</code>: Insufficient permissions</li>
                        <li>• <code className="bg-gray-700 px-1 rounded">TOKEN_EXPIRED</code>: JWT token has expired</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Validation Errors</h4>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        <li>• <code className="bg-gray-700 px-1 rounded">VALIDATION_ERROR</code>: Invalid input parameters</li>
                        <li>• <code className="bg-gray-700 px-1 rounded">MISSING_REQUIRED</code>: Required field missing</li>
                        <li>• <code className="bg-gray-700 px-1 rounded">INVALID_FORMAT</code>: Invalid data format</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Resource Errors</h4>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        <li>• <code className="bg-gray-700 px-1 rounded">NOT_FOUND</code>: Resource not found</li>
                        <li>• <code className="bg-gray-700 px-1 rounded">ALREADY_EXISTS</code>: Resource already exists</li>
                        <li>• <code className="bg-gray-700 px-1 rounded">CONFLICT</code>: Resource conflict</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">System Errors</h4>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        <li>• <code className="bg-gray-700 px-1 rounded">INTERNAL_ERROR</code>: Internal server error</li>
                        <li>• <code className="bg-gray-700 px-1 rounded">SERVICE_UNAVAILABLE</code>: Service temporarily unavailable</li>
                        <li>• <code className="bg-gray-700 px-1 rounded">RATE_LIMITED</code>: Rate limit exceeded</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rate Limiting */}
            <div className="card mb-20">
              <h2 className="text-3xl font-bold text-white mb-8">Rate Limiting</h2>
              
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">Rate Limit Headers</h3>
                <p className="text-gray-300 mb-4">The API implements rate limiting to ensure fair usage and system stability.</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Response Headers</h4>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• <code className="bg-gray-700 px-1 rounded">X-RateLimit-Limit</code>: Maximum requests per window</li>
                      <li>• <code className="bg-gray-700 px-1 rounded">X-RateLimit-Remaining</code>: Remaining requests in current window</li>
                      <li>• <code className="bg-gray-700 px-1 rounded">X-RateLimit-Reset</code>: Time when the rate limit resets (Unix timestamp)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Default Limits</h4>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• <strong>Authenticated users:</strong> 1000 requests per hour</li>
                      <li>• <strong>Admin users:</strong> 5000 requests per hour</li>
                      <li>• <strong>Unauthenticated:</strong> 100 requests per hour</li>
                    </ul>
                  </div>
                </div>
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
                    to="/quick-start" 
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
                  <Link 
                    to="/system-overview" 
                    className="btn-secondary"
                  >
                    System Overview
                  </Link>
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
