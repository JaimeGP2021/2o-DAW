// En el componente Button.js, crearemos un componente reutilizable de botón que acepte props para personalizar su aspecto y comportamiento.
// Usaremos estos botones en nuestras páginas y componentes según sea necesario.

function Button(props) {

    return (
      <button className='boton' type="button" id={props.id} onClick={props.click}>
          {props.accion}
      </button>
    )
  }
  
  export default Button
