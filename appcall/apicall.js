if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      //Session.set('counter', Session.get('counter') + 1);
		//calling pizza api
		HTTP.post( "http://localhost:3000/api/v1/pizza", { 
		  data: { 
			"api_key": "057f415c9ce7418e9952ad4bedf5f055",
			"name": "Pizza Name",
			"crust": "Crust Name",
			"toppings": [ 'an', 'array', 'of', 'toppings' ]
		  } 
		}, function( error, response ) {
		  if ( error ) {
			console.log( error );
		  } else {
			console.log( response );
		  }
		});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
