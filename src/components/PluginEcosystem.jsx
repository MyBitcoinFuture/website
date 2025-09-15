import React from 'react';
import { PLUGIN_PRICING_OPTIMIZED } from '../constants/content';

const PluginEcosystem = () => {
  return (
    <section id="plugin-ecosystem" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-white mb-3 text-3xl font-bold">
            Premium Plugins - Save Thousands Monthly
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Extend your Bitcoin treasury with professional plugins. Each plugin saves you significant time and money compared to building custom solutions.
          </p>
          <div className="mt-4 inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Early Access Pricing - Limited Time
          </div>
        </div>

        {/* Plugin Grid - Optimized for Conversion */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {PLUGIN_PRICING_OPTIMIZED.map((plugin, index) => (
            <div key={index} className={`relative bg-gray-800/50 border rounded-xl p-6 hover:border-primary-400 transition-all duration-300 hover:scale-[1.02] ${plugin.popular ? 'border-primary-500 ring-2 ring-primary-500/20' : 'border-gray-700'}`}>
              {plugin.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-4">
                <h3 className="text-white font-bold text-lg mb-2">{plugin.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{plugin.description}</p>
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 mb-4">
                  <div className="text-green-400 font-semibold text-sm mb-1">💰 {plugin.value}</div>
                  <div className="text-green-300 text-xs">{plugin.savings}</div>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-3xl font-bold text-white">${plugin.price}</span>
                  <span className="text-gray-400 text-sm">/month</span>
                </div>
                <div className="text-xs text-gray-500">Cancel anytime</div>
              </div>

              <div className="mb-6">
                <div className="text-white font-semibold text-sm mb-2">Includes:</div>
                <div className="space-y-1">
                  {plugin.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <span className="text-green-400 mr-2">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200">
                Start Free Trial
              </button>
            </div>
          ))}
        </div>

        {/* Social Proof & Risk Reversal */}
        <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-white mb-2">30-Day</div>
              <div className="text-gray-400 text-sm">Money Back Guarantee</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Support Included</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">$0</div>
              <div className="text-gray-400 text-sm">Setup Fees</div>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-white text-xl font-semibold mb-4">Ready to Scale Your Bitcoin Operations?</h3>
            <p className="text-gray-400 mb-6">
              Join companies already saving thousands monthly with our plugin ecosystem. 
              Start with one plugin or bundle multiple for maximum savings.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn-primary">
              View All Plugins
            </button>
            <button className="btn-secondary">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PluginEcosystem;