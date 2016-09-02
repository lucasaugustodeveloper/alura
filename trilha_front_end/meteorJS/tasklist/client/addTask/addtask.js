Template.addtarefas.events({

	"submit #addTarefas": function(e, template) {
		e.preventDefault();

		var input = $('.tarefa');
		var nome  = input.val();

		// Tarefas.insert({name: nome, data: new Date()});
		Meteor.call('adicionar', {name: nome, usuario: this.userId } );
		input.val('');
		input.focus();
	}
});