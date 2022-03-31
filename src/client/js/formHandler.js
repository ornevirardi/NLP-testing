// import { cli } from 'webpack-dev-server';
import {checkForName} from '../js/nameChecker';

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('userInput').value
    checkForName(formText)
    if (Client.checkForName(formText)){
    console.log("::: Form Submitted :::") 
    getMeaningData("http://localhost:1928/data", formText ).then(() => updateUI());
    }};

export { handleSubmit }


//Helper functions: 
async function getMeaningData(url, userInput) {
    const response = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInput),
    });
  
    try {
      const newData = await response.JSON();
      console.log(newData);
      return newData;
    } catch (error) {
      console.log("error", error);
    }
  };  

const updateUI = async () => {
    const request = await fetch("http://localhost:1928/data");
    try {
      const allData = await request.JSON();
    document.getElementById("subjectivity").innerHTML = `Subjectivity: ${allData.subjectivity}`;
    console.log(allData.subjectivity);
    document.getElementById("agreement").innerHTML = `Agreement: ${allData.agreement}`;
    console.log(allData.agreement);
    document.getElementById("irony").innerHTML = `Irony: ${allData.irony}`;
    console.log(allData.irony);
    document.getElementById("score_tag").innerHTML = `Score Tag ${allData.score_tag}`;
    console.log(allData.score_tag);
    document.getElementById("confidence").innerHTML = `Confidence ${allData.confidence}`;
    console.log(allData.confidence);
    } catch (error) {
      console.log("error", error);
    }
  };
