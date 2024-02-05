function triple() {
    var n = prompt("Introduce el valor de n");
    var acc = 5;
    
    for (let i = 0; i < n; i++) {
        document.write(acc + "<br>");
        acc = acc * 3;
    }
}
