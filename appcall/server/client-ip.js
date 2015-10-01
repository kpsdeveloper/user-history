Meteor.methods({
	getClient: function(){
		return Session.get('client');
		//return 'hello';
	}
});