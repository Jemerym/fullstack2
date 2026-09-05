function ingresar() {
    // Declaro las variables
    let correo = document.getElementById("correo").value;
    let clave = document.getElementById("clave").value;

    // Validar largo de clave
    if (clave.length !== 4) {
        alert("La clave debe tener exactamente 4 caracteres");
        return;
    }

    // Usuario administrador
    if (correo === "admin@demo.cl" && clave === "1234") {
        window.location.href = "admin.html";
    }
    // Usuario normal
    else if (correo === "usuario@demo.cl" && clave === "5678") {
        window.location.href = "usuario.html";
    }
    else {
        alert("Correo o clave incorrectos");
    }
}
