#!/usr/bin/env node

/**
 * Website Test Suite
 * 
 * Tests the website build process and validates critical functionality
 */

const fs = require('fs');
const path = require('path');

// Test configuration
const TESTS = {
  packageJson: {
    name: 'Package.json validation',
    test: () => {
      const packagePath = path.resolve(__dirname, '../package.json');
      if (!fs.existsSync(packagePath)) {
        throw new Error('package.json not found');
      }
      
      const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
      
      // Check required fields
      if (!pkg.name) throw new Error('package.json missing name field');
      if (!pkg.scripts) throw new Error('package.json missing scripts field');
      if (!pkg.scripts.build) throw new Error('package.json missing build script');
      
      console.log('✅ Package.json validation passed');
      return true;
    }
  },
  
  sourceFiles: {
    name: 'Source files validation',
    test: () => {
      const srcPath = path.resolve(__dirname, '../src');
      if (!fs.existsSync(srcPath)) {
        throw new Error('src directory not found');
      }
      
      // Check for critical source files
      const criticalFiles = [
        'App.jsx',
        'main.jsx',
        'index.css'
      ];
      
      for (const file of criticalFiles) {
        const filePath = path.join(srcPath, file);
        if (!fs.existsSync(filePath)) {
          throw new Error(`Critical source file missing: ${file}`);
        }
      }
      
      console.log('✅ Source files validation passed');
      return true;
    }
  },
  
  configuration: {
    name: 'Configuration validation',
    test: () => {
      const configFiles = [
        'vite.config.js',
        'tailwind.config.js',
        'postcss.config.js',
        'eslint.config.js'
      ];
      
      for (const file of configFiles) {
        const filePath = path.resolve(__dirname, '..', file);
        if (!fs.existsSync(filePath)) {
          throw new Error(`Configuration file missing: ${file}`);
        }
      }
      
      console.log('✅ Configuration validation passed');
      return true;
    }
  },
  
  dependencies: {
    name: 'Dependencies validation',
    test: () => {
      const packagePath = path.resolve(__dirname, '../package.json');
      const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
      
      // Check for critical dependencies
      const criticalDeps = ['react', 'react-dom', 'vite'];
      for (const dep of criticalDeps) {
        if (!pkg.dependencies[dep] && !pkg.devDependencies[dep]) {
          throw new Error(`Critical dependency missing: ${dep}`);
        }
      }
      
      console.log('✅ Dependencies validation passed');
      return true;
    }
  }
};

// Test runner
async function runTests() {
  console.log('🚀 Starting website test suite...\n');
  
  const results = {
    passed: 0,
    failed: 0,
    errors: []
  };
  
  for (const [testName, testConfig] of Object.entries(TESTS)) {
    try {
      console.log(`🔍 Running: ${testConfig.name}`);
      await testConfig.test();
      results.passed++;
      console.log('');
    } catch (error) {
      results.failed++;
      results.errors.push({
        test: testConfig.name,
        error: error.message
      });
      console.log(`❌ ${testConfig.name} failed: ${error.message}\n`);
    }
  }
  
  // Summary
  console.log('📊 Test Results:');
  console.log(`✅ Passed: ${results.passed}`);
  console.log(`❌ Failed: ${results.failed}`);
  console.log(`📈 Success Rate: ${Math.round((results.passed / (results.passed + results.failed)) * 100)}%`);
  
  if (results.failed > 0) {
    console.log('\n❌ Test failures:');
    results.errors.forEach(({ test, error }) => {
      console.log(`  - ${test}: ${error}`);
    });
    process.exit(1);
  } else {
    console.log('\n🎉 All tests passed!');
    process.exit(0);
  }
}

// Run tests if called directly
if (require.main === module) {
  runTests().catch(error => {
    console.error('❌ Test runner failed:', error.message);
    process.exit(1);
  });
}

module.exports = { runTests };
