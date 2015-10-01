Meteor.methods({
    'addpopup': function(title,content,forum){
		check(title,String);
		check(content,String);
		check(forum,String);
    	var attr = {
            title:title,
    		content:content,
    		forum:forum
    	}
    	return popup.insert(attr);
        //console.log("Hello world");
    },
    'removepopup': function(id){
		check(id,String);
    	return popup.remove(id);
    },
    editpopup: function(id,attr){
		check(id,String);
		check(attr,Object);
		var data = popup.update({_id:id},{$set:attr});
		return data;
    }
});