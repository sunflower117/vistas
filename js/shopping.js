let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#clase-cart");

cartIcon.onclick = ()=>{
    cart.classList.add("active");
};

closeCart.onclick = ()=>{
    cart.classList.remove("active");
};

const mostradorStyle = mostrador.style;
// const seleccionStyle = seleccion.style;



//     mostrador.style.width = "60%";
//     seleccion.style.height= "70%"
//     seleccion.style.width = "40%";
//     seleccion.style.opacity = "17";
//     item.style.border = "2px solid black";

//     imgSeleccionada.src = item.getElementsByTagName("img")[0].src;
