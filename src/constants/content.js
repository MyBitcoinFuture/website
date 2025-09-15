/**
 * Shared Content Constants
 * 
 * Centralized content to eliminate repetition across components
 * and ensure consistent messaging throughout the website.
 */

export const BRAND_MESSAGING = {
  tagline: "Bitcoin Treasury Management for Everyone",
  description: "Secure, self-hosted Bitcoin management with professional analytics. From individuals to enterprises - your keys, your Bitcoin, your control.",
  valueProposition: "The only self-hosted Bitcoin treasury platform that scales from personal use to enterprise operations with professional-grade security and analytics."
};

export const SECURITY_FEATURES = {
  xpubOnly: "Watch-only architecture (no private keys)",
  selfHosted: "Self-hosted deployment",
  dataSovereignty: "Complete data sovereignty",
  enterpriseGrade: "Enterprise-grade security"
};

export const CORE_FEATURES = [
  "Multiple wallet support",
  "Bitcoin analytics and research",
  "Secure read-only access (no private keys)",
  "Self-hosted deployment",
  "Plugin system infrastructure",
  "Lightning Network integration"
];

export const VALUE_PROPOSITIONS = [
  {
    title: "Complete Control",
    description: "Your keys, your Bitcoin, your infrastructure. No third-party custody risk.",
    icon: "🔐"
  },
  {
    title: "Professional Analytics", 
    description: "Enterprise-grade insights and reporting for informed Bitcoin decisions.",
    icon: "📊"
  },
  {
    title: "Easy Deployment",
    description: "Deploy in minutes on Start9, Umbrel, Docker, or your own server.",
    icon: "🚀"
  },
  {
    title: "Scales With You",
    description: "From personal Bitcoin management to corporate treasury operations.",
    icon: "📈"
  }
];

export const PLUGIN_PRICING = {
  lightning: "$49/month",
  governance: "$99/month", 
  accounting: "$79/month",
  automation: "$59/month",
  branding: "$49/month",
  analytics: "$69/month"
};

export const DEPLOYMENT_OPTIONS = [
  "Docker containers",
  "Platform marketplaces (Start9, Umbrel)",
  "Traditional server deployments"
];

export const USE_CASES = [
  {
    title: "Personal Bitcoin Management",
    description: "Secure Bitcoin storage and management for individuals who want full control over their Bitcoin with professional-grade security, multi-signature wallets, and comprehensive portfolio tracking."
  },
  {
    title: "Small Business Treasury",
    description: "Bitcoin treasury management for small businesses, freelancers, and entrepreneurs requiring secure Bitcoin operations, tax tracking, and professional reporting capabilities."
  },
  {
    title: "Corporate Bitcoin Treasury",
    description: "Enterprise Bitcoin treasury management for corporations, funds, and institutions requiring secure, auditable, and scalable Bitcoin operations with comprehensive reporting."
  },
  {
    title: "Bitcoin Research & Analytics", 
    description: "Advanced Bitcoin analytics and research capabilities with professional-grade data insights, network metrics, and market intelligence for informed decision-making."
  }
];

export const CONTACT_INFO = {
  description: "Get help with MyBitcoinFuture deployment, plugin development, or general questions. Choose the right channel for your inquiry.",
  placeholder: "Tell us about your inquiry, deployment questions, plugin development, or any other questions about MyBitcoinFuture...",
  responseTime: "We typically respond within 24 hours during business days.",
  alternativeContact: "For technical issues, please use GitHub Issues. For security concerns, contact security@mybitcoinfuture.org"
};