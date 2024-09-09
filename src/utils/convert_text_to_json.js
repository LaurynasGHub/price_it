//
// Function converts given text to required JSON format.
// Each element should have title and price.
// Function also converts unicode to lithuanian characters
//
function convertTextToJson(text, sliceWord) {
  const unicodeCharSwitch = require('./unicode_char_switch.js');

  const usableText = unicodeCharSwitch(text);

  // get each line of the given text
  const lines = usableText.split('\n');

  let returnJson = { products: [] };

  let productName = null;
  let productPrice = null;

  for (let line = 0; line < lines.length; line++) {
    if (lines[line].includes('"name"')) {
      productName = lines[line]
        .slice(lines[line].indexOf(sliceWord) + sliceWord.length)
        .trim();
    }

    if (lines[line].includes('"price"')) {
      productPrice = parseFloat(
        lines[line].slice(lines[line].indexOf(sliceWord) + sliceWord.length)
      );
    }

    if (productName && productPrice) {
      let product = {
        name: productName,
        price: productPrice,
      };

      returnJson.products.push(product);

      productName = null;
      productPrice = null;
    }
  }

  return returnJson;
}

module.exports = convertTextToJson;
