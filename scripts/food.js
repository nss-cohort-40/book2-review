// dependencies: none

// represent some data as HTML
function createFoodComponent(foodObj) {
  return `
    <h2>${foodObj.name}</h2>
    <h3>This is some food stuff</h3>
    <img src=${foodObj.image}>
  `
}

// Dynamically update the DOM by inserting a food component (string of HTML)
function AddFoodComponentToDom(foodComponent, element) {
  document.querySelector(`#${element}`).innerHTML += foodComponent
}
