#!/usr/bin/env node

/**
 * Update Version Information Script
 * Updates version.js with latest release information
 */

const fs = require('fs');
const path = require('path');

// Parse command line arguments
const args = process.argv.slice(2);
const options = {};

for (let i = 0; i < args.length; i += 2) {
  if (args[i].startsWith('--')) {
    const key = args[i].slice(2);
    const value = args[i + 1];
    options[key] = value;
  }
}

function updateVersionInfo() {
  console.log('Updating version information...');
  
  const versionFile = path.join(__dirname, '../src/version.js');
  
  if (!fs.existsSync(versionFile)) {
    console.error('Version file not found:', versionFile);
    process.exit(1);
  }
  
  // Read current version info
  let versionContent = fs.readFileSync(versionFile, 'utf8');
  
  // Update version information
  const updates = {
    version: options['release-tag']?.replace('v', '') || '1.0.0',
    releaseName: options['release-name'] || 'Latest Release',
    releaseDate: options['release-date'] || new Date().toISOString().split('T')[0],
    buildDate: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'production'
  };
  
  // Update version content
  versionContent = versionContent.replace(
    /export const version = ['"`][^'"`]*['"`]/,
    `export const version = '${updates.version}'`
  );
  
  versionContent = versionContent.replace(
    /export const releaseName = ['"`][^'"`]*['"`]/,
    `export const releaseName = '${updates.releaseName}'`
  );
  
  versionContent = versionContent.replace(
    /export const releaseDate = ['"`][^'"`]*['"`]/,
    `export const releaseDate = '${updates.releaseDate}'`
  );
  
  versionContent = versionContent.replace(
    /export const buildDate = ['"`][^'"`]*['"`]/,
    `export const buildDate = '${updates.buildDate}'`
  );
  
  // Write updated content
  fs.writeFileSync(versionFile, versionContent);
  
  console.log('✅ Version information updated:');
  console.log(`  Version: ${updates.version}`);
  console.log(`  Release: ${updates.releaseName}`);
  console.log(`  Date: ${updates.releaseDate}`);
}

if (require.main === module) {
  updateVersionInfo();
}

module.exports = { updateVersionInfo }; 