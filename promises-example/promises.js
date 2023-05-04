// const directions = [
//     "Starting point: Ironhack Madrid",
//     "➔ Turn right toward P. de la Chopera",
//     "← At the roundabout, take the 1st exit onto P. de la Chopera",
//     "* Lune Creperie P. de la Chopera 33, Madrid"
//   ];
   
   
//   function obtainDirections(step) {
//     return new Promise (function (resolve, reject) {
//         // the first argument is automatically generated arugument that is equal to promise being fulfilled
//         // the second arugment is the one that runs if the promise is not fulfilled

//       // setTimeout(() => {
//         console.log( directions[step] );

//         if(step === 2){
//             reject("we just wanted to reject here to see what happens");
//         }
   
//         if (!directions[step]) reject("Instructions not found.")
//         else resolve();
//       // }, 2000); 
      
//     })
//   };
   

//   this is how you call it with promises and es7 syntax
//   obtainDirections(0)
//   .then(() => obtainDirections(1) )
//   .then(() => obtainDirections(2) )
//   .then(() => obtainDirections(3) )
//   .then(() => console.log("You arrived at your destination!") )
//   .catch((err) => console.log(err));


// this is how you can call this function with async / await syntax
// async function getCoffee(){
// try {
//     await obtainDirections(0);
//     await obtainDirections(1);
//     await obtainDirections(2);
//     await obtainDirections(3);
    
//     console.log("You arrived at your destination!");
//   } catch(err) {
//     console.log(err)
//   } 
// }

// getCoffee();



// function promiseExample(num) {
//         return new Promise (function (res, rej) {

//             console.log("original promise function running");

//             if(num > 100){
//                 res("number was greater than a hundred");
//             }


//             if(num < 100){
//                 res("number was a hundred or less");
//             }

//             if(num === 100){
//                 setTimeout(()=>res("number was exactly 100"), 3000);
//             }
//     })
//   };



//   promiseExample(140)
//   .then((blah)=>{
//     console.log(blah);
//     promiseExample(100).then((blah)=>{
//         console.log(blah);
//         promiseExample(90).then((blah)=>console.log(blah))
//         .catch((err)=>console.log(err));
//     })
//     .catch((err)=>console.log(err));
//   })
//   .catch((err)=>{
//     console.log(err);
//   })





// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("first"), 1000);
//   });
   
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("second"), 2000);
//   });
   
//   const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve( "third" ), 4000);
//   });
   
   
//   Promise.all( [p1, p2, p3] )
//     .then((values) => console.log("values", values));

   