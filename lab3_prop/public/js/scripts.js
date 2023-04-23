$(document).ready(function() {
    var cursoSeleccionado = "";
    var moduloSeleccionado = "";
    var totalPagar = 0;
  
    // Paso 1: Seleccionar curso y mostrar paso 2
    $("#btnPaso1").click(function() {
      cursoSeleccionado = $("#selectCurso option:selected").text();
      if (cursoSeleccionado != "") {
        $("#divPaso1").hide();
        $("#divPaso2").show();
      } else {
        alert("Seleccione un curso");
      }
    });
  
    // Paso 2: Seleccionar módulos y mostrar paso 3
    $("#btnPaso2").click(function() {
      moduloSeleccionado = "";
      $("input[name='modulos[]']:checked").each(function() {
        moduloSeleccionado += $(this).val() + ",";
        if (cursoSeleccionado == "Java") {
          totalPagar += 1200;
        } else if (cursoSeleccionado == "PHP") {
          totalPagar += 800;
        } else if (cursoSeleccionado == ".NET") {
          totalPagar += 1500;
        }
      });
      if (moduloSeleccionado != "") {
        $("#divPaso2").hide();
        $("#divPaso3").show();
      } else {
        alert("Seleccione al menos un módulo");
      }
    });
  
    // Paso 3: Seleccionar forma de pago y mostrar detalle de matrícula
    $("#btnPaso3").click(function() {
      var formaPago = $("input[name='pago']:checked").val();
      if (formaPago != "") {
        if (formaPago == "efectivo") {
          totalPagar *= 0.9; // Aplicar descuento del 10%
        }
        $("#cursoSeleccionado").text(cursoSeleccionado);
        $("#moduloSeleccionado").text(moduloSeleccionado.slice(0, -1));
        $("#formaPago").text(formaPago);
        $("#totalPagar").text("S/ " + totalPagar.toFixed(2));
        $("#divPaso3").hide();
        $("#divDetalleMatricula").show();
      } else {
        alert("Seleccione una forma de pago");
      }
    });
  });