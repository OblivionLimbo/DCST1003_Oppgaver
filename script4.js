// Oppgave 1

let output1 = document.getElementById("one");

document.getElementById("alder").oninput = () => {
    let age = document.getElementById("alder").value;

    if (age !== "") {
        if (age >= 13 && age <= 19) {
            output1.innerHTML = `Du er tenåring`;
        } else {
            output1.innerHTML = `Du er ikke tenåring`;
        }
    } else {
        output1.innerHTML = "";
    }
}
// Oppgave 2
let output2 = document.getElementById("two");

document.getElementById("bigger").onclick = () => {
    let one = document.getElementById("numberOne").value;
    let two = document.getElementById("numberTwo").value;

    if (one > two) {
        output2.innerHTML = `${one} er større enn ${two}`
    } else if (one == two) {
        output2.innerHTML = `${one} er lik ${two}`
    } else {
        output2.innerHTML = `${two} er større enn ${one}`
    }
}

// Oppgave 3

document.getElementById("length").oninput = area;
document.getElementById("enhet").onchange = area;

function area() {
    let l = document.getElementById("length").value;
    let e = document.getElementById("enhet").value;

    document.getElementById("three").innerHTML = `${l*l} ${e}²`;
}

// Oppgave 4

let table = [];


document.getElementById("fill").onclick = () => fill(table);

function fill(arr) {
    let y = Math.floor((Math.random()* 20) + 1);
    let x = Math.floor((Math.random()* 20) + 1);
    // console.log(`${y} and ${x}`);
    if (y < x) {
        for (let i = y; i <= x; i++) {
            arr.push(i);
        }
    } else if (y > x) {
        for (let i = y; i >= x; i--) {
            arr.push(i);
        }
    }
    else if(y == x){
        arr.push(y);
    }
    // Timeout for å kunne finne lengden og alerte siste verdi i arrayet før det blir reset i linje 77
    setTimeout(() => {
        print(arr);
    },);
}

function print(arr) {
    document.getElementById("four").innerHTML = arr.join(", ");
    table = [];
}

// Oppgave 5

document.getElementById("last").onclick = () => {
    fill(table);
    // console.log(tabell.length);
    document.getElementById("five").innerHTML = `Den siste verdien i arrayet er ${table[table.length-1]}`;
    // alert(tabell[tabell.length-1]);
}

// Oppgave 6

let names = ["Kari","Per","Roar","Jens","Agnete"];
let age = [30,21,45,63,18];
let output6 = document.getElementById("six");

document.getElementById("addAlder").oninput = () =>{
    output6.innerHTML = "";
    let addAge = parseFloat(document.getElementById("addAlder").value);
    if(addAge !== "" && addAge > 0){
        for(i = 0; i < names.length; i++){
            output6.innerHTML += `Om ${addAge} år er ${names[i]} ${(age[i] + addAge)} år gammel. <br> `;
        }
    }
    else if(addAge < 0){
        for(i = 0; i < names.length; i++){
            let newAge = age[i] + addAge;
            let showAge = addAge*(-1);
            output6.innerHTML += `For ${showAge} år siden, var ${names[i]} ${newAge} år gammel. <br> `;
        }
    }
    else if(addAge == 0){
        for(i = 0; i < names.length; i++){
            output6.innerHTML += `${names[i]} er ${(age[i] + addAge)} år gammel. <br> `;
        }
    }
}

// Oppgave 7

let text = ["Null", "En", "To", "Tre", "Fire", "Fem", "Seks", "Sju", "Åtte", "Ni", "Ti"];
let output7 = document.getElementById("seven");

document.getElementById("numberSeven").oninput = () =>{
    let number = parseFloat(document.getElementById("numberSeven").value);
    if(number < 0 || number > 10){
        output7.innerHTML = `Skriv inn ett tall mellom ${text[0]} og ${text[text.length-1]}`;
    }
    else if(number >= 0 || number <= 10){
        output7.innerHTML = `${number} er "${text[number]}"`;
    }
    else{
        output7.innerHTML = "";
    }
}

// Oppgave 8

let arr = 
[
[2,3,8],
[4,3,2],
[2,4,7],
[6,5,1]
];

let checkV;
let v;
let tempV = [];
for(i = 0; i < arr.length; i++){
    v = arr[i][0];
    for(j = 1; j <arr.length-1; j++){
        v = v * arr[i][j];
    }
    tempV.push(v);
    console.log(v);
}
tempV.sort(function(a,b){return a-b});
document.getElementById("eight").innerHTML = `Det største volumet er ${tempV[tempV.length-1]}`;