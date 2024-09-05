//
// Function replaces all written unicode elements to normal letters.
//
function unicodeCharSwitch(text) {
  const unicodeMap = {
    '\\u0105': 'ą',
    '\\u0117': 'ė',
    '\\u0116': 'Ė',
    '\\u016b': 'ū',
    '\\u0160': 'Š',
    '\\u0161': 'š',
    '\\u0172': 'Ų',
    '\\u0173': 'ų',
    '\\u017e': 'ž',
    '\\u010c': 'Č',
    '\\u010d': 'č',
  };

  return text.replace(
    /\\u[0-9a-fA-F]{4}/g,
    (match) => unicodeMap[match] || match
  );
}

module.exports = unicodeCharSwitch;
