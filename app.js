let amigo = [];

function agregarAmigo() {
    let imputAmigo = document.getElementById("amigo");
    let nombreAmigo = imputAmigo.value;
    
    if (!nombreAmigo) {
      alert("debes ingresar un nombre");
      return;
    }
    amigo.push(nombreAmigo);
    imputAmigo.value = "";
    imputAmigo.focus();
    renderizarAmigos();
}
 
function renderizarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigo.length; i++){
        let item = document.createElement("li");
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
    }
}



