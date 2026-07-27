const fs = require('fs');
const path = require('path');

const badFile = path.join('C:\\Users\\RAMY\\Desktop\\golden-horizont-egypt\\public\\photos', 'port ghalib marina.webp');

if (fs.existsSync(badFile)) {
  fs.unlinkSync(badFile);
  console.log('Deleted: port ghalib marina.webp (bad filename with space)');
} else {
  console.log('File not found, already clean.');
}
