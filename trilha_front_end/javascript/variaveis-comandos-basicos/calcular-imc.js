var peso = 92.70;
var altura = 1.75;
var nome = "Lucas Augusto";
var imc = peso / (altura * altura);

if(altura != 0){
	console.log(imc);
}else{
	console.log('Você nao informou uma altura');
}