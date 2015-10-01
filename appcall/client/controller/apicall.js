
  
  /*Template.apicall.helpers({
    userHistory: function () {
      var datestr = new Date().toString("yyyy-MM-dd HH:mm:ss");
  //var datestr = 'Thu Sep 17 2015 18:24:52 GMT+0700 (SE Asia Standard Time)';
  var timestamp = (new Date(datestr.split(".").join("-")).getTime())/1000;
  //alert(typeof(timestamp));
		HTTP.post( "http://localhost:3000/api/v1/pizza", { 
		  data: { 
			"api_key": "c64296bdf86ee137dff72881d85a136a",
			"id_session":"1234",
      "ip_address": "1234",
      "page_id":"111",
      "timpestamp":timestamp
			
		  } 
		}, function( error, response ) {
		  if ( error ) {
			console.log( error );
		  } else {
			console.log( response );
		  }
		});
    //alert('ok');
    }
  });*/

  /*Template.apicall.onRendered(function () {
  // Use the Packery jQuery plugin
  if(Session.get('userID')){
                 alert('ok');
                 

                 //Meteor.call('insertFavorite',obj);
            }
            else{
                Session.setPersistent('userID', Random.id())
                 //var ses=Session.get('userId');
                 alert('no');
                 

                 //Meteor.call('insertFavorite',obj);
  }
});
  Template.listpro.onRendered(function () {
  // Use the Packery jQuery plugin
  if(Session.get('userID')){
                 alert('ok');
                 

                 //Meteor.call('insertFavorite',obj);
            }
            else{
                Session.setPersistent('userID', Random.id())
                 //var ses=Session.get('userId');
                 alert('no');
                 

                 //Meteor.call('insertFavorite',obj);
  }
});
  Template.parentattr.onRendered(function () {
  // Use the Packery jQuery plugin
  var id=Session.get('userID');
  alert(id);
});*/
  



