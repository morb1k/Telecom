export const PRICES = {
  // unit: "each" or "ft"
  'THHN 3/0 Red, Stranded Copper':            { sku: 'W-THHN-30-RED',  unit: 'ft',   price: 3.10 },
  'THHN 3/0 Black, Stranded Copper (x2)':     { sku: 'W-THHN-30-BLK',  unit: 'ft',   price: 3.10 },
  'THHN 2 Green, Stranded Copper':            { sku: 'W-THHN-2-GRN',   unit: 'ft',   price: 1.25 },
  'BCW 2 SOL Tinned Bare Copper':             { sku: 'BCW-2SOL',       unit: 'ft',   price: 0.95 },
  'PVC 3" Conduit':                           { sku: 'PVC-3',          unit: 'ft',   price: 4.25 },
  'PVC 2" Conduit':                           { sku: 'PVC-2',          unit: 'ft',   price: 2.10 },
  'GAL 2" Galvanized Conduit':                { sku: 'GAL-2',          unit: 'ft',   price: 5.60 },
  'FTG 2" x 6" Nipple':                        { sku: 'FTG-2x6',        unit: 'each', price: 7.80 },
  // ...additional items default to price 0
};

// Fallback for non-module setup
if (typeof window !== 'undefined') {
  window.PRICES = PRICES;
}
