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
  console.log('===rimi scalper===');

  const fs = require('fs');
  const deleteUpToKeyword = require('../utils/get_text_after_position');

  // Shop URL
  let fetchUrl = 'https://www.rimi.lt/e-parduotuve/lt/paieska?query=';

  // Combine the search terms
  let fullSearchTerms = searchTerms.join('+');

  // Combine everything to one string
  let fullFetchUrl = `${fetchUrl}${fullSearchTerms}`;
  console.log(`fullFetchUrl: ${fullFetchUrl}`);

  try {
    // Start fetch process and log that it's in progress
    console.log(' > Fetching data...');

    // Get the search results from Rimi web shop
    const response = await fetch(fullFetchUrl);

    // Log if fetch is successful
    console.log(' > Fetch completed!');

    if (!response.ok) {
      throw new Error(` > HTTP error! Status: ${response.status}`);
    }

    // Take the result as text
    const result = await response.text();

    // Perform the operation to get the part after the keyword "ecommerce"
    const manResult = deleteUpToKeyword(result, 'ecommerce');

    // Log the manipulated result
    console.log('Manipulated Result:', manResult);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the async function
rimiScalper(['pienas']);
