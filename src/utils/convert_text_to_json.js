//
// Function converts given text to required JSON format
// Each element should have title, price
// Function also deals with non-existent characters
// Such as lithuanian letters
//
function convertTextToJson(text) {
  // declare skippable items as an array
  const skippableLetters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  // convert text to lowercase
  const lowText = text.toLowerCase();

  const lines = lowText.split('\n');

  for (let line = 0; line < lines.length; line++) {
    // console.log(`line ${line}- ${lines[line]}`);

    const words = lines[line].split(' ');

    for (let word = 0; word < words.length; word++) {
      //   console.log(` >>> word ${word}- ${words[word]}`);

      const letters = words[word].split('');

      for (let letter = 0; letter < letters.length; letter++) {
        // console.log(` >>> letter ${letter}- ${letters[letter]}`);
      }
    }
  }
}

// Insert the unicode and get normal char back
function unicodeCharSwitch(unicode) {
  switch (unicode) {
    case '\u0117':
      return 'e';
    default:
      console.log(
        ` >>> UnicodeCharSwitch \n
        >>>> UnicodeCharSwitch could not find the character ${unicode}`
      );
      return false;
  }
}

// module.exports = convertTextToJson;

convertTextToJson('laBas, cia yra tEstas');
