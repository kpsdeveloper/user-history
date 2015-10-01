Router.configure({
    layoutTemplate: 'mainLayout'
});

// admin Products
Router.route('/manageproduct',{
	name:'manageproduct'
});
Router.route('/addproduct',{
	name:'addproduct'
});
Router.route('/updateproduct/:_id',{
	name: 'updateproduct',
	data: function(){
        var id = this.params._id;
        var da = products.findOne({_id: id });
		return da;
    }
});



// admin categories
Router.route('/managecategory',{
	name: 'managecategory'
});
Router.route('/addcategory',{
	name: 'addcategory'
	
});
Router.route('/updatecategory/:_id',{
	name: 'updatecategory',
	data: function(){
        var id = this.params._id;
        var da = categories.findOne({_id: id });
		return da;
    }
});

// shop
Router.route('/manageshop',{
	name:'manageshop'
});

Router.route('/shopdetail/:id',{
	name:'shopdetail',
	data: function(){
        var id = this.params.id;
        var da = shops.findOne({_id: id });
		return da;
    }
});

Router.route('/updateshop/:_id',{
	name: 'updateshop',
	data: function(){
        var id = this.params._id;
        var da = shops.findOne({_id: id });
		return da;
    }
});

// parent tags
Router.route('/manageparenttag',{
		name:'manageparenttag'
});
Router.route('/updateparenttag/:_id',{
		name:'updateparenttag',
		data: function(){
			var id = this.params._id;
			var result = parent_tags.findOne({_id: id});
			return result;
		}
});
// tags
Router.route('/managetag',{
		name:'managetag'
});

// tags
Router.route('/search',{
		name:'search'
});
//Parent Attribute
Router.route('/parentattr', {
    name: 'parentattr',
    
});

Router.route('/editparentattr/:_id', {
    name: 'editparentattr',
    data: function() {
        return parentattr.findOne({_id: this.params._id});
    },

    
});
//Attribute
Router.route('/attribute', {
    name: 'attribute',
    data:function(){

        Meteor.call('api','attribute',Session.get('idUser'))
    }
    
});
Router.route('/editattr/:_id', {
    name: 'editattr',
    data: function() {
        var attr= attribute.findOne({_id: this.params._id});
        Session.setPersistent('id',attr.productImage);//store field productImage to use in helper to get file dispay
        Session.setPersistent('attrId',this.params._id);//store id attribute to use delete file
        var id =attr.parentId;
        var parent=parentattr.findOne({_id:id})
        Session.setPersistent('parentID',parent._id);//store id parent attribute to find where not equal parentId
        var dataAll={
            attr:attr,
            parent:parent
        }
        return dataAll;
    }

    
});
Router.route('/commendotion', {
    name: 'commendotion',
    data:function(){
        Meteor.call('api','commendotion',Session.get('idUser'))
    }
    
});
Router.route('/scroll', {
    name: 'scroll',
    data:function(){
        Meteor.call('api','scroll',Session.get('idUser'))
    }
    
    
    
});
Router.route('/listpro', {
    name: 'listpro',
    data:function(){
        Meteor.call('api','listpro',Session.get('idUser'))
    }
    
});
Router.route('/apicall', {
    name: 'apicall',
    
});
Router.route('/', {
    name: 'home',
    data:function(){
        if(Session.get('idUser')){
                 //alert(pathFor);
                    var userId=Session.get('idUser');
                    //alert('ok');

            }
            else{
                Session.setPersistent('idUser', Random.id());
                 //var ses=Session.get('userId');
                    var userId=Session.get('idUser');
                    //alert('no');
            }
        Meteor.call('api','home',userId)
    }
    
});
