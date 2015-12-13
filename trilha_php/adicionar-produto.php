<?php include("includes/header.php"); 
	$nome = $_GET['nome'];
	$preco = $_GET['preco'];
?>
	
	<div class="container">
		<div class="principal">
			<h1>Página de Produtos</h1>
		</div>

		<p class="alert alert-success">
			Produto <?= $nome;?>, <?= $preco?> foi adicionado com sucesso!
		</p>
	</div>
<?php include("includes/footer.php"); ?>