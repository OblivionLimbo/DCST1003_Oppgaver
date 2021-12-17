let date = new Date()
let day = date.getDate()

if(day >= 24){
    day = 24
}
// Liten sjekk for å forhindre error hvis man går forbi den 24.

// Lager et array med 24 luker

let cal = []

for(i = 0; i < 24; i++){
    cal.push("...")
}

// setter verdiene i arrayet frem til dagen i dag til et tall
for(i = 0; i < day; i++){
    cal[i] = i + 1;
}

let table = document.createElement('table');
table.style.border = "0px solid black"
table.style.borderCollapse = "collapse";
table.style.marginLeft = "20px"
table.style.marginTop = "20px"
// Styler tabellen

// Bygger opp tabellen i en fin form med tall fra arrayet
for(i = 0; i < 4; i++){
    let tr = document.createElement('tr')

    for(j = 0; j < 6; j++){
        let td = document.createElement('td')

        td.innerText = cal[j + i*6];

        td.style.border = "1px solid black";
        td.style.margin = "5px";
        td.style.height = "10px";
        td.style.textAlign = "center";
        td.style.padding = "10px";
        // Styler tabellen
        tr.appendChild(td);
    }
    table.appendChild(tr)
}

document.body.appendChild(table);