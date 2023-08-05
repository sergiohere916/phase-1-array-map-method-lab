const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  tutorials.map(sentece => {
    let sentenceWords = sentece.split(" ");
    let fixedSentenceWords = sentenceWords.map(word => {
       word = word.split("");
       word[0] = word[0].toUpperCase();
       word = word.join("");
       return word;  
    });
    tutorials[tutorials.indexOf(sentece)] = fixedSentenceWords.join(" "); 
    sentece = fixedSentenceWords.join(" ");
    return sentece; 
  })
  return tutorials
}

