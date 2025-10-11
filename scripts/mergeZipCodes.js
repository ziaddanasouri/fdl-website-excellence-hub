// Script to merge new ZIP codes with existing ones
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the existing ZIP service list
const existingData = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../src/data/zipServiceList.json'), 'utf-8')
);

// Read the new ZIP data
const newData = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../user-uploads/dnt_service_zips.json'), 'utf-8')
);

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

// Transform and merge new data from by_zip section
let addedCount = 0;
let updatedCount = 0;

Object.entries(newData.by_zip).forEach(([zip, data]) => {
  const transformedEntry = {
    zone: data.meta?.ZONE || 'Unknown',
    city: data.city || 'Unknown',
    delivery_days: data.days.map(day => dayMap[day]).join(',')
  };
  
  if (existingData[zip]) {
    updatedCount++;
  } else {
    addedCount++;
  }
  
  existingData[zip] = transformedEntry;
});

// Write merged data back to file
fs.writeFileSync(
  path.join(__dirname, '../src/data/zipServiceList.json'),
  JSON.stringify(existingData, null, 2),
  'utf-8'
);

console.log(`✅ Merge complete!`);
console.log(`   - Added: ${addedCount} new ZIP codes`);
console.log(`   - Updated: ${updatedCount} existing ZIP codes`);
console.log(`   - Total ZIP codes: ${Object.keys(existingData).length}`);
