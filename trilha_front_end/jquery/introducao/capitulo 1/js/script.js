$(document).ready(function(){
	$("#botao-copiar").on("click", function(){
		var nome = $("#campo-nome").val();
		if(!nome){
			alert("A Caixa não pode ficar vazia");
		}else{
			var input = $("#campo-nome");
			var nome = input.val();
			input.val("");
			$("#texto-copiado").text(nome);
			input.focus();
		}
	});
	$("#campo-nome").on("blur", function(){
		var campo = $(this);
		var nome = campo.val();
		$("#texto-copiado").text(nome);
		campo.val('');		
	});
});