document.addEventListener("DOMContentLoaded", function(event) {
    $("#imprimir").click(function() {
        levantarInfoMonitorEImprimir();
    });



});


function levantarInfoMonitorEImprimir() {
    var resolucion = $("#resolucion").find('option:selected').val();
    console.log(resolucion);
}