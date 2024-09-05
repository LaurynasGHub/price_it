//
// Function converts given text to required JSON format.
// Each element should have title and price.
// Function also deals with non-existent characters such as LT letters.
//
function convertTextToJson(text) {
  const unicodeCharSwitch = require('./unicode_char_switch');

  const usableText = unicodeCharSwitch(text);

  // get each line of the given text
  const lines = usableText.split('\n');

  for (let line = 0; line < lines.length; line++) {
    // console.log(`line ${line}- ${lines[line]}`);
    if (lines[line].includes('"name"')) {
      console.log(lines[line]);
    }
  }
  return usableText;
}

module.exports = convertTextToJson;

// convertTextToJson('laBas \\u0160, cia \\u017e yra \\u0117 tEstas \\u0160');
