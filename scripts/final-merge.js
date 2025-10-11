const fs = require('fs');
const path = require('path');

// Read existing ZIP codes
const existingPath = path.join(__dirname, '../src/data/zipServiceList.json');
const existingData = JSON.parse(fs.readFileSync(existingPath, 'utf-8'));

// Read new ZIP codes
const newPath = path.join(__dirname, '../src/data/new-zips-temp.json');
const newData = JSON.parse(fs.readFileSync(newPath, 'utf-8'));

// Merge: new data overwrites existing where there are conflicts
const mergedData = { ...existingData, ...newData };

// Count statistics
const existingCount = Object.keys(existingData).length;
const newCount = Object.keys(newData).length;
const mergedCount = Object.keys(mergedData).length;
const added = mergedCount - existingCount;

// Write merged data
fs.writeFileSync(existingPath, JSON.stringify(mergedData, null, 2), 'utf-8');

// Cleanup temp file
fs.unlinkSync(newPath);

console.log('✅ ZIP codes merged successfully!');
console.log(`📊 Statistics:`);
console.log(`   - Existing ZIPs: ${existingCount}`);
console.log(`   - New ZIPs in file: ${newCount}`);
console.log(`   - Net added: ${added}`);
console.log(`   - Total ZIPs: ${mergedCount}`);
console.log(`\n🔍 Testing ZIP 14009:`);

// Test the specific ZIP code
if (mergedData['14009']) {
  console.log(`   ✅ Found: Zone ${mergedData['14009'].zone}, City ${mergedData['14009'].city}, Days: ${mergedData['14009'].delivery_days}`);
} else {
  console.log(`   ❌ NOT FOUND`);
}
