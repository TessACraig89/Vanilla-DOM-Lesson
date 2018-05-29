/// Jquery
// Find / retrieve an element
const container = document.querySelector("#container");

console.log(container);


const secondImg = document.querySelector("#second-img");

console.log(secondImg);


const infoElements = document.querySelectorAll(".info");

console.log(infoElements);

// Alter an element's HTML
const firstP = document.querySelector("#first-p");

firstP.innerHTML = '<strong>Put your hands where I can see \'em, so they look like 12pm</strong>'

// Create a new element
const newDiv = document.createElement('div');

console.log(newDiv);

// Append an element to the body
document.body.appendChild(newDiv);

// Append an element to a retrieved element
const firstSection = document.querySelector('#first-section');

const someP = document.createElement('p');

firstSection.appendChild(someP);

//Create an element and give it an attribute before appending it

const newImg = document.createElement('img');

newImg.src = ' https://www.w3schools.com/w3css/img_lights.jpg'

document.body.appendChild(newImg);

//Create an element and give it an id
const newSection = document.createElement('section');

newSection.id = "butterfly"

document.body.appendChild(newSection);

//Get a list of the classes given to an element
const firstSectionClasses = firstSection.classList;

console.log(firstSectionClasses);

//Add a class to an element
firstSection.classList.add('wdi-remote-gizmo');

//See if a class has been added to an element
console.log(firstSectionClasses.contains('wdi-remote-gizmo'));

//Remove a class from an element
firstSection.classList.remove('wdi-remote-gizmo');
