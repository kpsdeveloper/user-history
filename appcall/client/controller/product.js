// add Products
Session.set("tags", "");
Session.set("category", "");
Template.addproduct.events({
	'click #btnAdd': function(e){
		e.preventDefault();
		var title = $('#title').val();
		var description = $('#description').val();
		var price = $('#price').val();
		var point = $('#point').val();
		var image = $('#image').val();
		var img_id = Session.get('ADDIMAGEID');
		var text = 0;
		var rate = 0;
		var date = new Date();
		var category = $('#category').val();
		var status = 0;
		var ratio=100;

		var alltags=Session.get('tags');
		alltags=alltags.split(';');

		jsonToSend=[];
		if(alltags!= null){
			for(var i=0;i<alltags.length;i++){
				var current=alltags[i];
				if(current!='null' && current!='')
					jsonToSend.push(current);
			}
		}
		Meteor.call('addPro',title, description, price,point,img_id, text, rate, date, category, status,ratio,jsonToSend);
		Router.go('/manageproduct');
	},
	'change select': function(e,tpl){
		var category=tpl.$('#category').val();
		Session.set('category',category);
		//console.log('heho');
		console.log(category);
	},
	// upload image
	'change #image': function(event, template) {
    var files = event.target.files;
		for (var i = 0, ln = files.length; i < ln; i++) {
				images.insert(files[i], function (err, fileObj) {
				 //Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
				Session.set('ADDIMAGEID', fileObj._id);
			});
			//console.log(files[i]);
		}
	},
	'click #tagAdd': function(e,tpl){
		console.log('start');
		var nameTag="#tag_"+this._id;
		var value=tpl.$(nameTag).val();

		var listTags=Session.get("tags")+value+";";
		Session.set("tags", listTags);
		console.log('tag:'+Session.get("tags"));
	}
});
Template.updateproduct.events({
	'click #btnUpdate': function(e){
		e.preventDefault();
		//alert("Update products");
		var id = $('#idRecord').val();
		var title = $('#title').val();
		var description = $('#description').val();
		var price = $('#price').val();
		var point = $('#point').val();
		var image = $('#image').val();
		var img_id = Session.get('UPDATEIMAGEID');
		var text = 0;
		var rate = 0;
		var date = new Date();
		var category = $('#category').val();
		var shop_id = $('#shop').val();
		var instock = $('#instock').val();
		var attributes = {
			title:title,
			description:description,
			price:price,
			point:point,
			img_id:img_id,
			review: {text:text, rate:rate, date:date},
			category:category,
			shop_id:shop_id,
			instock:instock
		};
		Meteor.call('updatePro',id, attributes);
		Router.go('/manageproduct');
	},
	// upload image
	'change #image': function(event, template) {
    var files = event.target.files;
		for (var i = 0, ln = files.length; i < ln; i++) {
				images.insert(files[i], function (err, fileObj) {
				 //Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
				Session.set('UPDATEIMAGEID', fileObj._id);
			});
			//console.log(files[i]);
		}
	}
});
// helpers products
Template.addproduct.helpers({
	getCat: function(){
		return categories.find({});
	},
	getShop: function(){
		return shops.find({});
	},
	parentTag: function(category){
		if(category==null)
			return parent_tags.find({});
		else
			return parent_tags.find({"category_id":category});
	},
	getTag: function(parentid){
		console.log('parent='+parentid);
		return tags.find({"parent":parentid});
	},
	myTags: function () {
    	return Session.get("tags");
  },
  	category: function(){
  		return Session.get('category');
  	}
});

Template.updateproduct.helpers({
	catName: function(cat){
		if(cat==0)
			return;
		var result = categories.findOne({_id:cat});
		Session.set('data',result.title);
		return result.title;
	},
	catAll: function(){
		var catName = Session.get('data');
		return categories.find({title:{$ne:catName}});
	},
	getShop: function(){
		return shops.find({});
	}
});
Template.manageproduct.events({
	'click #remove': function(){
		var id = this._id;
		Meteor.call('deletePro', id);
	},
	'click #publish': function(e){
		e.preventDefault();
		var id = this._id;
		var status = 0;
		var attributes = {
			status:status
		};
		Meteor.call('publishPro',id, attributes);
	},
	"click #unpublish": function(e) {
		e.preventDefault();
		var id = this._id;
		var status = 1;
		var attr = {
			status:status
		};
		Meteor.call('unpublishPro',id, attr);
	}
});
Template.manageproduct.helpers({
	managePro: function(){
		var data= products.find({});
		if(data.count()<=0){
			return false;
		}
		else{
			return data;
		}
	},
	catName: function(cat){
		var result = categories.findOne({_id:cat});
		return result.title;
	},
	checkStatus: function(status){
		if(status === 0){
			return false;
		}
		else{
			return true;
		}
	},
	shopName: function(name){
		if(name=='0')
			return;
		var result = shops.findOne({_id: name});
		return result.title;
	},
	shopIn: function(nameIn){
		var result = shops.findOne({_id:nameIn});
		return result.instock;
	}
	,
	// upload image
	getImage: function(id){
			var img = images.findOne({_id:id});
			if(img){
				console.log(img.copies.images.key);
				return img.copies.images.key;
			}else{
				return;
			}
	}
});
// datetimepicker
Template.addproduct.onRendered(function() {
    this.$('.datetimepicker').datetimepicker();
});
Template.updateproduct.onRendered(function() {
    this.$('.datetimepicker').datetimepicker();
});