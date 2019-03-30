// I could not figure out what was going wrong with my code



//function clearErrors() {
//	for (var loopCounter = 0; loopCounter < document.forms["numberFun"].elements.length; loopCounter++) {
//		if (document.forms["numberFun"].elements[loopCounter]
//			.parentElement.className.indexOf("has-") != -1) {
//           
//			document.forms["numberFun"].elements[loopCounter]
//			.parentElement.className = "form-group";
//			}
//	}
//}

function validateItems() {
//	clearErrors();
	var num1 = document.forms["numberFun"]["number1"].value;
	var num2 = document.forms["numberFun"]["number2"].value;
	var stepNum = document.forms["numberFun"]["stepNumber"].value;
	if (num1 == "" || isNaN(num1)) {
		alert("Starting number must be filled in with a number.");
		document.forms["numberFun"]["number1"]
           .parentElement.className = "form-group has-error";
		document.forms["numberFun"]["number1"].focus();
		return false;
	}
	if (num2 == "" || isNaN(num2) || num2 <= num1) {
       alert("Ending number must be filled in with a number greater than the starting number.");
       document.forms["numberFun"]["number2"]
          .parentElement.className = "form-group has-error"
       document.forms["numberFun"]["number2"].focus();
       return false;
    }
	if (stepNum == "" || isNaN(stepNum) || stepNum < 1) {
		alert("Step number must be filled in with a number greater than zero.");
		document.forms["numberFun"]["stepNumber"]
			.parentElement.className = "form-group has-error"
		document.forms["numberFun"]["stepNumber"].focus();
		return false;
	}
	displayEvenNumbers();
	return false;
}

function displayEvenNumbers() {
	var allOfEvens = "";
	var informationSentence = "";
	console.log(num1)
	informationSentence = "Here are the even number(s) between " + num1.value + " and " + num2.value + " by " + stepNum.value + "'s:";
//	for (num1; num1 < num2; num1 += stepNum) {
//		if (num1 % 2 == 0) {
//			allOfEvens += num1.toString();
//			allOfEvens += " ";
//			console.log(allOfEvens);
//		}
//	}
//	while (num1 < num2) {
//		console.log(num1);
//		if (num1 % 2 == 0) {
//			allOfEvens += num1.toString();
//			allOfEvens += " ";
//			console.log(allOfEvens);
//		}
//		num1 += stepNum;
//	}
//	if arrayOfEvens = [] {
//		document.getElementById("information") .innerText = "There are no even numbers in this range stepping by " + stepNum + "'s.";
//	} else {
		document.getElementById("information").innerText = informationSentence;
		document.getElementById("allEvens").innerText = allOfEvens;
//	}
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	