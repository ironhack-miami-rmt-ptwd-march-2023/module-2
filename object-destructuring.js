
let dog1 = {name: "Allen", breed: "Blue Heeler", energy: 9, weight: 46 };
// the basic purpose of object destructuring is to create variables for each (or most of)
// the properties in an object
// basically, theres no real reason that you ever NEED to do this 
// but people basically just get tired of writing dog1.name dog1.breed etc 
// and instead they just want to write one word like name or breed

// let {name, breed, energy, weight} = dog1;
// this only works in this scenario if you make the variable names exactly the same as the keys inside the object
// so i cant make up a new variable name like theName or theBreed
// by doing this, its the same as doing 
// let name = dog1.name, let breed = dog1.breed, etc
// so now I can reference each of these properties with just one word


// this one is possible because we destructured the object
// console.log(`This is ${name}, he is a ${breed}, he weighs ${weight} pounds`);

// but the object still exists if you want to keep referencing it
// console.log(`This is ${dog1.name}, he is a ${dog1.breed}, he weighs ${dog1.weight} pounds`);


// if i want to have variable names that are not exactly like the keys in the object
// it becomes slightly uglier but still doable
// let {name: theName, breed:theBreed, energy:theEnergy, weight:theWeight} = dog1;
// console.log(`This is ${theName}, he is a ${theBreed}, he weighs ${theWeight} pounds`);
// the reason this is working is because you actually create an object momentarily and then break it apart into variables
// so even the default way of doing destructuring is actually doing this same thing under the hood
// this is because in javascript, anytime you have an object with keys inside it with no colon after the key
// javascript assumed that key is equal to a variable of the same name
// for example
// let blah = {highscore, username, profilePic} 
// is the same as saying
// let blah = {highscore: highscore, username:username, profilePic:profilePic}
// so then also doing this
// let {name, breed, energy, weight} = dog1;
// is the same as doing this
// let {name:name, breed:breed, energy:energy, weight:weight} = dog1;



// if you dont need all the values in your object, you dont need to destructure everything
// you can simply leave some out
// let {name: theName, breed:theBreed} = dog1;
// if i try to console.log(theWeight) or console.log(weight) its not going to work because we left that one out
// and you dont need to change all of them if you change one so you could do
// let {name:theName, breed, weight} = dog1;
// console.log(`This is ${theName}, he is a ${breed}, he weighs ${weight} pounds`);
// so here we change dog1.name -> theName but the rest we name the same as the key inside the object


// heres an example with a nested object
const person = {
    name: 'Ironhacker',
    age: 25,
    favoriteMusic: 'Metal',
    address: {
      street: 'Super Cool St',
      number: 123,
      city: 'Miami',
    },
  };

//   let {
//     name:theName,
//     age,
//     favoriteMusic,
//     address: { street, number, city },
//   } = person;
  
//   console.log(`hello I am ${theName}, my address is ${number} ${street}`);




// destructuring arrays is much less popular and much less common
// the reason is because arrays often have an unpredictable amount of data and also 
// an unpredictable order
// whereas many times when we work with objects we have some sort of a schema that tells us which keys are in the object
// and for keys, not knowing the order is not an issue because they are order agnostic

const campuses = ['madrid', 'barcelona', 'miami'];

// const [first, second, third] = campuses;

// console.log(third);

// if you want to leave out one or more elements in the array it looks a little weird
// let [first, ,third] = campuses;
// here im grabbing the first and third element and leaving out the second by just putting commas
// console.log(third);



const europeanCampuses = [
    ['madrid', 'es'],
    ['barcelona', 'es'],
    ['berlin', 'de'],
    ['paris', 'fr'],
    ['amsterdam', 'nl'],
    ['lisbon', 'pt'],
  ];

  let [[city1, country1], [city2, country2]] = europeanCampuses;

//   console.log(city2, country2);


// the spread operator is not actually part of destructuring, but it was added to javascript at the same time
// the spread operator looks like 3 dots ... and it is used like this

const animals = ["hippo", "giraffe", "iguana"]
// console.log(animals);
// if i console log this^ i get an array with 3 things

