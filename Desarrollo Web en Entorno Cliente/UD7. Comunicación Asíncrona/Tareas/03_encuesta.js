document.addEventListener("DOMContentLoaded", function () {
  var votos = document.querySelectorAll(".voto");
  votos.forEach((voto) => {
    voto.addEventListener("click", function () {
      fetch("03_encuesta_voto.php?input=" + voto.value)
        .then(function (result) {
          return result.text();
        })
        .then(function (data) {
          pintavotos(data);
        });
    });
  });

  function pintavotos(votaciones) {
    let array = votaciones.split("||");
    let total =
      parseInt(array[0]) +
      parseInt(array[1]) +
      parseInt(array[2]) +
      parseInt(array[3]);
    for (let i = 0; i < 4; i++) {
      document.getElementById(`${i}`).value =
        (parseInt(array[i]) / total) * 100;
    }
  }
});
