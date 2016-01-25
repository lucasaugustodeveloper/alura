<?php
	include("conectar.php");
	include("banco-usario.php");

	$usuario = buscaUsuario($conexao, $POST["email"], $_POST["senha"]);
	if($usuario == null){
		header("Location: index.php?login=0");
	}else{
		header("Location: index.php?login=1");
	}

die();