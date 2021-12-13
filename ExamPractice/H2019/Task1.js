let btn = document.getElementById("write");

btn.onclick = () => {
    let price = 0; 
    let discount = "Ingen rabatt";
    let car = document.getElementById("car").value;
    let days = document.getElementById("days").value;
    let age = document.getElementById("age").value;
    if(isNaN(days) || isNaN(age)){
        alert("Antall dager og alder må være et tall")
        return;
    }
    else if(days <= 0 || age <= 0){
        alert("Antall dager eller alder kan ikke være mindre eller lik 0")
        return;
    }
    else{
        switch (car) {
            case "Toyota":
                price += (days * 400)
                break;
            case "BMW":
                price += (days * 600)
                break;
            case "Audi":
                price += (days * 500)
                break;
            case "Porche":
                price += (days * 750)
                break;
            default:
                alert("Ingen biltype valgt")
                break;
        }
        if(age > 25 && car != "Porsche"){
            discount = "10%"
            price = price * 0.90
        }
    }
    document.getElementById("info").innerText = 
    `Bil: ${car}
     Antall dager: ${days} 
     Rabatt: ${discount} 
     Totalpris: ${price}
     `
}