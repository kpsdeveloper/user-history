Template.popup.events({
	'click #addpop':function(e){
		e.preventDefault();
		var title = $('#title').val();
		var content = $('#content').val();
		var forum = $('#events').val();
		//alert('hello'+content+title+events+forum);
		Meteor.call('addpopup',title,content,forum)
	},
	'click #remove':function(){
		var id = this._id;
		if (confirm("Are you sure want to delete this?")){
			Meteor.call('removepopup',id);
		}
	}
});
Template.popup.helpers({
	showpop:function(){
		var result = popup.find({});
		return result;
		/*
		var ent = events.find({});
		var test = ent.map(function(p){ return p._id});
		console.log('Event Id'+ test);
		var pop = popup.find({"forum" : {$in : test}});
		pop.forEach(function(entry) {
			var pp = events
		    console.log('Popup Id'+ entry.forum);
		});
		*/
		//return result;
		//var result=popup.find({"forum" : {$in : test}}).fetch();
		//console.log(result);
		//return events.find({_id:})
		//return result;
		//var ros = pop.forum;
		//var result = events.find({_id:pop});
		/*var result=[];
		pop.forEach(function(entry) {
		    var data = events.findOne({_id:entry.forum});
		    var forum = data.name;
		    
		     result.push(forum)
		    
		});
		obj={
			pop:pop,
			result:result
		}*/
		//console.log(result);
		//return obj;
		//return result;

	},
	getevents:function(){
		return events.find({});
	}
});
Template.editpopup.events({
	'click #editpop':function(e){
		e.preventDefault();
		var content = $('#content').val();
		var title = $('#title').val();
		var events = $('#events').val();
		var id = this._id;
		alert('hello'+content+title+events);
		var attr = {
			content:content,
			title:title,
			events:events
		}
		Meteor.call('editpopup',id,attr,  function(err, res){
			if ( err ) {
				Bert.alert( err.reason, "danger" );
			 } else {
			   Bert.alert( "All done! You have a new API key.", "success" );
			 }
		});
		Router.go('popup');
	}
});