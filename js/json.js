// JSON.parse() parses a string, written in JSON format, and returns a JavaScript object
var obj = JSON.parse('{"firstName":"John", "lastName":"Doe"}');
document.getElementById("demo").innerHTML = obj.firstName;

// Convert a JavaScript object into a JSON string, and send it to the server
var myObj = { "name":"John", "age":31, "city":"New York" };
var myJSON = JSON.stringify(myObj);

// window.location = "demo_json.php?x=" + myJSON; //Comentado porque No tenemos implementado servidor, se reemplazo con la instruccion de abajo

document.getElementById("demo2").innerHTML = myJSON;