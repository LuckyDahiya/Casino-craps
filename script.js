function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollDice() {
    return rollDie() + rollDie();
}

function playCraps() {
    let firstRoll = rollDice();
    let resultDiv = document.getElementById('gameResult');
    let rollsDiv = document.getElementById('rolls');
    
    resultDiv.innerHTML = `You rolled: ${firstRoll}`;
    rollsDiv.innerHTML = "";

    if (firstRoll === 2 || firstRoll === 3 || firstRoll === 12) {
        resultDiv.innerHTML += "<br>Craps! You lose.";
        return;
    }

    if (firstRoll === 7 || firstRoll === 11) {
        resultDiv.innerHTML += "<br>Natural! You win.";
        return;
    }

    let point = firstRoll;
    resultDiv.innerHTML += `<br>Your point is: ${point}. Keep rolling...`;

    while (true) {
        let newRoll = rollDice();
        rollsDiv.innerHTML += `You rolled: ${newRoll}<br>`;

        if (newRoll === point) {
            rollsDiv.innerHTML += "You hit your point! You win.";
            return;
        }

        if (newRoll === 7) {
            rollsDiv.innerHTML += "You rolled a 7! You lose.";
            return;
        }
    }
}

document.getElementById('rollButton').addEventListener('click', playCraps);
