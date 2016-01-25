<?php include("includes/header.php"); ?>

<div class="jumbotron text-center">
	<h1>Seja Bem Vindo!!!</h1>
	<h2>Curso de PHP e MySQL I Alura</h2>
</div>
<?php if(isset($_GET["login"]) && $_GET["login"] == "true"){ ?>
		<p class="alert alert-success">Logado com sucesso.</p>
<?php } ?>

<?php if(isset($_GET["login"]) && $_GET["login"] == "false"){ ?>
		<p class="alert alert-success">Logado com sucesso.</p>
<?php } ?>
?>
<div class="container">
	<div class="row login">
		<h2 class="text-center">Login</h2>
		<form action="login.php" method="post">
			<table class="table table-bordered">
				<tr>
					<td><label for="email">Email:</label></td>
					<td><input type="email" class="form-control" id="email"></td>
				</tr>
				<tr>
					<td><label for="senha">Senha:</label></td>
					<td><input type="password" class="form-control" id="senha"></td>
				</tr>
				<tr>
					<td colspan="2">
						<button type="submit" class="btn btn-primary btn-block">Login</button>
					</td>
				</tr>
			</table>
		</form>
	</div>
</div>

<?php include("includes/footer.php"); ?>