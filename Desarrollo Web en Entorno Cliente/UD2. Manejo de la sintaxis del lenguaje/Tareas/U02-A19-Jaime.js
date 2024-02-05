function passwd() {
    var passwd = "123mellizas";
    var passwd_try = prompt("Introduce una contraseña");

    while (passwd_try != passwd) {
        window.alert("Contraseña incorrecta vuelva a intentarlo");
        passwd_try = prompt("Introduce una contraseña");
    }
    
    document.write("<h1>¡Bienvenido a la página web!</h1>")
}
