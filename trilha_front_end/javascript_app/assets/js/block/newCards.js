var $newCardContent = document.querySelector('.newCard--content');
var $newCardAction = document.querySelector('.newCard--action');
var $newCard = document.querySelector('.newCard');
var $cardContent = document.querySelector('.card--content');

$newCardAction.addEventListener('click', function(event){
	event.preventDefault();
	if($newCardContent.value == ''){
		if(document.querySelector('.error') == null){
			var $error = document.createElement('span');
			$error.classList.add('error');
			$error.textContent = 'Por favor preencha o campo acima';
			$newCard.insertBefore($error, $newCardAction);
		};
	}else{
		var $wrapCard = document.querySelector('.wrap--card');
		var $card = document.querySelector('.card');
		var $copyCard = $card.cloneNode(true);
		$copyCard.querySelector('.card--content').textContent = $newCardContent.value;

		$wrapCard.insertBefore($copyCard, $card);
	};
});

$newCardContent.addEventListener('input', function(){
	var $error = document.querySelector('.error');
	if($error != null){
		$error.remove();
	}
});