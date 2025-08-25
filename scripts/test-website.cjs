#!/usr/bin/env node

/**
 * Website Test Suite
 * 
 * Simple validation tests for the website
 */

console.log('🚀 Starting website test suite...\n');

// Diagnostic logging
console.log('🔍 DIAGNOSTIC INFORMATION:');
console.log('==========================');
console.log(`Node.js version: ${process.version}`);
console.log(`Platform: ${process.platform}`);
console.log(`Architecture: ${process.arch}`);
console.log(`Current directory: ${process.cwd()}`);
console.log(`Environment: ${process.env.NODE_ENV || 'not set'}`);
console.log(`CI environment: ${process.env.CI ? 'YES' : 'NO'}`);
console.log(`GitHub Actions: ${process.env.GITHUB_ACTIONS ? 'YES' : 'NO'}`);
console.log('');

// Check file system
console.log('📁 FILE SYSTEM DIAGNOSTICS:');
console.log('===========================');
const fs = require('fs');
const path = require('path');

try {
  console.log('Checking current directory contents:');
  const currentDir = fs.readdirSync('.');
  console.log(`Files in current directory: ${currentDir.length}`);
  currentDir.forEach(file => {
    const stats = fs.statSync(file);
    console.log(`  - ${file} (${stats.isDirectory() ? 'dir' : 'file'})`);
  });
  console.log('');

  console.log('Checking package.json:');
  const packagePath = path.resolve(__dirname, '../package.json');
  console.log(`Package.json path: ${packagePath}`);
  console.log(`Package.json exists: ${fs.existsSync(packagePath)}`);
  if (fs.existsSync(packagePath)) {
    const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    console.log(`Package name: ${pkg.name}`);
    console.log(`Package version: ${pkg.version}`);
    console.log(`Scripts available: ${Object.keys(pkg.scripts || {}).join(', ')}`);
  }
  console.log('');

  console.log('Checking src directory:');
  const srcPath = path.resolve(__dirname, '../src');
  console.log(`Src path: ${srcPath}`);
  console.log(`Src exists: ${fs.existsSync(srcPath)}`);
  if (fs.existsSync(srcPath)) {
    const srcFiles = fs.readdirSync(srcPath);
    console.log(`Src files: ${srcFiles.join(', ')}`);
  }
  console.log('');

  console.log('Checking node_modules:');
  const nodeModulesPath = path.resolve(__dirname, '../node_modules');
  console.log(`node_modules path: ${nodeModulesPath}`);
  console.log(`node_modules exists: ${fs.existsSync(nodeModulesPath)}`);
  if (fs.existsSync(nodeModulesPath)) {
    const nodeModules = fs.readdirSync(nodeModulesPath);
    console.log(`node_modules count: ${nodeModules.length}`);
    console.log(`First 10 node_modules: ${nodeModules.slice(0, 10).join(', ')}`);
  }
  console.log('');

} catch (error) {
  console.error('❌ Error during file system diagnostics:', error.message);
  console.log('');
}

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
      
      console.log(`🔍 Testing package.json at: ${packagePath}`);
      
      if (!fs.existsSync(packagePath)) {
        console.log('❌ Package.json not found');
        throw new Error('package.json not found');
      }
      
      console.log('✅ Package.json found');
      const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
      
      if (!pkg.name) {
        console.log('❌ Package.json missing name field');
        throw new Error('package.json missing name field');
      }
      
      console.log(`✅ Package.json validation passed - name: ${pkg.name}`);
      return true;
    }
  },
  {
    name: 'Source directory exists',
    test: () => {
      const fs = require('fs');
      const path = require('path');
      const srcPath = path.resolve(__dirname, '../src');
      
      console.log(`🔍 Testing src directory at: ${srcPath}`);
      
      if (!fs.existsSync(srcPath)) {
        console.log('❌ src directory not found');
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

console.log('🧪 RUNNING TESTS:');
console.log('=================');

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
console.log('\n📊 Test Results:');
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
