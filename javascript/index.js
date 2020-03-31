console.log('Test, JavaScript werkt!');

// bron: https://stackoverflow.com/questions/21336881/how-to-get-the-age-from-input-type-date-using-html-js
function submitBday(){
  var stringDate = "Jouw verjaardag is op: ";
  var bdateInput = document.getElementById('bday').value;
  var bday = +new Date(bdateInput);
  stringDate += bdateInput + ", jij bent " + ~~ ((Date.now() - bday) / (31557600000)) + ".";
  var theBday = document.getElementById('resultBday');
  theBday.innerHTML = stringDate;
};

function resetForm(){
  document.getElementById('myForm').reset();
}

function alertBox(){
  alert('Weet u zeker dat u alles goed heeft ingevuld? Dan word je profiel nu aangemaakt!')
}

// bron: https://www.webtrickshome.com/faq/how-to-display-uploaded-image-in-html-using-javascript
var loadFile = function(event) {
  var image = document.getElementById('output');
  image.src = URL.createObjectURL(event.target.files[0]);
};
