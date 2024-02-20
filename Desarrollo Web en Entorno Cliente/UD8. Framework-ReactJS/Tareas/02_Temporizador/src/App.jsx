import React, { useState } from 'react';
import Temporizador from './Temporizador';
import MensajeFinal from './MensajeFinal';

import './App.css';

const App = () => {
  const [mostrarTemporizador, setMostrarTemporizador] = useState(false);
  const [tiempoInicial, setTiempoInicial] = useState(0);

  const iniciarTemporizador = (tiempo) => {
    setTiempoInicial(tiempo);
    setMostrarTemporizador(true);
  };

  const reiniciarAplicacion = () => {
    setMostrarTemporizador(false);
  };

  return (
    <div>
      {mostrarTemporizador ? (
        <MensajeFinal reiniciarAplicacion={reiniciarAplicacion} />
      ) : (
        <div>
          <h1>App</h1>
          <label>
            Introduce el tiempo en segundos:
            <input type="number" onChange={(e) => setTiempoInicial(e.target.value)} />
          </label>
          <button onClick={() => iniciarTemporizador(tiempoInicial)}>Iniciar Temporizador</button>
        </div>
      )}

      {mostrarTemporizador && <Temporizador tiempoInicial={tiempoInicial} />}
    </div>
  );
};

export default App;
