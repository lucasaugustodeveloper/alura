<?php 
include("includes/header.php");
include("conectar.php");
include("banco-produtos.php");
?>

<div class="container">
	<div class="principal">
		<h1>Listagem de Produtos</h1>
	</div>
	<div class="produtos">

		<?php
			if(array_key_exists("removido", $_GET) && $_GET["removido"] == true) :
		?>
		<p class="alert alert-success text-center">
			Produto apagado com sucesso!
		</p>
		<?php
			endif;
		?>

		<table class="table table-striped table-bordered">
			<?php
			$produtos = listaProdutos($conexao);
				foreach ($produtos as $produto) :
			?>
			<tr>
				<td width="30%">
					<?= $produto['nome']; ?>
				</td>
				<td width="10%">
					R$ <?= $produto['preco']; ?>
				</td>
				<td width="40%">
					<?= substr($produto['descricao'], 0, 40); ?>
				</td>
				<td width="12%">
					<?= $produto['categoria_nome']; ?>
				</td>
				<td width="4%">
						<a href="produto-altera-formulario.php?id=<?=$produto['id'];?>" class="btn btn-primary btn-block">
							<span class="glyphicon glyphicon-pencil"></span>
						</a>
				</td>
				<td width="4%">
					<form action="remove-produto.php" method="post">
						<input type="hidden" name="id" value="<?= $produto['id'] ?>">
						<button class="btn btn-danger btn-block">
							<span class="glyphicon glyphicon-remove btn-remover"></span>
						</button>
					</form>
				</td>
			</tr>
			<?php
			endforeach;
			?>
		</table>
	</div>
</div>


<?php include("includes/footer.php"); ?>