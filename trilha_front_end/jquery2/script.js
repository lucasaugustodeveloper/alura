$(document).ready(function() {
	var itens = $(".item-total");
	var total = 0;
	for (var i = 0; i < itens.length; i++) {
		var item = $(itens[i]).text();
		var preco = parseFloat(item);
		total += preco;
	};
	$("#valor-total").text(total);
	$("#quan-itens").text(itens.length);	
});