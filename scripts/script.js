fetch("./scripts/countryList.json")
.then(response => {
   return response.json();
})
.then(jsondata => countries = jsondata);

// Get info about a country

let getCountry = () => document.querySelector('input').value;
let getAnswer = () => document.querySelector('input').value;

function getCountryInfo (country) {
    for (let i in countries) {
        if (countries[i].name == country)
            return countries[i].info;
    }
    return "No such country.";
}

function getCountryImage (country) {
    for (let i in countries) {
        if (countries[i].name == country)
            return countries[i].image;
    }
    return "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/800px-Question_mark_%28black%29.svg.png";
}

function displayCountry() {
    displayCountryInfo(getCountry());
    displayCountryImage(getCountry());
}

function displayRandomCountry(id) {
    displayCountryInfo(getCountryByID(id));
    displayCountryImage(getCountryByID(id));
}

let displayCountryInfo = (country) => document.getElementById("countryText").innerHTML = getCountryInfo(country);

let displayCountryImage = (country) => document.getElementById("countryImage").src = getCountryImage(country);

// Test info about a country
    
let generateRandomQuestion = () => Math.random(3);

let generateRandomID = () => Math.floor(Math.random() * countries.length);

let getCountryByID = (id) => countries[id].name;

function checkAnswer() {
    if (getAnswer() == getCountryByID()) {
        alert("Your answer is right. You will now be asked another question.\nIf you want to stop the quiz press Cancel.");
        checkAnswer();
    }
    else
        alert("Your answer is wrong. Your quiz will now be stopped.");
}