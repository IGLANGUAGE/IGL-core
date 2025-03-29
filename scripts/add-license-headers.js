const fs = require('fs');
const path = require('path');

const LICENSE_HEADER = `/*
 * Copyright (c) ${new Date().getFullYear()} IGLANGUAGE
 * Licensed under MIT (https://opensource.org/licenses/MIT)
 */
`;

const isCheckMode = process.argv.includes('--check');
let hasErrors = false;

function processDirectory(directory) {
  fs.readdirSync(directory).forEach(file => {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (
      fullPath.endsWith('.ts') && 
      !fullPath.endsWith('.d.ts')
    ) {
      const content = fs.readFileSync(fullPath, 'utf8');
      
      if (!content.includes('Copyright')) {
        if (isCheckMode) {
          console.error(`Missing license header in ${fullPath}`);
          hasErrors = true;
        } else {
          fs.writeFileSync(fullPath, LICENSE_HEADER + '\n' + content);
          console.log(`Added license header to ${fullPath}`);
        }
      }
    }
  });
}

// Обрабатываем директорию src
if (fs.existsSync('src')) {
  processDirectory('src');
} else {
  console.warn('Directory "src" not found');
}

if (isCheckMode && hasErrors) {
  process.exit(1);
}
