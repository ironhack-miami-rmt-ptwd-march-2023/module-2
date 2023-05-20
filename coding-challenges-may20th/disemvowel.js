
function disemvowel(str) {
  let strArr = str.split("");
  
  const result = strArr.filter(char => char !== 'a' && char !== 'e' && char !== 'i' && char !== 'o' && char !== 'u' && char !== 'A' && char !== 'E' && char !== 'I' && char !== 'O' && char !== 'U');
  
  return result.join("");
}

// function disemvowel(str) {
//   return str.replace(/[aeiou]/gi, '');
// }



console.log(disemvowel("This website is for losers LOL!"));

console.log(
    disemvowel("This website is for losers LOL!") === "Ths wbst s fr lsrs LL!"
)