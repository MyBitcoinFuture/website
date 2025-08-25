#!/usr/bin/env node

/**
 * Website Test Suite
 * 
 * Simple validation tests for the website
 */

console.log('🚀 Starting website test suite...\n');

// Simple validation tests
const tests = [
  {
    name: 'Node.js environment',
    test: () => {
      console.log('✅ Node.js environment is available');
      return true;
    }
  },
  {
    name: 'Package.json exists',
    test: () => {
      const fs = require('fs');
      const path = require('path');
      const packagePath = path.resolve(__dirname, '../package.json');
      
      if (!fs.existsSync(packagePath)) {
        throw new Error('package.json not found');
      }
      
      const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
      
      if (!pkg.name) {
        throw new Error('package.json missing name field');
      }
      
      console.log('✅ Package.json validation passed');
      return true;
    }
  },
  {
    name: 'Source directory exists',
    test: () => {
      const fs = require('fs');
      const path = require('path');
      const srcPath = path.resolve(__dirname, '../src');
      
      if (!fs.existsSync(srcPath)) {
        throw new Error('src directory not found');
      }
      
      console.log('✅ Source directory exists');
      return true;
    }
  }
];

// Run tests
let passed = 0;
let failed = 0;

for (const test of tests) {
  try {
    console.log(`🔍 Running: ${test.name}`);
    test.test();
    passed++;
    console.log('');
  } catch (error) {
    failed++;
    console.log(`❌ ${test.name} failed: ${error.message}\n`);
  }
}

// Summary
console.log('📊 Test Results:');
console.log(`✅ Passed: ${passed}`);
console.log(`❌ Failed: ${failed}`);
console.log(`📈 Success Rate: ${Math.round((passed / (passed + failed)) * 100)}%`);

if (failed > 0) {
  console.log('\n❌ Some tests failed');
  process.exit(1);
} else {
  console.log('\n🎉 All tests passed!');
  process.exit(0);
}
