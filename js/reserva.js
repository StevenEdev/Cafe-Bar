$(document).ready(function () {
  $("#datepicker").datepicker();


  $("#formulario").on("submit", function(event){
    event.preventDefault();

    localStorage.setItem("nombre", $("nombre").val());
    localStorage.setItem("email", $("email").val());
    localStorage.setItem("documento", $("documento").val());
    localStorage.setItem("telefono", $("telefono").val());
    localStorage.setItem("servicio", $("servicio").val());
    localStorage.setItem("personas", $("personas").val());
    localStorage.setItem("fecha", $("fecha").val());
    localStorage.setItem("mensaje", $("mensaje").val());
  });


});

