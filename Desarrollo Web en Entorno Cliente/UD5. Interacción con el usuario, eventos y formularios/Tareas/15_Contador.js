// Realice un script que permita llevar un contador de todas las veces que se ha visitado una 
// página.

if (document.cookie == ""){
  document.cookie="contador=0"
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var contador = document.getElementById('contador');

window.addEventListener('load', ()=>{
  document.cookie = "contador=" + (parseInt(getCookie('contador')) + 1);
  contador.innerHTML = getCookie('contador')
})
