var label_solo = document.getElementById("label_solo");
var label_leche = document.getElementById("label_leche");
var label_desc = document.getElementById("label_desc");
var label_hielo = document.getElementById("label_hielo");

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function valcook() {
  var total = 0;
  document.querySelectorAll(".barra").forEach((item) => {
    let galleta = getCookie(item.id);
    if (galleta == "") {
      document.cookie = item.id + "=" + item.value;
    } else {
      item.value = galleta;
      total += parseInt(galleta);
    }
  });
  document.querySelectorAll(".barra").forEach((item) => {
    item.max = total;
  });
}

function votacion() {
  document.querySelectorAll(".opcion").forEach((item) => {
    if (item.checked) {
      document.cookie =
        "pro_" +
        item.id +
        "=" +
        String(parseInt(getCookie("pro_" + item.id)) + 1);
      valcook();
      porcentaje();
    }
  });
}

function porcentaje() {
  let total =
    parseFloat(getCookie("pro_solo")) +
    parseFloat(getCookie("pro_leche")) +
    parseFloat(getCookie("pro_desc")) +
    parseFloat(getCookie("pro_hielo"));

  label_solo.innerHTML =
    ((parseFloat(getCookie("pro_solo")) / total) * 100).toFixed(2) +
    "% | Café Solo";

  label_leche.innerHTML =
    ((parseFloat(getCookie("pro_leche")) / total) * 100).toFixed(2) +
    "% | Café con leche";

  label_desc.innerHTML =
    ((parseFloat(getCookie("pro_desc")) / total) * 100).toFixed(2) +
    "% | Café descafeinado";

  label_hielo.innerHTML =
    ((parseFloat(getCookie("pro_hielo")) / total) * 100).toFixed(2) +
    "% | Café solo con hielo";
}

var botar = document.getElementById("voto");
botar.addEventListener("click", votacion);
window.addEventListener("load", valcook);
window.addEventListener("load", porcentaje);
