<?php
include("includes/header.php");
include("conectar.php");
include("banco-categoria.php");
include("banco-produtos.php");

$id = $_GET['id'];
$produto = buscaProduto($conexao, $id);
$categorias = listaCategorias($conexao);

$usado = $produto['usado'] ? "checked='checked'" : "";

?>

<div class="container">
	<div class="principal jumbotron text-center">
		<h1>Alteração de Produto</h1>
	</div>

	<form action="altera-produto.php" class="form-group" method="post">
	<input type="hidden" name="id" value="<?=$produto['id'];?>" class="form-control">
		<table class="table">
			<tr>
				<td>
					<label for="nome">Nome:</label>
				</td>
				<td>
					<input type="text" name="nome" class="form-control" value="<?=$produto['nome'];?>">
				</td>
			</tr>
			<tr>
				<td>
					<label for="preco"> Preço:</label>
				</td>
				<td>
					<input type="number" name="preco" class="form-control" value="<?=$produto['preco'];?>">
				</td>
			</tr>
			<tr>
				<td>
					<label for="descricao">Descrição:</label>
				</td>
				<td>
					<textarea name="descricao" id="descricao" cols="30" rows="10" class="form-control"><?= $produto['descricao']; ?></textarea>
				</td>
			</tr>
			<tr>
				<td>
					<p class="textoBold">Usado</p>
				</td>
				<td>
					<input type="checkbox" name="usado" value="true" <?=$usado;?>> Usado
				</td>
			</tr>
			<tr>
				<td>
					<p class="textoBold">Categorias:</p>
				</td>
				<td>
					<select name="categoria_id" class="form-control">
					<?php foreach($categorias as $categoria) : 
						$essaEhACategoria = $produto['categoria_id'] == $categoria['id'];
						$selecao = $essaEhACategoria ? "selected='selected'" : "";
					?>
						<option value="<?=$categoria['id'];?>" <?=$selecao?>>
							<?= $categoria['nome']; ?>
						</option>
					<?php endforeach; ?>
					</select>
				</td>
			</tr>
			<tr>
				<td>
					<button type="submit" class="btn btn-primary">alterar</button>
				</td>
				<td>&nbsp;</td>
			</tr>
		</table>

	</form>
</div>

<?php include("includes/footer.php"); ?>