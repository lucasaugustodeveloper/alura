// execircio pra imprimir nome dos pacientes

var paciente = document.getElementsByClassName("paciente");
function imprimeNome(){
    for(var i = 0; i <= paciente.length - 1; i++){
        var trAtual = paciente[i];
        var nomeTd = trAtual.getElementsByClassName("info-nome")[0];

        var pacientes = {
            "nome": nomeTd.textContent
        };

        console.log(pacientes.nome);
    }
};

imprimeNome();