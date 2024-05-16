const puppeteer = require("puppeteer");

(async () => {
  // Launch a headless browser
  const browser = await puppeteer.launch({
    headless: true, // Run in headless mode
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  // Create a new page
  const page = await browser.newPage();

  // Define the URL to open
  const url =
    "https://twitter.com/search?q=bencana+banjir++%22banjir+%22+%28air+OR+hujan+OR+jakarta+OR+rumah+OR+warga%29+-hoax+-hoaks+%28%23banjir%29+lang%3Aid+until%3A2024-01-16+since%3A2024-01-01&src=typed_query";

  // Open the URL
  await page.goto(url, { waitUntil: "networkidle2" });

  // Print the title of the page
  const title = await page.title();
  console.log("Page title:", title);

  // Close the browser
  await browser.close();
})();
