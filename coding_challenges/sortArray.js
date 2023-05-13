function namesSorter (departmentsArray) {
    const arr = [];
  
    // standard way to loop through nested arrays
    for(let i=0; i<departmentsArray.length; i++){
      for(let x=0; x < departmentsArray[i].length; x++){
        arr.push(departmentsArray[i][x])
      }
    }
  
    arr.sort((a,b)=>{
      if(a.length > b.length){
        return 1;
      } else if(a.length < b.length){
        return -1;
      } else {
        
          if(a > b){
            return 1;
          } else if (b > a){
            return -1;
          } else{
            return 0
          }
   
      }
      
    })
  
    return arr;
  
  }
  
  
  namesSorter([["Pablo", "Enrique", "Josh", "Juan", "Gonzalo"], ["Michael", "Alexander", "Mikel", "Ariel"], ["John", "Julia", "Brad", "George"]])
    
  // ['Brad','John','Josh','Juan','Ariel','Julia','Mikel','Pablo','George','Enrique','Gonzalo','Michael','Alexander' ];