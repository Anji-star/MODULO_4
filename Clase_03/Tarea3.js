const productos = [
    { nombre: "Mouse Inalámbrico", precio: 80, categoria: "Tecnología" },
    { nombre: "Camiseta", precio: 120, categoria: "Ropa" },
    { nombre: "Auriculares", precio: 60, categoria: "Tecnología" },
    { nombre: "Botella de Agua", precio: 40, categoria: "Accesorios" },
    { nombre: "Libro de Programación", precio: 95, categoria: "Libros" },
    { nombre: "Laptop", precio: 800, categoria: "Teacnología" },
    { nombre: "Libro de acertijos", precio: 12, categoria: "Libros" },
];

// Mostramos los productos originales
console.log("Productos originales:", productos);

// cuestan menos de $100
const productosBaratos = productos.filter(producto => producto.precio < 100);
console.log("Productos que cuestan menos de $100:", productosBaratos);

// sort() y alfabéticamente
const productosOrdenados = productosBaratos.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log("Productos ordenados alfabéticamente:", productosOrdenados);

//map() only names
const nombresProductos = productosOrdenados.map(producto => producto.nombre);
console.log("Nombres de los productos:", nombresProductos);

// some() para libros
const hayLibros = productos.some(producto => producto.categoria === "Libros");
console.log("¿Hay productos en la categoría 'Libros'?", hayLibros);

// reduce() para calcular el precio total de todos los productos bara
const precioTotalBaratos = productosBaratos.reduce((total, producto) => total + producto.precio, 0);
console.log("Precio total de los productos baratos:", precioTotalBaratos);
