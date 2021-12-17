let transitionTime = 2;
// definerer en global variabel som endres for å synce bevegelsen av teksten

let word = document.createElement('div')
word.innerText = "Hello";
word.style.position = "absolute"
word.style.marginTop = "20px"
word.style.left = 0;
word.style.transition = transitionTime + "s";
word.style.transitionTimingFunction = 'linear'
// definerer boksen til ordet, setter transition verdier for smooth bevegelse

let inp = document.createElement('input')
let btn = document.createElement('button')
let br = document.createElement('br')
btn.innerText = "Set text"
document.body.appendChild(inp)
document.body.appendChild(btn)
document.body.appendChild(br)
document.body.appendChild(word)
document.body.onload = animateTxt

setInterval(() => {
     animateTxt()
}, transitionTime*1000);
// Interval som gjør funksjonen etter at teksten er ferdig med å bevege seg (2s)

// Funksjonen som flytter teksten fra venstre til høyre eller omvendt
function animateTxt(){
    if(word.style.left == "0px"){
        word.style.left = 100 + "px";
    }
    else{
        word.style.left = 0;
    }  
}

// Endrer teksten ved knappetrykk
btn.onclick = () => {
    let newTxt = inp.value
    if(newTxt == ""){
        alert("Please insert something before changing the text")
        return;
    }
    word.innerText = newTxt;
}


