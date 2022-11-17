var formSection = document.querySelector(".form");
console.log(formSection);
var boton = document.querySelector(".hero_boton");
boton.onclick = function singUp() {
    // Esto es para que el botón sólo funcione una vez
    this.disabled = true;
    // caja que encierra el formulario
    const div = document.createElement("div");
    div.className = "form__box";
    // caja que encierra el titulo de forms
    const boxTitle = document.createElement("div");
    boxTitle.className = "form__head";
    // Titulo de la seccion
    const hr = document.createElement("hr");
    const hr2 = hr.cloneNode();
    const titulo = document.createElement("h1");
    titulo.textContent = "formulario de inscripción:";
    // formulario
    const form = document.createElement("form");
    form.className = "form__formulario";
    form.name = "formulario";
    // organizacion en parrafos 
    const p = document.createElement("p");
    // etiqueta
    const labelNombre = document.createElement("label");
    // mensaje error nombre
    const spanNombre = document.createElement("span");
    spanNombre.className = "error";
    spanNombre.ariaLive = "polite";
    // input del nombre
    const inputNombre = document.createElement("input");
    inputNombre.className = "form__nombre";
    inputNombre.name = "nombre";
    inputNombre.type = "text";
    inputNombre.placeholder = "Nombre";
    inputNombre.required = "true";
    inputNombre.minLength = "3";
    // organizacion de parrafo
    const p2 = p.cloneNode();
    const labelApellido = labelNombre.cloneNode();
    const spanApellido = spanNombre.cloneNode();
    // input del apellido
    const inputApellido = document.createElement("input");
    inputApellido.className = "form__apellido";
    inputApellido.name = "apellido";
    inputApellido.type = "text";
    inputApellido.placeholder = "Apellido";
    inputApellido.required = "true";
    inputApellido.minLength = "3";
    // organizacion del correo
    const p3 = p.cloneNode();
    const labelCorreo = labelNombre.cloneNode();
    const spanCorreo = spanNombre.cloneNode();
    // input del correo
    const inputCorreo = document.createElement("input");
    inputCorreo.className = "form__correo";
    inputCorreo.name = "Correo";
    inputCorreo.type = "email";
    inputCorreo.placeholder = "Correo";
    inputCorreo.required = "true";
    // organizacion de la clave
    const p4 = p.cloneNode();
    const labelClave = labelNombre.cloneNode();
    const spanClave = spanNombre.cloneNode();
    // input del clave
    const inputClave = document.createElement("input");
    inputClave.className = "form__clave";
    inputClave.name = "clave";
    inputClave.type = "password";
    inputClave.placeholder = "Contraseña";
    inputClave.required = "true";
    inputClave.minLength = "6";
    // boton suscribirse
    const botonSuscribe = document.createElement("button");
    botonSuscribe.className = "form__button";
    botonSuscribe.name = "button";
    botonSuscribe.type = "button";
    botonSuscribe.textContent = "suscribe";

    // Agregando la seccion
    formSection.appendChild(div);
    div.appendChild(boxTitle);
    boxTitle.appendChild(hr);
    boxTitle.appendChild(titulo);
    boxTitle.appendChild(hr2);
    div.appendChild(form);
    // Agregando nombre
    form.appendChild(p);
    p.appendChild(labelNombre);
    labelNombre.appendChild(spanNombre);
    labelNombre.appendChild(inputNombre);
    // Agregando apellido
    form.appendChild(p2);
    p2.appendChild(labelApellido);
    labelApellido.appendChild(spanApellido);
    labelApellido.appendChild(inputApellido);
    // Agregando Correo
    form.appendChild(p3);
    p3.appendChild(labelCorreo);
    labelCorreo.appendChild(spanCorreo);
    labelCorreo.appendChild(inputCorreo);
    // Agregando Clave
    form.appendChild(p4);
    p4.appendChild(labelClave);
    labelClave.appendChild(spanClave);
    labelClave.appendChild(inputClave);
    // Agregando Boton Suscribe
    div.appendChild(botonSuscribe);
    var listaInputs = [inputNombre, inputApellido, inputCorreo, inputClave];

    botonSuscribe.onclick = function suscribe(event) {
        for (var i = 0; i<listaInputs.length; i++) {

            if(!listaInputs[i].validity.valid) {
                // Si no es así, mostramos un mensaje de error apropiado
                showError();
                // Luego evitamos que se envíe el formulario cancelando el evento
                event.preventDefault();
            }
            else{
                alert('Inscripción completa.');
                div.remove();
                break;
            }
            function showError() {

                    if(listaInputs[i].validity.valueMissing) {
                        // Si el campo está vacío
                        // muestra el mensaje de error siguiente.
                        listaInputs[i].placeholder = 'Introducir un '+listaInputs[i].name+'.';
                        return;

                    } 
                    else if(listaInputs[i].validity.typeMismatch) {
                        // Si el campo no contiene una dirección de correo electrónico
                        // muestra el mensaje de error siguiente.
                        listaInputs[i].value = null;
                        listaInputs[i].placeholder = listaInputs[i].name + ' inválido.';
                        return;
                    } 
                    else if(listaInputs[i].validity.tooShort) {
                        // Si los datos son demasiado cortos
                        // muestra el mensaje de error siguiente.
                        listaInputs[i].value = null;
                        listaInputs[i].placeholder = 'El '+listaInputs[i].name + ' es muy corto.';
                        // inputNombre.placeholder = 'El correo electrónico debe tener al menos ${ email.minLength } caracteres; ha introducido ${ email.value.length }.';
                        return;
                    }
                    
                    // Establece el estilo apropiado
                    nombreError.className = 'error activo';

        }
        }
        
    }
    
}