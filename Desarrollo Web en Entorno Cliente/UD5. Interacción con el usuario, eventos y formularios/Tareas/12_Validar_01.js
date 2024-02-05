// Valida el siguiente formulario. Valide también que no puedan dejarse en blanco. Validar el 
// formulario ayudándote de los atributos de html5. La validación se debe realizar poco a poco 
// según el usuario vaya rellenando los campos. En caso de introducir un valor incorrecto, 
// limpiar el campo. 

document.querySelectorAll('.entrada').forEach(item => {
  item.addEventListener('blur', ()=>{
    if (item.validity.patternMismatch){
      item.value = "";
    }
  })
});
