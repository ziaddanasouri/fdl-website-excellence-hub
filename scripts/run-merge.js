const fs = require('fs');
const path = require('path');

console.log('🔄 Starting ZIP code merge...\n');

try {
  // Read existing ZIP codes
  const existingPath = path.join(__dirname, '../src/data/zipServiceList.json');
  console.log('📖 Reading existing ZIP codes...');
  const existingData = JSON.parse(fs.readFileSync(existingPath, 'utf-8'));
  const existingCount = Object.keys(existingData).length;
  console.log(`   Found ${existingCount} existing ZIP codes`);

  // Read new ZIP codes
  const newPath = path.join(__dirname, '../src/data/new-zips-temp.json');
  console.log('📖 Reading new ZIP codes...');
  const newData = JSON.parse(fs.readFileSync(newPath, 'utf-8'));
  const newCount = Object.keys(newData).length;
  console.log(`   Found ${newCount} new ZIP codes\n`);

  // Merge: new data overwrites existing where there are conflicts
  console.log('🔀 Merging data...');
  const mergedData = { ...existingData, ...newData };
  const mergedCount = Object.keys(mergedData).length;
  const added = mergedCount - existingCount;

  // Write merged data
  console.log('💾 Writing merged data...');
  fs.writeFileSync(existingPath, JSON.stringify(mergedData, null, 2), 'utf-8');

  // Cleanup temp file
  console.log('🧹 Cleaning up...');
  fs.unlinkSync(newPath);

  console.log('\n✅ ZIP codes merged successfully!');
  console.log(`📊 Statistics:`);
  console.log(`   - Existing ZIPs: ${existingCount}`);
  console.log(`   - New ZIPs in file: ${newCount}`);
  console.log(`   - Net added: ${added}`);
  console.log(`   - Total ZIPs: ${mergedCount}`);
  
  // Test the specific ZIP code
  console.log(`\n🔍 Testing ZIP 14009:`);
  if (mergedData['14009']) {
    console.log(`   ✅ Found!`);
    console.log(`      Zone: ${mergedData['14009'].zone}`);
    console.log(`      City: ${mergedData['14009'].city}`);
    console.log(`      Delivery Days: ${mergedData['14009'].delivery_days}`);
  } else {
    console.log(`   ❌ NOT FOUND`);
  }

  console.log('\n🎉 Merge complete! The ZIP code checker should now recognize all new codes.');
  
} catch (error) {
  console.error('❌ Error during merge:', error.message);
  process.exit(1);
}
