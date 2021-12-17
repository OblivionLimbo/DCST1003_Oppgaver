// a

function palindrom(string){
    if(string == "" || isNaN(string) == false){
        return `${string} is a number or is empty, please enter a string: "text".`
    }
    string = string.toLowerCase();
    // Gjør hele strenger til lowercase for å sjekke om strengen er lik forlengs og baklengs
    // Dersom man skriver inn palindrom("Regninger") ville man fått at det ikke var et palindrom hvis man ikke hadde denne endringen.  
    if(string === string.split("").reverse().join("")){
        // Splitter stringen i et array, reverserer arrayer og setter arrayet sammen igjen til en string og sjekker om den reverserte strenger er lik den originale strengen
        return `${string} is a palindrom`
    }
    else{
        return `${string} is not a palindrom`
    }
}

// b

function leapYear(x){
    if(isNaN(x) || x < 0){
        return `The value is not a valid year, please input a number above 0`
    }
    // Sjekker om året er et hundreår
    if(x % 100 == 0){
    // Sjekker om hundreåret er skuddår
        if(x % 400 == 0){
            return `${x} is a Leap Year`
        }
        else{
            return `${x} is not a Leap Year`
        }
    }
    // Sjekker om året er skuddår
    else if(x % 4 == 0){
        return `${x} is a Leap Year`
    }
    else{
        return `${x} is not a Leap Year`
    }
}