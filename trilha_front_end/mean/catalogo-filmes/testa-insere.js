var Filme = require("./models/filme");

var filme = new Filme({
	titulo: 'Preaceful Warrior',
	diretor: "Victor Salva",
	ano: '2006'
});

filme.save(function(erro, filme){
	if(erro) console.log(erro);

	console.log("Gravando Filme " + filme.titulo);
});