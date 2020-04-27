// dependencies: food.js and api.js

let searchInput = document.querySelector("#search-input")

document.querySelector("#search-results").addEventListener("click", (event) => {
  getAPIFood(searchInput.value)
  .then( (foodData) => {
    // Remove any previous search results from the element where the search results go
    document.querySelector("#search-results").innerHTML = ""

    // Execute the functions from food.js in order to respresent our newly fetched API data as HTML
    AddFoodComponentToDom(createFoodComponent(
      {
        name: foodData.parsed[0].food.label,
        image: foodData.parsed[0].food.image
      }), "search-results")
  })
})
