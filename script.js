// BMI Calculator

// Variables
var heightM = document.getElementById("heightm");
var weightM = document.getElementById("weightm");
var heightE = document.getElementById("heighte");
var weightE = document.getElementById("weighte");


var bmiText = document.getElementById("bmi");
var cat = document.getElementById("cat");
var plan = document.getElementById("plan");
var Category = ["Underweight", "Average", "Overweight", "Obese", "Null"];
var Plan = ["Underweight Diet plan", "Average Diet Plan", "Overweight Diet Plan", "Special diet plan", "Null"];

 // Metric Convertion

function computeMetric() {
		var height = parseFloat(heightM.value);
   var weight = parseFloat(weightM.value);
   var bmi;
   var x;
   
   var ConvertionM = height / 100;
   var meter2 = ConvertionM * ConvertionM;
   
   bmi = Math.round((weight / meter2) * 10) / 10;
   
   // BMI = weight(kg) / height(m.squared)
   		
   		if (bmi < 18) {
   				x = 0;
   		}
   		 else if(bmi > 18 && bmi < 25) {
   				x = 1;
   		}
   		else if(bmi > 25 && bmi < 30){
   				x = 2;
   		}
   		else if(bmi > 30){
   				x = 3;
   		}
   		else {
   				x = 4;
   		}
   		bmiText.innerText = bmi;
   		cat.innerText = Category[x];
    	plan.innerText = Plan[x];
    	
    	alert("Success! See Results Below");
}

// English Convertion

function computeEnglish() {
		var height = parseFloat(heightE.value);
   var weight = parseFloat(weightE.value);
   var bmi;
   var x;
   
   bmi = Math.round(((weight / height / height) * 703) * 10) / 10;
   
   		
   		if (bmi < 18) {
   				x = 0;
   		}
   		 else if(bmi > 18 && bmi < 25) {
   				x = 1;
   		}
   		else if(bmi > 25 && bmi < 30){
   				x = 2;
   		}
   		else if(bmi > 30) {
   				x = 3;
   		}
   		else {
   				x = 4;
   		}
   		bmiText.innerText = bmi;
   		cat.innerText = Category[x];
    	plan.innerText = Plan[x];
    	
    	alert("Success! See Results Below");
}


// Night Mode variables

var nightMode = document.getElementById("nightmode");
var nmToggle = document.getElementById("nmToggle");
var pageHead = document.getElementById("pageHead");
var pcontainer = document.querySelectorAll(".pcontainer");
var workoutControl = document.getElementsByClassName("modal-controls");
var workoutModal = document.getElementsByClassName("modal-container");
var workoutHidden = document.getElementsByClassName("hidden-content");
var aver = document.getElementById("aver");
var under = document.getElementById("under");
var over = document.getElementById("over");
var avtbl = document.getElementById("avtbl");
var untbl = document.getElementById("untbl");
var ovtbl = document.getElementById("ovtbl");
var bmiResult = document.getElementsByClassName("result-box");
var aboutContent = document.getElementsByClassName("about-content");


// Function nightmode when clicked 

function nightmode() {
   
   if (nmToggle.checked !== true) { // switch to dark mode
   
   		nightMode.style.color = "#55d5ff";
   		document.body.style.background = "#121212";
   		document.body.style.color = "#f5f5f5";
   		pageHead.style.background = "#3e3e3e";
   		pcontainer[0].style.background = "#2a2a2a";
     pcontainer[1].style.background = "#2a2a2a";
     pcontainer[2].style.background = "#2a2a2a";
     workoutControl[0].style.background = "#2a2a2a"
     workoutModal[0].style.background = "#30475E";
     workoutModal[1].style.background = "#30475E";
     workoutModal[2].style.background = "#30475E"; 
     workoutModal[3].style.background = "#30475E";
     workoutHidden[0].style.background = "#2a2a2a";
     workoutHidden[1].style.background = "#2a2a2a"; 
     workoutHidden[2].style.background = "#2a2a2a"; 
     workoutHidden[3].style.background = "#2a2a2a";
     workoutHidden[4].style.background = "#2a2a2a"; 
     workoutHidden[5].style.background = "#2a2a2a"; 
     workoutHidden[6].style.background = "#2a2a2a"; 
     workoutHidden[7].style.background = "#2a2a2a";
     aver.style.background = "#2a2a2a";
     under.style.background = "#2a2a2a"; 
     over.style.background = "#2a2a2a";
     avtbl.style.color = "#2a2a2a";
     untbl.style.color = "#2a2a2a"; 
     ovtbl.style.color = "#2a2a2a";
     bmiResult[0].style.background = "#2a2a2a";
     aboutContent[0].style.background = "#2a2a2a";
   }
    else { // revert to Light mode
    
   		nightMode.style.color = "";
   		document.body.style.background = "";
   		document.body.style.color = "";
   		pageHead.style.background = "";
     pcontainer[0].style.background = "";
     pcontainer[1].style.background = "";
     pcontainer[2].style.background = "";
     workoutControl[0].style.background = "";
     workoutModal[0].style.background = "";
     workoutModal[1].style.background = ""; 
     workoutModal[2].style.background = ""; 
     workoutModal[3].style.background = "";
     workoutHidden[0].style.background = "";
     workoutHidden[1].style.background = ""; 
     workoutHidden[2].style.background = ""; 
     workoutHidden[3].style.background = "";
     workoutHidden[4].style.background = ""; 
     workoutHidden[5].style.background = ""; 
     workoutHidden[6].style.background = ""; 
     workoutHidden[7].style.background = "";
     aver.style.background = "";
     over.style.background = ""; 
     under.style.background = "";
     bmiResult[0].style.background = "";
     aboutContent[0].style.background = "";
   }
}
