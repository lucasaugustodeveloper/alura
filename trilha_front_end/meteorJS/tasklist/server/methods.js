Meteor.methods({
	adicionar : function(obj) {
		Tarefas.insert({name: obj.name, data: new Date(), usuario: this.userId});
	},
	remove : function(id) {
		Tarefas.remove({_id: id, usuario: this.userId});
	}
});