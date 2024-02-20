const MensajeFinal = ({ reiniciarAplicacion }) => {
  return (
    <div>
      <h1>SE HA TERMINADO EL TIEMPO</h1>
      <button onClick={reiniciarAplicacion}>REINICIAR</button>
    </div>
  );
};

export default MensajeFinal;
