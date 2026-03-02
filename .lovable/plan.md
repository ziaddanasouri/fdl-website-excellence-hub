

## Fix: ZIP 10516 Showing as DNT Instead of FDL

### Root Cause
The `ZipCodeChecker` component merges two data sources at runtime. DNT zips (`new-zips-temp.json`) are added **after** FDL zips (`zipServiceList.json`), so any duplicate ZIP in the DNT file overwrites the FDL entry.

ZIP `10516` exists in both files:
- **FDL (correct)**: zone "MID-HUDSON", city "Cold Spring", days "TUE,FRI"
- **DNT (wrong)**: zone "Albany", city "Putnam", days "TUE,THU"

### Fix
**Remove `10516` from `src/data/new-zips-temp.json`** so the correct FDL entry takes effect.

### Broader Concern
There may be other duplicate ZIPs between the two files causing similar issues. After fixing 10516, I'll scan for all overlapping ZIPs and remove them from the DNT file so FDL always takes priority.

### Files Modified
- `src/data/new-zips-temp.json` — remove ZIP 10516 (and any other FDL duplicates found)

