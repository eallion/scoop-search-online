// Simple test to verify the build process
const fs = require('fs');
const path = require('path');

// Test that the output.css file exists
const cssPath = path.join(__dirname, '../dist/output.css');
if (!fs.existsSync(cssPath)) {
  console.error('ERROR: dist/output.css not found');
  process.exit(1);
}

// Test that the output.css file is not empty
const cssContent = fs.readFileSync(cssPath, 'utf8');
if (cssContent.length === 0) {
  console.error('ERROR: dist/output.css is empty');
  process.exit(1);
}

// Test that the index.html file exists
const htmlPath = path.join(__dirname, '../index.html');
if (!fs.existsSync(htmlPath)) {
  console.error('ERROR: index.html not found');
  process.exit(1);
}

// Test that the index.html file references the local CSS
const htmlContent = fs.readFileSync(htmlPath, 'utf8');
if (!htmlContent.includes('./dist/output.css')) {
  console.error('ERROR: index.html does not reference local CSS');
  process.exit(1);
}

// Test that the index.html file contains Iconify CSS classes
if (!htmlContent.includes('icon-[mdi--')) {
  console.error('ERROR: index.html does not contain Iconify CSS classes');
  process.exit(1);
}

console.log('All tests passed!');