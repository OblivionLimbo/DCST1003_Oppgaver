// Task 1

let array1 = [3,8,7,3,6,2];
console.table(array1);

// Task 2

let items = ["Milk", "Carrot", "Sugar", "Chocolate", "Egg"];
let itemList = "";

for(i=0; i<items.length;i++){
    itemList += `${items[i]} `;
}
document.getElementById("output2").innerHTML = itemList;

// Task 3

let price = [20, 17, 23, 35, 27];
let average = 0;

for(i=0;i<price.length;i++){
    document.getElementById("display3").innerHTML += `${items[i]}: ${price[i]}kr <br>`;
     average += price[i];
}
price.sort(function(a,b){return a-b});
document.getElementById("output3").innerHTML = 
`
<br> The average of the prices is: ${(average/(price.length))}kr. <br>
The smallest price is ${price[0]}, and the largest is ${price[price.length-1]}.
`

// Task 4

document.getElementById("search4").onclick = () => {
    let selItem = document.getElementById("input4").value;
        const arr = selItem.split();
        for(i=0;i<arr.length; i++){
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        selItem = arr.join();
    let result = `The item does not exist in the list`;
        for(i = 0; i < items.length; i++){
            if(selItem == items[i]){
                result = `The price of ${items[i]} is ${price[i]}kr.`;
            }
        }
        document.getElementById("output4").innerHTML = result;
}
// Task 5, 6, 7

let arr5 = [];
let arr6 = [];
let arr7 = [];
let output5 = document.getElementById("output5");
let output6 = document.getElementById("output6");
let output7 = document.getElementById("output7");

let default1 = 5;

document.getElementById("five").oninput = () =>{
    arr5 = [];
    output5.innerHTML = "";
    var fiveValue = document.getElementById("five").value;
    if(fiveValue >= 1 && fiveValue <= 20){
        divideTable(1,fiveValue,arr5);
        writeTable(1,fiveValue,arr5,output5);
    }
};

document.getElementById("six").oninput = () => {
    arr6 = [];
    output6.innerHTML = "";
    var sixValue = document.getElementById("six").value;
    if(sixValue >= 1 && sixValue <= 20){
        addTable(1,sixValue,arr6);
        writeTable(1,sixValue,arr6,output6);
    }
};

document.getElementsByClassName("test").onclick = () => {
    let val = this.value;
    console.log(val);
    console.log("class");
}

    
function radioValue(a){
    var maxValue = document.getElementById("sevenVal").value;
    if(maxValue == ""){
        maxValue = default1;
    }
        arr7 = [];
        output7.innerHTML = "";
            if(maxValue >= 0 && maxValue <=20){
                if(a.value == "divide"){
                    divideTable(1,maxValue,arr7);
                    writeTable(1,maxValue,arr7,output7);
                }
                else if(a.value == "multiply"){
                    multiplyTable(1,maxValue,arr7);
                    writeTable(1,maxValue,arr7,output7);
                }
                else if(a.value == "add"){
                    addTable(1,maxValue,arr7);
                    writeTable(1,maxValue,arr7,output7);
                }
                else if(a.value == "subtract"){
                    minTable(1,maxValue,arr7);
                    writeTable(1,maxValue,arr7,output7);
                }
        }
};

function divideTable(a,b,arr){
    for(let i = a; i <= b; i++){
        let tempArr = [];
        for(let j = a; j <= b; j++){
            tempArr[j] = (j/i).toFixed(2);
        }
        arr[i] = tempArr;
    }
    // console.table(arr)
}

function addTable(a,b,arr){
    for(let i = a; i <= b; i++){
        let tempArr = [];
        for(let j = a; j <= b; j++){
            tempArr[j] = (i+j);
        }
        arr[i] = tempArr;
    }
    // console.table(arr)
}

function minTable(a,b,arr){
    for(let i = a; i <= b; i++){
        let tempArr = [];
        for(let j = a; j <= b; j++){
            tempArr[j] = (i-j);
        }
        arr[i] = tempArr;  
    }
    // console.table(arr)
}

function multiplyTable(a,b,arr){
    for(let i = a; i <= b; i++){
        let tempArr = [];
        for(let j = a; j <= b; j++){
            tempArr[j] = (i*j);
        }
        arr[i] = tempArr;
    }
    // console.table(arr)
}

function writeTable(a,b,arr,output){
    let table = document.createElement('table');
    table.className = 'niceTable'; 
        // console.table(arr);
        let tr1 = document.createElement('tr');
        let th1 = document.createElement('th');
        tr1.appendChild(th1);
        for(i = a; i <= b; i++){
            let th = document.createElement('th');
            th.innerHTML = `${i}`;
            tr1.appendChild(th);
        }
        table.appendChild(tr1);
        for(i = a; i <= b; i++){
            let tr = document.createElement('tr');
                let th1 = document.createElement('th');
                th1.innerHTML = `${i}`;
                tr.appendChild(th1);
            for(j = a; j <= b; j++){
                let td = document.createElement('td');
                td.innerHTML = `${arr[i][j]}`;
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        
        output.appendChild(table);
}