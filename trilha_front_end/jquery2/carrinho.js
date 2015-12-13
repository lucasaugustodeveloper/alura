var propaganda = function(){
	var propagandas = [
	"O que voce acha de compra uma motocicleta?",
	"O que voce acha de compra uma lancha?",
	"O que voce acha de compra uma bicicleta?",
	"O que voce acha de compra um carro?"
	];

	var posicao = Math.floor(propagandas.length * Math.random());
	var texto = propagandas[posicao];
	var tr = $("<tr>").addClass("propaganda").append($("<td>"));
	tr.find("td").attr("colspan", 6).text(texto);

	return tr;
};

var atualizarDados = function(){
	var carrinhos = $(".carrinho");
	carrinhos.each(function(){
		var carrinho = $(this);
		var itens = carrinho.find(".item-total:visible");
		var total = 0;
		for (var i = 0; i < itens.length; i++) {
			var item = $(itens[i]).text();
			var preco = parseFloat(item);
			total += preco;
		};
		carrinho.find(".valor-total").text(total);
		carrinho.find(".quantidade-itens").text(itens.length);
	});
	
};

var removeItem = function(){
	var self = $(this);
	self.closest('tr').hide();

	atualizarDados();
};

var undo = function(){
	var carrinho = $(this).closest(".carrinho");
	carrinho.find("tr:visible").removeClass('recuperado');

	var trs = carrinho.find("tr:hidden");
	trs.addClass('recuperado').show();
	atualizarDados;
};

var destaque = function(){
	$(this).find(".remover-item").fadeIn();
	$(this).addClass('hovering');
};

var tirarDestaque = function(){
	$(this).find(".remover-item").fadeOut();
	$(this).removeClass('hovering');
};

var alternaPropaganda = function(){
	$(".propaganda").fadeToggle();
	$(".alterna-propaganda").toggle();
};


var aposInicializar = function(){
	atualizarDados();
	$('[name="undo"]').click(undo);
	$(".remover-item").click(removeItem);
	$(".carrinho").each(function(){
		$(this).find("tr:nth-child(3n), tr:last").each(function(){
			propaganda().insertAfter($(this));
		});
	});
	$("tbody tr").hover(destaque, tirarDestaque);
	$(".alterna-propaganda").click(alternaPropaganda);
};

aposInicializar();