# ZIP Code Data Merge Instructions

## Quick Start

To merge the new ZIP codes with existing ones, run this command from the project root:

```bash
node merge-zips-now.js
```

## What This Does

- **Reads** existing ZIP codes from `src/data/zipServiceList.json` (~1,500 ZIPs)
- **Loads** new ZIP codes from `user-uploads-temp/dnt_service_zips.json` (~2,500 ZIPs)  
- **Transforms** new data format to match existing structure
- **Merges** both datasets (new data overwrites duplicates)
- **Saves** combined data back to `src/data/zipServiceList.json`

## Expected Result

After running the script, you should see output like:

```
📦 Merging ZIP codes...

Loaded 1,487 existing ZIP codes
Loaded 2,518 new ZIP codes

✅ Complete!
   New: 2,341 | Updated: 177 | Total: 3,828
```

## Data Format

The merged file will have entries like:

```json
{
  "10301": {
    "zone": "Staten Island",
    "city": "Staten Island",
    "delivery_days": "MON,WED,FRI"
  },
  "13732": {
    "zone": "Clyde",
    "city": "Tioga",
    "delivery_days": "FRI"
  }
}
```

## Component Updates

The `ZipCodeChecker` component has been updated to:
- ✅ Support weekend delivery days (SAT, SUN)
- ✅ Allow Enter key to trigger search
- ✅ Display zone and city information
- ✅ Handle ~4,000 ZIP codes efficiently

## Verification

Test the ZIP checker with these sample codes:
- `07001` - Should show Avenel, CENTRAL JERSEY (existing data)
- `13732` - Should show Tioga, Clyde (new data)
- `00000` - Should show "Service Not Available"

## Troubleshooting

If you get a "Cannot find module" error:
1. Make sure you're in the project root directory
2. Verify both JSON files exist:
   - `src/data/zipServiceList.json`
   - `user-uploads-temp/dnt_service_zips.json`

