const agregarACarrito = document.querySelectorAll('.agregarCarrito');
agregarACarrito.forEach((botonAgregarCarrito) => {
botonAgregarCarrito.addEventListener('click', clickAgregarCarrito);
});

const botonComprar = document.querySelector('.botonComprar');
botonComprar.addEventListener('click', clickBotonComprar);

const carritoItems = document.querySelector('.carritoItems');

function clickAgregarCarrito(event) {
  const boton = event.target;
  const item = boton.closest('.item');

  const titulo = item.querySelector('.item-titulo').textContent;
  const precio = item.querySelector('.item-precio').textContent;
  const imagen = item.querySelector('.item-imagen').src;

  agregarItemACarrito(titulo, precio, imagen);
}

function agregarItemACarrito(titulo, precio, imagen) {
  const elementosTitulo = carritoItems.getElementsByClassName();
  for (let i = 0; i < elementosTitulo.length; i++) {
    if (elementosTitulo[i].innerText === titulo) {
      let cantidad = elementosTitulo[i].parentElement.parentElement.parentElement.querySelector();
      cantidad.value++;
      updatecarritoTotal();
      return;
    }
  }

function removeCarritoItem(event) {
  updateCarritoTotal();
}

function cambiarCantidad(event) {
  updateCarritoTotal();
}

function clickComprarBoton() {
    updateCarritoTotal();
}
