// import functions and grab DOM elements
const textInput = document.getElementById('text-input');
const inputButton = document.getElementById('input-button');
const pushedHTML = document.getElementById('pushedHTML');

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

let stuff = [];

inputButton.addEventListener('click', () => {
    let textValue = textInput.value; 
    stuff.push(textValue);
    displayStuff();
});

function displayStuff() {
  // will clear out whateve'rs in the list 
  // loop through each item in stuff
  // create an li w/item
  // append li to the list
    pushedHTML.textContent = '';
    for (let thing of stuff) {
        const li = document.createElement('li');
        li.textContent = thing;
        pushedHTML.append(li);
    }
}