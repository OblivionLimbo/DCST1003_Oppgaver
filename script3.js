// Oppgave 1

let a = 7;
let innhold1 = "";
do{
    innhold1 += `Jeg er tall nummer ${a} <br>`;
    a--;
}
while(a > 0);

document.getElementById("one").innerHTML += innhold1;

// Oppgave 2

let b = 12;
let innhold2 = "";

do{
    innhold2 += `Jeg er tall nummer ${b} <br>`;
    b += 5;
}
while(b <= 98);

document.getElementById("two").innerHTML += innhold2;

// Oppgave 3

document.getElementById("threeBtn").onclick = () =>{
    let c1 = document.getElementById("start").value;
    let c2 = document.getElementById("slutt").value;
    let innhold3 = [];

    if(c1 == "" || c2 == ""){
        alert("Du må skrive inn en starverdi go en sluttverdi.")
    }
    else if(c2 < c1){
        do{
            innhold3.push(c1);
            c1--;
        }
        while(c1 >= c2);
    }
    else{
        do{
            innhold3.push(c1);
            c1++;
        }
        while(c1 <= c2);
    }
    document.getElementById("three").innerHTML = innhold3.join(", ");
}

// Oppgave 4

let table = "";
table += "<table>";
// For aesthetics
table+= "<tr>"
table += "<td></td>"
for(let i = 10; i <=19; i++){
table+= `<th> ${i} </th>`;
}
table += "</tr>";

for (let i = 10; i <= 19; i++){
table += "<tr>";
table += `<th> ${i} </th>` 
for (let j = 10; j <= 19; j++){
    table+= `<td> ${i*j}</td>`;
}
table += "</tr>";
}
table += "</table>";

document.getElementById("four").innerHTML += table;

// Oppgave 5

let song = "";

for(let i = 10; i >0; i--){
if(i == 1){
    song += ` ${i} green bottle, hanging on a wall <br> ${i} green bottle, hanging on a wall <br> `;
    song += ` If 1 green bottle were to accidentally fall <br> There'd be ${i-1} green bottles, hanging on the wall <br><br>`;
}
else if( i == 2){
    song += ` ${i} green bottles, hanging on a wall <br> ${i} green bottles, hanging on a wall <br>`
    song += ` If 1 green bottle were to accidentally fall <br> There'd be ${i-1} green bottle, hanging on the wall <br><br>`;

}
else{
    song += ` ${i} green bottles, hanging on a wall <br> ${i} green bottles, hanging on a wall <br>`
    song += ` If 1 green bottle were to accidentally fall <br> There'd be ${i-1} green bottles, hanging on the wall <br><br>`;
}
}

document.getElementById("five").innerHTML += song;

// Oppgave 6

let brukernavn = ["Per", "Pål", "Espen"];
let passord = ["Per123", "Pål123", "Espen123"];
let tries = [0,0,0];

let output6 = document.getElementById("six");

document.getElementById("logIn").onclick = () =>{
    
    let inBrukernavn = document.getElementById("brukernavn").value;
    let inPassord = document.getElementById("passord").value;

    for(let i = 0; i <= 2; i++){      
        if(inBrukernavn === brukernavn[i] && inPassord === passord[i]){
            if(tries[i] >= 3){
                output6.innerHTML = `Du har brukt alle dine 3 forsøk ${brukernavn[i]}`;
                break;
            }
            else{
                console.log(`${inBrukernavn} og ${brukernavn[i]} + ${inPassord} og ${passord[i]}`);
                output6.innerHTML = `Du er logget inn ${brukernavn[i]}`;
                tries[i] = 0;
            }
        }
        else if(inBrukernavn === brukernavn[i] && inPassord !== passord[i]){
            tries[i] += 1;
            output6.innerHTML = `Feil passord, du har ${3-tries[i]} forsøk igjen ${brukernavn[i]}`;
            if(tries[i] >= 3){
                output6.innerHTML = `Du har brukt alle dine 3 forsøk ${brukernavn[i]}`;
                break;
            }
        }
    }
}

// Oppgave 7

let innhold7 ="";

for(let i = 1; i <= 10; i++){
for(let j = 1; j <= i; j++){
    innhold7 += `${j} `
}
innhold7+= "<br>";
}

document.getElementById("seven").innerHTML += innhold7;

// Oppgave 8

let innhold8 ="";

for(let i = 10; i >= 1; i--){
for(let j = 1; j <= i; j++){
    innhold8 += `${j} `;
}
innhold8+= "<br>";
}

document.getElementById("eight").innerHTML += innhold8;

// Oppgave 9


document.getElementById("displayTall").onchange = () => {
let tall = document.getElementById("displayTall").value;

if(tall == "odd"){
    let odde = [];
    for(let i = 1; i <= 10; i ++){
        if(i % 2 == 1){
            odde.push(i);
        }
    }
    document.getElementById("nine").innerHTML = odde.join(", ");
}
else if(tall == "even"){
    let par = [];
    for(let i = 1; i <= 10; i ++){
        if(i % 2 == 0){
            par.push(i);
        }
    }
    document.getElementById("nine").innerHTML = par.join(", ");
}
}
// Oppgave 10

document.getElementById("isPrime").oninput = () => {
let svar = document.getElementById("ten");
let number = document.getElementById("isPrime").value;
let isPrime = true;

if (number == 1) {
    svar.innerHTML = `${number} er hverken et primtall eller sammensatt tall`;
}
else if (number > 1) {
    for (let i = 2; i <= Math.ceil(Math.sqrt(number)); i++) {
        if (number % i == 0) {
            if(number == 2){
                isPrime = true;
                break;
            }
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        svar.innerHTML = `${number} er et primtall`;
    } else {
        svar.innerHTML =`${number} er ikke et primtall`;
    }
}
else{
    svar.innerHTML = "";
}
}



