function countVowels(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var count = 0;

  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

var exampleString = 'The quick brown fox';
var vowelCount = countVowels(exampleString);
console.log(vowelCount); 
