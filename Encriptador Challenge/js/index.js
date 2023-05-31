const textArea = document.querySelector(".text-box");
const mensaje = document.querySelector(".text-mensaje");
const copia = document.querySelector(".btn-copiar");
copia.style.display = "none";


function validarTexto(){
    let textoEscrito = document.querySelector(".text-area").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}


function btnEncriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        mensaje.style.backgroundImage = "none";
        textArea.value = "";
        copia.style.display = "block";
    
    }
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    textEncripted.value = textoDesencriptado; 
    textArea.value = "";
    textArea.value = "";
}

function btnCopiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}


function encriptar(stringTextArea){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringTextArea = stringTextArea.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){
        if (stringTextArea.includes(matrizCodigo[i][0])) {
            stringTextArea = stringTextArea.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringTextArea;
}

function desencriptar(stringEncripted){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncripted = stringEncripted.toLowerCase();
   
    for(let i = 0; i < matrizCodigo.length; i++){
        if (stringEncripted.includes(matrizCodigo[i][1])) {
            stringEncripted = stringEncripted.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringEncripted;
}


