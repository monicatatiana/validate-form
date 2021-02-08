const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input')


const expresiones = {
    name: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    lastname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    zip: /^.{4,12}$/, // 4 a 12 digitos.
    card: /^.{4,19}$/, // 4 a 19 digitos.
    city: /^[a-zA-Z0-9\_\-]{4,16}$/,
    cvc: /^\d{7,14}$/ // 7 a 14 numeros
    amount: /^.{4,19}$/, // 4 a 19 digitos.
}

const campos = {
    card: false,
    cvc: false,
    amount: false,
    lastname: false,
    name: false,
    city: false,
    zip: false
}


const validarFormulario = (e) => {
        switch (e.target.name) {
            case "card":
                validarCampo(expresiones.card, e.target, 'card');
                break;
            case "cvc":
                validarCampo(expresiones.cvc, e.target, 'cvc');
                break;
            case "amount":
                validarCampo(expresiones.amount, e.target, 'amount');
                
                break;

            case "lastname":
                validarCampo(expresiones.lastname, e.target, 'lastname');
                break;
            case "name":
                validarCampo(expresiones.name, e.target, 'name');
                break;
            case "city":
                validarCampo(expresiones.city, e.target, 'city');
                break;
            case "zip":
                validarCampo(expresiones.zip, e.target, 'zip');
                break;
        }

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}


        inputs.forEach((input) => {
            input.addEventListener('keyup', validarFormulario);
            input.addEventListener('blur', validarFormulario);
        });

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	
	if(campos.card && campos.name && campos.lastname && campos.city && campos.zip && campos.amount ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
}); 