console.log('Test, JavaScript werkt!');


const myButton = document.getElementById("loveButton");	// global variable
const myText = document.getElementById("clickText"); 		// global variable

let clicked = 0;																				// global variable

if(myButton){ 																					// alleen uitvoeren als myButton aanwezig is
myButton.addEventListener('click', function handleClick() {
		clicked++;
		myText.innerText = `Je hebt ${clicked} keer op mij geklikt!`;
	});
}


// bron: https://stackoverflow.com/questions/21336881/how-to-get-the-age-from-input-type-date-using-html-js
const inputDate = document.getElementById("bday");

if (inputDate){																					// indien inputDate op die specifieke html page staat, voer dan de functie uit.
inputDate.addEventListener('change', function(){				// wanneer een pagina laadt, heet het een event. Event 'change' wordt uitgevoerd in het geval dat de user iets veranderd in de input type.
	 let stringDate = "Jouw verjaardag is op: ";
	 const bdateInput = inputDate.value;									// haalt de waarde die is ingevuld uit de input type date
	 const bday = +new Date(bdateInput);
	 stringDate += bdateInput + ", jij bent " + ~~ ((Date.now() - bday) / (31557600000)) + "."; // Hier wordt de leeftijd uitgerekend
	 const theBday = document.getElementById('resultBday');
	 theBday.innerHTML = stringDate;											// hier komt het allemaal in theBday (p) te staan in de HTML.
	});
}


const resetButton = document.getElementById("resetButton");
const myFormIndex = document.getElementById("signUpForm");
const myFormText = document.getElementById("addTextForm")

if (resetButton){																				// indien resetButton op die specifieke html page staat, voer dan de functie uit.
	if (myFormIndex){
resetButton.addEventListener('click', function(){				// reset het formulier
  myFormIndex.reset();
	} if (myFormText){
	myFormText.reset();
	}
	return;
	});
}


const alertButton = document.getElementById("alertBox");

if (alertButton){																				// indien alertButton op die specifieke html page staat, voer dan de functie uit.
alertButton.addEventListener('click', function(){
	 alert('Weet u zeker dat u alles goed heeft ingevuld? Dan word je profiel nu aangemaakt!')
	})
}


// bron: https://www.webtrickshome.com/faq/how-to-display-uploaded-image-in-html-using-javascript
const profilePic = document.getElementById("inputProfilePic");

if(profilePic){																					// indien profilePic op die specifieke html page staat, voer dan de functie uit.
	profilePic.addEventListener('change', function(event){ // wanneer een pagina laadt, heet het een event. Event 'change' wordt uitgevoerd in het geval dat de user iets veranderd in de input type.
		const image = document.getElementById('output');    // de img tag waar de geuploade afbeelding in gepreviewd wordt.
		image.src = URL.createObjectURL(event.target.files[0]);
	})
}
