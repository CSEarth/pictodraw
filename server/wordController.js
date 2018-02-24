const words = require('./words');

const wordController = {};



let oldWords = [];


wordController.getANewWord = function() {
  let newWord = words[Math.floor(Math.random() * words.length)];
  let count = 0;
  while(oldWords.includes(newWord)) {
    newWord = words[Math.floor(Math.random() * words.length)];
    count++;
    if (count > 4) oldWords = [];
  }
  oldWords.push(newWord);
  return newWord;
}


module.exports = wordController;
