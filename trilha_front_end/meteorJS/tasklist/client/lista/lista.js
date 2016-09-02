Template.lista.helpers({
	tarefas: function() {
		return Tarefas.find({});
	},
	formataData: function() {
		return moment(this.data).format('DD/MM/YY HH:mm');
	}
});


Template.lista.events({
	"click #deleteTask": function(e, template) {
		var tarefa = this;

		// Tarefas.remove({_id: tarefa._id});
		Meteor.call('remove', tarefa._id);
	}
});