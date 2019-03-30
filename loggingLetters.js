var sentence = "I love learning software development";

for (var i=0; i < sentence.length; i++) {
	if(sentence[i] !== " "){
		console.log(sentence[i]);
	}
}

var n = 25;
var result = 0;
var compare;

for (n; n > 0; n--) {
	compare = n % 2;
	if(n % 2 == 0){
		result = result + 10;
	}
	else {
		result = result - n;
	}
	console.log(result);
}

n = 25
var sum = 0

for (n; n > 0; n--) {
	if (n - 1 > 0){
		sum = sum + (n - 1);
		console.log(sum);
	}
}

// Check to see if the user likes cake
var likesCake = confirm("Do you like cake?");
// If the user likes cake, find out what their favorite cake is
if (likesCake) {
    var favoriteCake = prompt("What is your favorite cake?");
    // Alert them that their favorite cake is whatever they inputted 
    // from the prompt() function
    alert("Your favorite cake is: " + favoriteCake);
} else {
    // If the user doesn't like cake, show an alert that the cake is a lie
    alert("The cake is a lie anyhow.");
}

function sayHello(myName) {
    if (myName == "Mr. Grinch") {
        alert("You're a mean one, " + myName);
    } else {
        alert('Hello, ' + myName);
    }
}

sayHello(prompt("What's your name?"));








