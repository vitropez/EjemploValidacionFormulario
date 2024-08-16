window.addEventListener("load", () => {
  mensajeError = document.getElementById("errores");

  let nombre = document.getElementById("nombre");
  nombre.addEventListener("blur", () => {
    let nombreMayusculas = nombre.value.toUpperCase();
    nombre.value = nombreMayusculas;
    comprobarNombre(nombre);
  });

  let apellido = document.getElementById("apellidos");
  apellido.addEventListener("blur", () => {
    let apellidoMayusculas = apellido.value.toUpperCase();
    apellido.value = apellidoMayusculas;
    comprobarApellido(apellido);
  });

  let edad = document.getElementById("edad");
  edad.addEventListener("blur", () => {
    comprobarEdad(edad);
  });
  let nif = document.getElementById("nif");
  nif.addEventListener("blur", () => {
    comprobarNif(nif);
  });

  let email = document.getElementById("email");
  email.addEventListener("blur", () => {
    comprobarEmail(email);
  });

  let provincia = document.getElementById("provincia");

  let fecha = document.getElementById("fecha");
  fecha.addEventListener("blur", () => {
    comprobarFecha(fecha);
  });

  let tlf = document.getElementById("telefono");
  tlf.addEventListener("blur", () => {
    comprobarTelefono(tlf);
  });

  let hora = document.getElementById("hora");
  hora.addEventListener("blur", () => {
    comprobarHora(hora);
  });

  function comprobarNombre(nombre) {
    let miNombre = nombre.value;

    let nombreValido = new RegExp("[a-zA-Z]");
    if (nombreValido.test(miNombre) == false || nombreValido == "") {
      mensajeError.innerHTML = "el nombre no es válido";
      nombre.focus();
    } else {
      mensajeError.innerHTML = "";
    }
  }

  function comprobarApellido(apellido) {
    let miApellido = apellido.value;
    let ApellidoValido = new RegExp("[a-zA-Z]");
    if (ApellidoValido.test(miApellido) == false || ApellidoValido == "") {
      mensajeError.innerHTML = "el nombre o el apellido no es válido";
      apellido.focus();
    } else {
      mensajeError.innerHTML = "";
    }
  }

  function comprobarEdad(edad) {
    let miEdad = edad.value;
    let edadValido = new RegExp(`^([1-9][0-9]|[0-9]|1(0[0-5]))$`);
    if (edadValido.test(miEdad) == false || edadValido == "") {
      mensajeError.innerHTML = "La edad no es valida";
      edad.focus();
    } else {
      mensajeError.innerHTML = "";
    }
  }

  function comprobarNif(nif) {
    let miNif = nif.value;
    let nifValido = new RegExp("[1-9][0-9]{7}[a-zA-Z]$");
    if (nifValido.test(miNif) == false || nifValido == "") {
      mensajeError.innerHTML = "el NIF no es válido";
      nif.focus();
    } else {
      mensajeError.innerHTML = "";
    }
  }
  /*
  ^ indica el inicio de la cadena.
[1-9] el primer digito debe estar entre 1 o 9
[0-9]{7} captura los siguientes 7 dígitos .
[a-zA-Z] captura la letra que representa el dígito de control. Puede ser una letra mayúscula o minúscula.
$ indica el final de la cadena.
   */
  function comprobarEmail(email) {
    let miMail = email.value;
    let mailValido = new RegExp(
      "^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$"
    );
    if (mailValido.test(miMail) == false || mailValido == "") {
      mensajeError.innerHTML = "el email no es válido";
      email.focus();
    } else {
      mensajeError.innerHTML = "";
    }
  }
  /*
^ indica el inicio de la cadena.
[a-zA-Z0-9._%+-]+ captura uno o más caracteres alfanuméricos, puntos, guiones bajos, porcentajes,
 signos más o guiones medios antes del símbolo @.
@ captura el símbolo @.
[a-zA-Z0-9.-]+ captura uno o más caracteres alfanuméricos, puntos o guiones medios después del símbolo @.
\. captura el punto que separa el dominio de nivel superior del resto del E-MAIL.
[a-zA-Z]{2,} captura dos o más caracteres alfabéticos que representan el dominio de nivel superior.
$ indica el final de la cadena.
*/

  function comprobarFecha(fecha) {
    let miFecha = fecha.value;
    let fechaValido = new RegExp("^([0-9]{2})(/|-)([0-9]{2})(/|-)([0-9]{4})$");
    if (fechaValido.test(miFecha) == false || fechaValido == "") {
      mensajeError.innerHTML = "la fecha no es válido";
      fecha.focus();
    } else {
      mensajeError.innerHTML = "";
    }
  }
  /*
^ indica el inicio de la cadena.
([0-9]{2}) captura los dos primeros dígitos que representan el día.
(/|-)  el separador que puede ser una barra diagonal o un guión.
([0-9]{2}) captura los dos siguientes dígitos que representan el mes.
(/|-)  el separador que puede ser una barra diagonal o un guión.
([0-9]{4}) captura los cuatro últimos dígitos que representan el año.
$ indica el final de la cadena.
   */

  function comprobarTelefono(tlf) {
    let mitlf = tlf.value;
    let telefonoValido = new RegExp("^[0-9]{9}$");
    if (telefonoValido.test(mitlf) == false || telefonoValido == "") {
      mensajeError.innerHTML = "el telefono no es válido";
      tlf.focus();
    } else {
      mensajeError.innerHTML = "";
    }
  }
  /**
 ^ indica el inicio de la cadena.
[0-9]{9} captura los 9 dígitos que representan el número de teléfono.
$ indica el final de la cadena.
 */

  function comprobarHora(hora) {
    let miHora = hora.value;
    let horaValido = new RegExp("^([0-1][0-9]|2[0-3]):([0-5][0-9])$");
    if (horaValido.test(miHora) == false || horaValido == "") {
      mensajeError.innerHTML = "la hora no es válida";
      hora.focus();
    } else {
      mensajeError.innerHTML = "";
    }
  }

  /*
 ^ indica el inicio de la cadena.
([0-1][0-9]|2[0-3]) captura los dos primeros dígitos que representan la hora.
 El primer dígito puede ser 0 o 1, mientras que el segundo dígito puede ser cualquier número entre 0 y 9
si el primer dígito es 0, o cualquier número entre 0 y 3 si el primer dígito es 1.
Si el primer dígito es 2, el segundo dígito puede ser cualquier número entre 0 y 3.
: captura el separador que debe ser un dos puntos.
([0-5][0-9]) captura los dos últimos dígitos que representan los minutos.
 El primer dígito puede ser cualquier número entre 0 y 5,
mientras que el segundo dígito puede ser cualquier número entre 0 y 9
 
 */

  let numberCookie = 1;
  let addCookie = document.getElementById("enviar");
  let mostrarIntentos = document.getElementById("intentos");
  addCookie.addEventListener("click", function () {
    let enviarDatos=prompt("desea enviar los datos?(s/n)")
    if(enviarDatos=="s"){
    comprobarNombre(nombre);
    comprobarEdad(edad);
    comprobarApellido(apellido);
    comprobarFecha(fecha);
    comprobarTelefono(tlf);
    comprobarHora(hora);
    comprobarEmail(email);
    comprobarNif(nif);

    if (provincia.value == "0") {
      mensajeError.innerHTML = "selecciona una provincia";
      provincia.focus();
    }

    if (mensajeError.innerHTML == "") {
      document.cookie = "cookieTarea=" + numberCookie;

      let miGalleta = document.cookie.split("=");

      mostrarIntentos.innerHTML =
        "Intento de Envíos del formulario:" + miGalleta[1];

      numberCookie++;
    }
    let enviar = document.getElementById("formulario");
    enviar.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  }
  });
});
