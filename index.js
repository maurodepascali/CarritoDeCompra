
const botonAgregarACarrito = document.querySelectorAll('.agregarACarrito');
botonAgregarACarrito.forEach((agregarACarritoBoton) => {
  agregarACarritoBoton.addEventListener('click', agregarACarritoClick);
});

const botonComprar = document.querySelector('.botonComprar');
botonComprar.addEventListener('click', botonComprarClick);

const carritoItems = document.querySelector(
  '.carritoItems'
);


function agregarACarritoClick(event) {
  const boton = event.target;
  const producto = boton.closest('.producto');
  const tituloProducto = producto.querySelector('.titulo').textContent;
  const precioProducto = producto.querySelector('.precio').textContent;
  const imagenProducto = producto.querySelector('.imagen').src;

  agregarProductoACarrito(tituloProducto, precioProducto, imagenProducto);
}




function agregarProductoACarrito(tituloProducto, precioProducto, imagenProducto) {
  const titulo = carritoItems.getElementsByClassName('.itemCarrito');
  for (let i = 0; i < titulo.length; i++) {
    if (titulo[i].innerText === tituloProducto) {
      let cantidad = titulo[i].parentElement.parentElement.parentElement.querySelector('.cantidadProductos');
      cantidad.value++;
      $('.toast').toast('show');
      actualizarCarrito();
      return;
    }
  }

  const filaCarrito = document.createElement('div');
  const contenidoCarrito = `
  <div class="row itemCarrito">
        <div class="col-6">
            <div class="carrito-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${imagenProducto} class="carrito-imagen">
                <h6 class="carrito-titulo text-truncate ml-3 mb-0">${tituloProducto}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="carrito-precio d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="precio mb-0 precioDeProductoEnCarrito">${precioProducto}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="carrito-cantidad d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="carrito-cantidad-input cantidadProductos" type="number" value="1">
                <button class="btn btn-danger botonEliminar" type="button">X</button>
            </div>
        </div>
    </div>`;
  filaCarrito.innerHTML = contenidoCarrito;
  carritoItems.append(filaCarrito);

  filaCarrito
    .querySelector('.botonEliminar')
    .addEventListener('click', eliminarProducto);

  filaCarrito
    .querySelector('.cantidadProductos')
    .addEventListener('change', modificarCantidad);

  actualizarCarrito();
}

function actualizarCarrito() {
  let total = 0;
  const carritoTotal = document.querySelector('.carritoTotal');

  const productosEnCarritos = document.querySelectorAll('.itemCarrito');

  productosEnCarritos.forEach((itemCarrito) => {
    const precioProductoEnCarrito = itemCarrito.querySelector(
      '.precioDeProductoEnCarrito'
    );
    const precioDeProductoEnCarrito = Number(
      precioProductoEnCarrito.textContent.replace('$', '')
    );
    const cantidadElementosEnCarrito = itemCarrito.querySelector(
      '.cantidadProductos'
    );
    const cantidadProductos = Number(
      cantidadElementosEnCarrito.value
    );
    total = total + precioDeProductoEnCarrito * cantidadProductos;
  });
  carritoTotal.innerHTML = `$${total.toFixed()}`;
}

function eliminarProducto(event) {
  const clickBoton = event.target;
  clickBoton.closest('.itemCarrito').remove();
  actualizarCarrito();
}

function modificarCantidad(event) {
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;
  actualizarCarrito();
}

function botonComprarClick() {
  carritoItems.innerHTML = ' ';
  actualizarCarrito();
}

/*
function paginaInicio(){
  setTimeout(function(){window.location.href = "index.html";}, 2000);
}


  function registroOk(){
  
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var mail = document.getElementById('email');
    var telefono = document.getElementById('telefono');

      if(nombre.value === null || nombre.value === " "){
        alert("Ingrese su nombre");
      }
      if(apellido.value === null || apellido.value === " "){
        alert("Ingrese su apellido");
      }
      if(mail.value === null || mail.value === " "){
        alert("Ingrese su correo");
      }
      if(telefono.value === null || telefono.value === " "){
        alert("Ingrese su telefono");
      }
}*/
/*
function registroOk(){
  alert("Sesion iniciada correctamente.")
  alert("Será redireccionado para realizar su pago.")
  setTimeout(function(){window.location.href = "pago.html";});
}
*/

function inicioSesion(){
  alert("Sesion iniciada correctamente.")
  alert("Será redireccionado para realizar su pago.")
  setTimeout(function(){window.location.href = "pago.html";});
}

/*
function validaForm(){

  if($("#nombre").val() == ""){
      alert("El campo Nombre no puede estar vacío.");
      $("#nombre").focus();       
      return false;
  }
  if($("#apellido").val() == ""){
      alert("El campo apellido no puede estar vacío.");
      $("#apellido").focus();
      return false;
  }
  if($("#email").val() == ""){
      alert("El campo email no puede estar vacío.");
      $("#email").focus();
      return false;
  }

  if($("#telefono").val() == ""){
    alert("El campo telefono no puede estar vacío.");
    $("#telefono").focus();
    return false;
}


  return true; 
}

$(document).ready( function() {   
  $("#botonenviar").click( function() {     
      if(validaForm()){                              
          $.post("enviar.php",$("#formdata").serialize(),function(res){
              $("#formulario").fadeOut("slow");   
              if(res == 1){
                  $("#exito").delay(500).fadeIn("slow");      
              } else {
                  $("#fracaso").delay(500).fadeIn("slow");    
              }
          });
      }
  });    
});*/