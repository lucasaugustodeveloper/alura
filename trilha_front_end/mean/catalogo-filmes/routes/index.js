exports.index = function(req, res){
	res.render('index');
};

exports.lista = function(req, res){
	res.json({
		titulo: 'Guanges de Nova Iorque',
		diretor: 'martin Scorsese',
		ano: 2002
	});
};

exports.grava = function(req, res){
	var filmes = req.body;

	console.log(filme);

	res.send("Filme: " + filme.titulo + " recebido no servidor");
}