Template.events.events({
	'click #addevents':function(e){
		e.preventDefault();
		var name = $('#name').val();
		var pageId = $('#page').val();
		var time = $('#time').val();
		var reward = $('#reward').val();
		alert('hello'+time+reward);
		Meteor.call('addevents',name,pageId,time,reward);
	},
	'click #remove':function(){
		var id = this._id;
		if (confirm("Are you sure want to delete this?")){
			Meteor.call('removeEvents',id);
		}
	}
});
Template.events.helpers({
	showevents:function(){
		return events.find({});
	},
	getpage:function(){
		return pages.find({});
	}
});
Template.editevents.events({
	'click #editevents':function(e){
		e.preventDefault();
		var time = $('#time').val();
		var reward = $('#reward').val();
		var id = this._id;
		alert('hello'+time+reward);
		var attr = {
			time:time,
			reward_point:reward
		}
		Meteor.call('editevents',id,attr);
		Router.go('events');
	}
});