<?php
include("includes/header.php");
include("conectar.php");
include("banco-categoria.php");

$categorias = listaCategorias($conexao);

?>

<div class="container">
	<div class="principal jumbotron text-center">
		<h1>Cadastro de Produtos</h1>
	</div>

	<form action="adicionar-produto.php" class="form-group" method="post">

		<table class="table">
			<tr>
				<td>
					<label for="nome">Nome:</label>
				</td>
				<td>
					<input type="text" name="nome" class="form-control" autofocus>
				</td>
			</tr>
			<tr>
				<td>
					<label for="preco"> Preço:</label>
				</td>
				<td>
					<input type="number" name="preco" class="form-control">
				</td>
			</tr>
			<tr>
				<td>
					<label for="descricao">Descrição:</label>
				</td>
				<td>
					<textarea name="descricao" id="descricao" cols="30" rows="10" class="form-control"></textarea>
				</td>
			</tr>
			<tr>
				<td>
					<p class="textoBold">Usado</p>
				</td>
				<td>
					<input type="checkbox" name="usado" value="true"> Usado
				</td>
			</tr>
			<tr>
				<td>
					<p class="textoBold">Categorias:</p>
				</td>
				<td>
					<select name="categoria_id" class="form-control">
					<?php foreach($categorias as $categoria) : ?>
						<option value="<?=$categoria['id'];?>">
							<?= $categoria['nome'] ?>
						</option>
					<?php endforeach; ?>
					</select>
				</td>
			</tr>
			<tr>
				<td>
					<button type="submit" class="btn btn-primary">Cadastra</button>
				</td>
				<td>&nbsp;</td>
			</tr>
		</table>

	</form>
</div>

<?php include("includes/footer.php"); ?>