var lista_numeros = new Array();

for (var i = 0; i < 5; i++) {
    var nAleatorio = Math.floor((Math.random() * 10) + 1);
    lista_numeros[i] = nAleatorio;
}



function divalores() {

    let element1 = document.getElementById("cont");

    element1.innerHTML = "";

    for (let s = 0; s < lista_numeros.length; s++) {
        element1.innerHTML += "<div>" + lista_numeros[s] + "</div>";
    }


}
console.log(lista_numeros);

function pyuNumero() {

    let element2 = document.getElementById("resultado");

    var pnum = lista_numeros[0];
    var unum = lista_numeros[lista_numeros.length - 1];

    element2.innerHTML = "<div id='resultados' > Primer número = " + pnum + " <br> Último número = " + unum + " </div>";
     
}


function numeroFinal() {

    let element3 = document.getElementById("nf");

    var error = true;

    while (error) {
        var n = parseInt(prompt("El número, bro"));

        if (Number.isInteger(n)) {
            lista_numeros.push(n);
            error = false;
        } else {
            error = true;
        }
    }

    divalores();
}

function numeroInicio() {

    let element4 = document.getElementById("nI");

    var error = true;

    while (error) {
        var n = parseInt(prompt("El número, bro"));

        if (Number.isInteger(n)) {
            lista_numeros.unshift(n);
            error = false;
        } else {
            error = true;
        }

    }

    divalores();
}

function borrarUltimoNumero() {

    lista_numeros.pop();

    divalores();
}

function borrarPrimerNumero() {

    lista_numeros.shift();

    divalores();
}

function calcular() {

    var error = true;
    var añadido = "";
    var total = 0;
    
    do {


        var op = prompt(añadido + "¿Qué quieres hacer? ( '+' , '*' , '-' o '/')");
        switch (op) {
            case "+":
                total = lista_numeros[0];
                for (let i = 1; i < lista_numeros.length; i++) {
                    total += lista_numeros[i];
                }
                error = false;
                break;
            case "*":
                total = lista_numeros[0];
                for (let i = 1; i < lista_numeros.length; i++) {
                    total *= lista_numeros[i];
                }
                error = false;
                break;
            case "-":
                total = lista_numeros[0];
                for (let i = 1; i < lista_numeros.length; i++) {
                    total -= lista_numeros[i];
                }
                error = false;
                break;
            case "/":
                total = lista_numeros[0];
                for (let i = 1; i < lista_numeros.length; i++) {
                    total /= lista_numeros[i];
                }
                error = false;
                break;
            default:
                añadido = "Inténtalo otra vez!";
                break;
        }

    } while (error);

    var element = document.getElementById("resCalc");
    element.innerHTML = "Resultado = " + total;


}

function borrarPosConc() {

    var error = true;
    var añadido = "";

    do {
        var pos = parseInt(prompt("Posición a borrar, bro"));
        console.log(lista_numeros.length);
        console.log(pos);
        if (pos < lista_numeros.length) {
            lista_numeros.splice(pos - 1, 1);
            error = false;
        } else if (pos > lista_numeros.length || pos < 0) {
            añadido = "El array tiene " + lista_numeros.length + " posiciones.";
        }
    } while (error)
    divalores();
}

function borrarNumConc() {

    var n = parseInt(prompt("El número, bro"));
    var todos = true;

    do {
        for (let i = 0; i < lista_numeros.length; i++) {
            if (lista_numeros[i] === n) {
                lista_numeros.splice(i, 1);
            }
        }
        
        var cont = 0;
        for (let i = 0; i < lista_numeros.length; i++) {
            if (lista_numeros[i] === n) {
                cont++;
                
            }
        }
        
        if(cont === 0){
            todos = false;
        }

    } while (todos)

    divalores();
}
