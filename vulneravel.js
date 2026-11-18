const entrada = window.location.hash.slice(1);
eval(entrada);
document.getElementById("teste").innerHTML = entrada;