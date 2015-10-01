Meteor.methods({
	insertPage: function(name,url,myselect) {
		check(name,String);
		check(url,String);
		check(myselect,String);
		var attr={
			name:name,
			url:url,
			category:myselect
		};
		return pages.insert(attr);
	},
	deletepage: function(id) {
		check(id,String);
		pages.remove(id);
	},
	updatepage: function(id,attr){
	check(attr,Object);
	check(id,String);
		return pages.update({_id:id},{$set: attr});
	},
});