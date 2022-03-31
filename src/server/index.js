//Disclaimer: most of the code for fetch the API, get, post, middleware, dependencies & server set up is taken from a former Udacity project. The URL for MY github, where the project is public, is: https://github.com/ornevirardi/weather_journal_app. I also made references to the classes: https://classroom.udacity.com/nanodegrees/nd0011/parts/cd0429/modules/d153872b-b417-4f32-9c77-d809dc21581d/lessons/ls1846/concepts/96d7d320-f8a8-4210-b502-c8de300b745e ; https://classroom.udacity.com/nanodegrees/nd0011/parts/cd0429/modules/d153872b-b417-4f32-9c77-d809dc21581d/lessons/ls1846/concepts/7232b6f5-7e1b-4f5e-87f1-aa6871e29868 . The dotenv is taken from Udacity's project instructions.
const dotenv = require("dotenv");
dotenv.config();
var path = require("path");
const express = require("express");
const app = express();
app.use(express.static("dist"));
console.log(__dirname);
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());
const fetch = require("node-fetch");


//Global Variables & functions
const baseURL = "https://api.meaningcloud.com/sentiment-2.1?key=";
const apiKey = process.env.API_KEY;
const restUrl = "&lang=auto&url=";

console.log(`Your API key is ${process.env.API_KEY}`);

// designates what port the app will listen to for incoming requests

const port = 1928;
const server = app.listen(port, listening);

function listening() {
  console.log("Yay! The server is running!");
  console.log(`Running on localhost: ${port}`);
}

app.get("/", function (req, res) {
  res.sendFile(path.resolve("dist/index.html"));
});

//Fetch data from MeaningCloud and store it to use in performAction
async function getMeaningData(userInput) {
  let meaning_url = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&of=json${restUrl}${userInput}`;
  const api_data = await fetch(meaning_url);
  console.log(`Raw data from MeaningCloud: ${api_data}`);
  try {
    console.log("Fetching Data from MeaningCloud");
    const api_data_json = await api_data.JSON();
    console.log(api_data_json);
  } catch (error) {
    console.log("There has been an error, try again!");
  }
}

app.post("/data", callbackFunction);
async function callbackFunction(req, res) {
  res.send(await getMeaningData(req.body.userInput));
}
