// Array
// paciente = [1.50,2.00,1.60];
/* codigo anterior para fazer calculor imc
var nome1   = document.getElementById('nome-1').textContent;
var peso1   = document.getElementById('peso-1').textContent;
var altura1 = document.getElementById('altura-1').textContent;

var leonardo = {
	"nome": nome1,
	"peso": peso1,
	"altura": altura1
};

var nome2   = document.getElementById('nome-2').textContent;
var peso2   = document.getElementById('peso-2').textContent;
var altura2 = document.getElementById('altura-2').textContent;

var paulo = {
	"nome": nome2,
	"peso": peso2,
	"altura": altura2
};

var pacientes = [leonardo, paulo];

var posicaoAtual = 0;
while(posicaoAtual <= pacientes.lenght - 1){
	if(pacientes.altura != 0){
		var imc = pacientes.peso / (pacientes.altura * pacientes.altura);
		console.log(imc);
	}else{
		console.log("Não posso executar uma divisão por 0");
	}
}
*/

var nossosTrs = document.getElementsByClassName("paciente");

for(var posicaoDoTrAtual = 0; posicaoDoTrAtual <= nossosTrs.length - 1; posicaoDoTrAtual++){
    var trAtual = nossosTrs[posicaoDoTrAtual];
    var nomeTd = trAtual.getElementsByClassName("info-nome")[0];
    var pesoTd = trAtual.getElementsByClassName("info-peso")[0];
    var alturaTd = trAtual.getElementsByClassName("info-altura")[0];
    var imcTd = trAtual.getElementsByClassName("info-imc")[0];

    var paciente = {
    	"nome": nomeTd.textContent,
    	"peso": pesoTd.textContent,
    	"altura": alturaTd.textContent
    };

    if(paciente.altura != 0){
    	var imc = paciente.peso / (paciente.altura * paciente.altura);
    	
    	imcTd.textContent = imc;

        console.log(paciente.nome);
    }else{
    	console.log('Não posso executar uma divisão por 0');
    }
}