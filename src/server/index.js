//Disclaimer: most of the code for fetch the API, get, post, middleware, dependencies & server set up is taken from a former Udacity project. The URL for MY github, where the project is public, is: https://github.com/ornevirardi/weather_journal_app. I also made references to the classes: https://classroom.udacity.com/nanodegrees/nd0011/parts/cd0429/modules/d153872b-b417-4f32-9c77-d809dc21581d/lessons/ls1846/concepts/96d7d320-f8a8-4210-b502-c8de300b745e ; https://classroom.udacity.com/nanodegrees/nd0011/parts/cd0429/modules/d153872b-b417-4f32-9c77-d809dc21581d/lessons/ls1846/concepts/7232b6f5-7e1b-4f5e-87f1-aa6871e29868 . The dotenv is taken from Udacity's project instructions.

const dotenv = require("dotenv");
dotenv.config();

const fetch = require('node-fetch')
var path = require("path");
const express = require("express");
const app = express();
app.use(express.static('dist'))

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require("cors");
const { request } = require("http");
app.use(cors());


app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log("App is succesfully running on port 8080!");
});

//Declare API Credentials

const baseURL = "https://api.meaningcloud.com/sentiment-2.1?key=";
const apiKey = process.env.API_KEY;

export {baseURL}

console.log(`Your API key is ${process.env.API_KEY}`);
console.log(__dirname)

app.post('/Api', async (request, response)=>{
    const meaning_url = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&lang=auto&url=${request.body.data}`
    const api_data = await fetch(meaning_url);
    try {
      console.log("Fetching MeaningCloud Data")
      const api_data_json = await api_data.json();
      res.send(api_data_json)
      console.log(api_data_json);
    }catch (error){
      console.log("There has been an error, try again!");
    }
});

 
