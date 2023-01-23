document.querySelector('.EncriptarBoton').addEventListener('click', function encriptar (){

    var input = document.querySelector("input");
    input.focus();

    var ingresoDatos = input.value;

    var datosEncriptados = ingresoDatos.replace(/e/g, "enter");
    var datosEncriptados = datosEncriptados.replace(/i/g, "imes");
    var datosEncriptados = datosEncriptados.replace(/a/g, "ai");
    var datosEncriptados = datosEncriptados.replace(/o/g, "ober");
    var datosEncriptados = datosEncriptados.replace(/u/g, "ufat");

    const CajaTexto = document.getElementById("CajaDeTexto");
    CajaTexto.innerHTML = datosEncriptados;

    input.value = "";

    imagen = document.getElementById("Imagen-Cripto").style.opacity = "0"; 
});

document.querySelector('.CopiarBoton').addEventListener('click', function(){

    var DatosCaja = document.querySelector("#CajaDeTexto");
    DatosCaja.select();
    var copiar = document.querySelector('#CajaDeTexto').value;
    navigator.clipboard.writeText(copiar);
});

document.querySelector('.DesencriptarBoton').addEventListener('click',function desencriptar (){

    var input = document.querySelector("input");
    input.focus();

    var ingresoDatos = input.value;

    var datosDesencriptados = ingresoDatos.replace(/enter/g, "e");
    var datosDesencriptados = datosDesencriptados.replace(/imes/g, "i");
    var datosDesencriptados = datosDesencriptados.replace(/ai/g, "a");
    var datosDesencriptados = datosDesencriptados.replace(/ober/g, "o");
    var datosDesencriptados = datosDesencriptados.replace(/ufat/g, "u");

    const CajaTexto = document.getElementById("CajaDeTexto");
    CajaTexto.innerHTML = datosDesencriptados;

});
