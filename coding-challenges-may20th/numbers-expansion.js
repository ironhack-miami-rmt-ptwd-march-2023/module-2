function expandedForm1(num) {
    let multiple = 10;
    let result = [];

    // if num is 12 then this while loop will run obviously because 12 > 1
    while (num > 1){
        // on the second time through the while loop, num is going to equal 10 and multiple is going to equal 100
        // and in js, when using a modulo, if the numerator is smaller than the denominator, the result will simply be equal to the numerator
      let remainder = num%multiple;
    //  12 % 10 === 2 so remainder is going to equal 2
    // so the if will run because 2 > 0 
      if(remainder >0){
        result.unshift(remainder);
        // we unshift 2 into the array (which puts it in the first position)
      }
      num -= remainder;
    //   12 -= 2 so now num === 10
      multiple = multiple * 10;
    //   multiple gets changed to 100 now
    }
// but the while loop is going to run again because num is 10 which is still greater than 1


    return result.join(" + ");
  }



  function expandedForm2(num) {
    let numStr = num.toString();
    let expandedArr = [];
    
    
    for (var i = 0; i < numStr.length; i++) {
      let digit = parseInt(numStr[i]);
      
      
      if (digit !== 0) {
        let placeValue = Math.pow(10, numStr.length - i - 1);
        let expandedTerm = digit * placeValue;
        
        expandedArr.push(expandedTerm);
      }
    }
    
    let expandedForm = expandedArr.join(' + ');
    
    return expandedForm;
  }






  console.log(expandedForm2(12) === '10 + 2');
  console.log(expandedForm2(42) === '40 + 2');
//   expandedForm(70304) === '70000 + 300 + 4'
//   expandedForm(70324) === '70000 + 300 + 20 + 4'