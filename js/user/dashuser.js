//Obteniendo del LocalStorage
var nombresRecuperado = JSON.parse(localStorage.getItem('nombres'));
var usuariosRecuperado = JSON.parse(localStorage.getItem('usuarios'));
var clavesRecuperado = JSON.parse(localStorage.getItem('claves'));

const tipoUsuario = sessionStorage.getItem('tipoUsuario');
const nombreUsuario = sessionStorage.getItem('nombreUsuario');

//SI NO EXISTE TIPOUSUARIO EN LA SESION ACTUAL TE REDIRIGE AL INDEX
if (nombreUsuario !== null) {
    let nombreSesion = document.getElementById('pgname');
    let bienvenida = document.getElementById('pgwelcome');
    let nombreForm = document.getElementById('form-name');
    
    nombreSesion.textContent = nombreUsuario;
    bienvenida.textContent = "Bienvenido " + nombreUsuario;
    if (nombreForm !== null) {
        nombreForm.value = nombreUsuario;
    }
} else {
    window.location.href = "../../index.html";
}

//BOTON PARA SALIR
let salir = document.getElementById('salir').addEventListener('click', () => {
    sessionStorage.removeItem('tipoUsuario');
    sessionStorage.removeItem('nombreUsuario');
    window.location.href = "../../index.html";
})

