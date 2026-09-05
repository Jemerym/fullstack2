
let productoJSON = localStorage.getItem("producto");
let producto = JSON.parse(productoJSON);


if (producto) {
    document.getElementById("imagen").src = producto.imagen;
    document.getElementById("nombre").innerText = producto.nombre;
    document.getElementById("descripcion").innerText = producto.descripcion;
    document.getElementById("precio").innerHTML = `<strong>Precio:</strong> $${producto.precio.toLocaleString('es-CL')} CLP`;
}