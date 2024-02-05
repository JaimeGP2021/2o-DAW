var boton1 = document.getElementById("b1");
var it = document.querySelectorAll(".it");

boton1.addEventListener("click", function () {
  it.forEach((itype) => {
    if (itype.disabled) {
      itype.disabled = false;
    } else {
      itype.disabled = true;
    }
  });
});
