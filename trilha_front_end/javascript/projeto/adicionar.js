// var tabela = document.getElementsByTagName("table")[0];
// document.querySelectorAll(".paciente"); // retorna uma array de lementos


var btnAdicionar = document.querySelector("#adicionar-paciente");

btnAdicionar.addEventListener("click", function(event){
	event.preventDefault();

	var campoNome   = document.querySelector("#campo-nome");
	var campoPeso   = document.querySelector("#campo-peso");
	var campoAltura = document.querySelector("#campo-altura");


	var pacienteNovo = "<tr class='paciente'>" +
						"<td class='info-nome' id='nome-2'>"+    campoNome.value +"</td>" +
						"<td class='info-peso' id='peso-2'>"+    campoPeso.value +"</td>" +
						"<td class='info-altura' id='altura-2'>"+campoAltura.value +"</td>" +
						"<td class='info-imc' id='imc-2'>"+campoPeso.value/(campoAltura.value*campoAltura.value)+"</td>" +
					"</tr>";

	var tabela = document.querySelector("table");
	tabela.innerHTML += pacienteNovo;

	campoNome.value   = "";
	campoPeso.value   = "";
	campoAltura.value = "";
});