let navn = [];
let antall = [];
let pris = [];
// a
function regnUt(antall,pris){
    let sum = 0;
    if(isNaN(antall)||isNaN(pris)){
        alert("Du må skrive inn en verdi for antall og pris")
        return
    }
    else if(antall <= 0 || pris <= 0){
        alert("Antall og pris kan ikke være mindre eller lik null")
        return;
    }
    else{
        sum = antall * pris;
    }
    return sum;
}
// b
function kurvPris(antallVarer){
    let sum = 0;

    for(i = 0; i < antallVarer; i++){
        sum += antall[i] * pris[i];
    }
    return sum;
}
// c
function skrivUtHandlekurv(){
    let text = "";
    for(i = 0; i < navn.length; i++){
        let stkPris = pris[i].toFixed(2);
        let totalPris = regnUt(antall[i], pris[i])
        text += `${antall[i]} ${navn[i]} á ${stkPris} = ${totalPris} <br>`
    }
    text += "-------------------------<br>"
    text += `TOTALT:  ${kurvPris(navn.length).toFixed(2)}`
    return text
}
