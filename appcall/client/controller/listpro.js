Template.listpro.helpers({
	getProduct:function(){
		var result=products.find();
		
		return result;
	},
	getImage: function(id){

            var img = images.findOne({_id:id});
            //console.log(img);
            
            if(img){
                //console.log(img.copies.images.key);
                var obj= img.copies.images.key;
                
                return obj;
            }else{
                return;
            }
    }
});
Template.listpro.rendered = function(){
    //client = get_http_remote_ip(this);
    //console.log(client);
    /*Meteor.call('get_http_remote_ip',this, function(err, ip){

        if(err){
            console.log(err);
        }else{
            console.log(ip);
        }
    });
    */
}
Template.listpro.events({
    'click #favorite':function(e){
        
            //var clientIP = this.connection.clientAddress;
           
            
             e.preventDefault();
             var id=this._id;
             if(Session.get('userId')){
                 //alert(pathFor);
                 var obj={
                    proId:id,
                    userId:Session.get('userId')
                 }

                 Meteor.call('insertFavorite',obj);
            }
            else{
                Session.setPersistent('userId', Random.id())
                 //var ses=Session.get('userId');
                 alert();
                 var obj={
                    proId:id,
                    userId:Session.get('userId')
                 }

                 Meteor.call('insertFavorite',obj);
            }
    },
    'click #remove':function(e){
        var id=this._id;
        //alert(id);
        var obj=favorite.findOne({proId:id});
        //alert(obj);
        favorite.remove(obj._id);
    }
});
Template.listpro.helpers({
    favoriteList:function(){
        var ses=Session.get('userId');
          var data=  favorite.find({userId:ses});
          var object=[];
          var obj={};
          data.forEach(function(entry) {
            var proid=entry.proId;
              obj=products.findOne({_id:proid})
              object.push(obj);
                
           });
          console.log(object);
        return object;
        
        
    }
    
})
