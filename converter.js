

// ( F -  32) * 5/9 = C
// C  *  9/5 + 32 = F
// use toFixed(1)?

/*Write a program that will convert a temperature from fahrenheit to celsius, or from celsius to fahrenheit.

In the HTML, have one input field where someone can enter in a temperature.
Create a radio button group where Celsius or Fahrenheit can be selected as the scale that the number should be converted to.
Create a block level element that will hold the text of the converted temperature.
Create a button that, when clicked, displays the converted temperature.
Create another button that, when clicked, clears any text in the input field.
Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.
If the temperature is greater than 90F/32C the color of the converted temperature should be red.
If the temperature is less than 32F/0C the color of the converted temperature should be blue.
For any other temperature, the color should be green.*/
// class dependent on what value is



var farChecked = document.getElementById("farConverter");
farChecked.addEventListener("change", function(event){
	console.log(event);
});
var celChecked = document.getElementById("celConverter");
var button = document.getElementById("converter");
var result = document.getElementById("result");
var clearButton = document.getElementById("clear");
document.addEventListener("keyup", function(event){
var key = event.which || event.keyCode; 
	if (key === 13) {
	getInput();
	} 
	// console.log("event", event);
	});


var toFarenheit = function(temp) {
	 // console.log(temp * 9/5 + 32);
    // var conversion = temp * 9/5 + 32 + " \u2109";
    var conversionToF = temp * 9/5 + 32; 
	printToDomF(Math.round(conversionToF));
	console.log("conversion",conversionToF);


};

console.log("toFarenheit", toFarenheit());

var toCelsius = function(temp) {
	// console.log(temp * 9/5 + 32);
	// var conversion = (temp - 32) * 5/9 + " \u2103";
	var conversionToC = (temp - 32) * 5/9;
	printToDomC(Math.round(conversionToC));
	console.log("conversion",conversionToC);
};
console.log("toCelsius", toCelsius());

function determineConverter (temp) {
	console.log(temp);
if (farChecked.checked) {
	toFarenheit(temp);
console.log("FTRUE", farChecked);
} else if (celChecked.checked) {
	toCelsius(temp);
console.log("CTRUE", celChecked);
} else {
	console.log("convertbtn didnt happen");
}
}


function getInput (){
	var temp = parseInt(document.getElementById("value").value);
	console.log("temp", temp);
	if (!temp) {
		alert("enter some digies dude");
	} else {
		determineConverter(temp);
	}
}

function printToDomC (conversionToC) {
	result.innerHTML = conversionToC;
	colorC(conversionToC);

}

function printToDomF (conversionToF) {
	result.innerHTML = conversionToF;
	colorF(conversionToF);

}


button.addEventListener("click", getInput); 
clearButton.addEventListener("click",clearBtn);


result.innerHTML = "";


function colorC(conversionToC) {
	switch (true) {
	case  (conversionToC > 32):
	result.style.color = "red";
	console.log(typeof(document.getElementById("result")));
	console.log(typeof(result));
	// console.log("> 32c", conversionToC);
	break;
	case (conversionToC < 0):
	result.style.color = "blue";
	// console.log("< 0c", conversionToC);
	break;
	default:
	console.log("change color not wrking",conversionToC);
}
}

function colorF(conversionToF) {
	switch (true) {
	case  (conversionToF > 90):
	result.style.color = "red";
	// console.log("> 90f", conversionToF);
	break;
	case (conversionToF < 32):
	result.style.color = "blue";
	// console.log("< 32f", conversionToF);
	break;
	default:
	console.log("change color not wrking",conversionToF);
}
}

function clearBtn () {
	result.innerHTML = "";
	console.log("clear", clearBtn);
}







