const fs = require('fs');

const customers = JSON.parse(fs.readFileSync('customers.json', 'utf8'));

const medicationByVolume = customers.map(c => ({
  medication: c.medication,
  volume: c.volume,
  county: c.county
}));

fs.writeFileSync('medicationbyvolume.json', JSON.stringify(medicationByVolume, null, 2));

console.log('Done. Records:', medicationByVolume.length);