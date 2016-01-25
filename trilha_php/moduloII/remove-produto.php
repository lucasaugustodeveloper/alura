<?php
	include("includes/header.php");
	include("conectar.php");
	include("banco-produtos.php");

	$id = $_POST['id'];
	removeProduto($conexao, $id);

header("Location: lista-produtos.php?removido=true");
die();
?>