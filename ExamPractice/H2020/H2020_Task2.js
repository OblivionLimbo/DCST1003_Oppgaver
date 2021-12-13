let board = [];

for(x = 0; x < 8; x++){
    board.push([]);
    for(y = 0; y < 8; y++){
        board[x].push("")
    }
}

board[5][4]='K'
board[1][1]='K'
board[3][5]='K'

let alph = ['A','B','C','D','E','F','G','H']

let assAlp = [
    { letter: 'A', number: 1 },
    { letter: 'B', number: 2 },
    { letter: 'C', number: 3 },
    { letter: 'D', number: 4 },
    { letter: 'E', number: 5 },
    { letter: 'F', number: 6 },
    { letter: 'G', number: 7 },
    { letter: 'H', number: 8 }
]

displayTable();

function displayTable(){
    document.getElementById("displayTable").innerHTML = "";
    let table = document.createElement('table');
    table.className = 'niceTable'; 
        // console.table(arr);
        let tr1 = document.createElement('tr');
        let th1 = document.createElement('th');
        tr1.appendChild(th1);
        for(i = 0; i < 8; i++){
            let th = document.createElement('th');
            th.innerHTML = `${alph[i]}`;
            tr1.appendChild(th);
        }
        table.appendChild(tr1);
        for(i = 7; i >= 0; i--){
            let tr = document.createElement('tr');
                let th1 = document.createElement('th');
                th1.innerHTML = `${i+1}`;
                tr.appendChild(th1);
            for(j = 0; j < 8; j++){
                let td = document.createElement('td');
                td.innerHTML = `${board[i][j]}`;
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        
document.getElementById("displayTable").appendChild(table);
}

for(x = 0; x < 8; x++){
    for(y = 0; y < 8; y++){
        if(board[x][y] == 'K'){
            let alph = assAlp.find(({number}) => number === y+1).letter;
            let num = x + 1;
            document.getElementById("utskrift").innerText += 
            `Konge: ${alph}${num}
            `;
        }
    }
}

console.table(board);