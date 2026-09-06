let productos = [
    {
        id: 1,
        codigo: "CL001",
        nombre: "Cilindro GLP 5 kg",
        categoria: "Cilindros de Gas",
        precio: 6500,
        descripcion: "Cilindro de gas licuado de petróleo 5 kg. Para uso residencial (cocina, calefacción pequeña).",
        imagen: "imagenes/5kg.jpg"
    },
    {
        id: 2,
        codigo: "CL002",
        nombre: "Cilindro GLP 11 kg",
        categoria: "Cilindros de Gas",
        precio: 12000,
        descripcion: "Cilindro estándar doméstico. El más utilizado en hogares chilenos. Compatible con reguladores estándar.",
        imagen: "imagenes/11kg.jpg"
    },
    {
        id: 3,
        codigo: "CL003",
        nombre: "Cilindro GLP 15 kg",
        categoria: "Cilindros de Gas",
        precio: 16000,
        descripcion: "Cilindro de mayor capacidad para hogares de alto consumo o locales pequeños.",
        imagen: "imagenes/15kg.png"
    },
    {
        id: 4,
        codigo: "CL004",
        nombre: "Cilindro GLP 45 kg",
        categoria: "Cilindros de Gas",
        precio: 45000,
        descripcion: "Cilindro industrial. Uso comercial: restaurantes, talleres, calefacción de locales.",
        imagen: "imagenes/45kg.png"
    }
]
let lista = document.getElementById("listaProductos");

// Recorremos el arreglo de productos
for (let i = 0; i < productos.length; i++) {
    lista.innerHTML += `
    <div class="card" style="width: 18rem;">
      <img src="${productos[i].imagen}" class="card-img-top" alt="${productos[i].nombre}">
      <div class="card-body">
        <h5 class="card-title">${productos[i].nombre}</h5>
        <p class="card-text">${productos[i].descripcion}</p>
        <p class="card-text"><strong>Precio:</strong> $${productos[i].precio.toLocaleString('es-CL')} CLP</p>
        <button onclick="verDetalle(${productos[i].id})" class="btn btn-primary">Ver detalle</button>
      </div>
    </div>
    `;
}   


function verDetalle(id) {

    let productoSeleccionado;

    for (let i = 0; i < productos.length; i++) {

        if (productos[i].id === id) {
            productoSeleccionado = productos[i];
        }
    }

    localStorage.setItem(
        "producto",
        JSON.stringify(productoSeleccionado)
    );

    window.location.href = "../html/detalle.html";
}