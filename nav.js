document.addEventListener("DOMContentLoaded", function(){



//Se crea un evento al hacer click que elimina la información de usuario del localStorage y redirige al usuario a login.html
cerrar_sesion.addEventListener("click", function () {
    sessionStorage.removeItem('usuario');
    window.location.href = "login.html"
})

// Seleccionar el elemento del documento con el id "data_user" y almacenarlo en la variable 'datos'
const datos = document.getElementById("data_user");

// Comprueba si no existe un valor en la sessionStorage con la clave 'isLoggedIn'
if (!sessionStorage.getItem('isLoggedIn')) {
    window.location.href = 'login.html'; // Redirigir al login.html si no ha iniciado sesión
  } else {
    datos.innerHTML = usuario;
  };

  //Modo Oscuro:
  
  //Tomamos constantes para el botón de "Cambiar tema" y el html
  const toggleThemeButton = document.getElementById("toggleThemeButton");
  const htmlElement = document.querySelector("html");
 
  //Cambia el tema de light a dark o dark a light respectivamente
  toggleThemeButton.addEventListener("click", () => {
    const currentTheme = htmlElement.getAttribute("data-bs-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    htmlElement.setAttribute("data-bs-theme", newTheme);
  


  });
  
});
