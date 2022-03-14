function checkForName() {
    const expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);
    var url = URL;
    if (regex.test(url) === true) {
        return "Valid URL";
    } else {
        return "Invalid URL";
    }
}

export {checkForName}

//code taken form: https://www.geeksforgeeks.org/how-to-validate-url-using-regular-expression-in-javascript/. The url was provided by a mentor in one of my questions: https://knowledge.udacity.com/questions/799798

