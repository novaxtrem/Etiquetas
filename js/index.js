var marca = "";
var modelo = "";
var resolucion = "";
var pulgadas = "";
var precio = "";
//

document.addEventListener("DOMContentLoaded", function(event) {
    $("#imprimir").click(function() {
        marca = $("#marcaProducto").find('option:selected').val();
        modelo = $("#modeloProducto").val();
        resolucion = $("#resolucionProducto").find('option:selected').val();
        pulgadas = $("#pulgadasProducto").find('option:selected').val();
        precio = $("#precioProducto").val();

        $("#portaMarcaPulgadas").text("Monitor: " + marca + " " + pulgadas);
        $("#portaModelo").text("modelo: " + modelo);
        $("#portaResolucion").text("resolucion: " + resolucion);

        $("#portaPrecio").text(precio);
        var divToPrint = document.getElementById('DivIdToPrint');

        var newWin = window.open('', 'Print-Window');

        newWin.document.open();

        newWin.document.write('<html><head>    <link rel="stylesheet" href="css/index.css"></head><body onload="window.print()">' + divToPrint.innerHTML + '</body></html>');

        newWin.document.close();

        setTimeout(function() { newWin.close(); }, 10);
    });
    //
    $("#marcaProducto").change(function() {
        marca = $(this).find('option:selected').val();
        if (marca == "VARIOS") {
            $("#modeloProducto").val("VARIOS MODELOS");
            $("#modeloProducto").prop("disabled", true);
        } else {
            $("#modeloProducto").prop("disabled", false);
            $("#modeloProducto").val("");
        }
    });
    //
    $("#modeloProducto").change(function() {
        modelo = $(this).val();
    });
    //
    $("#resolucionProducto").change(function() {
        resolucion = $(this).find('option:selected').val();
    });
    //
    $("#pulgadasProducto").change(function() {
        pulgadas = $(this).find('option:selected').val();
    });
    //
});