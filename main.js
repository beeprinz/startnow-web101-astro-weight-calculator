 //Write your JavaScript code here!
 var planets = [
     ['Pluto', 0.06],
     ['Neptune', 1.148],
     ['Uranus', 0.917],
     ['Saturn', 1.139],
     ['Jupiter', 2.640],
     ['Mars', 0.3895],
     ['Moon', 0.1655],
     ['Earth', 1],
     ['Venus', 0.9032],
     ['Mercury', 0.377],
     ['Sun', 27.9]
   ];

//step 1. attempt
// Use the following built-in methods:
// `.forEach` `document.createElement` `document.getElementById` `.appendChild` 

planets.forEach(element); //forEach calls a function for each element in an array. calling function named element inside the planets array
function element (item){ //named the function element, selecting item which we defined as position 0 in array
    
    item = item[0]; //element 0 in each array which will be the planet names
    
    var newOption = document.createElement('option'); // creates an <option> element and assigns it to a variable named newOption
    newOption.text = item; //?
    newOption.value = item; //?

    //this section takes the option and appends it to the list
    var list = document.getElementById('planets'); 
    list.appendChild(newOption);
    
};
  
 

function calculateWeight(weight, planetName) {
 for(var i = 0; i < planets.length; i++) {
  const gravity = planets[i][1];
   currentPlanet = planets[i][0]; 
if(currentPlanet === planetName) { 
  return (gravity * weight);
  // how to console.log this: console.log(calculateWeight(150, "Pluto"))
} 
}
}


function handleClickEvent() {
let userWeight = document.getElementById("user-weight").value;
let sel = document.getElementById("planets");
var planetName = sel.options[sel.selectedIndex].value;
let result = calculateWeight(userWeight, planetName);
document.getElementById("output").innerHTML="If you were on " + planetName + ", you would weigh " + result + "lbs!";
}


  // Bonus Challenges
  // 8. Reverse the drop down order so that the sun is first.
  // 9. Make it look nice using bootstrap (http://getbootstrap.com/getting-started/)