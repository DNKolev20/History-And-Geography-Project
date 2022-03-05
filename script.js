let countryList = [
    {
        name: "Bulgaria",
        creation: 681,
        info: "This country is the largest exporter of rose oil and is the oldest country in Europe. It's predecessor is Old Great Bulgaria by Khan Kubrat."
    },
    {
        name: "Germany",
        creation: 1871,
        info: "Otto von Bismarck united the German Confederations in 1871 by fighting Austria-Hungary and France."
    },
    {
        name: "Austria",
        creation: 000,
        info: "This country is a landlocked country in the southern part of Central Europe, located on the Eastern Alps. The country is composed of nine federated states, one of which is Vienna, Austria's capital and largest city. Austria has a population of nearly 9 million people. Austrian German is the country's official language.Austria is a parliamentary representative democracy with a directly elected Federal President as head of state and a Chancellor as head of the federal government. Major urban areas of the country include Vienna, Graz, Linz, Salzburg and Innsbruck."
    }
];

// Get info about a country

let getCountry = () => prompt("Name a Country", "Germany");

function getCountryInfo(country) {
    let info = "You canceled the quiz.";
    for (let i in countryList) {
        if (countryList[i].name == country)
            info = countryList[i].info;
    }
    return info;
}

let printCountryInfo = () => alert(getCountryInfo(getCountry()));
let printRandomCountryInfo = () => alert(getCountryInfo(getCountryByID(generateRandomID())));

// Test info about a country

// let generateRandomQuestion = () => Math.random(3);

let generateRandomID = () => Math.floor(Math.random() * countryList.length);

let getCountryByID = (id) => countryList[id].name;

let testCountryInfo = () => prompt(getCountryInfo(getCountryByID(generateRandomID())));

function checkAnswer() {
    if (testCountryInfo() == getCountryByID()) {
        alert("Your answer is right. You will now be asked another question.\nIf you want to stop the quiz press Cancel.");
        checkAnswer();
    }
    else
        alert("Your answer is wrong. Your quiz will now be stopped.");
}