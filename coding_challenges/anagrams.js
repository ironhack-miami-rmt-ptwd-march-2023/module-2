// there is  principal in computer programming called big O notation that describes how efficient your code is 
// basically, the main thing to watch out for is a loop inside of a loop
// the reason this is dangerous is because if you loop inside of a loop, then you are looping through one dataset all the way not just once, but your loop will run the same number of times as however many elements are in the other thing youre looping over
// if you loop over a thing with 100 elements, it wont take long
// if you loop inside of a loop on 2 arrays each with 100 elements, it wont take twice as long, itll take exponentially longer because its not looping over 100 and then looping over 100 again
// instead while it loops 1-100, for each number the whole inner loop runs so it would take 10000x as long (100 squared)
// /this isnt really a problem with 100 elements, but if you have a million elements, it can get out of hand


// this is the shorter better way 
function anagramCounter(arrayOfWords){
  let sortedWords = arrayOfWords.map(word=> word.split('').sort().join(''));
  let numberOfAnagrams = 0;

  sortedWords.forEach((word, theIndex)=>{
    for(let i = theIndex+1; i < sortedWords.length; i++){
      if(word === sortedWords[i]){
        numberOfAnagrams++
      }
    }
  })
  return numberOfAnagrams
}






// this is my much longer strategy so its not optimal for this solution
// but the example of making a hashmap will be useful in the future 
// so keep it for reference
function isAnagram(word1, word2){
  let isItAnAnagram = true;
  let hashmap = {};
  word1.split("").forEach((eachLetter)=>{
    if(hashmap[eachLetter]) hashmap[eachLetter] +=1;
    else hashmap[eachLetter] = 1;
  });

    word2.split("").forEach((letter)=>{
    if(hashmap[letter] && hashmap[letter] > 0) hashmap[letter] -=1;
    else isItAnAnagram = false;
  });

  Object.keys(hashmap).forEach((eachKey)=>{
    if(hashmap[eachKey] !== 0) isItAnAnagram = false;
  });
  return(isItAnAnagram);
}




function anagramCounter (wordsArray) {
  let counter = 0;

  wordsArray.forEach((eachWord, i)=>{
    // for each word, we want to compare to each of the other words

    for(let index = i+1; index < wordsArray.length; index++){

      if(isAnagram(eachWord, wordsArray[index])){
        counter++;
      } 
    }
  })
  return counter;
}




anagramCounter(["dell", "ledl", "abc", "cba", "bca", "bac"]);


// There are 2 anagrams in the array
// ["dell", "ledl", "abc", "cba"]
// There are 7 anagrams in the array
// ["dell", "ledl", "abc", "cba", "bca", "bac"]