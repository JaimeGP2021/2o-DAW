// Realice un script que permita llevar un contador de todas las veces que se ha visitado una
// página.

var label_ios = document.getElementById("label_ios");
var label_android = document.getElementById("label_android");
var label_windows = document.getElementById("label_windows");
var label_otros = document.getElementById("label_otro");

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
  parseFloat(getCookie("pro_ios")) +
  parseFloat(getCookie("pro_android")) +
  parseFloat(getCookie("pro_windows")) +
  parseFloat(getCookie("pro_otro"));
  console.log(total);
  
  label_ios.innerHTML =
  ((parseFloat(getCookie("pro_ios")) / total) * 100).toFixed(2) + "% | Ios";
  
  label_android.innerHTML =
  ((parseFloat(getCookie("pro_android")) / total) * 100).toFixed(2) +
  "% | Android";
  
  label_windows.innerHTML =
  ((parseFloat(getCookie("pro_windows")) / total) * 100).toFixed(2) +
  "% | Windows";
  
  label_otros.innerHTML =
  ((parseFloat(getCookie("pro_otro")) / total) * 100).toFixed(2) +
  "% | Otros";
}

var botar = document.getElementById("voto");
botar.addEventListener("click", votacion);
window.addEventListener("load", valcook);
window.addEventListener("load", porcentaje);
