// Esta parte es con la que hice el contador del textarear

const mensaje = document.getElementById('mensaje');
const contador = document.getElementById('contador');

mensaje.addEventListener('input', function(e) {
    const target = e.target;
    const longitudMax = target.getAttribute('maxlength');
    const longitudAct = target.value.length;
    contador.innerHTML = `${longitudAct}/${longitudMax}`;
});

//Aqui empieza la validacion de datos de los campos.

const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
};

const campos = {
    nombre: false,
    email: false,
    documento: false,
    telefono: false,
    servicio: false,
    personas: true,
    fecha: true,
    hora: true

}

const ValidarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            ValidarCampo(expresiones.nombre, e.target, "nombre");
            break;
        case "email":
            ValidarCampo(expresiones.correo, e.target, "email");
            break;
        case "documento":
            ValidarCampo(expresiones.telefono, e.target, "documento");
            break;
        case "telefono":
            ValidarCampo(expresiones.telefono, e.target, "telefono");
            break;
    }
};

const ValidarCampo = (expresiones, input, campo) => {
    if (expresiones.test(input.value)) {
        document
            .getElementById(`grupo__${campo}`)
            .classList.remove("formulario__grupo-incorrecto");
        document
            .getElementById(`grupo__${campo}`)
            .classList.add("formulario__grupo-correcto");
        document
            .querySelector(`#grupo__${campo} .formulario__input-error`)
            .classList.remove("formulario__input-error-activo");
        campos[campo] = true;
    } else {
        document
            .getElementById(`grupo__${campo}`)
            .classList.add("formulario__grupo-incorrecto");
        document
            .getElementById(`grupo__${campo}`)
            .classList.remove("formulario__grupo-correcto");
        document
            .querySelector(`#grupo__${campo} .formulario__input-error`)
            .classList.add("formulario__input-error-activo");
        campos[campo] = false;
    }
    console.log(input.value + " -- " + campos[campo]);

};

function validarSelect(campo) {
    var servicio = document.getElementById(campo);

    if (servicio.value == 0 ||
        servicio.value == "") {
        document.getElementById(`grupo__${campo}`).classList.add("formulario__select-error");
        document.getElementById(`grupo__${campo}`).classList.remove(".formulario__select-correcto");
        document.querySelector(`#grupo__${campo} .formulario__select-error`)
            .classList.add("formulario__select-error-activo");
        campos[campo] = false;
    } else {
        document
            .getElementById(`grupo__servicio`)
            .classList.remove("formulario__select-error");
        document
            .getElementById(`grupo__servicio`)
            .classList.add(".formulario__select-correcto");
        document
            .querySelector(`#grupo__servicio .formulario__select-error`)
            .classList.remove("formulario__select-error-activo");
        campos[campo] = true;
    }

    console.log(servicio.value + " -- " + campos[campo]);

}


inputs.forEach((input) => {
    input.addEventListener("keyup", ValidarFormulario);
    input.addEventListener("blur", ValidarFormulario);
});

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const terminos = document.getElementById('terminos');

    validarSelect("servicio");

    if (campos.nombre &&
        campos.email &&
        campos.documento &&
        campos.telefono &&
        campos.servicio &&
        campos.personas &&
        campos.hora &&
        campos.fecha &&
        terminos.checked) {



        formulario.reset();

        document.querySelectorAll('.formulario__grupo--correcto').forEach((error) => {
            error.classList.remove('formulario__grupo--correcto');
        });
    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }

});