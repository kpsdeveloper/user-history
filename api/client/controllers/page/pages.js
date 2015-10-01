Template.page.events({
	"click #addpage": function(e, tpl) {
		//alert("hellllll");
		var name=tpl.$("#pagename").val()
		var url=tpl.$("#pageurl").val()
		var myselect=tpl.$("#mySelect").val()
		Meteor.call('insertPage',name,url,myselect);
		
	} 
});
Template.page.helpers({
	allPage: function(){
		return pages.find({});
	}
});
Template.page.events({
	"click #remove": function(e, tpl) {
		//alert("hellllll");
		var id=this._id;
		Meteor.call('deletepage', id);
		
	} 
});

Template.editpage.events({
	"click #updatepage": function(e, tpl) {
		var id=this._id;
		var name=tpl.$("#pagename").val()
		var url=tpl.$("#pageurl").val()
		var myselect=tpl.$("#mySelect").val()
		var attr={
	  		name:name,
			url:url,
			category:myselect
	  	};
	  	console.log("id: "+id+"attr= "+attr);
		Meteor.call('updatepage',id,attr);
		Router.go("page");
	} 
});
