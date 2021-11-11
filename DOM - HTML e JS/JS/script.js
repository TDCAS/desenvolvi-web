/* scripy JS
    Autor: Allan fortes barbosa
    Data:09/11/2021
    Versão: 1.1
    
*/
function mudarFuncao() {
    document.getElementById("1").value = "novo Texto";
    
}
// mudar valores com innerHTML
function mudarTexto2() {
    document.getElementById("texto2").innerHTML = "oloko";


}

// mudar css estilo 04
//css modificado em js
function mudarCss() {
    //console.log(document.getElementById("texto3").innerHTML);
    //document.getElementById("texto3").style.color = "blue";
    var texto = document.getElementById("texto3");
    texto.style.color = "white"
    texto.style.fontSize = "1.5rem"
}

const matriz = []

matriz[0] = "OK"

function mudarTexto3 (id) {
    console.log(id.innerHTML);

    id.innerHTML = "Texto alterado por javaScript";
}

/*function mudarTexto3(valor1, valor2) {
    console.log(valor1 + valor2);
}*/