const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  // 1. Vérifiez que le fichier HTML existe
  const htmlFile = path.join(__dirname, 'index.html'); // Remplacez par votre nom de fichier
  if (!fs.existsSync(htmlFile)) {
    console.error('Fichier HTML introuvable :', htmlFile);
    return;
  }

  // 2. Configurez Puppeteer
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox']
  });
  
  const page = await browser.newPage();

  // 3. Chargez le fichier local
  await page.goto(`file://${htmlFile}`, {
    waitUntil: 'networkidle0',
    timeout: 30000
  });

  // 4. Génération du PDF
  await page.pdf({
    path: 'menu-wokup.pdf',
    format: 'A4',
    printBackground: true,
    margin: { top: '15mm', right: '15mm', bottom: '15mm', left: '15mm' }
  });

  console.log('PDF généré avec succès !');
  await browser.close();
})();