/**
 * Utility to generate merged ZIP codes file
 * This reads both JSON files and creates the merged output
 */

import * as fs from 'fs';
import * as path from 'path';

// Import both datasets
import existingZips from '../src/data/zipServiceList.json';
import newZipsData from '../user-uploads-temp/dnt_service_zips.json';

// Day mapping
const dayMap: Record<string, string> = {
  'Mon': 'MON',
  'Tue': 'TUE',
  'Wed': 'WED',
  'Thu': 'THU',
  'Fri': 'FRI',
  'Sat': 'SAT',
  'Sun': 'SUN'
};

interface ZipEntry {
  zone: string;
  city: string;
  delivery_days: string;
}

interface NewZipData {
  days: string[];
  city?: string;
  meta?: {
    ZONE?: string;
    CITY?: string;
  };
}

// Start with existing data
const mergedData: Record<string, ZipEntry> = { ...existingZips };

let addedCount = 0;
let updatedCount = 0;

// Process new ZIP codes from by_zip section
const newZips = (newZipsData as any).by_zip as Record<string, NewZipData>;

Object.entries(newZips).forEach(([zip, data]) => {
  const transformedEntry: ZipEntry = {
    zone: data.meta?.ZONE || 'Unknown',
    city: data.city || data.meta?.CITY || 'Unknown',
    delivery_days: data.days.map(day => dayMap[day] || day.toUpperCase()).join(',')
  };

  if (mergedData[zip]) {
    updatedCount++;
  } else {
    addedCount++;
  }

  mergedData[zip] = transformedEntry;
});

// Write the merged data
const outputPath = path.join(__dirname, '../src/data/zipServiceList.json');
fs.writeFileSync(outputPath, JSON.stringify(mergedData, null, 2), 'utf-8');

console.log('✅ ZIP Code merge complete!');
console.log(`   Added: ${addedCount} new ZIPs`);
console.log(`   Updated: ${updatedCount} existing ZIPs`);
console.log(`   Total: ${Object.keys(mergedData).length} ZIPs`);

export {};
