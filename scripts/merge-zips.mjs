#!/usr/bin/env node
/**
 * One-time script to merge new ZIP codes with existing ones
 * Run with: node scripts/merge-zips.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔄 Starting ZIP code merge...\n');

// Read existing data
const existingPath = path.join(__dirname, '../src/data/zipServiceList.json');
const existingData = JSON.parse(fs.readFileSync(existingPath, 'utf-8'));
console.log(`✓ Loaded ${Object.keys(existingData).length} existing ZIP codes`);

// Read new data
const newPath = path.join(__dirname, '../user-uploads-temp/dnt_service_zips.json');
const newDataFile = JSON.parse(fs.readFileSync(newPath, 'utf-8'));
const newData = newDataFile.by_zip;
console.log(`✓ Loaded ${Object.keys(newData).length} new ZIP codes\n`);

// Day mapping for transformation
const dayMap = {
  'Mon': 'MON',
  'Tue': 'TUE', 
  'Wed': 'WED',
  'Thu': 'THU',
  'Fri': 'FRI',
  'Sat': 'SAT',
  'Sun': 'SUN'
};

// Merge data
let addedCount = 0;
let updatedCount = 0;

Object.entries(newData).forEach(([zip, data]) => {
  const transformedEntry = {
    zone: data.meta?.ZONE || 'Unknown',
    city: data.city || 'Unknown',
    delivery_days: data.days.map(day => dayMap[day] || day.toUpperCase()).join(',')
  };
  
  if (existingData[zip]) {
    updatedCount++;
  } else {
    addedCount++;
  }
  
  existingData[zip] = transformedEntry;
});

// Write merged data
fs.writeFileSync(existingPath, JSON.stringify(existingData, null, 2), 'utf-8');

console.log('✅ Merge complete!\n');
console.log(`📊 Summary:`);
console.log(`   - New ZIP codes added: ${addedCount}`);
console.log(`   - Existing ZIP codes updated: ${updatedCount}`);
console.log(`   - Total ZIP codes in database: ${Object.keys(existingData).length}\n`);
console.log(`✓ Updated file: ${existingPath}`);
