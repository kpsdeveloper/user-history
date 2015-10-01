Meteor.methods({
  api:function(page,sesUser){
    //attribute.insert(attr);
    var ip = this.connection.clientAddress;
    var datestr = new Date().toString("yyyy-MM-dd HH:mm:ss");
  //var datestr = 'Thu Sep 17 2015 18:24:52 GMT+0700 (SE Asia Standard Time)';
  var timestamp = (new Date(datestr.split(".").join("-")).getTime())/1000;
  //alert(typeof(timestamp));
		HTTP.post( "http://localhost:3000/api/v1/pizza", { 
		  data: { 
			"api_key": "c64296bdf86ee137dff72881d85a136a",
			"id_session":sesUser,
		    "ip_address":ip,
		    "page_id":page,
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
});