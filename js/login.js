//Declaracion de los botones
const botonLogin = document.getElementById('btn-login');
const botonRegister = document.getElementById('btn-register');

//Declaracion de los arrays
const nombres = ["Christian", "Andrea", "Jhonatan", "Sebastian"];
const usuarios = ["userchris", "userandrea", "userjhonatan", "usersebastian"];
const claves = ["ramos", "torres", "quispe", "rivas"];

//Obteniendo del LocalStorage
var nombresRecuperado = JSON.parse(localStorage.getItem('nombres'));
var usuariosRecuperado = JSON.parse(localStorage.getItem('usuarios'));
var clavesRecuperado = JSON.parse(localStorage.getItem('claves'));

if (botonRegister !== null){
    botonRegister.addEventListener('click', () => {
        let nombre = document.getElementById('name').value;
        let usuario = document.getElementById('user').value;
        let clave = document.getElementById('password').value;
    
        nombres.push(nombre);
        usuarios.push(usuario);
        claves.push(clave);
    
        localStorage.setItem('nombres', JSON.stringify(nombres));
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        localStorage.setItem('claves', JSON.stringify(claves));
    
        window.location.href="login.html";
    }) 
} else if (botonLogin !== null) {
    botonLogin.addEventListener('click', () => {
        let usuario = document.getElementById('user').value;
        let clave = document.getElementById('password').value;
        let encontrado = false;
    
        for (let index = 0; index < clavesRecuperado.length; index++) {
            
            if (usuario === usuarios[index] && clave === claves[index]) {
                sessionStorage.setItem('tipoUsuario', 'Administrador');
                sessionStorage.setItem('nombreUsuario', nombres[index]);
                window.location.href="private/admin/dashboard-admin.html";
                encontrado = true;
                break;
            } else if (usuario === usuariosRecuperado[index] && clave === clavesRecuperado[index]) {
                sessionStorage.setItem('tipoUsuario', 'Usuario');
                sessionStorage.setItem('nombreUsuario', nombresRecuperado[index]);
                window.location.href="private/user/dashboard-user.html";
                encontrado = true;
                break;
            } 
        }
    
        if (!encontrado) {
            console.log("ERROR");
        }
    })
}

