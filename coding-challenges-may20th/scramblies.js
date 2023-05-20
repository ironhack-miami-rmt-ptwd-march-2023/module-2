// function scramble(str1, str2) {
//     let result = true;

//     for(let i = 0; i < str2.length; i++){
//         console.log(str1, str2);
//         if(!str1.includes(str2[i])){
//             result = false
//         } else {
//            const index = str1.indexOf(str2[i]);
//            str1 = str1.split("");
//            str1.splice(index, 1);
//            str1 = str1.join("");
//            console.log(str1);
//         }
//     }

//     return result;
//   }
// this one works for shorter inputs but we have a loop inside of a loop so we will fail the performance test on codewars





  
  console.log(scramble('codslgkjghsewars','codewars'));
  