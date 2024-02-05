function mata_numero() {
    var s = prompt("Introduce una cadena")

    for (let i of s) {
        if (isNaN(i)) {
            document.write(i+"<br>")
        }
    }
}