// console.log(...animals);
// if i console log ^ this, i get the 3 things without the array on the outside
// why would i want this?

// first of all it is now the preferred way of making a shallow copy of an object or an array
// so if i do 
const animalsCopy = [...animals];
// by doing this i create a new array by putting my own square brackets around some values
// it just happens to be that those values are the same values as the ones in the animals array

// another use is to combines arrays or objects

const plants = ["snake plant", "basil", "lemongrass"];

const plantsAndAnimals = [...animals, ...plants];

// console.log(plantsAndAnimals);

// you can also flatten an array pretty easily by combining destructuring with the spread operator



// so if we want to flatten this array

const euroCampuses = [
    ['madrid', 'es'],
    ['barcelona', 'es'],
    ['berlin', 'de'],
    ['paris', 'fr'],
    ['amsterdam', 'nl'],
    ['lisbon', 'pt'],
  ];

  const [madridCampus, barcelonaCampus, berlinCampus, parisCampus, amsCampus, lisbonCampus] = euroCampuses;


//   console.log(madridCampus);

// const flattenedArray = [...madridCampus, ...barcelonaCampus, ...berlinCampus, ...parisCampus, ...amsCampus, ...lisbonCampus];

// console.log(flattenedArray[3]);




// when you use the ... inside of an object you are destructuring its called a rest operator
//  it literally stands for all the rest of the stuff in the object

const authors = ["Virginia Woolfe", "Emily Dickinson", "Ernest Hemingway", "Robert Bly", "JK Rowling", "Willia Carlos Williams", "Gary Paulsen"];
// const [vw, ed, eh, ...allOfEm] = authors;

// console.log(vw);
// i get virginia woolfe
// console.log(ed)
// i get emily dickinson
// console.log(allOfEm)
// i get all the rest



// its the same for objects
const studentInfo = {name: "Jonny Johnson", age: 28, active: true, graduated: false, currentModule: 3, balanceRemaining: 3000, homeTown: "Cape Town"};

let {name, age, active, graduated, ...everyThingElse} = studentInfo;

// console.log(name);
// jonny johnson
// console.log(active);
// true
// console.log(everyThingElse);
// a new object with all the rest of the stuff



// the arugments keyword in a javascript function
// =-=-=-=-=-=-=-=-=-=-=-=-=-=

function blah(first, second){
    console.log(arguments);
}
// inside any javascript function the word arguments is a magical word that references all the arguments being passed into it
// blah("hello", "goodbye", "anotherOne");

// this even works if you pass in more arguments than how many the function asked for
// why would we need this?
// its unusual but sometimes you dont know exactly how many arugments youre going to get

// for example

function addThemAll(){
    let total = 0;
    // if you want to loop over arguments it is necessary to turn it into an array
    // remember arguments is actually an object that has indexes for its keys so even though its a lot like an array
    // it isnt actually an array until you create an empty array and use the spread operator to fill it with the arguments
    [...arguments].forEach((num)=>{
        total += num;
    })
    console.log(total);
}


// addThemAll(5,5,4,6,3,7);
// so this works and i can call this function passing in many argument
// even though when i defined the function, i didnt put any arguments int he definition


let theClass = {
    startDate: "May 2nd", 
    courseName: "Ironhack RMTUS", 
    students: ["Amber", "Kseniia", "Daniel", "Jon", "Jonathan", "Courtney", "Derek"],
    projectStartDates: ["April 20th", "June 20th", "August 18th"],
    instructors: [{name: "Sandra"}, {name: "Nick"}, {name: "Marcos"}]
}

let {
    startDate,
    courseName,
    students: [student1, student2, student3, student4, student5, student6, student7],
    projectStartDates: [firstProj, secondProj, thirdProj],
    instructors: [{name:instructor1}, {name:instructor2}, {name:instructor3}]
  } = theClass;
//   one thing to remember is students and projectStartDate are not variables, only the variables
// that we defined inside those things are accessible to us

// the reason this one is difficult is because you must rename the name key in each isntructor
// because you cant have 3 variables all called name

  
console.log(instructor1);