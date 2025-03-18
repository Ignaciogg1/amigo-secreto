// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const listaAmigos =[];
const inputAmigo = document.getElementById("amigo");
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado"); 

function agregarAmigo(){
    if (inputAmigo.value == "") {
        ulResultado.innerHTML = "Debe ingresar nombre correcto";   
    }
    else if (inputAmigo.value >= 0) {
        ulResultado.innerHTML = "Debe ingresar nombre correcto";
    }
    else{
        ulResultado.innerHTML = "";
        listaAmigos.push(inputAmigo.value);
        ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
    }
}

function sortearAmigo() {
   const random = Math.floor(Math.random() * listaAmigos.length);
   const resultado = listaAmigos[random];
   ulResultado.innerHTML = `<li>Tu amigo secreto es: ${resultado}</li>`;
}

