function dangnhap() {
    
        document.getElementById("form").style.position = 'fixed';
        document.getElementById("auth-form--register").style.display = 'none';
        document.getElementById("auth-form--login").style.display = 'block';
        
        
    };
function dangki() {
        
        document.getElementById("form").style.position = 'fixed';
        document.getElementById("auth-form--register").style.display = 'block';
        document.getElementById("auth-form--login").style.display = 'none';   
    
};
function exitlogin() {
    document.getElementById("auth-form--login").style.display = 'none';
    document.getElementById("form").style.position = '';

    
}
function exitregister() {
    document.getElementById("auth-form--register").style.display = 'none';
    document.getElementById("form").style.position = '';

    
}
