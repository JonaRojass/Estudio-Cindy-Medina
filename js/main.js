
// Simulador consiste en solicitar credenciales de usuario y contraseña para ingresar a la pagina web de un sitio en donde se prestan servicios de Salon de Belleza)


alert ("Bienvenida a Estudio Cindy Medina")

const usuario = prompt ("ingrese Rut sin digito verificador");

const clave = prompt("ingrese su contraseña");

 if (usuario === "17018551" && clave === "1234") {

    alert ("Credenciales de acceso ingresadas exitosamente");

let repetir = false;

do {

    console.log("Oferta del día ¡Diseño de Cejas! a tan solo $9.990.- Si quieres agendar presiona aceptar");
}while (repetir)

confirm ("Oferta del día ¡Diseño de Cejas! a tan solo $9.990.- Si quieres agendar presiona aceptar")

} else {
    alert("Usuario y/o contraseña invalidas");

};



