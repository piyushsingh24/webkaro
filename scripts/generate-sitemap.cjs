const fs = require('fs');
const path = require('path');

// Configuration
const BASE_URL = 'https://webkaro.in';
const PUBLIC_DIR = path.resolve(__dirname, '../public');
const DIST_DIR = path.resolve(__dirname, '../dist'); // In case we want to run after build

// Static routes
const staticRoutes = [
  '',
  '/about',
  '/services',
  '/portfolio',
  '/pricing',
  '/contact',
  '/get-quote',
  '/privacy',
  '/terms'
];

// Function to generate XML entry
const createURLEntry = (route, priority = '0.5', changefreq = 'monthly') => {
  const lastmod = new Date().toISOString().split('T')[0];
  return `  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
};

async function generateSitemap() {
  console.log('Generating sitemap...');

  const entries = [];

  // 1. Add static routes
  staticRoutes.forEach(route => {
    let priority = '0.5';
    if (route === '') priority = '1.0';
    if (['/services', '/portfolio'].includes(route)) priority = '0.9';
    if (['/about', '/pricing', '/contact'].includes(route)) priority = '0.8';

    entries.push(createURLEntry(route, priority));
  });

  // 2. Add dynamic services (Mocking the data import since this is a standalone script)
  // In a real scenario, we might import the .js files if they are CJS or use dynamic import for ESM
  // For simplicity here, I'll extract IDs using a simple regex or assume the user will run this via a tool that handles ESM
  try {
    const servicesContent = fs.readFileSync(path.resolve(__dirname, '../src/data/services.js'), 'utf8');
    const serviceIds = [...servicesContent.matchAll(/id:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
    serviceIds.forEach(id => {
      entries.push(createURLEntry(`/services/${id}`, '0.7'));
    });
  } catch (err) {
    console.warn('Could not read services data:', err.message);
  }

  // 3. Add dynamic portfolio projects
  try {
    const portfolioContent = fs.readFileSync(path.resolve(__dirname, '../src/data/portfolio.js'), 'utf8');
    const projectIds = [...portfolioContent.matchAll(/id:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
    projectIds.forEach(id => {
      entries.push(createURLEntry(`/portfolio/${id}`, '0.7'));
    });
  } catch (err) {
    console.warn('Could not read portfolio data:', err.message);
  }

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemapContent);
  console.log('Sitemap generated successfully at public/sitemap.xml');
}

generateSitemap();
