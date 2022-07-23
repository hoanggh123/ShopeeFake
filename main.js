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
    var categoryitemlinkchildren = document.getElementById("category-item-children");
    var categoryitemlinkmale = document.getElementById("category-item-male");
    var categoryitemlinkfemale = document.getElementById("category-item-female");
    categoryitemlinkmale.classList.add('category-item-active');
    categoryitemlinkfemale.classList.remove('category-item-active');
    categoryitemlinkchildren.classList.remove('category-item-active');
    document.getElementById("category-item-link-male").style.color = 'var(--primary-color)';
    document.getElementById("category-item-link-female").style.color = 'var(--text-color)';
    document.getElementById("category-item-link-children").style.color = 'var(--text-color)';
    
   
}
function link2() {
    var categoryitemlinkchildren = document.getElementById("category-item-children");
    var categoryitemlinkmale = document.getElementById("category-item-male");
    var categoryitemlinkfemale = document.getElementById("category-item-female");
    categoryitemlinkmale.classList.remove('category-item-active');
    categoryitemlinkchildren.classList.add('category-item-active');
    categoryitemlinkfemale.classList.remove('category-item-active');

    document.getElementById("category-item-link-male").style.color = 'var(--text-color)';
    document.getElementById("category-item-link-female").style.color = 'var(--text-color)';
    document.getElementById("category-item-link-children").style.color = 'var(--primary-color)';

   
}
