let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let modeloSeleccionado = document.getElementById("modelo");
let descripcionSeleccionada = document.getElementById("descripcion");
let precioSeleccionado = document.getElementById("precio");

function cargar(item){
    quitarBordes();

 const mostradorStyle = mostrador.style;
 const seleccionStyle = seleccion.style;

 mostrador.style.width= "60%";
 seleccion.style.height= "70%";
 seleccion.style.width= "40%";
 seleccion.style.opacity ="17";
 item.style.border = "2px solid black";

 imgSeleccionada.src = item.getElemetsByTagName("img")[0].src;


    modeloSeleccionado.innerHTML = item.getElemetsByTagName("p")[0].innerHTML

    descripcionSeleccionada.innerHTML = "Descripcion del modelo";

    precioSeleccionado.innerHTML = item.getElemetsByTagName("span")[0].innerHTML
}

function quitarBordes(){
    var items = document.getElementsByClassName("item");
    for(i=0;i < items.length; i++){
        items[i].style.border = "none";
    }
}

function cerrar(){
    mostrador.style.width = "100%";
    seleccion.style.width = "0";
    seleccion.style.opacity = "0";
    quitarBordes();
}
