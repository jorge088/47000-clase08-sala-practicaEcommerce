//Clases
class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

// Funciones

// Usando el array productos, retorna un string con la información de los productos disponibles
const generarListaProductos = () => {
    let mensaje = 'Estos son los productos disponibles: \n';
    let info = productos.map(prod => `ID: ${prod.id} - Nombre: ${prod.nombre} - Precio: ${prod.precio}`); // map para obtener un array con la información de los productos
    mensaje += info.join('\n'); // join para obtener un string con toda la información de los productos
    mensaje += '\nIngrese el ID del producto que desea comprar. Ingrese 0 para salir'
    return mensaje;
}

// array de objetos
const productos = [
    new Producto(1, "Notebook ", 180000),
    new Producto(2, "Mouse ", 9000),
    new Producto(3, "Teclado ", 12000),
    new Producto(4, "Monitor", 50000),
]


alert('Bienvenido a la tienda ');

let precioTotal = 0;

let idProducto = Number(prompt(generarListaProductos()));

// Se realiza la compra hasta que el usuario ingrese 0
while (idProducto !== 0) {

    let productoInfo = productos.find(prod => prod.id === idProducto); // Se obtiene desde el array el producto con el id ingresado

    if (productoInfo) { //Se verifica si se encontró un producto con el id ingresado (Si el id no existe, el método find retorna undefined)

        precioTotal += productoInfo.precio; // Acumulo el precio del producto 
        alert(`Se agregó el producto ${productoInfo.nombre} con precio: $${productoInfo.precio} ARS`);

    } else {
        alert(`Error! ID inexistente`)
    }

    idProducto = Number(prompt(generarListaProductos())) // Solicita otro producto o finaliza la compra
}

//Final de la compra. Muestra precio final
alert(`Final de la compra. Precio total: ${precioTotal} ARS`)


//Para practicar:
/*
    - Modificar el código para usar un carrito de compras para contener la información de los productos seleccionados.
    
    - Modificar el código para permitir que el usuario pueda ingresar la cantidad del producto que quiere comprar (Plus: agregar una propiedad de stock a los productos y actualizarla tras cada compra).

    - Agregar categorias a los productos y agregar una opción para que el usuario pueda ver la información de los productos según la categoria.

*/