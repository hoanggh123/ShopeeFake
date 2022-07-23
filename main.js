function dangnhap() {
    
        document.getElementById("form").style.position = 'fixed';
        document.getElementById("auth-form--register").style.display = 'none';
        document.getElementById("auth-form--login").style.display = 'block';
        document.getElementById("auth-form--login").style.animation = 'fadeIn linear 0.5s';    
    };
function dangki() {
        document.getElementById("form").style.position = 'fixed';
        document.getElementById("auth-form--register").style.display = 'block';
        document.getElementById("auth-form--login").style.display = 'none';  
        document.getElementById("auth-form--register").style.animation = 'fadeIn linear 0.5s';   
};
function exitlogin() {
    document.getElementById("auth-form--login").style.display = 'none';
    document.getElementById("form").style.position = ''; 
}
function exitregister() {
    document.getElementById("auth-form--register").style.display = 'none';
    document.getElementById("form").style.position = '';   
};
// function remove() {
//     document.getElementById("header_cart-list-item_remove").style.display = 'none';
//     document.getElementById("header_cart-no-cart-img").style.display = 'block';
//     document.getElementById("header_cart-no-cart-img").style.textAlign = 'center';
//     document.getElementById("header_cart-heading").style.display = 'none';
//     document.getElementById("header_cart-list-no-cart-msg").style.display = 'block';
// }
function link() {
    document.getElementById("category-item-link-male").style.color = 'var(--primary-color)';
    document.getElementById("category-item-link-female").style.color = 'var(--text-color)';

   
}
