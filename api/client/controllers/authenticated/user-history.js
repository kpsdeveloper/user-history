Template.userHistory.onCreated(function(){
  // Here, we're making use of Meteor's new template-level subscriptions.
  this.subscribe( "userHistory" );
});

Template.userHistory.helpers({
  userHData: function() {
    // Note: because we know our publication is already returning the key for
    // the current user, and we only expect it to return 1 key, we can do
    // a findOne here without any projections. Nice!
    var data = Pizza.find();
	console.log(data);
    if ( data ) {
      return data;
    }
  }
});

Template.apiKey.events({
  'click .regenerate-api-key': function(){
     var userId              = Meteor.userId(),
         confirmRegeneration = confirm( "Are you sure? This will invalidate your current key!" );

     if ( confirmRegeneration ) {
       Meteor.call( "regenerateApiKey", userId, function( error, response ) {
         if ( error ) {
           Bert.alert( error.reason, "danger" );
         } else {
           Bert.alert( "All done! You have a new API key.", "success" );
         }
       });
     }
  }
});
