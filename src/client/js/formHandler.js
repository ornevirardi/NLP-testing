import {checkForName} from '../js/nameChecker';

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('userInput').value
    checkForName(formText)
    let data = document.getElementById('clickMe').value

    if (Client.checkForName(formText)){
    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/Api',{
        method: "POST",
        credentials:'same-origin',
        headers: {
            "Content-Type": "application/json", "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data),

    })
    .then(function(res) {
        //document.getElementById('results').innerHTML = res.message
        document.getElementById('subjectivity').innerHTML=res.subjectivity
        document.getElementById('agreement').innerHTML=res.agreement
        document.getElementById('irony').innerHTML=res.irony
        document.getElementById('score_tag').innerHTML=res.score_tag
        document.getElementById('confidence').innerHTML=res.confidence
    })
}}   


export { handleSubmit }
