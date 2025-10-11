#!/usr/bin/env node
/**
 * ═══════════════════════════════════════════════════════
 * ZIP CODE MERGE SCRIPT
 * ═══════════════════════════════════════════════════════
 * 
 * INSTRUCTIONS: Run this file with Node.js:
 *   node RUN_THIS.js
 * 
 * This will merge ~2,500 new ZIP codes with ~1,500 existing
 * ones to create a complete database of ~4,000 service areas.
 * ═══════════════════════════════════════════════════════
 */

const fs = require('fs');

console.log('\n🚀 Starting ZIP Code Merge Process...\n');
console.log('─'.repeat(50));

try {
  // Step 1: Load existing ZIP codes
  console.log('\n📂 Step 1: Loading existing ZIP codes...');
  const existingData = JSON.parse(
    fs.readFileSync('./src/data/zipServiceList.json', 'utf-8')
  );
  const existingCount = Object.keys(existingData).length;
  console.log(`   ✓ Loaded ${existingCount} existing ZIP codes`);

  // Step 2: Load new ZIP codes
  console.log('\n📂 Step 2: Loading new ZIP codes...');
  const newFileData = JSON.parse(
    fs.readFileSync('./user-uploads-temp/dnt_service_zips.json', 'utf-8')
  );
  const newZipData = newFileData.by_zip;
  const newCount = Object.keys(newZipData).length;
  console.log(`   ✓ Loaded ${newCount} new ZIP codes`);

  // Step 3: Transform and merge
  console.log('\n🔄 Step 3: Transforming and merging data...');
  
  const dayMapping = {
    'Mon': 'MON',
    'Tue': 'TUE',
    'Wed': 'WED',
    'Thu': 'THU',
    'Fri': 'FRI',
    'Sat': 'SAT',
    'Sun': 'SUN'
  };

  let addedCount = 0;
  let updatedCount = 0;
  
  Object.entries(newZipData).forEach(([zipCode, data]) => {
    // Transform to match existing format
    const transformedEntry = {
      zone: data.meta?.ZONE || 'Unknown',
      city: data.city || data.meta?.CITY || 'Unknown',
      delivery_days: data.days.map(day => dayMapping[day] || day.toUpperCase()).join(',')
    };
    
    // Track whether this is new or updated
    if (existingData[zipCode]) {
      updatedCount++;
    } else {
      addedCount++;
    }
    
    // Add/update in merged dataset
    existingData[zipCode] = transformedEntry;
  });

  const totalCount = Object.keys(existingData).length;
  
  console.log(`   ✓ Added ${addedCount} new ZIP codes`);
  console.log(`   ✓ Updated ${updatedCount} existing ZIP codes`);
  console.log(`   ✓ Total ZIP codes: ${totalCount}`);

  // Step 4: Save merged data
  console.log('\n💾 Step 4: Saving merged data...');
  fs.writeFileSync(
    './src/data/zipServiceList.json',
    JSON.stringify(existingData, null, 2),
    'utf-8'
  );
  console.log(`   ✓ Saved to: src/data/zipServiceList.json`);

  // Success summary
  console.log('\n' + '═'.repeat(50));
  console.log('✅ MERGE COMPLETE!');
  console.log('═'.repeat(50));
  console.log(`\n📊 Summary:`);
  console.log(`   • Original ZIP codes: ${existingCount}`);
  console.log(`   • New ZIP codes added: ${addedCount}`);
  console.log(`   • ZIP codes updated: ${updatedCount}`);
  console.log(`   • Final total: ${totalCount}`);
  console.log(`\n🎉 Your ZIP code database is now ready!`);
  console.log(`   Test it on the website with these ZIP codes:`);
  console.log(`   • 07001 (existing data)`);
  console.log(`   • 13732 (new data)`);
  console.log(`   • 00000 (should show "not available")\n`);

} catch (error) {
  console.error('\n❌ ERROR:', error.message);
  console.error('\nPlease make sure you are running this from the project root directory.');
  console.error('Both files must exist:');
  console.error('  - src/data/zipServiceList.json');
  console.error('  - user-uploads-temp/dnt_service_zips.json\n');
  process.exit(1);
}
