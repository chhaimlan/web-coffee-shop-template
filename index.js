let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchItem.classList.remove('active');
    cartItem.classList.remove('active');
    console.log(navbar);
}

let searchItem = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchItem.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}


let cartItem = document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchItem.classList.remove('active');
    
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchItem.classList.remove('active');
    cartItem.classList.remove('active');

}



