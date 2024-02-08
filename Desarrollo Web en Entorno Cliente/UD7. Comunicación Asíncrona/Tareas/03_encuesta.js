document.addEventListener("DOMContentLoaded", function () {
  var votos = document.querySelectorAll(".voto");
  votos.forEach((voto) => {
    voto.addEventListener("click", function () {
      console.log(voto);
      console.log(voto.value);
      fetch("03_encuesta_voto.php?input=" + voto.value)
        .then((result) => {})
        .catch((err) => {});
    });
  });
  console.log(response);
});
