//
// Rimi scraper bot
// Function searches in a rimi e-shop and returns html file
// Html is then manipulated to get the json object
//
async function rimiScraper(searchTerms, writeTxt) {
  console.log(' > rimi scalper');

  const fs = require('fs');
  const deleteUpToKeyword = require('../utils/delete_up_to_keyword');

  // Rimi e-shop URL
  let fetchUrl = 'https://www.rimi.lt/e-parduotuve/lt/paieska?query=';

  // Combine the search terms that are passed as arg
  let fullSearchTerms = searchTerms.join('+');

  // Combine search terms and URl in to one string
  let fullFetchUrl = `${fetchUrl}${fullSearchTerms}`;
  console.log(` >> fullFetchUrl: ${fullFetchUrl}`);

  try {
    // Start fetch process and log that it's in progress
    console.log(' >> Fetching data...');

    // Get the search results from Rimi web shop
    const response = await fetch(fullFetchUrl);

    // Log if fetch is successful
    console.log(' >> Fetch completed!');

    if (!response.ok) {
      throw new Error(` > HTTP error! Status: ${response.status}`);
    }

    // Take the result as text
    const result = await response.text();

    // Perform the operation to get only the needed part
    const manResult = deleteUpToKeyword(result, 'currencyCode');

    // convert the manResulted to JSON file that has the needed structure

    // Write the manipulated result into a text file if needed
    if (writeTxt) {
      fs.writeFileSync(`${searchTerms}-rimi-results`, manResult);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the async function
rimiScraper(['duona'], false);
