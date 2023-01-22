document.getElementById("sumar").addEventListener("click", function() {
    const numero1 = document.getElementById("numero1").value;    
    const numero2 = document.getElementById("numero2").value;
    let suma = sumar(numero1, numero2);

    document.getElementById("contenedorResultado").style.display = "block";
    document.getElementById("resultado").innerHTML = numero1.concat(" + ", numero2, " = ", suma);
    document.getElementById("resultado").style.backgroundColor = "greenyellow";
});

document.getElementById("restar").addEventListener("click", function() {
    const numero1 = document.getElementById("numero1").value;    
    const numero2 = document.getElementById("numero2").value;
    let resta = restar(numero1, numero2);

    document.getElementById("contenedorResultado").style.display = "block";
    // document.getElementById("resultado").innerHTML = numero1.concat(" - ", numero2, " = ", resta);
    // Otra forma: Desde ES6 (funciona a partir de >IE11) se puede usar el backtick ` para crear cadenas interpoladas
    document.getElementById("resultado").innerHTML = `${numero1} - ${numero2} = ${resta}`;
    document.getElementById("resultado").style.backgroundColor = "greenyellow";
});

function sumar(num1, num2) {
    return Number(num1) + Number(num2);
}

function restar(num1, num2) {
    return parseInt(num1) - parseInt(num2);
}