const fs = require('fs');
const path = require('path');

// Read CSV file
const csvPath = path.join(__dirname, '../user-uploads-temp/DNT_Express_Zip_Codes_-_DNT_Express_Zip_Codes_1.csv');
const csvContent = fs.readFileSync(csvPath, 'utf-8');

// Read existing JSON
const jsonPath = path.join(__dirname, '../src/data/zipServiceList.json');
const existingData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

// Parse CSV and transform to JSON format
const lines = csvContent.split('\n');
const newData = { ...existingData };

let added = 0;
let updated = 0;
let skipped = 0;

// Skip header line
for (let i = 1; i < lines.length; i++) {
  const line = lines[i].trim();
  if (!line) continue;

  // Parse CSV line (handle quoted fields)
  const regex = /(?:^|,)("(?:[^"]|"")*"|[^,]*)/g;
  const fields = [];
  let match;
  while ((match = regex.exec(line)) !== null) {
    if (match[1]) {
      fields.push(match[1].replace(/^"|"$/g, '').trim());
    }
  }

  if (fields.length < 4) {
    skipped++;
    continue;
  }

  const [zone, zip, city, deliveryDays] = fields;
  
  // Clean and transform delivery days
  // Remove quotes, spaces, and convert to uppercase
  let cleanDays = deliveryDays
    .replace(/"/g, '')
    .replace(/\s+/g, '')
    .split(',')
    .map(day => {
      // Convert day abbreviations to uppercase
      const dayUpper = day.trim().toUpperCase();
      // Handle full names and abbreviations
      if (dayUpper === 'MON' || dayUpper === 'MONDAY') return 'MON';
      if (dayUpper === 'TUE' || dayUpper === 'TUESDAY') return 'TUE';
      if (dayUpper === 'WED' || dayUpper === 'WEDNESDAY') return 'WED';
      if (dayUpper === 'THU' || dayUpper === 'THURSDAY') return 'THU';
      if (dayUpper === 'FRI' || dayUpper === 'FRIDAY') return 'FRI';
      if (dayUpper === 'SAT' || dayUpper === 'SATURDAY') return 'SAT';
      if (dayUpper === 'SUN' || dayUpper === 'SUNDAY') return 'SUN';
      if (dayUpper === 'W') return 'WED';
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
console.log(`   - Skipped: ${skipped} invalid lines`);
console.log(`   - Total ZIPs: ${Object.keys(newData).length}`);
