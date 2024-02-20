import { useState, useEffect } from "react";

const Temporizador = ({ tiempoInicial }) => {
  const [segundos, setSegundos] = useState(tiempoInicial);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (segundos > 0) {
        setSegundos(segundos - 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [segundos]);

  return (
    <div>
      <h1>Temporizador</h1>
      <p>{segundos} segundos restantes</p>
    </div>
  );
};

export default Temporizador;
