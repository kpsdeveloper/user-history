Meteor.methods({
	//add products
	addPro: function(title, description, price,point,image, text, rate, date, category, status,ratio,tags){
		var attributes={
			title:title,
			description:description,
			price:price,
			point:point,
			image:image,
			review: {text:text, rate:rate, date:date},
			category:category,
			status:status,
			ratio:ratio,
			tags:tags
		};
		products.insert(attributes);
		console.log("Inserted");
	},
	updatePro: function(id, attributes){
		products.update({_id:id},{$set: attributes});
	},
	deletePro: function(id){
		products.remove(id);
	},
	//publish 
	publishPro: function(id, attr){
		products.update({_id:id},{$set: attr});
	},
	//unpublish 
	unpublishPro: function(id, attr){
		products.update({_id:id},{$set: attr});
	}
});