var botao = document.getElementById("calcula-imcs");
botao.addEventListener("click", function(){
    var trsPacientes = document.getElementsByClassName("paciente");

    percorreArray(trsPacientes, function(pacienteTr){
        var nomeTd = pacienteTr.getElementsByClassName("info-nome")[0];
        var pesoTd = pacienteTr.getElementsByClassName("info-peso")[0];
        var alturaTd = pacienteTr.getElementsByClassName("info-altura")[0];
        var imcTd = pacienteTr.getElementsByClassName("info-imc")[0];

        var pacienteAtual = {
            nome   : nomeTd.textContent,
            peso   : pesoTd.textContent,
            altura : alturaTd.textContent,
            pegaImc: function(){
                if(this.altura != 0){
                    var imc = this.peso / (this.altura * this.altura); 
                    return imc;     
                }else{
                    console.log('Não posso executar uma divisão por 0');
                }
            }
        };
        var imc = pacienteAtual.pegaImc();    
        imcTd.textContent = imc;
        console.log(imc);
    });
});