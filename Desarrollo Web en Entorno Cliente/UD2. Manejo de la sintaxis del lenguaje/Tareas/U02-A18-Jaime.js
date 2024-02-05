function array() {
    var valores = [true, 5, false, "hola", "adios", 2];
    var strings = [];
    var booleanos = [];
    var nums = [];

    for (let i of valores) { //Los separa según su tipo
        if ((typeof i) == "number") {
            nums.push(i);
        }
        else if ((typeof i) == "string") {
            strings.push(i);
        }
        else if ((typeof i) == "boolean") {
            booleanos.push(i);
        }
    }

    //Según la palabra más larga produce una salida u otra
    if (strings[0].length > strings[1].length) {
        document.write(strings[0] + " es más grande que " + strings[1] + "<br><br>");
    } else {
        document.write(strings[1] + " es más grande que " + strings[0] + "<br><br>");
    }

    //Imprime operaciones con booleanos
    document.write(booleanos[0] + " or " + booleanos[1] + " --> " + (booleanos[0] || booleanos[1]) + "<br>");
    document.write(booleanos[0] + " and " + booleanos[1] + " --> " + (booleanos[0] && booleanos[1]) + "<br><br>");

    //Imprime operaciones con números
    document.write(nums[0] + " + " + nums[1] + " = " + (nums[0] + nums[1]) + "<br>");
    document.write(nums[0] + " x " + nums[1] + " = " + (nums[0] * nums[1]));


}
