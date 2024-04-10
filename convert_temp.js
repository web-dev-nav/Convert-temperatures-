"use strict";

/* This function responsible for changing text lables */
var toggleDisplay = function(pass) {
	if (pass == "f_2_c") {
		document.querySelector("#degree_label_1").textContent = "Enter F degrees";
		document.querySelector("#degree_label_2").textContent = "Degrees Celsius";
		clearfield(); //clearup the text fields 
	}
	if (pass == "c_2_f") {
		document.querySelector("#degree_label_1").textContent = "Enter C degrees";
		document.querySelector("#degree_label_2").textContent = "Degrees Fahrenheit";
		clearfield();
	}
  };
 

/****************************
*  event handler functions  *
*****************************/

//Function is responsible for validating the input and data append
var convertTemp = function() {
	var type = document.querySelector('[name="conversion_type"]:checked').value;
	var entry = document.querySelector("#degrees_entered").value;
	
	if (type === "f_2_c") { //checking if we selected the right input radio button 

		if (isNaN(entry) ||  entry == '') {  //check if its not a number or fields is not null
			document.querySelector("#message").innerHTML = "You must enter a vaild number for Fahrenheit"; // show invalid alert in span
		    return;
		}

		document.querySelector("#degrees_computed").value = (((entry - 32) * 5) / 9).toFixed(0); //compute and append result 
		cleartxt(); //removing alert message
	} else {

		if (isNaN(entry) ||  entry == '') {  //check if its not a number or fields is not null
			document.querySelector("#message").innerHTML = "You must enter a vaild number for degrees"; // show invalid alert 
		    return;
		}
		document.querySelector("#degrees_computed").value = ((entry * 9) / 5 + 32).toFixed(0);
		cleartxt();
	}
  };

// funtion is responsible for changing the lables and passing the correct parameter
 var toCelsius = function() {
	var pass = document.querySelector("#to_celsius").value;
	toggleDisplay(pass); //calling toggleDisplay
  };

  // funtion is responsible for changing the lables and passing the correct parameter
  var toFahrenheit = function() {
	var pass = document.querySelector("#to_fahrenheit").value
	toggleDisplay(pass);
  };

// funtion is responsible for clearing input fields
  var clearfield = function() {
	document.querySelector("#degrees_entered").value = "";
	document.querySelector("#degrees_computed").value = "";
	cleartxt();
  };

// funtion is responsible for clearing alert message
  var cleartxt = function() {
	document.querySelector("#message").innerHTML = "";
  };



//Creating DOMContentLoaded when #convert button, #to_celsius, #to_fahrenheit input radio buttons are hit which calls the functions()
document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	document.querySelector("#convert").addEventListener("click", convertTemp);
    document.querySelector("#to_celsius").addEventListener("click", toCelsius);
    document.querySelector("#to_fahrenheit").addEventListener("click", toFahrenheit);
	
	// move focus
	document.querySelector("#degrees_entered").focus();
});