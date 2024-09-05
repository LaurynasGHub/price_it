//
// function gets the remaining text from a text file after the specified
// word. Input text file and word, the function finds that word and
// returns the whole text after that word.
//
const fs = require('fs');

// Function to delete content up to a specific keyword in a string
function deleteUpToKeyword(text, keyword) {
  console.log('==deleteUpToKeyword==');

  const keywordIndex = text.indexOf(keyword);

  // If the keyword is found, remove all content up to that point
  if (keywordIndex !== -1) {
    const updatedContent = text.substring(keywordIndex);
    return updatedContent;
  } else {
    console.log(`Keyword "${keyword}" not found.`);
    return text; // Return the original content if the keyword is not found
  }
}

module.exports = deleteUpToKeyword;
