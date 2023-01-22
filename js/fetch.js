// Free fake API for testing and prototyping: https://jsonplaceholder.typicode.com/
// Guide: https://jsonplaceholder.typicode.com/guide/

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(json => console.log(json))
// .catch(err => console.error(err));

//============================= 1ra Forma =============================
const myRequest = new Request('https://jsonplaceholder.typicode.com/todos/1');

fetch(myRequest)
.then(response => {
    console.log("1. response ==> ", response);
    return response.json();
})
.then(json => {
    console.log("2. json ==> ", json);
    
    const object = JSON.stringify(json);
    console.log("3. JSON.stringify(json) ==> ", object);
    
    document.getElementById("demo").innerHTML = object;
});

//============================= 2da Forma =============================
/* 
Puedes usar async/await como te comenté.

PROBLEMA

Se desea obtener una serie de datos al consumir una API, usando una serie de llamadas a la misma usando diferentes parámetros que se almacenan en una lista.

SOLUCIÓN

Para lograr lo que te propones podrías usar una función async. Debes verificar la compatibilidad del navegador si deseas implementar esta funcionalidad en tu página.

Una forma en la que podrías lograrlo es la siguiente:
*/

const entries = [1,2,3,4];
const btn = document.getElementById('button');
btn.addEventListener('click', async (event) => {
  event.preventDefault();
  document.getElementById('resultado').innerHTML = await getData(entries);
});

async function getData(entries) {
  let topicsHTML = ''
  for (const entry of entries) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${entry}`);
    const data = await res.json();
    topicsHTML += `<p >${data.title}</p>`;
   }
   return topicsHTML;
}

/*
Como puedes ver en el código, usamos la función async para poder realizar la tarea de forma secuencial (sincrónica) y de esta forma podemos devolver la Promise resuelta y no en estado pending.

¿Cómo funciona?

Cuando realizamos una declaración de función tipo async, estamos diciendo que la misma realizará una tarea asíncrona o con llamadas a funciones que devuelven una Promesa. En este caso fetch es una función que devuelve una promesa. Por lo tanto, debemos esperar que dicha promesa sea resuelta (o rechazada). Esto lo hacemos usando el operador await.

Una vez que obtenemos la respuesta con fetch, usamos el método json() del objeto reponse recibido, y dado que dicho método también devuelve una Promesa, debemos usar nuevamente el operador await.

Ahora, podrás notar que la función callback que he pasado al evento del botón también es una función async, esto debe ser así ya que dentro de dicha función hago una llamada a una función async (getData()), por lo tanto debo esperar que dicha función realice su tarea antes de asignar el resultado a la variable, que en este caso es el innerHTML del elemento div creado para este ejemplo.

Puedes leer un poco más sobre funciones async en MDN (https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/funcion_asincrona).

También puedes leer más sobre la API Fetch en MDN (https://developer.mozilla.org/es/docs/Web/API/Fetch_API)

Espero que esto aclare tus dudas.
*/

// link de la 2da forma: https://es.stackoverflow.com/questions/258510/recuperar-informaci%C3%B3n-del-fetch-en-una-variable-externa
