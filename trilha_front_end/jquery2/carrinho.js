var atualizarDados = function(){
	var itens = $(".item-total:visible");
	var total = 0;
	for (var i = 0; i < itens.length; i++) {
		var item = $(itens[i]).text();
		var preco = parseFloat(item);
		total += preco;
	};
	$("#valor-total").text(total);
	$("#quantidade-itens").text(itens.length);
};

var removeItem = function(){
	var self = $(this);
	self.closest('tr').hide();

	atualizarDados();
};

var undo = function(){
	$("tr:visible").removeClass('recuperado');

	var trs = $("tr:hidden");
	trs.addClass('recuperado').show();
};

var aposInicializar = function(){
	atualizarDados();
	$('[name="undo"]').click(undo);
	$(".remover-item").click(removeItem);
};

aposInicializar();