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

  // Shop URL
  let fetchUrl = 'https://www.rimi.lt/e-parduotuve/lt/paieska?query=';

  // Combine the search terms
  let fullSearchTerms = searchTerms.join('+');

  // Combine everything to one string
  let fullFetchUrl = `${fetchUrl}${fullSearchTerms}`;
  console.log(`fullFetchUrl: ${fullFetchUrl}`);

  try {
    // get the search results from rimi web shop
    const response = await fetch(fullFetchUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // take the result as text
    const result = await response.text();
    //
    // manipulate the result text
    // find "ecommerce": tag and get the info below
    // get x amount of lines after the tag?
    //
  } catch (error) {
    console.error('Error:', error);
  }
}
// Call the async function
rimiScalper(['pienas']);
