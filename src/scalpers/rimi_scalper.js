//
// rimi e-shop doesn't seem to return api call for search as barbora does
// sol 1: try to use webscrapper bot
// sol 2: get the html and try to edit/manipulate the html
//
async function rimiScalper(searchTerms) {
  console.log('===rimi search tool===');
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

    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error('Error:', error);
  }
  // take the response and manipulate it to make it as json as possible
  // using cheerio
}

// Call the async function
rimiScalper(['pienas']);
