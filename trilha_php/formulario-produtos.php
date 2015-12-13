<?php include("includes/header.php");?>

	<div class="container">
		<div class="principal jumbotron">
			<h1>Formulário de Cadastro de Produtos</h1>
		</div>

		<form action="adicionar-produto.php" class="form-group">
			<label for="nome">
				Nome:
				<input type="text" name="nome" class="form-control" autofocus>
			</label>
			<label for="preco">
				Preço:
				<input type="number" name="preco" class="form-control">
			</label>
			<button type="submit" class="btn btn-primary">Adicionar Produto</button>
		</form>
	</div>

<?php include("includes/footer.php"); ?>