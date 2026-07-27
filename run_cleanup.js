const fs = require('fs');
const path = require('path');

const rootDir = 'C:\\Users\\RAMY\\Desktop\\golden-horizont-egypt';
const photosDir = path.join(rootDir, 'public', 'photos');

console.log('Starting full deep recheck cleanup...');

// 1. Delete junk root files
const junkFiles = [
  'new 1.html',
  'audit_report_GOLDEN_HORIZONT_EGYPT.doc',
  'audit_and_cleanup.js',
  'cleanup.js',
  'backup.js'
];

junkFiles.forEach(file => {
  const filePath = path.join(rootDir, file);
  if (fs.existsSync(filePath)) {
    try {
      fs.unlinkSync(filePath);
      console.log(`Deleted junk root file: ${file}`);
    } catch (e) {
      console.error(`Failed to delete ${file}:`, e.message);
    }
  }
});

const junkFolder = path.join(rootDir, 'audit_report_GOLDEN_HORIZONT_EGYPT_files');
if (fs.existsSync(junkFolder)) {
  try {
    fs.rmSync(junkFolder, { recursive: true, force: true });
    console.log('Deleted junk root folder: audit_report_GOLDEN_HORIZONT_EGYPT_files');
  } catch (e) {
    console.error('Failed to delete audit_report folder:', e.message);
  }
}

// 2. Delete orphaned folders in public/photos
const orphanFolders = [
  'NOT YET',
  'Cairo Classic Bus Tour',
  'Cairo Comfort Minibus Tour – National Museum of Egyptian Civilization',
  'Cairo Premium Minibus Tour – Grand Egyptian Museum',
  'City Tour Hurghada with Golden Horizont Egypt',
  'City Tour Hurghada with Golden Horizont Egypt_2',
  'Diving Adventure in Hurghada',
  'Dolphin House Marsa Alam Tour from Hurghada',
  'Dolphin House Snorkeling Tour from Hurghada',
  'Eden Island Snorkeling Tour from Hurghada',
  'Grand Aquarium Hurghada Tour',
  'Horse Riding Safari Adventure from Hurghada',
  'Hula-Hula Island Snorkeling Tour from Hurghada',
  'Hurghada Museum Tour',
  'La Tenda Lights – Bedouin Dinner Show from Hurghada',
  'Luxor Bus Tour Kings Valley Karnak & Nile Day',
  'Luxor Golden Bus Tour',
  'Luxor Hot Air Balloon Premium Minibus Tour',
  'Luxor Premium Minibus Tour',
  'Magawish Island Snorkeling Tour from Hurghada',
  'Marsa Alam Abu Dabbab Beach Day Trip',
  'Orange Bay Snorkeling & Beach Day from Hurghada',
  'Orange Bay Snorkeling _ Beach Day from Hurghada',
  'Ozeria Island Snorkeling Tour from Hurghada',
  'Paradise Island Snorkeling Tour from Hurghada',
  'Quad Adventure Mini Desert Safari from Hurghada',
  'Sea Adventure Parasailing from Hurghada',
  'Super Safari Desert Adventure from Hurghada',
  'Wadi El Gemal National Park Tour from Hurghada',
  'cairobustourpyramidssphinxmuseumadventure',
  'divingadventureinhurghada_raredenislandsnorkelingtou',
  'goldencrownofthenileaswanroyalescape',
  'luxorbustourtemplesnilecrossingancientwonders',
  'nefertariluxuryseatripsubmarinesnorkelingdinner',
  'photocapturethemoments'
];

orphanFolders.forEach(folder => {
  const folderPath = path.join(photosDir, folder);
  if (fs.existsSync(folderPath)) {
    try {
      fs.rmSync(folderPath, { recursive: true, force: true });
      console.log(`Deleted orphaned folder: ${folder}`);
    } catch (e) {
      console.error(`Failed to delete folder ${folder}:`, e.message);
    }
  }
});

// 3. Delete flat duplicate photos and orphaned files in public/photos
if (fs.existsSync(photosDir)) {
  const files = fs.readdirSync(photosDir);
  
  // Patterns for flat duplicate files
  const duplicatePatterns = [
    /^cairo-classic-bus-\d+\./i,
    /^cairo-premium-minibus-\d+\./i,
    /^cairo-comfort-minibus-\d+\./i,
    /^cairo-golden-bus-\d+\./i,
    /^luxor-golden-bus-\d+\./i,
    /^luxor-balloon-premium-minibus-\d+\./i,
    /^luxor-premium-minibus-\d+\./i,
    /^abu-simbel-premium-\d+\./i,
    /^abu-simbel-vip-\d+\./i,
    /^abu-dabbab-marsa-alam-\d+\./i,
    /^dolphin-house-marsa-alam-\d+\./i,
    /^dolphin-snorkeling-hurghada-\d+\./i,
    /^diving-hurghada-\d+\./i,
    /^eden-island-snorkeling-\d+\./i,
    /^grand-aquarium-hurghada-\d+\./i,
    /^horse-safari-hurghada-\d+\./i,
    /^hula-hula-island-\d+\./i,
    /^hurghada-city-tour-\d+\./i,
    /^la-tenda-lights-\d+\./i,
    /^magawish-island-\d+\./i,
    /^museum-hurghada-\d+\./i,
    /^orange-bay-\d+\./i,
    /^ozeria-island-\d+\./i
  ];

  // Patterns for old format files & newly found orphaned files
  const oldPatterns = [
    /^ABYDOS DENDARA/i,
    /^Cairo & GEM/i,
    /^Cairo Bus Tour/i,
    /^Cairo Gem Van/i,
    /^Dolphin Watching/i,
    /^Dolphin World/i,
    /^Delphin-show/i,
    /^Dolphin-World-Egypt/i,
    /^Elite VIP Yacht/i,
    /^Evening Desert Safari/i,
    /^Glass Bottom Boat/i,
    /^Golden Crown/i,
    /^Luxor Bus Tour/i,
    /^Luxor VIP/i,
    /^Nefertari Luxury/i,
    /^PARASAILING/i,
    /^Quad Adventure Mini/i,
    /^SUPER SAFARI/i,
    /^Super Safari Quads/i,
    /^Paradise Island Snorkeling/i,
    /^Paradise-island/i,
    /^Wadi El Gemal/i,
    /^Wadi-El-Gemal/i,
    /^ghe cairo/i,
    /^luxor full day/i,
    /^Diving Adventure/i,
    /^use this photo for trip card/i
  ];

  files.forEach(file => {
    const filePath = path.join(photosDir, file);
    try {
      const stat = fs.statSync(filePath);
      if (stat.isFile()) {
        const isDuplicate = duplicatePatterns.some(regex => regex.test(file));
        const isOld = oldPatterns.some(regex => regex.test(file));
        const isDocx = file.endsWith('.docx') || file.endsWith('.doc') || file.endsWith('.txt') || file.endsWith('.pdf');

        if (isDuplicate || isOld || isDocx) {
          fs.unlinkSync(filePath);
          console.log(`Deleted file: ${file}`);
        }
      }
    } catch (e) {
      console.error(`Error processing file ${file}:`, e.message);
    }
  });
}

console.log('Recheck Cleanup finished.');
