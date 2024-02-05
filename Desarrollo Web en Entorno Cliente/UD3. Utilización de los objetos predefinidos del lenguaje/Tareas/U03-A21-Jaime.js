var a = document.getElementById("A");
var b = document.getElementById("B");
var c = document.getElementById("C");

function infoA() {
    a.innerHTML = ("Navigator <b>appcodenames</b>: " + navigator.appCodeName + "<br>" +
        "Navigator <b>appName</b>: " + navigator.appName + "<br>" +
        "Navigator <b>appVersion</b>: " + navigator.appVersion + "<br>" +
        "Navigator <b>language</b>: " + navigator.language + "<br>" +
        "Navigator <b>platform</b>: " + navigator.platform + "<br>" +
        "Navigator <b>product</b>: " + navigator.product + "<br>" +
        "Navigator <b>userAgent</b>: " + navigator.userAgent + "<br>" +
        "Navigator <b>cookies</b>: " + navigator.cookieEnabled + "<br>" +
        "Navigator <b>onLine</b>: " + navigator.onLine + "<br><br>") +
        javaEnabled();
}

function javaEnabled() {
    if (navigator.javaEnabled()) {
        return "El navegador <b>SÍ</b> esta preparado  para soportar los Applets de Java.";
    } else {
        return "El navegador <b>NO</b> esta preparado  para soportar los Applets de Java.";
    }
}

function infoB() {
    b.innerHTML = ("Altura total: " + screen.height +
        "<br>Altura disponible: " + screen.availHeight +
        "<br>Anchura total: " + screen.width +
        "<br>Anchura disponible: " + screen.availWidth +
        "<br>Profundidad de color: " + screen.colorDepth)
}

function infoC() {
    c.innerHTML = ("Las dimensiones de la barra de herramienta son:<br>" +
        "Altura: " + ((window.outerHeight - window.innerHeight)) + "<br>" +
        "Anchura: " + window.outerWidth)
}

function cambiacolor() {
    var color = document.getElementById("color").value;
    document.body.style.backgroundColor = color;
}
