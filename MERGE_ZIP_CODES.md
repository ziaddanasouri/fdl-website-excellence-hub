# Merge ZIP Codes - Instructions

## How to Run the Merge Script

To add the 714 new ZIP codes from the CSV file to your existing data:

1. **Run the merge script:**
   ```bash
   node scripts/merge-zip-codes.js
   ```

2. **What it does:**
   - Reads the CSV file with new ZIP codes (714 entries)
   - Transforms the format to match existing JSON structure
   - Converts day names (Fri, Tue, Wed, etc.) to uppercase (FRI, TUE, WED)
   - Removes spaces and quotes from delivery days
   - Merges with existing ZIP codes (~1,200 entries)
   - Saves the combined data to `src/data/zipServiceList.json`

3. **Expected Result:**
   - Total ZIP codes: ~1,914
   - Added: ~714 new ZIPs (Clyde and Albany zones in NY)
   - Updated: Any overlapping ZIPs (if any)
   - All data properly formatted and ready to use

4. **Component Updates:**
   - ✅ ZipCodeChecker now supports SAT/SUN delivery days
   - ✅ Users can press Enter to search
   - ✅ All new ZIP codes will be searchable immediately

## Test the Integration

After running the script, test with these sample ZIP codes:

- **Existing (NJ):** `07001` → Avenel, CENTRAL JERSEY
- **New (Clyde zone):** `13732` → Tioga, Clyde, FRI
- **New (Albany zone):** `12801` → Warren, Albany, WED,THU,FRI
- **Not serviced:** `00000` → Should show "Service Not Available"
