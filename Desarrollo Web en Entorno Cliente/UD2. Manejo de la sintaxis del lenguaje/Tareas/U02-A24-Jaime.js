function fibonacci() {
    var n = prompt("Introduce el valor de n");
    var ant1 = 0;
    var ant2 = 1;
    var acc = 0;
    
    for (let i = 0; i < n; i++) {
        acc = ant1 + ant2;
        document.write(acc + "<br>");
        ant2 = ant1;
        ant1 = acc;
    }
}
