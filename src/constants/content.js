/**
 * Shared Content Constants
 * 
 * Centralized content to eliminate repetition across components
 * and ensure consistent messaging throughout the website.
 */

export const BRAND_MESSAGING = {
  tagline: "The Only Bitcoin Treasury Platform with Institutional-Grade Analytics",
  description: "Deploy your own Bitcoin treasury management system with comprehensive analytics, multi-sig support, and enterprise features. Your keys, your Bitcoin, your control.",
  valueProposition: "Professional Bitcoin treasury management with institutional-grade analytics, marketplace deployment, and enterprise features - all self-hosted."
};

export const SECURITY_FEATURES = {
  xpubOnly: "xpub-only architecture",
  selfHosted: "Self-hosted deployment",
  dataSovereignty: "Complete data sovereignty",
  enterpriseGrade: "Enterprise-grade security"
};

export const CORE_FEATURES = [
  "Multi-wallet architecture",
  "Bitcoin analytics and research",
  "xpub-only security",
  "Self-hosted deployment",
  "Plugin system infrastructure",
  "Basic Lightning integration"
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
    title: "Corporate Bitcoin Treasury",
    description: "Professional Bitcoin treasury management for corporations, funds, and institutions requiring secure, auditable, and scalable Bitcoin operations with comprehensive reporting."
  },
  {
    title: "Bitcoin Research & Analytics", 
    description: "Advanced Bitcoin analytics and research capabilities with institutional-grade data insights, network metrics, and market intelligence for informed decision-making."
  },
  {
    title: "Self-Hosted Bitcoin Infrastructure",
    description: "Complete Bitcoin infrastructure deployment for organizations requiring full control, data sovereignty, and custom security policies for their Bitcoin operations."
  }
];

export const CONTACT_INFO = {
  description: "Get help with MyBitcoinFuture deployment, plugin development, or general questions. Choose the right channel for your inquiry.",
  placeholder: "Tell us about your inquiry, deployment questions, plugin development, or any other questions about MyBitcoinFuture...",
  responseTime: "We typically respond within 24 hours during business days.",
  alternativeContact: "For technical issues, please use GitHub Issues. For security concerns, contact security@mybitcoinfuture.org"
};