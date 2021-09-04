var Scraper = require('images-scraper');

const google = new Scraper({
  puppeteer: {
    headless: false,
  },
});

(async () => {
  // This grabs the first 1000 images of cats.
  const results = await google.scrape('cat', 1000);
  console.log('results', results);
})();