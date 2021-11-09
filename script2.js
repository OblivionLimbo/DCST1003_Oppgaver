// Oppgave 1
document.getElementById("send").onclick = () => {
    // Onclick event til knapp
    let n = document.getElementById("one").value;
    // Definerer verdier og elementer
    document.getElementById("svar").innerHTML = `Halvparten av tallet er: ${(n / 2)}. 
                                                 Det dobbelte av tallet er: ${(n * 2)}. 
                                                 Det trippelte av tallet er: ${(n * 3)}. 
                                                 Tallet ganget med seg selv er: ${(n * n)}.`;

    // Skriver ut utregningenene i "svar"-diven ved å bruke verdien i input-feltet
}

// Oppgave 2
document.getElementById("two").oninput = () => {
    // Oninput event for input-boksen
    let n = document.getElementById("two").value;
    let o = document.getElementById("svar2");
    // Definerer verdier og elementer
    if (n == "") {
        o.innerHTML = "";
    }
    // Ekstra sjekk for å fjerne elementer fra div dersom det ikke er noe inne i input
    else if (n < 18) {
        o.innerHTML = "Du er ikke mynding enda";
        // Kjører if test på on verdien i input-feltet er mindre enn 18, skriver så ut til "svar"-div
    }
    else {
        if (n >= 67) {
            o.innerHTML = "Du er mynding, dessuten er du pensjonist";
            // Dersom verdien ikke er under 18 kjører jeg en ny if-test for å se om verdien er større eller lik 67 for å sjekke om personen er pensjonist
            // Skriver så ut til "svar"-div
        }
        else {
            o.innerHTML = "Du er mynding";
            // dersom verdien er over 18, men ikke over/lik 67 så skriver den ut at personen er mynding til "svar"-div
        }
    }
}

let h = "Hjemme";
let b = "Borte";
let u = "Uavgjort";
let err = "Ukjent tippetegn, du må enten skrive H(Hjemme), B(Borte) eller U(Uavgjort) og tippe på nytt.";

// Oppgave 3
document.getElementById("send2").onclick = () => {
    // Onclick event for knapp
    let n = document.getElementById("three").value;
    let o = document.getElementById("svar3");
    // Definerer verdier og elementer
    // console.log(n);

    // If-else statement for å sjekke om verdien i input feltet er enter H,B eller U og skriver så ut riktig beskjed til "svar"-boks
    // Dersom verdien ikke er noen av disse skriver jeg ut en beskjed til brukeren for å forklare hva de må skrive inn
    if (n === "H") {
        // console.log(n + " Hjemme");
        o.innerHTML = h;
    }
    else if (n === "B") {
        // console.log(n + " Borte");
        o.innerHTML = b;
    }
    else if (n === "U") {
        // console.log(n + " Uavgjort");
        o.innerHTML = u;
    }
    else {
        // console.log(n + " No")
        o.innerHTML = err;
    }
}

//Oppgave 4

document.getElementById("send3").onclick = () => {
    let n = document.getElementById("four").value;
    let o = document.getElementById("svar4");
    // Definerer verdier og elementer

    // Switch statement for å sjekke om verdien i input feltet er enter H,B eller U og skriver så ut riktig beskjed til "svar"-boks
    // Dersom verdien ikke er noen av disse skriver jeg ut en beskjed til brukeren for å forklare hva de må skrive inn
    switch (n) {
        case "H":
            o.innerHTML = h
            break;
        case "B":
            o.innerHTML = b
            break;
        case "U":
            o.innerHTML = u
            break;
        default:
            o.innerHTML = err
            break;
    }
}

// Oppgave 5

document.getElementById("send4").onclick = () => {
    let n = document.getElementById("five").value;
    let o = document.getElementById("svar5");
    // Definerer verdier og elementer

    n = n.toUpperCase();
    // Endrer alt inputtet til uppercase for å kunne bruke de små bokstavene som brukeren kan skrive inn

    // Switch statement for å sjekke om verdien i input feltet er enter H,B eller U og skriver så ut riktig beskjed til "svar"-boks
    // Dersom verdien ikke er noen av disse skriver jeg ut en beskjed til brukeren for å forklare hva de må skrive inn
    switch (n) {
        case "H":
            o.innerHTML = h
            break;
        case "B":
            o.innerHTML = b
            break;
        case "U":
            o.innerHTML = u
            break;
        default:
            o.innerHTML = err;
            break;
    }
}

// Oppgave 6

document.getElementById("six").onclick = () => {
    let a = document.getElementById("age").value;
    let km = document.getElementById("km").value;
    let o = document.getElementById("svar6");
    // Definerer verdier og elementer

    let pris = km * 3.52;
    // Definerer pris

    // If statement for å finne pris i forhold til alder
    if (a < 12) {
        o.innerHTML = `Du må betale ${(pris * 0.50).toFixed(2)} kr for turen.`;
        // Utfører regning ved at de får 50% rabatt dersom de er under 12, .toFixed(2) gjør sånn at det bare blir 2 desimaler i svaret
        // Skriver ut svaret 
    }
    else if (a > 67) {
        o.innerHTML = `Du må betale ${(pris * 0.80).toFixed(2)} kr for turen.`;
        // Utfører regning ved at de får 20% rabatt dersom de er under 12, .toFixed(2) gjør sånn at det bare blir 2 desimaler i svaret
        // Skriver ut svaret
    }
    else {
        o.innerHTML = `Du må betale ${pris} kr for turen.`;
        // Skriver ut prisen dersom de ikke får noe rabatt, dvs de er mellom 12 og 67 år
    }

}