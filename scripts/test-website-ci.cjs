#!/usr/bin/env node

/**
 * Website CI Test Suite
 * 
 * Minimal test suite specifically designed for CI environment
 */

console.log('🚀 Starting website CI test suite...\n');

// Basic environment validation
const tests = [
  {
    name: 'Node.js environment',
    test: () => {
      console.log(`✅ Node.js version: ${process.version}`);
      console.log(`✅ Platform: ${process.platform}`);
      console.log(`✅ Architecture: ${process.arch}`);
      return true;
    }
  },
  {
    name: 'Working directory',
    test: () => {
      const fs = require('fs');
      const path = require('path');
      
      console.log(`✅ Current directory: ${process.cwd()}`);
      
      // Check if we're in the right place
      const files = fs.readdirSync('.');
      console.log(`✅ Files in directory: ${files.length}`);
      
      if (!files.includes('package.json')) {
        throw new Error('package.json not found in current directory');
      }
      
      return true;
    }
  },
  {
    name: 'Package.json validation',
    test: () => {
      const fs = require('fs');
      const path = require('path');
      
      const packagePath = path.resolve('package.json');
      console.log(`✅ Package.json path: ${packagePath}`);
      
      if (!fs.existsSync(packagePath)) {
        throw new Error('package.json not found');
      }
      
      const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
      console.log(`✅ Package name: ${pkg.name}`);
      console.log(`✅ Package version: ${pkg.version}`);
      
      if (!pkg.name) {
        throw new Error('package.json missing name field');
      }
      
      return true;
    }
  },
  {
    name: 'Source directory',
    test: () => {
      const fs = require('fs');
      const path = require('path');
      
      const srcPath = path.resolve('src');
      console.log(`✅ Source path: ${srcPath}`);
      
      if (!fs.existsSync(srcPath)) {
        throw new Error('src directory not found');
      }
      
      const srcFiles = fs.readdirSync(srcPath);
      console.log(`✅ Source files: ${srcFiles.length}`);
      
      return true;
    }
  },
  {
    name: 'Node modules',
    test: () => {
      const fs = require('fs');
      const path = require('path');
      
      const nodeModulesPath = path.resolve('node_modules');
      console.log(`✅ Node modules path: ${nodeModulesPath}`);
      
      if (!fs.existsSync(nodeModulesPath)) {
        throw new Error('node_modules directory not found');
      }
      
      const nodeModules = fs.readdirSync(nodeModulesPath);
      console.log(`✅ Node modules count: ${nodeModules.length}`);
      
      return true;
    }
  }
];

// Run tests
let passed = 0;
let failed = 0;

console.log('🧪 RUNNING CI TESTS:');
console.log('====================');

for (const test of tests) {
  try {
    console.log(`\n🔍 Running: ${test.name}`);
    test.test();
    passed++;
    console.log(`✅ ${test.name} passed`);
  } catch (error) {
    failed++;
    console.log(`❌ ${test.name} failed: ${error.message}`);
  }
}

// Summary
console.log('\n📊 CI Test Results:');
console.log(`✅ Passed: ${passed}`);
console.log(`❌ Failed: ${failed}`);
console.log(`📈 Success Rate: ${Math.round((passed / (passed + failed)) * 100)}%`);

if (failed > 0) {
  console.log('\n❌ Some CI tests failed');
  process.exit(1);
} else {
  console.log('\n🎉 All CI tests passed!');
  process.exit(0);
}
