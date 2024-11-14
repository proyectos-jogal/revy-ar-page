// Validacion de Campos de Formulario

function validarNombreApellido(event) {

    const regex = /^[A-Za-záéíóúñÑ]+$/;
    if (!regex.test(event.target.value)) {
        event.target.setCustomValidity('Solo se permiten letras en este campo');
    } else {
        event.target.setCustomValidity('');
    }

}