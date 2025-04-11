// Configuración inicial
layout_change('light');
change_box_container('false');
layout_rtl_change('false');
preset_change("preset-1");
font_change("Public-Sans");

// Función para mostrar mensajes de error/éxito
function showAlert(icon, title, text) {
  Swal.fire({
    icon: icon,
    title: title,
    text: text,
    confirmButtonColor: '#3085d6',
  });
}

// Login con email y contraseña
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const rememberMe = document.getElementById('rememberMe').checked;
  
  // Validación básica
  if (!email || !password) {
    showAlert('error', 'Error', 'Por favor complete todos los campos');
    return;
  }
  
  // Simulación de llamada a API
  setTimeout(() => {
    // Simulamos credenciales válidas
    if (email === 'admin@example.com' && password === 'admin123') {
      showAlert('success', 'Éxito', 'Inicio de sesión exitoso');
      // Redirigir a la ruta específica después de 2 segundos
      setTimeout(() => {
        window.location.href = 'Mantis-Bootstrap-1.0.0/dist/dashboard/index.html';
      }, 2000);
      
      // Guardar en localStorage si el usuario marcó "Recuérdame"
      if (rememberMe) {
        localStorage.setItem('userEmail', email);
      } else {
        localStorage.removeItem('userEmail');
      }
    } else {
      showAlert('error', 'Error', 'Credenciales incorrectas');
    }
  }, 1000);
});

// Login con redes sociales (simulado)
document.getElementById('googleLogin').addEventListener('click', function() {
  showAlert('info', 'Google Login', 'Redirigiendo a Google para autenticación...');
});

document.getElementById('twitterLogin').addEventListener('click', function() {
  showAlert('info', 'Twitter Login', 'Redirigiendo a Twitter para autenticación...');
});

document.getElementById('facebookLogin').addEventListener('click', function() {
  showAlert('info', 'Facebook Login', 'Redirigiendo a Facebook para autenticación...');
});

// Recuperar contraseña
document.getElementById('forgotPassword').addEventListener('click', function(e) {
  e.preventDefault();
  Swal.fire({
    title: 'Recuperar contraseña',
    input: 'email',
    inputLabel: 'Ingrese su email',
    inputPlaceholder: 'su@email.com',
    showCancelButton: true,
    confirmButtonText: 'Enviar',
    cancelButtonText: 'Cancelar',
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
  }).then((result) => {
    if (result.isConfirmed) {
      showAlert('success', 'Éxito', 'Se ha enviado un correo con instrucciones para recuperar tu contraseña');
    }
  });
});

// Enlace a registro
document.getElementById('registerLink').addEventListener('click', function(e) {
  e.preventDefault();
  showAlert('info', 'Registro', 'Redirigiendo al formulario de registro...');
});

// Cargar email guardado si existe
window.addEventListener('DOMContentLoaded', function() {
  const savedEmail = localStorage.getItem('userEmail');
  if (savedEmail) {
    document.getElementById('email').value = savedEmail;
    document.getElementById('rememberMe').checked = true;
  }
});