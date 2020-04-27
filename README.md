To run this code:
1. Clone it down
1. This project relies on access to the [Edemam API](https://developer.edamam.com/food-database-api-docs).
You will need to register there and obtain an app key and app id.  
For security purposes, do not push up that data to github. Note that the .gitignore includes `scripts/keys.js`. Create that file and add your info to it as an oject like so:
```
const app_keys = {
  app_id: "your id",
  app_key: "your key"
}
```
3. In the project root, run your dev server of choice ( serve and http-server are nice choices) 
