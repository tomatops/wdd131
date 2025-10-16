// Menu
const menu = document.querySelector('#menu');
const navigation = document.querySelector('ul');

menu.addEventListener("click", () => {
    navigation.classList.toggle("open");
});

// Create list & display results
const outcomeText = document.getElementById("outcome");
let results = JSON.parse(localStorage.getItem("results")) || [];

function createList() {
    resultsList.innerHTML = "";

    results.forEach(outcome => {
        const listItem = document.createElement("li");
        listItem.textContent = outcome;
        resultsList.appendChild(listItem);
    });

    localStorage.setItem("results", JSON.stringify(results))
}

// Clear results
const clearButton = document.getElementById("clear");

clearButton.addEventListener("click", () => {
    results = [];
    resultsList.innerHTML = "";
    outcome.innerHTML = "";
    localStorage.removeItem("results");
});

// Coin Toss
const generateCoin = document.getElementById("coin-flip");

if (generateCoin) {
    const coinOutcome = ["Heads", "Tails"];

    generateCoin.addEventListener("click", () => {
        const outcome = coinOutcome[(Math.random() * coinOutcome.length) | 0];
        outcomeText.textContent = outcome;
        results.push(outcome);

        createList();
    });
}
    
// Dice Roll
const generateDice = document.getElementById("dice-roll");

if (generateDice) {
    const diceOutcome = [1, 2, 3, 4, 5, 6];

    generateDice.addEventListener("click", () => {
        const outcome = diceOutcome[(Math.random() * diceOutcome.length) | 0];
        outcomeText.textContent = outcome;
        results.push(outcome);

        createList();
    });
}

// Random Turn
const nameInput = document.getElementById("nameInput");
const nameList = document.getElementById("nameList");
const resultsList = document.getElementById("resultsList");
const randomTurn = document.getElementById("random-turn");

if (nameInput && nameList && resultsList && randomTurn) {
    let names = JSON.parse(localStorage.getItem("names")) || [];

    function displayNames() {
        nameList.innerHTML = "";
        names.forEach(name => {
            const li = document.createElement("li");
            li.textContent = name;
            nameList.appendChild(li);
        });
    }

    localStorage.setItem("names", JSON.stringify(names));

    function disableButton() {
        randomTurn.disabled = names.length === 0;
    }

    // Add names
    const addName = document.getElementById("addName");

    if (addName) {
        addName.addEventListener("click", () => {
            const name = nameInput.value.trim();

            if (name) {
                names.push(name);
                displayNames();
                nameInput.value = "";
                nameInput.focus();

                disableButton();
            }
        });
    }

    // Clear names
    const clearNames = document.getElementById("clearNames");
    if (clearNames) {
        clearNames.addEventListener("click", () => {
            names.length = 0;
            resultsList.innerHTML = "";
            nameList.innerHTML = "";
            nameInput.value = "";

            localStorage.removeItem("names");

            disableButton();
        });
    }

    // Assign turn order
    randomTurn.addEventListener("click", () => {
        if (names.length === 0) return;

        const numbers = Array.from({ length: names.length }, (_, i) => i + 1);
        resultsList.innerHTML = "";

        names.forEach(name => {
            const index = Math.floor(Math.random() * numbers.length);
            const number = numbers.splice(index, 1)[0];

            const li = document.createElement('li');
            li.textContent = `${name} - ${number}`;
            resultsList.appendChild(li);
        });
    });

    disableButton();
}

createList();
displayNames();