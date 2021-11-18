let rPlace = document.getElementById('rPlace');
let dPlace = document.getElementById('dPlace');

let kano = document.getElementById('antKan');
let kajakk = document.getElementById('antKaj');
let sup = document.getElementById('antSup');

let startDate = document.getElementById('startDate');
let endDate = document.getElementById('endDate');

let comment = document.getElementById('comment');
let utskrift = document.getElementById('utskrift');

kano.oninput = () => {
    returnTotal(Number(kano.value), Number(kajakk.value), Number(sup.value))
}
kajakk.oninput = () => {
    returnTotal(Number(kano.value), Number(kajakk.value), Number(sup.value))
}
sup.oninput = () => {
    returnTotal(Number(kano.value), Number(kajakk.value), Number(sup.value))
}
let total = 0;
function returnTotal(a,b,c) {
    total = a+b+c;
    console.log(total)
    if (total > 2){
        utskrift.innerText = 'Du kan velge maks 2 båter';
        return;
    }
    else{
        utskrift.innerText = ''
    }
}

document.getElementById('order').onclick = () => {
    returnTotal();
    let days = (new Date(endDate.value) - new Date(startDate.value)) / (1000 * 60 * 60 * 24);
    let samePlace = rPlace.value === dPlace.value ? true : false;
    let price = 0;
    let rented = '';
    if(kano.value <= 0 && kajakk.value <=0 && sup.value <=0){
        utskrift.innerText = 'Du må velge minst 1 utleieobjekt';
        if(isNaN(days)==true){
            utskrift.innerText += ' og start- og sluttdato';
        }
        return;
    }
    else if(isNaN(days)==true){
        utskrift.innerText = 'Du må velge start- og sluttdato';
        return;
    }
    else if((new Date(endDate.value) - new Date(startDate.value)) < 0 ){
        utskrift.innerText = 'Du må velge startdato før sluttdato';
        return;
    }
    if(kano.value > 0){
        if(kajakk.value > 0){
            rented = `${kano.value} Kano og ${kajakk.value} Kajakk`;
        }
        else if(sup.value > 0){
            rented = `${kano.value} Kano og ${sup.value} Supboard`;
        }
        else{
            rented = `${kano.value} Kanoer`;
        }
    }
    else if(kajakk.value > 0){
        if(kano.value > 0){
            rented = `${kano.value} Kano og ${kajakk.value} Kajakk`;
        }
        else if(sup.value > 0){
            rented = `${kajakk.value} Kajakk og ${kajakk.value} Supbaord`;
        }
        else{
            rented = `${kajakk.value} Kajakker`;
        }
    }
    else if(sup.value > 0){
        if(kano.value > 0){
            rented = `${kano.value} Kano og ${sup.value} Supboard`;
        }
        else if(kajakk.value >0){
            rented = `${kajakk.value} Kajakk og ${sup.value} Supboard`;
        }
        else{
            rented = `${sup.value} Supboards`;
        }
    }
    else{
       utskrift.innerText = "";    
    }
    let place;
    if(samePlace){
        price += (395*kano.value)*days
        price += (495*kajakk.value)*days
        price += (295*sup.value)*days
        place = 'samme plass'
    }
    else{
        price += (395*kano.value)*days
        price += (495*kajakk.value)*days
        price += (295*sup.value)*days
        price += 50
        place = 'annen plass'
    }
    utskrift.innerText = 
    `${rented} i ${days} dager levert inn på ${place} vil koste: ${price} kr.
    Din kommentar: ${comment.value}`;
}