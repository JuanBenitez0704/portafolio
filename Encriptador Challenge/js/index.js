const textArea = document.querySelector(".text-area");
const textEncripted = document.querySelector(".text-encripted");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    textEncripted.value = textoEncriptado;
    textArea.value = "";
    textEncripted.style.backgroundImage = "none";
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    textEncripted.value = textoDesencriptado; 
    textArea.value = "";
    textEncripted.style.backgroundImage = "none";
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

