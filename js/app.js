App = Ember.Application.create();

App.Router.map(function() {
	this.resource('books', {path:'foo/books'});
	this.resource('chairs');
});

App.ChairsController = Ember.ObjectController.extend({
	chair:'',
	chairs: [],
	actions: {
		save: function(){
			this.get('chairs').pushObject(this.get('chair'))
			this.set('chair','');
		}
	}
});

App.BooksController = Ember.ObjectController.extend({
	booktext: '',
	booktextAltered: '',
	removeVowels: function(text){
		return text.replace(/[aeiou]/g,'');
	},
	booktextObserver: function() {
		var newtext;
		newtext = this.removeVowels(this.get('booktext'));
		this.set('booktextAltered',newtext);
 	 }.observes('booktext'),

});