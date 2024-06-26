document.addEventListener("DOMContentLoaded", function() {
    //Se declaran las constantes
    const alertContainer = document.getElementById('alert-container');
    const button = document.getElementById('button');
    const checkbox = document.getElementById('checkbox');
    const campoUsuario = document.getElementById('user');
    const campoContrasena = document.getElementById('password');
    let recordar = false;
    let dataRecordar = localStorage.getItem('recordar');
    let usuarioGuardado = localStorage.getItem('usuario');
    

    function showAlert(message, success = false) {
        const alertElement = document.createElement("div");
        alertElement.className = `alert ${success ? 'alert-success' : 'alert-danger'}`;
        alertElement.textContent = message;
        alertContainer.appendChild(alertElement);
      
        // Limpia el mensaje después de unos segundos
        setTimeout(() => {
          alertContainer.removeChild(alertElement);
        }, 5000);
      }

    // Función para cambiar Modo Día a Modo Noche y el Ícono de Luna a Sol.
    var icon =  document.getElementById("icon");
    icon.onclick = function(){
        document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")){
            icon.src = "img/sun.png";
        } else {
            icon.src = "img/moon.png";
        }
    }
    
    function iniciarSesion() {
        // Se declaran las constantes.
        const usuario = campoUsuario.value;
        const contrasena = campoContrasena.value;

        // Previene continuar = campo vacío
        if (usuario === "" || contrasena === "") {
            showAlert("Por favor, complete todos los campos.", false);
        } else if (usuario.indexOf("@") === -1) {
            showAlert("El Usuario debe contener el carácter @.", false);
        } else if (contrasena.length < 6) {
            showAlert("La contraseña debe tener al menos 6 caracteres.", false);
        } else {
            // Verifica si la casilla de recordar contraseña no está marcada
            if (!checkbox.checked) {
                // Si no está marcada, limpia los campos de usuario y contraseña
                campoUsuario.value = '';
                campoContrasena.value = '';
            }

            // Redirige al usuario a la página especificada después de la autenticación exitosa
            sessionStorage.setItem('isLoggedIn', 'true');
            window.localStorage.setItem('usuario', usuario);
            window.localStorage.setItem('recordar', recordar);
            console.log(recordar);
            window.location.href = "index.html";
        }
    }
    
    button.addEventListener("click", function(e) {
        e.preventDefault(); // Evita el envío del formulario por defecto
        iniciarSesion();
    });

});
