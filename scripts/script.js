fetch("./scripts/countryList.json")
.then(response => {
   return response.json();
})
.then(jsondata => countries = jsondata);

// Get info about a country

let getCountry = () => prompt("Name a Country", "Germany");

function getCountryInfo (country) {
    let info = "You canceled the quiz.";
    for (let i in countries) {
        if (countries[i].name == country)
            info = countries[i].info;
    }
    return info;
}

let printCountryInfo = () => alert(getCountryInfo(getCountry()));
let printRandomCountryInfo = () => alert(getCountryInfo(getCountryByID(generateRandomID())));

// Test info about a country
    
// let generateRandomQuestion = () => Math.random(3);

let generateRandomID = () => Math.floor(Math.random() * countries.length);

let getCountryByID = (id) => countries[id].name;

let testCountryInfo = () => prompt(getCountryInfo(getCountryByID(generateRandomID())));

function checkAnswer() {
    if (testCountryInfo() == getCountryByID()) {
        alert("Your answer is right. You will now be asked another question.\nIf you want to stop the quiz press Cancel.");
        checkAnswer();
    }
    else
        alert("Your answer is wrong. Your quiz will now be stopped.");
}