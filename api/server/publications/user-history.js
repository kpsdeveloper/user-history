/*
* Publications: Example
* Data publications for the Example collection.
*/

Meteor.publish( 'userHistory', function(){
  var data = Pizza.find();

  if ( data ) {
    return data;
  }
  return this.ready();
});
