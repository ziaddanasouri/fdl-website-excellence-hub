const fs = require('fs');
const path = require('path');

// Read existing JSON
const jsonPath = path.join(__dirname, '../src/data/zipServiceList.json');
const existingData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

// Read CSV
const csvPath = path.join(__dirname, '../user-uploads-temp/DNT_Express_Zip_Codes_-_DNT_Express_Zip_Codes_1.csv');
const csvContent = fs.readFileSync(csvPath, 'utf-8');

const lines = csvContent.split('\n');
const newData = { ...existingData };

let added = 0;
let updated = 0;

// Process CSV (skip header line 1)
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
  
  // Transform delivery days: remove quotes, spaces, convert to uppercase
  let cleanDays = deliveryDays
    .replace(/"/g, '')
    .replace(/\s+/g, '')
    .split(',')
    .map(day => {
      const dayUpper = day.trim().toUpperCase();
      // Handle variations
      if (dayUpper === 'MON' || dayUpper === 'MONDAY') return 'MON';
      if (dayUpper === 'TUE' || dayUpper === 'TUESDAY') return 'TUE';
      if (dayUpper === 'WED' || dayUpper === 'WEDNESDAY' || dayUpper === 'W') return 'WED';
      if (dayUpper === 'THU' || dayUpper === 'THURSDAY') return 'THU';
      if (dayUpper === 'FRI' || dayUpper === 'FRIDAY') return 'FRI';
      if (dayUpper === 'SAT' || dayUpper === 'SATURDAY') return 'SAT';
      if (dayUpper === 'SUN' || dayUpper === 'SUNDAY') return 'SUN';
      return dayUpper;
    })
    .filter(day => day.length > 0)
    .join(',');

  const zipCode = zip.trim();
  
  if (newData[zipCode]) {
    updated++;
  } else {
    added++;
  }

  newData[zipCode] = {
    zone: zone.trim(),
    city: city.trim(),
    delivery_days: cleanDays
  };
}

// Write merged data
fs.writeFileSync(jsonPath, JSON.stringify(newData, null, 2), 'utf-8');

console.log('✅ ZIP codes merged successfully!');
console.log(`📊 Statistics:`);
console.log(`   - Added: ${added} new ZIPs`);
console.log(`   - Updated: ${updated} existing ZIPs`);
console.log(`   - Total ZIPs: ${Object.keys(newData).length}`);
