import {request,addshade, showCart} from './functions.js'
let cart_but = document.querySelector('svg.carticon');
let cart = localStorage.getItem('cart')
if (cart == null) {
    console.log('nocart');
    localStorage.setItem('cart',JSON.stringify([]))
} 
cart_but.addEventListener('click',e=>{
    e.preventDefault();
    showCart();
})