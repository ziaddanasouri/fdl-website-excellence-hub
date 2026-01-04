/**
 * Transform FDL_ZIPS-2.json from array format to object format
 * Used to generate the new zipServiceList.json
 * 
 * Run with: node scripts/transform-fdl-zips.js
 */

const fs = require('fs');
const path = require('path');

// Read the input file
const inputPath = path.join(__dirname, '../src/data/FDL_ZIPS-2.json');
const outputPath = path.join(__dirname, '../src/data/zipServiceList.json');

const rawData = fs.readFileSync(inputPath, 'utf8');
const zipArray = JSON.parse(rawData);

// Transform to object format
const zipObject = {};

// Helper function to convert to title case
function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

zipArray.forEach(entry => {
  const zip = entry.Zip;
  const zone = entry['Zone#'];
  const city = toTitleCase(entry.CITY);
  // Remove any extra spaces from delivery days
  const deliveryDays = entry['DELIVERY DAYS'].replace(/\s/g, '');
  
  zipObject[zip] = {
    zone: zone,
    city: city,
    delivery_days: deliveryDays
  };
});

// Write the output file
const output = JSON.stringify(zipObject, null, 2);
fs.writeFileSync(outputPath, output);

console.log(`Transformed ${Object.keys(zipObject).length} ZIP codes`);
console.log(`Output written to: ${outputPath}`);
