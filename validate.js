var guessesrighteasy = 0;
var guessesrightmedium = 0;
var guessesrighthard = 0;
function registereasy() {
		document.getElementById("answer").classList.remove("has-success");
		document.getElementById("answer").classList.remove("has-error");
	validateeasy();

}
function registermedium() {
		document.getElementById("answer").classList.remove("has-success");
		document.getElementById("answer").classList.remove("has-error");
	validatemedium();

}
function registerhard() {
		document.getElementById("answer").classList.remove("has-success");
		document.getElementById("answer").classList.remove("has-error");
	validatehard();

}

function validateeasy() {
  var userEntered = document.getElementById("answervalue").value;
if(userEntered != 43.33){
console.log("if");
 		 //Show message that there is an error with the username...
  			document.getElementById("answerError").innerHTML="Wrong Answer";
 			document.getElementById("answerError").classList.remove("hidden-message");
  			document.getElementById("answerError").classList.add("shown-message");
 		 //Turn the username items red
 			document.getElementById("answer").classList.add("has-error");

}else{
console.log("else");
 		//Turn the username items to green
			document.getElementById("answer").classList.add("has-success");
			document.getElementById("answerError").innerHTML="Right Answer! Click the link to the right to go back to the difficulty selection page!";
setCookie("righteasy", 1, 2);
}
}
function validatemedium() {
  var userEntered = document.getElementById("answervalue").value;
if(userEntered != 34710){
console.log("if");
 		 //Show message that there is an error with the username...
  			document.getElementById("answerError").innerHTML="Wrong Answer";
 			document.getElementById("answerError").classList.remove("hidden-message");
  			document.getElementById("answerError").classList.add("shown-message");
 		 //Turn the username items red
 			document.getElementById("answer").classList.add("has-error");
}else{
console.log("else");
 		//Turn the username items to green
			document.getElementById("answer").classList.add("has-success");
			document.getElementById("answerError").innerHTML="Right Answer! Click the link to the right to go back to the difficulty selection page!";
setCookie("rightmedium", 1, 2);
}
}
function validatehard() {
  var userEntered = document.getElementById("answervalue").value;
if(userEntered != .33234703){
console.log("if");
 		 //Show message that there is an error with the username...
  			document.getElementById("answerError").innerHTML="Wrong Answer";
 			document.getElementById("answerError").classList.remove("hidden-message");
  			document.getElementById("answerError").classList.add("shown-message");
 		 //Turn the username items red
 			document.getElementById("answer").classList.add("has-error");
}else{
console.log("else");
 		//Turn the username items to green
			document.getElementById("answer").classList.add("has-success");
			document.getElementById("answerError").innerHTML="Right Answer! Click the link to the right to go back to the difficulty selection page!";
setCookie("righthard", 1, 2);
}

}
function getPercent(){
var a = getCookie("righteasy");
a = Number(a);
var b = getCookie("rightmedium");
b = Number(b);
var c = getCookie("righthard");
c = Number(c);
var percent = (a + b + c)/3

document.getElementById("percent").innerHTML = "Percentage of answer questions guessed corectly = " + percent * 100 + "%";
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
