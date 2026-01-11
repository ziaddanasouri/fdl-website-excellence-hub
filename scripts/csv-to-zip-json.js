/**
 * Transform FDL_ZIPS.csv to zipServiceList.json
 * 
 * Run with: node scripts/csv-to-zip-json.js
 * 
 * CSV format: Zone#,Zip,CITY,DELIVERY DAYS
 * Example: BROOKLYN,10301,BROOKLYN,"MON,TUE,WED,THU,FRI"
 */

const fs = require('fs');
const path = require('path');

// Read the CSV file
const csvPath = path.join(__dirname, '../src/data/FDL_ZIPS.csv');
const outputPath = path.join(__dirname, '../src/data/zipServiceList.json');

const csvContent = fs.readFileSync(csvPath, 'utf8');
const lines = csvContent.split('\n');

// Helper function to convert to title case
function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Parse CSV and transform to object format
const zipObject = {};

// Skip header line (line 0)
for (let i = 1; i < lines.length; i++) {
  const line = lines[i].trim();
  if (!line) continue;

  // Parse CSV line with proper quote handling
  const parts = [];
  let current = '';
  let inQuotes = false;
  
  for (let j = 0; j < line.length; j++) {
    const char = line[j];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      parts.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  parts.push(current.trim());

  if (parts.length < 4) continue;

  const [zone, zip, city, deliveryDays] = parts;
  
  // Clean up city name (remove trailing commas)
  const cleanCity = city.replace(/,\s*$/, '').trim();
  
  // Clean up delivery days: remove spaces around commas (e.g., "TUE, THU" -> "TUE,THU")
  const cleanDays = deliveryDays
    .split(',')
    .map(day => day.trim())
    .join(',');

  zipObject[zip] = {
    zone: zone,
    city: toTitleCase(cleanCity),
    delivery_days: cleanDays
  };
}

// Write the output file
const output = JSON.stringify(zipObject, null, 2);
fs.writeFileSync(outputPath, output);

console.log(`✅ Transformed ${Object.keys(zipObject).length} ZIP codes`);
console.log(`📁 Output written to: ${outputPath}`);
