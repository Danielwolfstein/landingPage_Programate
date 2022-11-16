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
    // input del apellido
    const inputApellido = document.createElement("input");
    inputApellido.className = "form__apellido";
    inputApellido.name = "apellido";
    inputApellido.type = "text";
    inputApellido.placeholder = "Apellido";
    inputApellido.required = "true";
    // input del correo
    const inputCorreo = document.createElement("input");
    inputCorreo.className = "form__correo";
    inputCorreo.name = "correo";
    inputCorreo.type = "mail";
    inputCorreo.placeholder = "Correo";
    inputCorreo.required = "true";
    // input del clave
    const inputClave = document.createElement("input");
    inputClave.className = "form__clave";
    inputClave.name = "clave";
    inputClave.type = "password";
    inputClave.placeholder = "Contraseña";
    inputClave.required = "true";
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
    form.appendChild(p);
    p.appendChild(labelNombre);
    labelNombre.appendChild(spanNombre);
    labelNombre.appendChild(inputNombre);
    form.appendChild(inputApellido);
    form.appendChild(inputCorreo);
    form.appendChild(inputClave);
    div.appendChild(botonSuscribe);

    botonSuscribe.onclick = function suscribe(event) {
        if(!inputNombre.validity.valid) {
            // Si no es así, mostramos un mensaje de error apropiado
            showError();
            // Luego evitamos que se envíe el formulario cancelando el evento
            event.preventDefault();
          }
        
        let nombreError = document.querySelector("spanNombre");
        function showError() {
            if(inputNombre.validity.valueMissing) {
                // Si el campo está vacío
                // muestra el mensaje de error siguiente.
                alert("debe introducir un nombre");
                nombreError.textContent = 'Debe introducir una dirección de correo electrónico.';
            } else if(inputNombre.validity.typeMismatch) {
                // Si el campo no contiene una dirección de correo electrónico
                // muestra el mensaje de error siguiente.
                alert("lo que introdujo no es un correo electronico");
                nombreError.textContent = 'El valor introducido debe ser una dirección de correo electrónico.';
            } else if(inputNombre.validity.tooShort) {
                // Si los datos son demasiado cortos
                // muestra el mensaje de error siguiente.
                alert("No existen nombres tan cortos")
                nombreError.textContent = 'El correo electrónico debe tener al menos ${ email.minLength } caracteres; ha introducido ${ email.value.length }.';
            }
            
            // Establece el estilo apropiado
            nombreError.className = 'error activo';
        }
    }
    // let strValidacion = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    // let texto = usuarioInput.value;
    // let verificacion = strValidacion.test(texto);
    // let clave = claveInput.value;
    // if(verificacion==true&&clave.length>6){
    //     console.log("Correo y clave válidas");
    //     alert("Correo y clave válidas");
    // }
    // else if(verificacion==false && clave.length>6){
    //     console.error("Correo inválido");
    //     alert("Correo inválido");
    // }
    // else if(verificacion==true && clave.length<=6){
    //     console.error("Clave inválida");
    //     alert("Clave inválida");
    // }
    // else {
    //     console.error("Correo y clave inválidas");
    //     alert("Correo y clave inválidas");
    // }
}