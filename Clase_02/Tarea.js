let listaDeCompras = [];

const agregarProducto = (producto) => {

  if (!listaDeCompras.includes(producto)) {
    listaDeCompras.push(producto);
    console.log(`Producto "${producto}" agregado.`);
    actualizarLista();
  } else {
    alert(`El producto "${producto}" ya está en la lista.`);
  }
};

const eliminarProducto = (producto) => {
  if (listaDeCompras.includes(producto)) {
    listaDeCompras = listaDeCompras.filter(item => item !== producto);
    console.log(`Producto "${producto}" eliminado.`);
    actualizarLista();
  } else {
    alert(`"${producto}" no está en la lista.`);
  }
};

const mostrarLista = () => {
  if (listaDeCompras.length === 0) {
    console.log("La lista está vacía.");
  } else {
    console.log("Lista de compras:");
    listaDeCompras.forEach((producto, index) => {
      console.log(`${index + 1}. ${producto}`);
    });
  }
};

const agregarProductoDesdeInput = () => {
  const input = document.getElementById('productoInput');
  const producto = input.value;
  agregarProducto(producto);
  input.value = '';
};

const actualizarLista = () => {
    const ul = document.getElementById('lista');
    ul.innerHTML = listaDeCompras
      .map(producto => `
        <li>
          ${producto}
          <button onclick="eliminarProducto('${producto}')">Eliminar</button>
        </li>
      `)
      .join('');
  };
  

agregarProducto("Manzanas");
agregarProducto("Leche");
agregarProducto("Huevos");
agregarProducto("Leche");
mostrarLista();
eliminarProducto("Leche");
mostrarLista();
eliminarProducto("Pan"); 
