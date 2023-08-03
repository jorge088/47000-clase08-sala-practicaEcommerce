class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}


const productos = [
    new Producto(1, "Notebook ", 180000),
    new Producto(2, "Mouse ", 9000),
    new Producto(3, "Teclado ", 12000),
    new Producto(4, "Monitor", 50000),
]

const mostrarListadoProductos = () => {
    let mensaje = 'Estos son los productos disponibles:\n'
    let productosInfo = productos.map((prod) => `ID: ${prod.id} - Nombre: ${prod.nombre} - Precio: ${prod.precio}`);
    mensaje += productosInfo.join("\n");
    mensaje += '\n Ingrese el id del producto a comprar. Ingrese 0 para salir';
    return mensaje;
    // console.log(mensaje);
}
alert('Bienvenido a la tienda');

let idProducto = Number(prompt(mostrarListadoProductos()));
let precioTotal = 0;

while (idProducto !== 0) {

}