$(function () {});

function agregarCarrito(valor, nombrePlato) {
  let carrito = {};

  //alert(valor + " " + nombrePlato);

  localStorage.setItem("pedido", carrito);
}
