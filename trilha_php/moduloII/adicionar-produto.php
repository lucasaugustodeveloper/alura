<?php 
include("includes/header.php");
include("conectar.php");
include("banco-produtos.php");

$nome = $_POST['nome'];
$preco = $_POST['preco'];
$descricao = $_POST['descricao'];
$categoria_id = $_POST['categoria_id'];

if(array_key_exists("usado", $_POST)) {
	$usado = "true";
}else{
	$usado = "false";
}




?>

<div class="container">
	<div class="principal">
		<h1>Página de Produtos</h1>
	</div>
	<?php
	if(insereProduto($conexao, $nome, $preco, $descricao, $categoria_id, $usado)){ ?>
		<p class="alert alert-success">
			Produto <?= $nome;?>, com preço R$<?= $preco?> foi adicionado com sucesso!
		</p>
	<?php 
	} else { 
		$msg = mysqli_error($conexao);
		?>
		
		<p class="alert alert-danger">
			Produto <?= $nome; ?> não foi adicionado com sucesso! <br>
			<pre>
				<?= $msg; ?>
			</pre>
		</p>
	<?php
		}
	?>

</div>

<?php include("includes/footer.php"); ?>