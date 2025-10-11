// Simple merge script - run with: node merge-zips-now.js
const fs = require('fs');
const path = require('path');

console.log('📦 Merging ZIP codes...\n');

// Read existing zips
const existing = JSON.parse(
  fs.readFileSync('./src/data/zipServiceList.json', 'utf-8')
);
console.log(`Loaded ${Object.keys(existing).length} existing ZIP codes`);

// Read new zips  
const newData = JSON.parse(
  fs.readFileSync('./user-uploads-temp/dnt_service_zips.json', 'utf-8')
);
console.log(`Loaded ${Object.keys(newData.by_zip).length} new ZIP codes\n`);

// Day converter
const dayMap = {
  'Mon': 'MON', 'Tue': 'TUE', 'Wed': 'WED',
  'Thu': 'THU', 'Fri': 'FRI', 'Sat': 'SAT', 'Sun': 'SUN'
};

// Merge
let added = 0, updated = 0;

Object.entries(newData.by_zip).forEach(([zip, data]) => {
  const entry = {
    zone: data.meta?.ZONE || 'Unknown',
    city: data.city || 'Unknown',
    delivery_days: data.days.map(d => dayMap[d]).join(',')
  };
  
  existing[zip] ? updated++ : added++;
  existing[zip] = entry;
});

// Save
fs.writeFileSync(
  './src/data/zipServiceList.json',
  JSON.stringify(existing, null, 2)
);

console.log('✅ Complete!');
console.log(`   New: ${added} | Updated: ${updated} | Total: ${Object.keys(existing).length}`);
