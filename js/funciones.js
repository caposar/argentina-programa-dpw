// window.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');
//     ChangingHtmlElements();
// });

window.addEventListener('load', function() {
    console.log('La página ha terminado de cargarse!!');

    ChangingHtmlElements();
});

// Finding HTML Elements and Changing HTML Elements
function ChangingHtmlElements() {
    document.getElementById('idTag').innerHTML = "Se usa document.getElementById('idTag').innerHTML para insertar texto en el elemento con id = 'idTag'";

    const list1 = document.getElementsByClassName('claseTag');
    // for (const iterator of list1) {
    //     iterator.innerHTML = "Se usa document.getElementsByClassName('claseTag') para obtener una colección de elementos con class = 'claseTag' e insertar este texto";
    // }

    //Otra forma de recorrer los elementos de un HTMLCollection:
    for (let index = 0; index < list1.length; index++) {
        const element = list1[index];
        element.innerHTML = "Se usa document.getElementsByClassName('claseTag') para obtener una colección de elementos con class = 'claseTag' e insertar este texto";
    }

    const list2 = document.getElementsByName('nameTag');
    list2.forEach(element => {
        element.innerHTML = 'Filtrar';
    });
    
    var list3 = document.getElementsByTagName('span');
    for (const iterator of list3) {
        iterator.innerHTML = "Se usa document.getElementsByTagName('span') para obtener una colección de elementos con nombre de tag 'span' e insertar este texto";
    }
        
    console.log('La función "ChangingHtmlElements" se ha ejecutado!!');
}

function filtrar(boton) {
    alert("Hizo click en el botón " + boton.innerHTML);
}

function Saludar() {
    console.log("Hola Mundo!");
}

document.getElementById('btnDespedida').onclick = function() {
    console.log("Chau!");
};

document.getElementById('titulo').addEventListener('mouseover', function() {
    this.classList.add('nombreclase1','nombreclase2');
    RevisarSiContieneClase();
});

document.getElementById('titulo').addEventListener('mouseout', function() {
    this.classList.remove('nombreclase1','nombreclase2');
    RevisarSiContieneClase();
});

function RevisarSiContieneClase() {
    var titulo = document.getElementById('titulo');
    var estanombreclase1 = titulo.classList.contains('nombreclase1');

    console.log(titulo);
    console.log(estanombreclase1);
    if (estanombreclase1) {
        document.getElementById('subtitulo').classList.add('nombreclase3');
    } else {
        document.getElementById('subtitulo').classList.remove('nombreclase3');
    }
}

// Inicio: HTML DOM Element classList
function myFunctionAdd() {
    const list = document.getElementById("myDIV").classList;
    list.add("myStyle");
}

function myFunctionRemove() {
    document.getElementById("myDIV").classList.remove("myStyle");
}

function myFunction() {
    document.getElementById("myDIV").classList.toggle("myStyle");
}
// Fin: HTML DOM Element classList

function Enviar() {
    list = document.getElementsByClassName('control');

    for (const iterator of list) {

        console.log("iterator: " , iterator);
        var hermanoPosterior = iterator.nextSibling.nextSibling;
        console.log("hermanoPosterior:" , hermanoPosterior);        

        if (esControlValido(iterator)) {            
            hermanoPosterior.style.display='none';
        } else {
            hermanoPosterior.style.display='block';
        }
    }
}

function esControlValido(control) {
    var esRequired = control.required;    
    var esVacio = control.value;    
    if (esRequired == true && esVacio == "") {
        return false;
    }
    return true;
}
