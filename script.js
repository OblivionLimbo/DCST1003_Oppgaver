let box = document.getElementById("box");

window.onload = console.log("ready");

// Oppgave 1

let person = prompt("Navn");
let colour = prompt("Favoritt-farge");
// Two prompts that gather information
window.onload = inputOne(person,colour);
//Once window is loaded (prompts have been filled out) do the function

function inputOne(a,b){
    alert("Hei " + a + " liker du " + b + "-farge du?");
    box.innerHTML = "Hei " + a + " liker du " + b + "-farge du?";
    // Alerts the user with the message, then displays it on the page in a seperate div
}

// Oppgave 2
document.getElementById("submit") = function() {
    let fnavn = document.getElementById("fnavn").value;
    let mnavn = document.getElementById("mnavn").value;
    let enavn = document.getElementById("enavn").value;
    // Gets values of each of the input fields
    document.getElementById("output").innerHTML = fnavn + " " + mnavn + " " + enavn;
    // Inputs the name into a seperate div
}

// Oppgave 3
let input = document.getElementById("live");
let output = document.getElementById("liveOutput");

input.onkeyup = function(){
    output.innerHTML = this.value;
}
// Pretty self explanitory, when you type in the input field, the value of the div below mirrors what is in the input the moment you type. 