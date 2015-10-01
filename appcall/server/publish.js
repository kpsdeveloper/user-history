Meteor.publish("products", function () {
    return products.find();
});
Meteor.publish("categories", function () {
    return categories.find();
});
Meteor.publish('images', function (){ 
  return images.find({});
});
Meteor.publish('shops', function (){ 
  return shops.find({})
});
Meteor.publish('parent_tags', function (){ 
  return parent_tags.find({});
});
Meteor.publish('tags', function (){ 
  return tags.find({});
});
Meteor.publish('stats', function (){ 
  return stats.find({})
});
//Attribute
Meteor.publish("attribute", function () {
    return attribute.find();
 });

Meteor.publish("parentattr", function () {
    return parentattr.find();
 });
Meteor.publish("favorite", function () {
    return favorite.find();
 });
Meteor.publish('test', function() {
  var language = get_http_header(this, 'ACCEPT_LANGUAGE'), 
  client = get_http_remote_ip(this);
    console.log('Client', client, 'requested language preference', language);
    return client;
});
