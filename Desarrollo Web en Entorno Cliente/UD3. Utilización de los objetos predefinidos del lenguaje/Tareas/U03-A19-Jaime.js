function cambiaColor() {
    var frame1 = parent.document.getElementById("marco1");
    var color = frame1.contentDocument.getElementById("color").value;
    console.log(color);


    var frame2 = parent.document.getElementById("marco1");
    console.log(frame2);
    var frame = frame2.contentDocument.getElementById("marcos").value;
    console.log(frame);

    
    if (frame == "0") {
        window.parent.Marco1.document.bgColor = color;
    } else {
        window.parent.Marco2.document.bgColor = color;
    }
}
