function rollDice() {
  return ((Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1));
}

function spendAllTheMoney() {
	var startingMoney = startingBet;
	var highestMoneyAmount = startingBet
	var numberOfRolls = 0
	var highestMoneyRollCount = 0
	while (startingBet > 0) {
		if (startingBet < 1) {
			alert("You can have your $" + startingBet + " change back.");
			break;
		}
		numberOfRolls ++;
		if (rollDice() == 7) {
			startingBet += 4;
			if (startingBet > highestMoneyAmount) {
				highestMoneyAmount = startingBet;
				highestMoneyRollCount = numberOfRolls;
			}
		} else {
			startingBet --;
		}
	console.log(1);
	}
}


function validateItems() {
	var startingBet = document.forms["gamblingFun"]["startingBet"].value;
	if (startingBet == "" || isNaN(startingBet) || startingBet < 1) {
		alert("Starting bet must be filled in with a number greater than 0.");
		document.forms["gamblingFun"]["startingBet"].focus();
		return false;
	}
	spendAllTheMoney();	
	document.getElementById("results").style.display = "block";
	document.getElementById("startingMoney").innerText = Number(startingMoney);
	document.getElementById("numberOfRolls").innerText = Number(numberOfRolls);
	document.getElementById("highestMoneyAmount").innerText = Number(highestMoneyAmount);
	document.getElementById("highestMoneyRollCount").innerText = Number(highestMoneyRollCount);
	// We are returning false so that the form doesn't submit 
	// and so that we can see the results
	return false;
}


