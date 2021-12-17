// Klokkeslettet vises på nettsiden.
// Klokkeslettet skal oppdateres hvert sekund
// 2 sekunder etter nettsiden har blitt åpnet, skal en knapp vises som kan brukes til å endre
// bakgrunnsfargen til nettsiden:
// Første gang knappen klikkes skal bakgrunnsfargen endres til rød
// Andre gang knappen klikkes skal bakgrunnsfargen endres til hvit igjen
// Tredje gang knappen klikkes skal bakgrunnsfargen endres til rød igjen
// osv

// Klokke

let clockP = document.createElement('p');
document.body.appendChild(clockP)

clock()

function clock(){
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    m = check(m);
    s = check(s);
    clockP.innerHTML = `${h}:${m}:${s}`
    setTimeout(() => {
        clock()
    }, 1000);
}

function check(x){
    if(x < 10) {
        x = "0" + x;
    }
    return x;
}
// Knapp

let count = 0;

setTimeout(() => {
    let btn = document.createElement('button')
    btn.innerText = "Endre bakgrunnsfarge";
    btn.onclick = () => {
        if(count % 2 == 1){
            document.body.style.backgroundColor = "red";
        }
        else{
            document.body.style.backgroundColor = "white";
        }
        count +=1;
    }
    document.body.appendChild(btn)
}, 2000);
