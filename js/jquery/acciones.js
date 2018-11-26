$( document ).ready(function() {
/* Buscador de productos */
 $( function() {
    var availableTags = [
	  "rosuvastatina",
      "Redoxon Própolis 20 comprimidos - Bayer",
      "Flurbiprofeno 100mg 8 comprimidos - Clinadol Forte - Gador",
      "Ibuprofeno 400mg + Cafeína 50mg 10 comprimidos - Ibupirac Cafeína",
      "Acido Tioctico 200mg 20 comprimidos - Biletan Forte 200",
      "Clotrimazol 1g 20gr - Empecid crema"
	  ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
	
  } );	
	
	
/* Suma una cantidad al hacer click en el boton de agregar producto */
	$(".btn-carrito").click(function () {
		$(".cantidad").show();
		$(".cantidad").css("display","flex");
		var s = $(".cantidad").text();
		var n = parseInt(s);
		n++;
		$(".cantidad").text(n);
	});

});


/******************************************************/

function calcularTotal() {
		var sumador = (parseFloat($(".total1").text()) + parseFloat($(".total2").text()) + parseFloat($(".total3").text())).toFixed(2);
		$(".totaltotal").html("$" + sumador);
	}
	
function validarCantProductos() {
		if(!$(".cantidad1").spinner("isValid") || !$(".cantidad2").spinner("isValid") || !$(".cantidad3").spinner("isValid")) {
			alert("Numero Inválido");
			return false;
		}
		return true;
	}

$( function() {
	
	$(".cantidad1,.cantidad2,.cantidad3").keyup(validarCantProductos);
	
	$(".cantidad1").spinner({
    min: 1,
    stop: function() {
      var cantidad = $("#1").val();
      var precio = $(".precio1").text();
      var total = ((cantidad) * (precio)).toFixed(2);
      $(".total1").html(total);
	  calcularTotal();
    }
  }).val(1);
  
  $(".cantidad2").spinner({
    min: 1,
    stop: function() {
      var cantidad = $("#2").val();
      var precio = $(".precio2").text();
      var total = ((cantidad) * (precio)).toFixed(2);
      $(".total2").html(total);
	  calcularTotal();
    }
  }).val(1);
  
  $(".cantidad3").spinner({
    min: 1,
    stop: function() {
      var cantidad = $("#3").val();
      var precio = $(".precio3").text();
      var total = ((cantidad) * (precio)).toFixed(2);
      $(".total3").html(total);
	  calcularTotal();
    }
  }).val(1);
  
	$(".total1,.total2,.total3").ready(calcularTotal);
});


function cambiarColor(opcion){
    switch(opcion) {
      case "opcion1":
      $(".vistaPrevia").attr("src", "img/medicamentos/ibupiracCafeina-verde.png");
      break;

      case "opcion2":
      $(".vistaPrevia").attr("src", "img/medicamentos/ibupiracCafeina-azul.png");
      break;

      case "opcion3":
      $(".vistaPrevia").attr("src", "img/medicamentos/ibupiracCafeina.png");
      break;

      case "opcion4":
      $(".vistaPrevia").attr("src", "img/medicamentos/ibupiracCafeina-amarillo.png");
      break;
	  
	  case "opcion5":
      $(".vistaPrevia").attr("src", "img/medicamentos/ibupiracCafeina-gris.png");
      break;
    }
};

function cambiarPresentacion(op){

    switch(op) {
      case "presentacion1":
	  texto =("Ibuprofeno 50mg + cafeina 50mg (Reanima-Analgesico) 10 comprimidos");
      $(".etiqueta").text(texto);
      break;

      case "presentacion2":
	  texto =("Ibuprofeno 100mg + cafeina 50mg (Reanima-Analgesico) 10 comprimidos");
      $(".etiqueta").text(texto);
      break;

      case "presentacion3":
	  texto =("Ibuprofeno 200mg + cafeina 50mg (Reanima-Analgesico) 10 comprimidos");
      $(".etiqueta").text(texto);
      break;

      case "presentacion4":
	  texto =("Ibuprofeno 400mg + cafeina 50mg (Reanima-Analgesico) 10 comprimidos");
      $(".etiqueta").text(texto);
      break;

    }
};