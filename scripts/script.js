fetch("../scripts/countryList.json")
.then(response => {
   return response.json();
})
.then(jsondata => countries = jsondata);

// Get info about a country

let text = "This site consists of a homepage and two games related to geography and history, which can be found at the 'Info' and 'Quiz' page, and a 'Contact Us' page. In the first game, located in the 'Info' page, you can enter any country's name or choose a random country from the 'Display Random Country' button and the game will show you information about that particular country along with an image of it on the world map. In the second game, located in the 'Quiz' page, you can test your knowledge by answering questions related to the history of a randomly-picked country. You can use the 'Contact Us' form if you have any questions or suggestions related to our games."
var country;
var score = 0;

var inQuiz = false;

let questions = [
    "Guess the country based on its info",
    "Guess the country based on its image"
]

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

function getCountryCreation (country) {
    for (let i in countries) {
        if (countries[i].name == country)
            return countries[i].creation;
    }
    return "";
}

let displayCountryInfo = (country) => document.getElementById("countryText").innerHTML = getCountryInfo(country);

let displayCountryImage = (country) => document.getElementById("countryImage").src = getCountryImage(country);

let displayCountryCreation = (country) => document.getElementById("countryCreation").innerHTML = getCountryCreation(country);

function displayCountry() {
    displayCountryInfo(getCountry());
    displayCountryImage(getCountry());
    displayCountryCreation(getCountry());
}

function displayRandomCountry(id) {
    displayCountryInfo(getCountryByID(id));
    displayCountryImage(getCountryByID(id));
    displayCountryCreation(getCountryByID(id));
}

function displayCountryQuizInfo(countryID) {
    document.getElementById("countryText").innerHTML = "______" + (countries[countryID].info).substr((countries[countryID].name).length);
}

// Test info about a country
    
let generateRandomQuestion = () => Math.floor(Math.random() * 2);

let generateRandomID = () => Math.floor(Math.random() * countries.length);

let getCountryByID = (id) => countries[id].name;

function startQuiz(questionID) {
    countryID = generateRandomID();
    country = getCountryByID(countryID);
    document.getElementById("countryQuestion").innerHTML = questions[questionID];
    document.getElementById("countryStart").innerHTML = "Stop Quiz";
    document.getElementById("countryStart").setAttribute("onClick","javascript: stopQuiz();");
    if (!questionID) {
        displayCountryQuizInfo(countryID);
        displayCountryCreation(country);
    }
    else
        displayCountryImage(country);
    inQuiz = true;
}

function continueQuiz() {
    document.getElementById("countryQuestion").innerHTML = "Correct Answer";
    document.getElementById("countryStart").innerHTML = "Next Question";
    document.getElementById("countryStart").setAttribute("onClick","javascript: startQuiz(generateRandomQuestion());");
    document.getElementById("countryText").innerHTML = text;
    displayCountryImage("");
    displayCountryCreation("");
}

function wrongAnswer() {
    document.getElementById("countryQuestion").innerHTML = `Wrong Answer`;
    document.getElementById("countryCorrect").innerHTML = `Correct answer: ${country}`;
    document.getElementById("countryStart").innerHTML = "Stop Quiz";
    document.getElementById("countryStart").setAttribute("onClick","javascript: stopQuiz();");
}

function stopQuiz() {
    document.getElementById("countryQuestion").innerHTML = "Press Start to start the quiz";
    document.getElementById("countryStart").innerHTML = "Start Quiz";
    document.getElementById("countryStart").setAttribute("onClick","javascript: startQuiz(generateRandomQuestion());");
    document.getElementById("countryText").innerHTML = text;
    displayCountryImage("");
    displayCountryCreation("");
    score = 0;
    inQuiz = false;
    document.getElementById("countryScore").innerHTML = score;
    document.getElementById("countryCorrect").innerHTML = ``;
}

function checkAnswer() {
    if (inQuiz) {
        if (getAnswer() == country) {
            score++;
            document.getElementById("countryScore").innerHTML = score;
            continueQuiz();
        }
        else
            wrongAnswer();
    }
}