
let theButton = document.getElementById("fetch-button");


// theButton.onclick = function(){
//   fetch("https://api.spacexdata.com/v4/launches")
//   .then((response) => { 
//     return response.json();
//   })
//   .then((jsonResponse) => {
//     let mainDiv = document.getElementById("main");

//     let heading = document.createElement("h3");
//     heading.innerHTML = "Launch Summary";
//     mainDiv.appendChild(heading);
    
//     let theActualSummary = document.createElement("p");
//     theActualSummary.innerHTML = jsonResponse[0].details;
//     mainDiv.appendChild(theActualSummary);

//     const patchImage = jsonResponse[0].links.patch.small;
//     console.log(patchImage);
//     const imgElement = document.createElement("img");
//     imgElement.setAttribute("src", patchImage);
//     imgElement.setAttribute("width", 200);
//     mainDiv.appendChild(imgElement);


//     console.log("Parsed response: ", jsonResponse[0]);
//   })
//   .catch((err) => console.log("Something went wrong!", error));
// }



// theButton.onclick = populateData;

// async function populateData(){

//   const origResult = await fetch("https://api.spacexdata.com/v4/launches");

//   const jsonRes = await origResult.json();

 
//     let mainDiv = document.getElementById("main");

//     let heading = document.createElement("h3");
//     heading.innerHTML = "Launch Summary";
//     mainDiv.appendChild(heading);
    
//     let theActualSummary = document.createElement("p");
//     theActualSummary.innerHTML = await jsonRes[0].details;
//     mainDiv.appendChild(theActualSummary);

//     const patchImage = await jsonRes[0].links.patch.small;
//     const imgElement = document.createElement("img");
//     imgElement.setAttribute("src", patchImage);
//     imgElement.setAttribute("width", 200);
//     mainDiv.appendChild(imgElement);



  // .catch((err) => console.log("Something went wrong!", error));
// }