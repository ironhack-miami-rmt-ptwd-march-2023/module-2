var whatTimeIsIt = function(degrees) {
    const currentHourWithDecimal = (degrees / 30);
    
    const currentHour = Math.floor(currentHourWithDecimal);
    const minutes = Math.floor((degrees % 30) * 2);
    // const minutes = (currentHourWithDecimal % 1) * 60;
    // this version doesnt pass all the tests because we are relying on javascript to find the remained of a complicated decimal number divided by 1 which means you end up with a complicated decimal number * 60 which javascript cannot always handle precisely
    
    let formattedHour, formattedMinutes;
  
    
    
     if(currentHour < 10) formattedHour = `0${currentHour}`;
    else formattedHour = currentHour;
    
    if(currentHour === 0) formattedHour = 12;
    
    
    formattedMinutes = Math.floor(Number(minutes))
    if(minutes < 10) formattedMinutes = `0${minutes}`;
    
  
    return(`${formattedHour}:${formattedMinutes}`)
    
  }
  
  
  whatTimeIsIt(40);
  
  
  
  // console.log(.1 * 3)
  // javascript has a hard time doing division and multiplication with factors of 3 or 1/3 and the reason is because 1/3 does not resolve to an irrational decimal
  // usually the way we get around it is multiplying everything by 10 or 100 and then dividing by the same amount later