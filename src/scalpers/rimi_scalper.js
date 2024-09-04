//
// rimi e-shop doesn't seem to return api call for search as barbora does
// sol 1: try to use webscrapper bot
// sol 2: get the html and try to edit/manipulate the html
//
// ==========
// TODO
// get ecommerce tag, right now scalper gets bannerTitle element
// and not the "name" element that is in "impressions" tab
//
async function rimiScalper(searchTerms) {
  console.log('===rimi search tool===');
  // import cheerio for html manipulation
  const cheerio = require('cheerio');
  const fs = require('fs');
  const vm = require('vm');

  // Shop URL
  let fetchUrl = 'https://www.rimi.lt/e-parduotuve/lt/paieska?query=';

  // Combine the search terms
  let fullSearchTerms = searchTerms.join('+');

  // Combine everything to one string
  let fullFetchUrl = `${fetchUrl}${fullSearchTerms}`;
  console.log(`fullFetchUrl: ${fullFetchUrl}`);

  try {
    const response = await fetch(fullFetchUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // const result = await response.text();
    const result = await response.text();

    const $ = cheerio.load(result);

    // Array to hold extracted dataLayer pushes
    const dataLayerPushes = [];

    // Find all <script> tags
    $('script').each((i, scriptTag) => {
      const scriptContent = $(scriptTag).html();

      // Check if the script contains a "dataLayer.push" call
      const dataLayerMatch = scriptContent.match(/dataLayer.push\((.*?)\);/s);

      if (dataLayerMatch) {
        // Extract the JSON content inside the push
        const dataLayerJson = dataLayerMatch[1];

        try {
          // Parse the JSON content and push to the array
          const parsedData = JSON.parse(dataLayerJson);
          dataLayerPushes.push(parsedData);
        } catch (error) {
          console.error('Error parsing dataLayer push:', error);
        }
      }
    });

    console.log('===');
    dataLayerPushes.forEach((push) => {
      console.log(push);
    });
    console.log('===');

    // Extract ecommerce impressions if present
    dataLayerPushes.forEach((push) => {
      if (push.ecommerce && push.ecommerce.impressions) {
        console.log('Ecommerce Impressions:', push.ecommerce.impressions);
      } else {
        console.log('No ecommerce data found in this dataLayer.push.');
      }
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the async function
rimiScalper(['pienas']);
