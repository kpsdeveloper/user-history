Meteor.methods({
    'addevents': function(name,pageId,time,reward){
		check(name,String);
		check(pageId,String);
		check(time,String);
		check(reward,String);
    	var attr = {
            name:name,
            pageId:pageId,
    		time:time,
    		reward_point:reward
    	}
    	return events.insert(attr);
        console.log("Hello world");
    },
    'removeEvents': function(id){
		check(id,String);
    	return events.remove(id);
    },
    'editevents': function(id,attr){
		check(id,String);
		check(attr,Object);
    	return events.update({_id:id},{$set:attr});
    }
});