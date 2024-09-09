//
// Rimi scraper bot
// Function searches in a rimi e-shop and returns html file.
// Html is then manipulated to get the json object.
//
async function rimiScraper(searchTerms, exportText) {
  console.log(' > rimi scraper');

  const fs = require('fs');
  const deleteUpToKeyword = require('../utils/delete_up_to_keyword');
  const convertTextToJson = require('../utils/convert_text_to_json');

  // Rimi e-shop URL
  let fetchUrl = 'https://www.rimi.lt/e-parduotuve/lt/paieska?query=';

  // Combine the search terms that are passed as arg
  let fullSearchTerms = searchTerms.join('+');

  // Combine search terms and URL in to one string
  let fullFetchUrl = `${fetchUrl}${fullSearchTerms}`;
  console.log(` >> fullFetchUrl: ${fullFetchUrl}`);

  try {
    console.log(' >> Fetching data...');
    // get the response from rimi e-shop
    const response = await fetch(fullFetchUrl);

    console.log(' >> Fetch completed!');

    if (!response.ok) {
      throw new Error(` > HTTP error! Status: ${response.status}`);
    }

    // Take the result as text
    const result = await response.text();

    // Perform the operation to get only the needed part
    const manResult = deleteUpToKeyword(result, 'currencyCode');

    // convert the manResulted to JSON file that has the needed structure
    const rimiJson = convertTextToJson(manResult, '": ');

    for (let product of rimiJson.products) {
      console.log('===');
      console.log(`${product.name} \n kaina ${product.price} eur.`);
    }

    // Write the manipulated result into a text file if needed
    if (exportText) {
      fs.writeFileSync(
        `${searchTerms}-rimi-results.txt`,
        JSON.stringify(rimiJson)
      );
    }
    return rimiJson;
  } catch (error) {
    console.error('Error:', error);
    return;
  }
}

// Call the function to test
rimiScraper(['duona'], false);
