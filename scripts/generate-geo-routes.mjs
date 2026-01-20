import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const geoAreas = [
  {
    name: 'Steiner Ranch',
    slug: 'steiner-ranch-78732',
    neighborhoods: [
      { name: 'Rob Roy', slug: 'rob-roy' },
      { name: 'Davenport Ranch', slug: 'davenport-ranch' },
      { name: 'River Place', slug: 'river-place' },
      { name: 'Barclay Place', slug: 'barclay-place' },
      { name: 'Chaparral / Cliffside', slug: 'chaparral-cliffside' }
    ]
  },
  {
    name: 'West Lake Hills & Rollingwood',
    slug: 'west-lake-hills-and-rollingwood',
    neighborhoods: [
      { name: 'Rollingwood', slug: 'rollingwood' },
      { name: 'West Lake Hills', slug: 'west-lake-hills' },
      { name: 'Spanish Oaks', slug: 'spanish-oaks' },
      { name: 'Davenport Ranch', slug: 'davenport-ranch' },
      { name: 'Lake Austin Hills', slug: 'lake-austin-hills' }
    ]
  },
  {
    name: 'Barton Creek',
    slug: 'barton-creek',
    neighborhoods: [
      { name: 'Barton Creek Country Club Estates', slug: 'barton-creek-country-club-estates' },
      { name: 'Fazio Foothills / Cliffside', slug: 'fazio-foothills-cliffside' },
      { name: 'Spyglass / Barton\'s Bluff', slug: 'spyglass-bartons-bluff' },
      { name: 'Lake Austin West Estates', slug: 'lake-austin-west-estates' },
      { name: 'Barton Creek West', slug: 'barton-creek-west' }
    ]
  },
  {
    name: 'Tarrytown',
    slug: 'tarrytown',
    neighborhoods: [
      { name: 'Tarrytown', slug: 'tarrytown' },
      { name: 'Old Enfield', slug: 'old-enfield' },
      { name: 'Pemberton Heights', slug: 'pemberton-heights' },
      { name: 'Bryker Woods', slug: 'bryker-woods' },
      { name: 'Clarksville', slug: 'clarksville' }
    ]
  },
  {
    name: 'Downtown Austin',
    slug: 'downtown-austin-luxury',
    neighborhoods: [
      { name: 'Downtown Core / 78701', slug: 'downtown-core-78701' },
      { name: 'Rainey Street District', slug: 'rainey-street-district' },
      { name: 'Old West Austin', slug: 'old-west-austin' },
      { name: 'Zilker', slug: 'zilker' },
      { name: 'Clarksville', slug: 'clarksville' }
    ]
  },
  {
    name: 'Allandale / Northwest Hills',
    slug: 'allandale-and-northwest-hills',
    neighborhoods: [
      { name: 'Allandale', slug: 'allandale' },
      { name: 'Northwest Hills', slug: 'northwest-hills' },
      { name: 'Crestview', slug: 'crestview' },
      { name: 'Quail Creek', slug: 'quail-creek' },
      { name: 'Triangle / North Lamar', slug: 'triangle-north-lamar' }
    ]
  },
  {
    name: 'Lakeway / Bee Cave / Lake Travis',
    slug: 'lakeway-bee-cave-and-lake-travis',
    neighborhoods: [
      { name: 'Lakeway', slug: 'lakeway' },
      { name: 'Rough Hollow', slug: 'rough-hollow' },
      { name: 'The Peninsula at Rough Hollow', slug: 'the-peninsula-at-rough-hollow' },
      { name: 'Serenity Hills', slug: 'serenity-hills' },
      { name: 'Bee Cave', slug: 'bee-cave' }
    ]
  },
  {
    name: 'Circle C Ranch / Southwest Austin',
    slug: 'circle-c-ranch-and-southwest-austin',
    neighborhoods: [
      { name: 'Circle C Ranch', slug: 'circle-c-ranch' },
      { name: 'Grey Rock', slug: 'grey-rock' },
      { name: 'Lost Creek', slug: 'lost-creek' },
      { name: 'Shady Hollow', slug: 'shady-hollow' },
      { name: 'West Oak Hill', slug: 'west-oak-hill' }
    ]
  },
  {
    name: 'Pemberton Heights / Old West Austin',
    slug: 'pemberton-heights-and-old-west-austin-historic-luxury',
    neighborhoods: [
      { name: 'Pemberton Heights', slug: 'pemberton-heights' },
      { name: 'Old Enfield', slug: 'old-enfield' },
      { name: 'Bryker Woods', slug: 'bryker-woods' },
      { name: 'Clarksville', slug: 'clarksville' },
      { name: 'Old West Austin', slug: 'old-west-austin' }
    ]
  }
];

const toPascalCase = (str) => {
  return str
    .replace(/[^a-zA-Z0-9]/g, ' ')
    .split(' ')
    .filter(Boolean)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
};

let imports = '';
let routes = '';

geoAreas.forEach(hub => {
  const hubComponentName = `Hub${toPascalCase(hub.slug)}`;
  imports += `const ${hubComponentName} = safeLazy(() => import('./pages/areas/${hub.slug}'), "${hubComponentName}");\n`;
  routes += `              <Route path="/areas/${hub.slug}" element={<Trace name="/areas/${hub.slug}"><${hubComponentName} /></Trace>} />\n`;

  hub.neighborhoods.forEach(neighborhood => {
    const neighborhoodComponentName = `Neighborhood${toPascalCase(hub.slug)}${toPascalCase(neighborhood.slug)}`;
    imports += `const ${neighborhoodComponentName} = safeLazy(() => import('./pages/areas/${hub.slug}/${neighborhood.slug}'), "${neighborhoodComponentName}");\n`;
    routes += `              <Route path="/areas/${hub.slug}/${neighborhood.slug}" element={<Trace name="/areas/${hub.slug}/${neighborhood.slug}"><${neighborhoodComponentName} /></Trace>} />\n`;
  });
});

const outputFile = path.join(projectRoot, 'geo-routes-generated.txt');
fs.writeFileSync(outputFile, `// IMPORTS:\n${imports}\n\n// ROUTES:\n${routes}`);

console.log(`✅ Generated route code in geo-routes-generated.txt`);
console.log(`   Total imports: ${imports.split('\n').filter(Boolean).length}`);
console.log(`   Total routes: ${routes.split('\n').filter(Boolean).length}`);
