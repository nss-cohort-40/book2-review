// dependencies: keys.js

// This module's job is to interact with the data from an external API

function getAPIFood(searchTerm) {
  let apiUrl = "https://api.edamam.com/api/food-database/parser"
  let apiId = app_keys.app_id
  let apiKey = app_keys.app_key

  return fetch(`${apiUrl}?ingr=${searchTerm}&app_id=${apiId}&app_key=${apiKey}`)
  .then( foodData => foodData.json())
}
